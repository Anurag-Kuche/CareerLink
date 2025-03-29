import { useState } from "react";

export default function ApplyForJob({ jobId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-lg w-full bg-white/40 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Apply for this Job</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition transform duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
