// File: src/pages/ProfilePage.jsx
import React from 'react';
import { studentData } from '../data/studentData';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
    </div>
);

const ProfilePage = () => {
    const { profile } = studentData;
    return (
        <div>
            <PageTitle>My Profile</PageTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <Card className="flex flex-col items-center text-center">
                        <img src={profile.profilePicture} alt="Profile" className="w-32 h-32 rounded-full mb-4 ring-4 ring-purple-200" />
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="text-gray-500">{profile.registerNumber}</p>
                        <span className="mt-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{profile.status}</span>
                    </Card>
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Academic Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <DetailItem label="Course" value={profile.academicDetails.course} />
                            <DetailItem label="Department" value={profile.academicDetails.department} />
                            <DetailItem label="Semester" value={profile.academicDetails.semester} />
                            <DetailItem label="Academic Year" value={profile.academicDetails.academicYear} />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Personal & Contact Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <DetailItem label="Date of Birth" value={profile.personalDetails.dateOfBirth} />
                             <DetailItem label="Nationality" value={profile.personalDetails.nationality} />
                             <DetailItem label="Email" value={profile.contactInfo.email} />
                             <DetailItem label="Phone" value={profile.contactInfo.phone} />
                             <div className="sm:col-span-2"><DetailItem label="Address" value={profile.contactInfo.permanentAddress} /></div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;