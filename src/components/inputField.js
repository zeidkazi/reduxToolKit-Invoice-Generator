import React from 'react'

const InputField = ({type,value,onChange,label,placeholder}) => {
  return (
    <div>
        <h1>
            <label>
                {label}
            </label>
        </h1>
        <input      placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    type={type} 
                    className="bg-[#F4F6F9] p-1 h-auto w-full rounded-md" />
      
    </div>
  )
}

export default InputField
