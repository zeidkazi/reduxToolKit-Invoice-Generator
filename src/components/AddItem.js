import { Plus, Trash } from 'lucide-react';
import React, { useState } from 'react'

const AddItem = () => {
    const [items,setItems] =useState([])
    const [item,setItem] = useState({
      product:"",
      quantity:1,
      price:null,
    });

    const  addItem=()=> {
        if (item.product.trim()!== '') {
          setItems((prev) => [...prev, item]);
          setItem({...item,product:''});
        }
      }
    
      const deleteItem=(index)=> {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
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
                    className="bg-[#F4F6F9] p-1 h-auto rounded-md" />
                    <p>Price</p>
                    <input 
                    value={item.price}
                    onChange={(e)=>setItem({...item,price:e.target.value})}
                    type="number" 
                    className="bg-[#F4F6F9] p-1 h-auto rounded-md" />

                    <p onClick={addItem} className="bg-blue-600 flex p-1 rounded-lg text-white cursor-pointer"><Plus /></p>
                </div>

                {
                  items && items.length ? (
                    items.map((task, index) => (
                      <>
                      <div className="flex w-full p-2 gap-3 items-center">
                      <p className="w-3">{index+1}</p>
                      <p className="w-full bg-[#F4F6F9] p-2 rounded-lg">{task.product}</p>
                      <Trash onClick={()=>deleteItem(index)} className="w-8 cursor-pointer " />
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

export default AddItem
