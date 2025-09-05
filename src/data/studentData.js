// File: src/data/studentData.js

export const studentData = {
  profile: {
    name: 'Ananya Sharma',
    registerNumber: 'R21ED001',
    program: 'B.Tech. Computer Science',
    profilePicture: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    status: 'Active',
    academicDetails: {
      course: 'B.Tech. Computer Science & Engineering',
      department: 'Computer Science',
      semester: 4,
      academicYear: '2023-2024',
    },
    personalDetails: {
      dateOfBirth: '2003-05-15',
      aadhaarNumber: 'XXXX-XXXX-1234',
      nationality: 'Indian',
      religion: 'Hindu',
    },
    contactInfo: {
      email: 'ananya.sharma@example.com',
      phone: '+91 98765 43210',
      permanentAddress: '123, Sunshine Colony, Bangalore, Karnataka, 560001',
      parentContact: '+91 90123 45678',
    },
  },
  dashboard: {
    overallAttendance: 82,
    totalClasses: 323,
    attendedClasses: 266,
    feesDue: 15000,
    feesDueDate: '2025-10-15',
    todaySchedule: [
      { time: '09:00 - 10:00', subject: 'Data Structures', location: 'Room 301' },
      { time: '10:00 - 11:00', subject: 'Database Systems', location: 'Lab 5' },
      { time: '11:15 - 12:15', subject: 'Operating Systems', location: 'Room 302' },
      { time: '01:30 - 02:30', subject: 'Software Engineering', location: 'Room 204' },
    ],
  },
  courses: {
    currentSemester: [
      { title: 'OPERATING SYSTEMS', code: 'CS18401', credits: 4, internalMarks: { midterm1: 25, midterm2: 28, quiz: 18 }, maxMarks: { midterm1: 30, midterm2: 30, quiz: 20 } },
      { title: 'DATABASE MANAGEMENT SYSTEMS', code: 'CS18402', credits: 4, internalMarks: { midterm1: 28, midterm2: 26, quiz: 15 }, maxMarks: { midterm1: 30, midterm2: 30, quiz: 20 } },
      { title: 'SOFTWARE ENGINEERING', code: 'CS18403', credits: 3, internalMarks: { midterm1: 22, midterm2: 25, quiz: 17 }, maxMarks: { midterm1: 30, midterm2: 30, quiz: 20 } },
      { title: 'DESIGN AND ANALYSIS OF ALGORITHMS', code: 'CS18404', credits: 3, internalMarks: { midterm1: 26, midterm2: 29, quiz: 19 }, maxMarks: { midterm1: 30, midterm2: 30, quiz: 20 } },
    ],
    previousSemesters: {
      'Semester 1': [{ code: 'MA18101', title: 'Calculus and Linear Algebra', credits: 4 }, { code: 'PH18101', title: 'Engineering Physics', credits: 3 }],
      'Semester 2': [{ code: 'CY18101', title: 'Engineering Chemistry', credits: 3 }, { code: 'GE18101', title: 'Problem Solving and Python Programming', credits: 4 }],
      'Semester 3': [{ code: 'CS18301', title: 'Data Structures', credits: 4 }, { code: 'EC18301', title: 'Digital Electronics', credits: 3 }],
    }
  },
  attendance: {
    overallPercentage: 83.33,
    subjectWise: [
      { name: 'Operating Systems', percentage: 85, attended: 41, total: 48 },
      { name: 'Database Management Systems', percentage: 91.67, attended: 44, total: 48 },
      { name: 'Software Engineering', percentage: 75, attended: 36, total: 48 },
      { name: 'Design and Analysis of Algorithms', percentage: 81.25, attended: 39, total: 48 },
    ],
    dailyLog: {
      '2025-09-01': { status: 'present', hours: { '1': 'Present', '2': 'Present', '3': 'Present' } },
      '2025-09-02': { status: 'absent', hours: { '1': 'Present', '2': 'Absent', '3': 'Present' } },
      '2025-09-03': { status: 'present', hours: { '1': 'Present', '2': 'Present', '3': 'Present' } },
      '2025-09-04': { status: 'holiday', hours: {} },
      '2025-09-05': { status: 'present', hours: { '1': 'Present', '2': 'Present', '3': 'Present' } },
      '2025-09-08': { status: 'present', hours: { '1': 'Present', '2': 'Present' } },
      '2025-09-09': { status: 'present', hours: { '1': 'Present', '2': 'Present' } },
      '2025-09-10': { status: 'absent', hours: { '1': 'Absent', '2': 'Present' } },
    }
  },
  examinations: {
    upcoming: [
      { subject: 'Operating Systems Midterm II', date: '2025-10-20', time: '10:00 AM - 12:00 PM' },
      { subject: 'Database Systems Midterm II', date: '2025-10-22', time: '10:00 AM - 12:00 PM' },
    ],
    hallTicketAvailable: true,
    results: {
      'Semester 3': {
        status: 'Published',
        gpa: '8.5',
        marks: [
          { code: 'CS18301', title: 'Data Structures', grade: 'A', credits: 4 },
          { code: 'EC18301', title: 'Digital Electronics', grade: 'B', credits: 3 },
          { code: 'MA18301', title: 'Transforms and Partial Differential Equations', grade: 'A', credits: 4 },
        ]
      },
      'Semester 2': {
        status: 'Published',
        gpa: '8.2',
        marks: [
          { code: 'CY18101', title: 'Engineering Chemistry', grade: 'B', credits: 3 },
          { code: 'GE18101', title: 'Problem Solving and Python Programming', grade: 'A', credits: 4 },
        ]
      },
      'Semester 1': {
        status: 'Published',
        gpa: '8.0',
        marks: [
          { code: 'MA18101', title: 'Calculus and Linear Algebra', grade: 'A', credits: 4 },
          { code: 'PH18101', title: 'Engineering Physics', grade: 'B', credits: 3 },
        ]
      },
    }
  },
  fees: {
    totalFees: 125000,
    amountPaid: 110000,
    balanceDue: 15000,
    breakdown: [
      { name: 'Tuition Fee', value: 90000 },
      { name: 'Hostel & Mess', value: 25000 },
      { name: 'Exam Fee', value: 5000 },
      { name: 'Other', value: 5000 },
    ],
    paymentHistory: [
      { receiptNumber: 'R21-001', date: '2024-07-15', amount: 62500, status: 'Paid' },
      { receiptNumber: 'R21-002', date: '2025-01-10', amount: 47500, status: 'Paid' },
    ]
  }
};