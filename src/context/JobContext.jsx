import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const applyForJob = (jobId, resume) => {
    const newApplication = { jobId, resume, status: "Pending" };
    const updatedApplications = [...applications, newApplication];
    setApplications(updatedApplications);
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
  };

  return (
    <JobContext.Provider value={{ applications, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  return useContext(JobContext);
}
