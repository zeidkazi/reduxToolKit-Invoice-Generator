import { FileUp, Percent, Plus, Trash } from "lucide-react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Select from 'react-select';
import AddItem from "./components/AddItem";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [invoiceNum, setInvoiceNum] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
 

  const handleImage = (e) => {
    const img = e.target.files[0];
    const url = URL.createObjectURL(img);
    setImageUrl(url);
  };

  const  getDate =()=>{
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const date =getDate();

  const options = [
    { value: 'USD', label: 'USD' },
    { value: 'INR', label: 'INR' },
    { value: 'OMR', label: 'OMR' },
  ];

 

  

  return (
    <>
      <div className="bg-gray-300 w-full h-full">
        <div className="flex flex-col lg:flex-row ">

          {/* left */}
          <div className=" w-full lg:max-w-[1200px] h-full p-3">

            <div className="bg-white w-full h-full p-2">
              {/* image upload and invoice number */}
              <div className="flex w-full h-full max-h-[180px] p-2 gap-1 shadow-md rounded-lg">
                <div className="flex-col h-full w-[300px] ">
                  {imageUrl ? (
                    <>
                      <img
                        className="w-full max-h-[120px] h-full object-contain"
                        src={imageUrl}
                        alt="image"
                      />
                      <p className="w-full text-center text-lg">
                        Uploaded Logo
                      </p>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() =>
                          document.getElementById("uploadLogo").click()
                        }
                        className="border-2 border-dashed border-blue-600 h-3/4 w-full flex items-center justify-center"
                      >
                        <FileUp size={30} />
                        <input
                          onChange={handleImage}
                          type="file"
                          hidden
                          id="uploadLogo"
                          accept="image/*"
                        />
                      </div>
                      <p className="text-lg ">Upload Company Logo</p>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-center p-2 gap-2 h-full w-full ">
                  <p>INVOICE NUMBER</p>
                  <input
                    className="p-1 border rounded-md"
                    value={invoiceNum}
                    onChange={(e) => setInvoiceNum(e.target.value)}
                    placeholder="invoice number #"
                    type="number"
                  />
                </div>
              </div>

              {/* date and due date */}
              <div className=" flex w-full h-[100px] p-2  items-center justify-between shadow-md rounded-lg mt-2">
                <p>Date:{date}</p>
                <p>Due Date: <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="date"/></p>

              </div>
              {/* sender receiver address */}
              <div className="flex w-full h-[200px] mt-2 shadow-md rounded-lg gap-2 ">

                <div className="flex flex-col h-full gap-2 w-1/2 p-5">
                  <p>Bill To:</p>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Who is this to"/>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Email"/>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Billing address"/>

                </div>
                <div className="flex flex-col h-full gap-2 w-1/2  p-5">
                  <p>Bill From:</p>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Who is this from"/>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Email"/>
                  <input className="bg-[#F4F6F9] p-1 h-auto w-auto rounded-md  " type="text" placeholder="Billing address"/>

                </div>

              </div>

              {/* items */}

              <AddItem/>
             
              


            </div>
          </div>

          {/* right */}
          <div className=" w-full lg:max-w-[400px] h-screen p-3">
            <div className="bg-[#F2F2F6] w-full h-full flex-col p-2 gap-4">
               
               {/* button */}
                <p className=" w-full h-[60px] bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white cursor-pointer shadow-md hover:bg-blue-700 transition duration-500">
                        Review Invoice
                </p>

                <div className="border border-gray-400 w-full mt-6"/>

                {/* currency */}
                <div className="flex flex-col gap-3 p-2 w-full h-[100px]">
                  <p className="font-bold">Currency :</p>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                  
                </div>

                <div className="flex flex-col gap-3 p-2 w-full h-[100px]">
                  <p className="font-bold">Tax Rate :</p>
                  <div className="flex w-full bg-white justify-between h-[30px]">

                  <input className="border w-full p-2" type="text" placeholder="0.0"/>
                  <Percent className=" h-full border " />
                  </div>
                  
                  
                </div>

                <div className="flex flex-col gap-3 p-2 w-full h-[100px]">
                  <p className="font-bold">Discount Rate :</p>
                  <div className="flex w-full bg-white justify-between h-[30px]">

                  <input className="border w-full p-2" type="text" placeholder="0.0" />
                  <Percent className=" h-full border " />
                  </div>
                  
                </div>


            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
