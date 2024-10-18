import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Video, FileText } from 'lucide-react';

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Your Health, Your Way</h1>
        <p className="text-xl text-center mb-12">Access quality healthcare services anytime, anywhere.</p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for doctors, specialties..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Find Doctors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Link to="/doctors" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Search className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Doctors</h3>
            <p className="text-gray-600">Search and book appointments with top doctors</p>
          </Link>
          <Link to="/telemedicine" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Video className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Consult</h3>
            <p className="text-gray-600">Connect with doctors online for consultations</p>
          </Link>
          <Link to="/records" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FileText className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Records</h3>
            <p className="text-gray-600">Store and access your medical records securely</p>
          </Link>
          <Link to="/insights" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Calendar className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Insights</h3>
            <p className="text-gray-600">Get personalized health recommendations</p>
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose UHI Open Healthcare?</h2>
          <p className="text-xl mb-8">Experience healthcare that's open, interoperable, and centered around you.</p>
          <Link to="/about" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;