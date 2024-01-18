import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/store/slices/Modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useDate from "../hooks/useDate";

const Modal = () => {
  const date=useDate()

  const pdfRef = useRef()

  const dispatch = useDispatch();
  const getInvoice = useSelector((state)=>{
    return (state.invoice)
  })
  
  const getItems = useSelector((state)=>{
    return (state.items)
  })

  const downloadPdf=()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth*ratio)/2;
      const imgY =30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save(`invoiceID#${getInvoice.invoiceNumber}.pdf`)
    })
  }

  return (
    <>
      <div  className="fixed inset-0 bg-[#0000007c]  flex items-center justify-center w-full h-full ">
        <div
          className="fixed top-0 bottom-0 right-0 left-0 "
          onClick={() => dispatch(closeModal())}
        />

        <div ref={pdfRef}  className="bg-white rounded-lg flex-col items-center justify-center w-full h-full max-h-[500px]  z-[1000] max-w-[1200px] mx-auto my-auto gap-2 ">
          {/* name amount */}
          <div className="bg-gray-100 rounded-lg w-full h-[80px] flex items-center justify-between p-5 ">
            <div className=" ">
              <p className="font-bold uppercase">{getInvoice.fromName}</p>
              <p className="text-gray-500 font-bold ">
                invoice #:{" "}
                <span className="uppercase">{getInvoice?.invoiceNumber}</span>
              </p>
            </div>
            <div className=" ">
              <p className="font-bold">Amount Due:</p>
              <p className="text-gray-500 font-bold text-right">
                $:{getItems.totalAmount}
              </p>
            </div>
          </div>

          {/* billing address */}
          <div className=" w-full h-[100px]  p-5 flex items-center justify-between text-sm">
            <div className="flex flex-col gap-1">
              <p className="font-bold">Billed to:</p>
              <p>{getInvoice.toName}</p>
              <p>{getInvoice.toEmail}</p>
              <p>{getInvoice.toAddress}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-bold">Billed from:</p>
              <p>{getInvoice.fromName}</p>
              <p>{getInvoice.fromEmail}</p>
              <p>{getInvoice.fromAddress}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Date of issue:</p>
              <p>{date}</p>
            </div>
          </div>

          <div className=" w-full  flex flex-col max-h-[200px]  overflow-y-scroll">
            <div className="flex items-center py-2 px-5 ">
              <p className="w-1/4 font-bold ">Quantity</p>
              <p className="w-1/4 text-left font-bold">Item</p>
              <p className="w-1/4 text-center font-bold">Price</p>
              <p className="w-1/4 text-right font-bold">Amount</p>
            </div>

            {getItems.items?.map((item, index) => (
              <>
                <div className="flex items-center px-5 py-1 justify-between border" >
                  <p className="w-1/4 ">{item.quantity}</p>
                  <p className="w-1/4 text-left">{item.product}</p>
                  <p className="w-1/4 text-center">{item.price}</p>
                  <p className="w-1/4 text-right ">{item.price*item.quantity}</p>
                </div>
              </>
            ))}
          </div>

          <div className=" w-full h-[80px] flex items-center justify-center mt-5 p-5  ">
            <div onClick={downloadPdf} className="bg-blue-500 w-full h-full rounded-lg text-center flex items-center justify-center text-white cursor-pointer hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 transition-all ">
              <p>Download Invoice</p>

            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default Modal;
