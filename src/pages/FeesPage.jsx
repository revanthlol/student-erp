// File: src/pages/FeesPage.jsx

import React from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

const FeesPage = () => {
    const { totalFees, amountPaid, balanceDue, paymentHistory } = studentData.fees;
    return (
        <div>
            <PageTitle>Fee Payment</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="text-center"><h4 className="text-gray-500">Total Fees</h4><p className="text-2xl font-bold">₹{totalFees.toLocaleString('en-IN')}</p></Card>
                <Card className="text-center"><h4 className="text-gray-500">Amount Paid</h4><p className="text-2xl font-bold text-green-600">₹{amountPaid.toLocaleString('en-IN')}</p></Card>
                <Card className="text-center"><h4 className="text-gray-500">Balance Due</h4><p className="text-2xl font-bold text-red-500">₹{balanceDue.toLocaleString('en-IN')}</p></Card>
            </div>
            <Card>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Payment History</h3>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">Pay Now</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100"><tr><th className="p-3 text-left">Receipt No.</th><th className="p-3 text-left">Date</th><th className="p-3 text-right">Amount (₹)</th><th className="p-3 text-center">Status</th></tr></thead>
                        <tbody>{paymentHistory.map(p => <tr key={p.receiptNumber} className="border-b"><td className="p-3">{p.receiptNumber}</td><td className="p-3">{p.date}</td><td className="p-3 text-right">{p.amount.toLocaleString('en-IN')}</td><td className="p-3 text-center"><span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{p.status}</span></td></tr>)}</tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default FeesPage;