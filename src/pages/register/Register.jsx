// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleRegister = () => {
    try {
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user)
            {
                window.location.href="/login"
            }
        })
        .catch((error) => {
          console.error(error.message);
        });
    } catch (err) {
      console.log('Error Registering', err);
    }
  };

  return (
    <div className="h-screen bg-slate-900 flex items-center">
      <div className=" w-5/6  md:w-2/5 mx-auto bg-slate-600 rounded-md p-4 shadow-md">
        <h2 className="text-2xl mb-4 text-white">Register</h2>
        <label className="block mb-2 text-white">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <label className="block mb-2 text-white">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <label className="block mb-2 text-white">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <label className="block mb-2 text-white">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleRegister}
          className="bg-purple-400 text-white p-2 rounded-md w-full"
        >
          Register
        </button>
        <div className="mt-4 text-center text-sm text-white">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
