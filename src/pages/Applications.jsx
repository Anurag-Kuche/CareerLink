import { useJob } from "../context/JobContext";

export default function Applications() {
  const { applications } = useJob();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">My Applications</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="mt-2">
          {applications.map((app, index) => (
            <li key={index} className="border p-2">
              Job ID: {app.jobId} - Resume: {app.resume} - Status: {app.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
