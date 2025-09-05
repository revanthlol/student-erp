// File: src/components/layout/Sidebar.jsx

import React from 'react';
import { LayoutDashboard, User, BookOpen, CheckSquare, FileText, DollarSign, Settings, LogOut, X } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const navLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
    { name: 'My Profile', icon: User, page: 'profile' },
    { name: 'Courses', icon: BookOpen, page: 'courses' },
    // ... (add all other nav links as before)
    { name: 'Examinations', icon: FileText, page: 'examinations' },
    { name: 'Fees', icon: DollarSign, page: 'fees' },
    { name: 'Settings', icon: Settings, page: 'settings' },
  ];

  return (
    <>
      <aside className={`bg-white min-h-screen flex-col shadow-lg fixed lg:relative lg:translate-x-0 transform transition-transform duration-300 ease-in-out z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
        <div className="p-6 text-2xl font-bold text-purple-700 flex justify-between items-center">
          UniPortal
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-600"><X /></button>
        </div>
        <nav className="flex-1 px-4">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href="#" onClick={() => { setActivePage(link.page); setIsOpen(false); }} className={`flex items-center p-3 my-1 rounded-lg transition-colors ${activePage === link.page ? 'bg-purple-100 text-purple-800 font-bold' : 'text-gray-600 hover:bg-gray-200'}`}>
                  <link.icon className="w-5 h-5 mr-3 flex-shrink-0" /> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t"><a href="#" className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-200"><LogOut className="w-5 h-5 mr-3" /> Logout</a></div>
      </aside>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"></div>}
    </>
  );
};

export default Sidebar;