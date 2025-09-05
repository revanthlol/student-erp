// File: src/pages/FeesPage.jsx (Revamped)

import React from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Download } from 'lucide-react';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const FeesPage = () => {
    const { totalFees, amountPaid, balanceDue, paymentHistory, breakdown } = studentData.fees;
    return (
        <div>
            <PageTitle>Fee Payment</PageTitle>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center"><h4 className="text-gray-500">Total Fees</h4><p className="text-2xl font-bold">₹{totalFees.toLocaleString('en-IN')}</p></Card>
                        <Card className="text-center"><h4 className="text-gray-500">Amount Paid</h4><p className="text-2xl font-bold text-green-600">₹{amountPaid.toLocaleString('en-IN')}</p></Card>
                        <Card className="text-center"><h4 className="text-gray-500">Balance Due</h4><p className="text-2xl font-bold text-red-500">₹{balanceDue.toLocaleString('en-IN')}</p></Card>
                    </div>
                    <Card>
                        <h3 className="text-xl font-semibold mb-4">Payment History</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-100"><tr><th className="p-3 text-left">Receipt No.</th><th className="p-3 text-left">Date</th><th className="p-3 text-right">Amount (₹)</th><th className="p-3 text-center">Invoice</th></tr></thead>
                                <tbody>{paymentHistory.map(p => <tr key={p.receiptNumber} className="border-b"><td className="p-3">{p.receiptNumber}</td><td className="p-3">{p.date}</td><td className="p-3 text-right">{p.amount.toLocaleString('en-IN')}</td><td className="p-3 text-center"><button className="text-purple-600 hover:text-purple-800"><Download size={16} /></button></td></tr>)}</tbody>
                            </table>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <Card>
                        <h3 className="text-xl font-semibold mb-4">Fee Breakdown</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie data={breakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                    {breakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                </Pie>
                                <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">Pay Balance Now</button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FeesPage;