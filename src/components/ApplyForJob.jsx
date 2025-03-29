import { useState } from "react";
import { useJob } from "../context/JobContext";

export default function ApplyForJob({ jobId }) {
  const [resume, setResume] = useState(null);
  const { applyForJob } = useJob();

  const handleApply = (e) => {
    e.preventDefault();
    if (!resume) return alert("Please upload a resume.");
    
    applyForJob(jobId, resume.name);
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleApply} className="space-y-2">
      <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Apply Now
      </button>
    </form>
  );
}
