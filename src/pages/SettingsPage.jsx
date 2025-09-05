// File: src/pages/SettingsPage.jsx (Revamped)

import React, { useState } from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

const Toggle = ({ label, enabled, onToggle }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-700">{label}</span>
        <button onClick={onToggle} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${enabled ? 'bg-purple-600' : 'bg-gray-300'}`}>
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    </div>
);

const SettingsPage = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });

    const handleToggle = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div>
            <PageTitle>Settings</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Profile Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" defaultValue="+91 98765 43210" disabled className="mt-1 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea defaultValue="123, Sunshine Colony, Bangalore, Karnataka, 560001" disabled className="mt-1 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm" rows="3"></textarea>
                        </div>
                        <button className="text-sm text-purple-600 hover:underline">Request to change details</button>
                    </div>
                </Card>

                <Card>
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Notification Preferences</h3>
                    <div className="space-y-4">
                        <Toggle label="Email Notifications" enabled={notifications.email} onToggle={() => handleToggle('email')} />
                        <Toggle label="SMS Alerts" enabled={notifications.sms} onToggle={() => handleToggle('sms')} />
                        <Toggle label="Push Notifications" enabled={notifications.push} onToggle={() => handleToggle('push')} />
                    </div>
                </Card>

                <Card className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Security</h3>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Change Password</button>
                        <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Enable Two-Factor Authentication</button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SettingsPage;