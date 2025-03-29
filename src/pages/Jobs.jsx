import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";

export default function Jobs() {
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
    { id: 2, title: "Backend Engineer", company: "Amazon", location: "New York, NY" },
    { id: 3, title: "Data Scientist", company: "Microsoft", location: "Seattle, WA" },
    { id: 4, title: "UI/UX Designer", company: "Apple", location: "San Francisco, CA" },
    { id: 5, title: "Cybersecurity Analyst", company: "Tesla", location: "Austin, TX" },
    { id: 6, title: "Marketing Intern", company: "Meta", location: "Remote" },
    { id: 7, title: "Backend Developer", company: "Netflix", location: "Los Angeles, CA" },
    { id: 8, title: "Product Manager", company: "LinkedIn", location: "Sunnyvale, CA" },
    { id: 9, title: "AI Researcher", company: "OpenAI", location: "Remote" },
    { id: 10, title: "Cloud Engineer", company: "IBM", location: "Boston, MA" },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Featured Jobs */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-[#0077B5] mb-6"
      >
        Featured Jobs & Internships
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {jobs.slice(0, 6).map((job, index) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </motion.div>

      {/* All Job Listings */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl font-bold text-center text-[#0077B5] mt-12 mb-6"
      >
        All Job Listings
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
