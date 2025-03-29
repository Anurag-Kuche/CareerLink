import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-600">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-500 text-sm">{job.location}</p>
      <Link
        to={`/jobs/${job.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Apply
      </Link>
    </div>
  );
}
