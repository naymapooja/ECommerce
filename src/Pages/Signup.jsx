import React, { useState } from 'react'
import Input from "../Component/Input"
import { KeyRound, Mail, UserPen } from 'lucide-react'
import { signup } from '../Store/authSlice'
import { Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handelSignup() {
    if ((username && email && password) !== "") {
      dispatch(signup({ username, email, password }));
      navigate("/login")
    }
  }
  
  return (

    <div className={'h-[calc(100vh-65px)] w-full bg-slate-200  flex justify-center iteam-center'}>
      <div className='flex flex-col gap-3 bg-slate-300 pl-48 pr-48 pt-6 pb-8 rounded-2xl mt-40' >
        <Link to={"/login"} className='self-end text-blue-500 font-semibold underline mr-1'>Login</Link>
        <Input trailling={<UserPen />} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        <Input trailling={<Mail />} type='email' placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)} />
        <Input trailling={<KeyRound />} type='password' placeholder='**********' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handelSignup} className='bg-slate-800 p-3 mt-4 text-white font-bold text-lg rounded-md'>Signup</button>
      </div>
    </div>
  )
}

export default Signup;


