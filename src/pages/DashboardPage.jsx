// File: src/pages/DashboardPage.jsx (Corrected)

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

const DashboardPage = () => {
    // We'll provide default values right here to prevent crashes
    const dashboardInfo = studentData.dashboard || {};
    const { 
        overallAttendance = 0, 
        totalClasses = 0, 
        attendedClasses = 0, 
        feesDue = 0, 
        feesDueDate, 
        todaySchedule = [] 
    } = dashboardInfo;

    const attendanceData = [{ name: 'Attended', value: overallAttendance }, { name: 'Absent', value: 100 - overallAttendance }];
    const COLORS = ['#4F46E5', '#E5E7EB'];

    return (
        <div>
            <PageTitle>Dashboard</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="md:col-span-2 lg:col-span-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
                    <h2 className="text-3xl font-bold">Welcome back, {studentData.profile?.name || 'Student'}!</h2>
                    <p className="mt-1 opacity-90">{studentData.profile?.program || 'Your Program'}</p>
                </Card>

                <Card className="flex flex-col items-center justify-center">
                    <h3 className="font-semibold text-gray-600 mb-2">Overall Attendance</h3>
                    <div className="w-32 h-32 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart><Pie data={attendanceData} cx="50%" cy="50%" innerRadius={45} outerRadius={60} fill="#8884d8" paddingAngle={5} dataKey="value">{attendanceData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}</Pie></PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-800">{overallAttendance}%</div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Attended: {attendedClasses} / {totalClasses}</p>
                </Card>

                <Card>
                    <h3 className="font-semibold text-gray-600">Fee Status</h3>
                    <p className="text-3xl font-bold text-red-500 mt-2">₹{(feesDue || 0).toLocaleString('en-IN')}</p>
                    <p className="text-sm text-gray-500">
                        {feesDueDate ? `Due by ${new Date(feesDueDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}` : 'No dues'}
                    </p>
                </Card>

                <Card className="md:col-span-2">
                    <h3 className="font-semibold text-gray-600 mb-3">Today's Schedule</h3>
                    <ul className="space-y-3">
                        {todaySchedule.length > 0 ? todaySchedule.map(item => (
                            <li key={item.time} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-md">
                                <span className="font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">{item.time}</span>
                                <span className="font-semibold">{item.subject}</span>
                                <span className="text-gray-500">{item.location}</span>
                            </li>
                        )) : <p className="text-sm text-gray-500">No classes scheduled for today.</p>}
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;