import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import PatientDashboard from './components/PatientDashboard';
import DoctorSearch from './components/DoctorSearch';
import Telemedicine from './components/Telemedicine';
import MedicalRecords from './components/MedicalRecords';
import HealthInsights from './components/HealthInsights';
import AppointmentBooking from './components/AppointmentBooking';
import AppointmentConfirmation from './components/AppointmentConfirmation';
import VideoCall from './components/VideoCall';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">UHI Open Healthcare</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu />
            </button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6">
                <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
                <li><Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link></li>
                <li><Link to="/doctors" className="text-gray-700 hover:text-blue-600">Find Doctors</Link></li>
                <li><Link to="/telemedicine" className="text-gray-700 hover:text-blue-600">Telemedicine</Link></li>
                <li><Link to="/records" className="text-gray-700 hover:text-blue-600">Medical Records</Link></li>
                <li><Link to="/insights" className="text-gray-700 hover:text-blue-600">Health Insights</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/doctors" element={<DoctorSearch />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route path="/records" element={<MedicalRecords />} />
            <Route path="/insights" element={<HealthInsights />} />
            <Route path="/book-appointment/:doctorId" element={<AppointmentBooking />} />
            <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
            <Route path="/video-call/:appointmentId" element={<VideoCall />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 UHI Open Healthcare Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;