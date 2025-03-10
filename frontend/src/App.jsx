import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import MedicalHistory from './pages/MedicalHistory'
import Prescriptions from './pages/Prescriptions'
import Profile from './pages/Profile'
import Billing from './pages/Billing'
import PatientLogin from './pages/PatientLogin'
import PatientRegistration from './pages/PatientRegistration' 
import ChatApp from './pages/ChatApp'; 
function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  )
}

function AppContent({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isRegistrationPage = location.pathname === '/register';

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {!isLoginPage && !isRegistrationPage && <Sidebar />}
      <div className="flex flex-col flex-1 overflow-hidden">
        {!isLoginPage && !isRegistrationPage && <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        <main className="flex-1 overflow-y-auto bg-neutral-lightest dark:bg-dark-dark p-4">
          <Routes>
            <Route path="/" element={<PatientLogin />} /> {/* Set PatientLogin as the default route */}
            <Route path="/register" element={<PatientRegistration />} /> {/* Add PatientRegistration route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/profile" element={<Profile />} />
           <Route path="/billing" element={<Billing />} />
           <Route path="/live-chat" element={<ChatApp />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
