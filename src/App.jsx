// File: src/App.jsx

import React, { useState } from 'react';
import { studentData } from './data/studentData';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// Import all the page components (we will create them next)
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CoursesPage from './pages/CoursesPage';
import AttendancePage from './pages/AttendancePage';
import ExaminationsPage from './pages/ExaminationsPage';
import FeesPage from './pages/FeesPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <DashboardPage />;
      case 'profile': return <ProfilePage />;
      case 'courses': return <CoursesPage />;
      case 'attendance': return <AttendancePage />;
      case 'examinations': return <ExaminationsPage />;
      case 'fees': return <FeesPage />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />
      <div className="flex-1 flex flex-col">
        <Header 
          studentName={studentData.profile.name.split(' ')[0]} 
          onMenuClick={() => setSidebarOpen(true)} 
        />
        <main className="p-4 sm:p-6 flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;