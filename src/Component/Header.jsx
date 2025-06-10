import { ShoppingCart } from "lucide-react"
import React from "react"
import { Link } from 'react-router-dom'

function Header() {
  return (

    <div className='h-[65px] w-full bg-slate-900 text-white flex justify-between items-center pl-10 pr-10'>
      <Link to={"/"} className='flex gap-2 items-center text-white'>
        <ShoppingCart />
        <h1 className="text-xl  text-white" >Ecommerce</h1>
      </Link>
      <div className="flex items-center gap-6 text-lg text-white">
        <Link to={"/"} className='hover:bg-slate-500 hover:rounded-md px-2 py-1'>Home</Link>
        <Link to={"/product-create"} className='hover:bg-slate-500 hover:rounded-md px-2 py-1'>Product-create</Link>
       <button><Link to={"/Login"} className='hover:bg-slate-500 hover:rounded-md px-2 py-1'>Logout</Link></button> 
      </div>
    </div>
  )
}
export default Header;
