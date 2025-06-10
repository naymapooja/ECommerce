import React from 'react'

function Input({ trailing, type = "text", placeholder = "", leading, onChange }) {
  return (
    <div className='bg-slate-50 
     flex rounded-md gap-3 p-4'>
      {trailing && trailing}
      <input type={type} placeholder={placeholder} onChange={onChange}
        className='bg-transparent outline-none border-none w-[250px]' />
      <div>

      </div>
    </div>
  )
}

export default Input