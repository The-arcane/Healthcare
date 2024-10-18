import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Activity, FileText } from 'lucide-react';

function PatientDashboard() {
  const [showAppointmentDetails, setShowAppointmentDetails] = React.useState(false);
  const [showHealthSummary, setShowHealthSummary] = React.useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-4">Patient Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Upcoming Appointments</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Dr. Sharma - Cardiology (May 15, 2024)</li>
            <li>Dr. Patel - General Checkup (June 2, 2024)</li>
          </ul>
          <button 
            onClick={() => setShowAppointmentDetails(!showAppointmentDetails)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showAppointmentDetails ? 'Hide Details' : 'View Details'}
          </button>
          {showAppointmentDetails && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p><strong>Dr. Sharma - Cardiology</strong></p>
              <p>Date: May 15, 2024</p>
              <p>Time: 10:00 AM</p>
              <p>Location: City Hospital, Room 302</p>
              <Link to="/video-call/123" className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Join Video Call
              </Link>
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Activity className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Recent Activities</h3>
          <ul className="list-disc list-inside">
            <li>Blood test results uploaded (May 1, 2024)</li>
            <li>Telemedicine consultation completed (April 28, 2024)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText className="w-8 h-8 text-blue-500 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Health Summary</h3>
          <p className="mb-4">Your overall health status is good. Remember to take your daily medication and stay hydrated.</p>
          <button 
            onClick={() => setShowHealthSummary(!showHealthSummary)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showHealthSummary ? 'Hide Summary' : 'View Detailed Summary'}
          </button>
          {showHealthSummary && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p><strong>Blood Pressure:</strong> 120/80 mmHg (Normal)</p>
              <p><strong>Heart Rate:</strong> 72 bpm (Normal)</p>
              <p><strong>BMI:</strong> 23.5 (Normal)</p>
              <p><strong>Cholesterol:</strong> 180 mg/dL (Desirable)</p>
              <Link to="/insights" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Health Insights
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;