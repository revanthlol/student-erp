// File: src/pages/CoursesPage.jsx

import React, { useState } from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import TabButton from '../components/TabButton';

const CoursesPage = () => {
    const [activeTab, setActiveTab] = useState('current');
    const { currentSemester, previousSemesters } = studentData.courses;

    return (
        <div>
            <PageTitle>Courses</PageTitle>
            <div className="flex space-x-2 border-b mb-6">
                <TabButton text="Current Semester" active={activeTab === 'current'} onClick={() => setActiveTab('current')} />
                <TabButton text="Previous Semesters" active={activeTab === 'previous'} onClick={() => setActiveTab('previous')} />
            </div>
            {activeTab === 'current' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentSemester.map(course => (
                        <Card key={course.code}>
                            <h3 className="text-lg font-bold text-purple-800">{course.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{course.code} | {course.credits} Credits</p>
                            <div className="mt-4 space-y-2">
                               <p className="text-sm font-semibold">Internal Marks:</p>
                               <div className="text-xs">Midterm 1: {course.internalMarks.midterm1}/{course.maxMarks.midterm1}</div>
                               <div className="text-xs">Midterm 2: {course.internalMarks.midterm2}/{course.maxMarks.midterm2}</div>
                               <div className="text-xs">Quiz: {course.internalMarks.quiz}/{course.maxMarks.quiz}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
            {activeTab === 'previous' && (
                <div className="space-y-4">
                    {Object.entries(previousSemesters).map(([semester, courses]) => (
                         <details key={semester} className="bg-white p-4 rounded-lg shadow-sm">
                            <summary className="font-semibold cursor-pointer">{semester}</summary>
                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gray-100"><tr><th className="p-2 text-left">Code</th><th className="p-2 text-left">Title</th><th className="p-2 text-left">Credits</th></tr></thead>
                                    <tbody>{courses.map(c => <tr key={c.code} className="border-b"><td className="p-2">{c.code}</td><td className="p-2">{c.title}</td><td className="p-2">{c.credits}</td></tr>)}</tbody>
                                </table>
                            </div>
                        </details>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesPage;