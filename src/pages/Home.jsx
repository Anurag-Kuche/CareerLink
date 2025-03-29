import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaLinkedin, FaTwitter, FaGithub, FaSearch, FaTimes } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // Page load animation delay
  }, []);

  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote", salary: "$80K - $120K", type: "Full-time" },
    { title: "Software Engineer", company: "Amazon", location: "New York, NY", salary: "$100K - $140K", type: "Full-time" },
    { title: "Data Scientist", company: "Microsoft", location: "Seattle, WA", salary: "$110K - $150K", type: "Full-time" },
    { title: "UI/UX Designer", company: "Apple", location: "San Francisco, CA", salary: "$85K - $110K", type: "Full-time" },
    { title: "Cybersecurity Analyst", company: "Tesla", location: "Austin, TX", salary: "$90K - $130K", type: "Full-time" },
    { title: "Marketing Intern", company: "Meta", location: "Remote", salary: "$20/hr", type: "Internship" },
    { title: "Backend Developer", company: "Netflix", location: "Los Angeles, CA", salary: "$100K - $135K", type: "Full-time" },
    { title: "Product Manager", company: "LinkedIn", location: "Sunnyvale, CA", salary: "$120K - $160K", type: "Full-time" },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"} ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 119, 181, 0.7), rgba(0, 119, 181, 0.4)), url('./assets/jp.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h1 className="text-5xl font-extrabold text-white relative z-10 animate-slideInDown">
          Your Career Starts Here
        </h1>
        <p className="mt-4 text-lg text-gray-200 relative z-10 animate-slideInUp">
          Explore top job opportunities and internships in leading companies.
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 flex items-center space-x-2 animate-fadeInUp relative z-10">
          <FaSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search for jobs, internships, or companies..."
            className="w-full p-3 rounded-lg text-gray-700 focus:outline-none transform transition-all duration-500 hover:scale-105 focus:scale-110"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select className="p-3 bg-gray-200 rounded-lg focus:outline-none transform transition-all duration-500 hover:scale-105 focus:scale-110">
            <option value="">Location</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
          </select>
          <button className="bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#005A91] transition transform hover:scale-105 active:scale-95">
            Search
          </button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0077B5] animate-fadeInUp">Featured Jobs & Internships</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredJobs.map((job, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 animate-slideInUp transform hover:rotate-1">
              <h3 className="text-xl font-bold text-[#0077B5] dark:text-blue-400">{job.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{job.company} | {job.location}</p>
              <button onClick={() => setSelectedJob(job)} className="mt-3 inline-block text-[#0077B5] hover:underline transition-transform hover:scale-110">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative animate-slideInUp">
            <button onClick={() => setSelectedJob(null)} className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-[#0077B5]">{selectedJob.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{selectedJob.company} | {selectedJob.location}</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">💰 {selectedJob.salary}</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">📌 {selectedJob.type}</p>
            <button onClick={() => setSelectedJob(null)} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 animate-fadeInUp">
        <div className="flex justify-center space-x-6 text-xl">
          <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400"><FaGithub /></a>
        </div>
        <p className="mt-4 text-gray-400">&copy; 2025 JobPortal. All Rights Reserved.</p>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition flex items-center space-x-2">
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </footer>
    </div>
  );
}
