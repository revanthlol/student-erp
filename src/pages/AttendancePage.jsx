// File: src/pages/AttendancePage.jsx

import React, { useState } from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import TabButton from '../components/TabButton';
import Modal from '../components/Modal';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// Helper to generate calendar days for Sep 2025 (matching mock data)
const getCalendarDays = () => {
    const days = [];
    const date = new Date('2025-09-01');
    // September 2025 starts on a Monday (index 1)
    for (let i = 0; i < 1; i++) {
        days.push({ key: `empty-${i}`, empty: true });
    }
    for (let i = 1; i <= 30; i++) {
        const dayStr = i < 10 ? `0${i}` : `${i}`;
        const fullDate = `2025-09-${dayStr}`;
        days.push({
            key: fullDate,
            day: i,
            data: studentData.attendance.dailyLog[fullDate]
        });
    }
    return days;
};

const AttendancePage = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDateData, setSelectedDateData] = useState(null);

    const { overallPercentage, subjectWise } = studentData.attendance;
    const calendarDays = getCalendarDays();

    const handleDateClick = (dayData) => {
        if (dayData && dayData.data) {
            setSelectedDateData(dayData);
            setModalOpen(true);
        }
    };

    const getDayBgColor = (data) => {
        if (!data) return 'bg-gray-100 text-gray-400';
        switch (data.status) {
            case 'present': return 'bg-green-100 text-green-800 hover:bg-green-200';
            case 'absent': return 'bg-red-100 text-red-800 hover:bg-red-200';
            case 'holiday': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-white';
        }
    };

    return (
        <div>
            <PageTitle>Attendance</PageTitle>

            {/* Overall Attendance Card */}
            <Card className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Overall Attendance</h3>
                        <p className="text-sm text-gray-500">Across all subjects this semester</p>
                    </div>
                    <p className="text-3xl font-bold text-purple-700">{overallPercentage}%</p>
                </div>
            </Card>

            {/* Tabs */}
            <div className="flex space-x-2 border-b mb-6">
                <TabButton text="Subject-wise Summary" active={activeTab === 'summary'} onClick={() => setActiveTab('summary')} />
                <TabButton text="Daily Log" active={activeTab === 'log'} onClick={() => setActiveTab('log')} />
            </div>

            {/* Subject-wise Summary View */}
            {activeTab === 'summary' && (
                <Card>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={subjectWise} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                            <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                            <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Bar dataKey="percentage" fill="#8884d8" barSize={20}>
                                <LabelList dataKey="percentage" position="right" formatter={(value) => `${value.toFixed(1)}%`} />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            )}

            {/* Daily Log Calendar View */}
            {activeTab === 'log' && (
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">September 2025</h3>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="font-bold text-gray-600">{day}</div>)}
                        {calendarDays.map(day => (
                            <div key={day.key}
                                onClick={() => handleDateClick(day)}
                                className={`p-2 rounded-lg h-16 flex items-center justify-center transition-colors ${day.empty ? 'bg-transparent' : 'cursor-pointer'} ${getDayBgColor(day.data)}`}>
                                {day.day}
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {/* Modal for Daily Attendance Details */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={`Attendance for ${selectedDateData?.key}`}>
                {selectedDateData?.data && (
                    <ul className="space-y-2">
                        {Object.entries(selectedDateData.data.hours).map(([hour, status]) => (
                            <li key={hour} className="flex justify-between items-center">
                                <span>Hour {hour}</span>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {status}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </Modal>
        </div>
    );
};

export default AttendancePage;