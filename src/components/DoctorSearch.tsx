import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const doctors = [
  { id: 1, name: 'Dr. Aisha Patel', specialty: 'Cardiology', hospital: 'City Hospital' },
  { id: 2, name: 'Dr. Rajesh Kumar', specialty: 'Orthopedics', hospital: 'Central Medical Center' },
  { id: 3, name: 'Dr. Priya Singh', specialty: 'Pediatrics', hospital: 'Children\'s Hospital' },
];

function DoctorSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-4">Find a Doctor</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or specialty"
          className="w-full p-2 pl-10 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-600">{doctor.hospital}</p>
            <Link 
              to={`/book-appointment/${doctor.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorSearch;