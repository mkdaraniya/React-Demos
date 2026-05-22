import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await authService.logout().then(() => {
      dispatch(logout());
    }).catch((error) => {
      console.error("Logout failed:", error);
    }).finally(() => {

    });
  };

  return (
    <div>
      <button
        className='px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn