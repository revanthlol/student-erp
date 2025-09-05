// File: src/pages/ExaminationsPage.jsx (Revamped)

import React, { useState } from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ExaminationsPage = () => {
    const { upcoming, hallTicketAvailable, results } = studentData.examinations;
    const [expandedSem, setExpandedSem] = useState(null);

    const toggleSem = (semester) => {
        setExpandedSem(expandedSem === semester ? null : semester);
    };

    return (
        <div>
            <PageTitle>Examinations</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Upcoming Exams</h3>
                    <ul className="space-y-3">
                        {upcoming.map(exam => (
                            <li key={exam.subject} className="p-3 bg-gray-50 rounded-md flex flex-col sm:flex-row justify-between sm:items-center">
                                <p className="font-semibold">{exam.subject}</p>
                                <p className="text-sm text-gray-500">{exam.date} @ {exam.time}</p>
                            </li>
                        ))}
                    </ul>
                    <button disabled={!hallTicketAvailable} className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors">
                        Download Hall Ticket
                    </button>
                </Card>

                <Card className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Results</h3>
                    <div className="space-y-2">
                        {Object.entries(results).map(([semester, data]) => (
                            <div key={semester} className="border rounded-md">
                                <div onClick={() => toggleSem(semester)} className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50">
                                    <p className="font-semibold">{semester}</p>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm font-bold text-purple-700">GPA: {data.gpa}</span>
                                        {expandedSem === semester ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                    </div>
                                </div>
                                {expandedSem === semester && (
                                    <div className="p-3 border-t bg-gray-50">
                                        <table className="min-w-full text-sm">
                                            <thead className="text-left">
                                                <tr><th className="p-2">Code</th><th className="p-2">Subject</th><th className="p-2">Grade</th></tr>
                                            </thead>
                                            <tbody>
                                                {data.marks.map(mark => (
                                                    <tr key={mark.code}><td className="p-2">{mark.code}</td><td className="p-2">{mark.title}</td><td className="p-2 font-semibold">{mark.grade}</td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ExaminationsPage;