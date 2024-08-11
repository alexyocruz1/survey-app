"use client";

import ScheduleForm from '../../components/ScheduleForm';

export default function SchedulePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Schedule Consultation</h1>
        <ScheduleForm />
      </div>
    </div>
  );
}