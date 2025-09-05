// File: src/components/layout/Header.jsx

import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { studentData } from '../../data/studentData'; // Import data to get profile picture

const Header = ({ studentName, onMenuClick }) => (
  <header className="bg-white shadow-sm p-4 flex justify-between items-center">
    <div className="flex items-center">
      <button onClick={onMenuClick} className="lg:hidden mr-4 text-gray-600"><Menu /></button>
      <h1 className="text-lg sm:text-xl text-gray-800 font-semibold">Welcome back, {studentName}!</h1>
    </div>
    <div className="flex items-center space-x-4">
      <Bell className="text-gray-600 cursor-pointer" />
      <img src={studentData.profile.profilePicture} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
    </div>
  </header>
);

export default Header;