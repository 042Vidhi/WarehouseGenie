// Login.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import firebase from 'firebase/app';
// import 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    try{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            const user = userCredential.user;
            dispatch(setUser(user));
            if(user)
            {
                window.location.href="/dashboard"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Code",errorCode)
            console.log("Error Message",errorMessage)
        }
        );
    }
    catch(err)
    {
        console.log("Error LogginIn",err)
    }


  };

  return (
    <div className='h-screen bg-slate-900 flex items-center '>
        <form onSubmit={handleLogin}
            className=" mx-auto bg-slate-600 rounded-md p-4 shadow-md ">
            <h2 className="text-2xl mb-4 text-white">Login</h2>
            <label 
                className="block mb-2 text-white">
                Email
            </label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 rounded"
            />
            <label className="block mb-2 text-white">
            Password
            </label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 rounded"
            />
            <button
                type='submit'
                className="bg-purple-400 text-white p-2 rounded-md w-full"
            >
                Login
            </button>
            <div className="mt-4 text-center text-sm text-white">
                <span>Don't have an account? </span>
                <a href="/register" className="text-blue-500">
                Register
                </a>
            </div>
        </form>
    </div>
  );
};

export default Login;
