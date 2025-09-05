// File: src/pages/CoursesPage.jsx

import React, { useState } from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import TabButton from '../components/TabButton';

const ProgressBar = ({ value, max }) => {
    const percentage = (value / max) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

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
                            <p className="text-sm text-gray-500 mb-4">{course.code} | {course.credits} Credits</p>
                            
                            <p className="text-sm font-semibold mb-2">Internal Marks:</p>
                            <div className="space-y-3 text-xs">
                                <div>
                                    <div className="flex justify-between mb-1"><span>Midterm 1</span><span>{course.internalMarks.midterm1}/{course.maxMarks.midterm1}</span></div>
                                    <ProgressBar value={course.internalMarks.midterm1} max={course.maxMarks.midterm1} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1"><span>Midterm 2</span><span>{course.internalMarks.midterm2}/{course.maxMarks.midterm2}</span></div>
                                    <ProgressBar value={course.internalMarks.midterm2} max={course.maxMarks.midterm2} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1"><span>Quiz</span><span>{course.internalMarks.quiz}/{course.maxMarks.quiz}</span></div>
                                    <ProgressBar value={course.internalMarks.quiz} max={course.maxMarks.quiz} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
            {activeTab === 'previous' && (
                /* ... Previous Semesters code remains the same ... */
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