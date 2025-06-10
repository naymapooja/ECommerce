import React, { useState } from 'react'
import { Captions, IndianRupee, Link2, MoveLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import Input from '../Component/Input';
import { add } from '../Store/productSlice';


function ProductCreate() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const productId = uuid();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleSignup() {
    if ((image || title || price) !== "") {
      dispatch(add({ id: productId, image, title, price }))
      navigate("/")
    }
  }

  return (
    <div className={`h-[calc(100vh-65px)] w-full bg-slate-300 flex justify-center items-center`}>
      <div className='flex flex-col gap-3 '>
        <Link to={"/"} className='text-blue-500 font-semibold ml-1'><MoveLeft /></Link>
        <Input tralling={<Link2/>} placeholder='Link' onChange={(e) => setImage(e.target.value)} />
        <Input tralling={<Captions />} placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <Input tralling={<IndianRupee />} placeholder='price' onChange={(e) => setPrice(e.target.value)} />
        <button onClick={handleSignup} className='bg-slate-800 p-3 mt-4 text-white font-bold text-lg rounded-md'>signup</button>
      </div>
    </div>
  )
}

export default ProductCreate;






