import React, { useState } from 'react';
import { KeyRound, Mail } from 'lucide-react';
import Input from '../Component/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);

    try {
      // Simulating login, replace with real API/auth call if needed
      dispatch(login({ email, password }));
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-65px)] w-full bg-slate-300 flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md flex flex-col gap-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Login</h2>
          <Link to="/signup" className="text-blue-500 font-medium underline">Sign Up</Link>
        </div>

        {error && <p className="text-red-600 font-medium">{error}</p>}

        <Input
          trailling={<Mail />}
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          trailling={<KeyRound />}
          type="password"
          placeholder="**********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-slate-800 hover:bg-slate-900 transition text-white font-semibold py-3 rounded-md disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Login;











































































































































// import React, { useState } from 'react'
// import { KeyRound, Mail } from 'lucide-react';
// import Input from '../Component/Input';
// import { Link, useNavigate } from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import {login} from "../Store/authSlice"

// function Login() {
//     const [email,setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const Navigate =useNavigate();

//     const dispatch = useDispatch();
//     function handleLogin(){
//         if((email || password) !==""){
//             dispatch(login({ email,password}));
//             Navigate("/")
//         }
//     }
//   return (
//     <div className ={`h-[calc(100vh-65px)] w-full bg-slate-300 flex justify-center items-center`}>
//         <div className='flex flex-col gap-3'>
//             <Link to={"/signup"} className='self-end text-blue-500 font-semibold underline mr-1'>Signup</Link>
//             <Input trailling={<Mail/>} type='email' placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)} />
//             <Input trailling={<KeyRound />} type='password' placeholder='**********' onChange={(e) => setPassword(e.target.value)} />
//         <button onClick={handleLogin} className='bg-slate-800 p-3 mt-4 text-white font-bold text-lg rounded-md'>Login</button>

//         </div>
//     </div>
//   )
// }

// export default Login;


