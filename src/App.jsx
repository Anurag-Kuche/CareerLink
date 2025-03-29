import { Routes, Route } from "react-router-dom"; // ✅ No BrowserRouter here
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import EmployerDashboard from "./pages/EmployerDashboard";
import Login from "./pages/Login";

function App() {
  const { user } = useAuth(); // Access authentication state

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Protected Route for Employers */}
        {user ? (
          <Route path="/employer" element={<EmployerDashboard />} />
        ) : (
          <Route path="/employer" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
