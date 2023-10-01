import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const Dashboard = () => {
    const user = useSelector(selectUser)

  return (
    <div className='h-screen bg-slate-900 text-white'>
    <h1 className="text-2xl mb-4 text-white">Dashboard</h1>
        {user && (
            
           <div>
                <h1 className="text-2xl mb-4 text-white">Welcome {user.email}</h1>
                <h2 className="text-2xl mb-4 text-white">Your Role is {user.role}</h2>
           </div>
        )}
    </div>
  )
}

export default Dashboard