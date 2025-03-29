import { useState } from "react";

export default function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", company: "", location: "" });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const addJob = () => {
    if (newJob.title && newJob.company && newJob.location) {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      setNewJob({ title: "", company: "", location: "" });
    }
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6 animate__animated animate__fadeIn">
        Employer Dashboard
      </h1>

      {/* Add Job Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate__animated animate__fadeIn">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Post a New Job</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            value={newJob.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <input
            type="text"
            name="company"
            value={newJob.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <input
            type="text"
            name="location"
            value={newJob.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <button
            onClick={addJob}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg mt-3 hover:bg-gradient-to-l hover:scale-105 transition-all duration-300"
          >
            Add Job
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <h2 className="text-2xl font-semibold mb-4 text-white animate__animated animate__fadeIn animate__delay-1s">
        Your Job Listings
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
            >
              <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
              <p className="text-gray-700 mt-1">{job.company}</p>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              <button
                onClick={() => deleteJob(job.id)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No jobs posted yet. Start posting now!</p>
        )}
      </div>
    </div>
  );
}
