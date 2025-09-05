// File: src/pages/AttendancePage.jsx

import React, { useState } from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import TabButton from '../components/TabButton';

const AttendancePage = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const { overallPercentage, subjectWise } = studentData.attendance;
    return (
        <div>
            <PageTitle>Attendance</PageTitle>
            <Card className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Overall Attendance</h3>
                <p className="text-3xl font-bold text-purple-700">{overallPercentage}%</p>
            </Card>
            <div className="flex space-x-2 border-b mb-6">
                 <TabButton text="Subject-wise Summary" active={activeTab === 'summary'} onClick={() => setActiveTab('summary')} />
                 <TabButton text="Daily Log" active={activeTab === 'log'} onClick={() => setActiveTab('log')} />
            </div>
            {activeTab === 'summary' && (
                 <div className="space-y-4">
                     {subjectWise.map(sub => (
                         <Card key={sub.name}>
                             <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                 <p className="font-semibold">{sub.name}</p>
                                 <p className="text-sm text-gray-600">{sub.attended} / {sub.total} hours attended</p>
                             </div>
                             <div className="mt-2 flex items-center">
                                 <div className="w-full bg-gray-200 rounded-full h-2.5 mr-4"><div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${sub.percentage}%` }}></div></div>
                                 <span className="font-semibold">{sub.percentage.toFixed(2)}%</span>
                             </div>
                         </Card>
                     ))}
                 </div>
            )}
            {activeTab === 'log' && (
                <Card><p className="text-center text-gray-500">A calendar view for the daily log would be implemented here[cite: 88, 90].</p></Card>
            )}
        </div>
    );
};

export default AttendancePage;