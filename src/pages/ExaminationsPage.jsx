// File: src/pages/ExaminationsPage.jsx

import React from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

const ExaminationsPage = () => {
    const { upcoming, hallTicketAvailable, results } = studentData.examinations;
    return (
        <div>
            <PageTitle>Examinations</PageTitle>
            <div className="space-y-6">
                <Card>
                    <h3 className="text-xl font-semibold mb-4">Upcoming Exams</h3>
                    <ul className="space-y-3">
                        {upcoming.map(exam => <li key={exam.subject} className="p-3 bg-gray-50 rounded-md flex justify-between items-center"><div><p className="font-semibold">{exam.subject}</p><p className="text-sm text-gray-500">{exam.date} @ {exam.time}</p></div></li>)}
                    </ul>
                    <button disabled={!hallTicketAvailable} className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors">Download Hall Ticket</button>
                </Card>
                <Card>
                    <h3 className="text-xl font-semibold mb-4">Results</h3>
                    <div className="space-y-2">
                        {Object.entries(results).map(([sem, data]) => <div key={sem} className="flex justify-between items-center p-3 border rounded-md"><p>{sem}</p><a href={data.link} className="text-purple-600 font-semibold hover:underline">{data.status}</a></div>)}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ExaminationsPage;