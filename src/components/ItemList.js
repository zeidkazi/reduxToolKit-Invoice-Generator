import { Plus, Trash } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/store/slices/items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uniqid from 'uniqid';


const ItemList = () => {

  const showToastMessage = () => {
    toast.success("Item Added Successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showDeleteMessage = () => {
    toast.error("Item Deleted Successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showAddMessage = () => {
    toast.error("Enter Item Details!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    console.log(state.items.items)
    return (state.items.items)
    
  })

  

    const [item,setItem] = useState({
      product:"",
      quantity:1,
      price:0,
      totalPrice:0,
    });

    const  handleAddItem=()=> {
      if (item.product.trim()!== '') {
        const newProduct = {...item,totalPrice:item.price*item.quantity,id:Number(data?.length+1)}
        setItem({ ...item, product: '', price: 0, quantity: 1 });

          dispatch(addItem(newProduct))
          showToastMessage();
          console.log(item)
        }
        else showAddMessage()
      }
    
      const deleteItem=(index)=> {
       dispatch(removeItem(index))
       showDeleteMessage();
      }


  return (
    <div>
         <div className="w-full  mt-2 shadow-md rounded-lg  p-2">
                
                <p className="font-bold">Enter Items :</p>
                
                <div className="flex gap-2 p-2 items-center ">
                  <input  className="bg-[#F4F6F9] p-1 h-auto w-full rounded-md"
                    type="text"
                    placeholder="add items"
                    value={item.product}
                    onChange={(e)=>setItem({...item,product:e.target.value})}
                    />
                    
                    <p>Quantity</p>
                    <input 
                    value={item.quantity}
                    onChange={(e)=>setItem({...item,quantity:e.target.value})}
                    type="number" 
                    className="bg-[#F4F6F9] p-1 h-auto w-full rounded-md" />
                    <p>Price</p>
                    <input 
                    value={item.price}
                    onChange={(e)=>setItem({...item,price:e.target.value})}
                    type="number" 
                    className="bg-[#F4F6F9] p-1 h-auto w-full rounded-md" />

                    <p onClick={handleAddItem} className="bg-blue-600 flex p-1 rounded-lg border border-white text-white cursor-pointer  hover:bg-white hover:border hover:border-blue-600 hover:text-blue-500 transition-all "><Plus /></p>
                </div>

                {
                  data && data.length ? (
                    data.map((task, index) => (
                      <>
                      <div className="flex w-full p-2 gap-3 items-center">
                      <p className="w-3">{index+1}</p>
                      <p className="w-full bg-[#F4F6F9] p-2 rounded-lg">{task.product}</p>
                      Quantity: 
                      <p className="w-full bg-[#F4F6F9] p-2 rounded-lg">{task.quantity}</p>
                      ₹
                      <p className="w-full bg-[#F4F6F9] p-2 rounded-lg"> {task.price}</p>
                      <Trash 
                        onClick={()=>deleteItem(task.id)}
                        className="  w-full max-w-[40px] h-[40px] p-2 cursor-pointer " />
                      </div>
                      </>

                    ))):(
                  <>
                  <p className="text-center font-light text-gray-400">No items Added</p>
                  </>)
                }

               

              </div>


        
      
    </div>
  )
}


export default ItemList

