import { Link } from "react-router-dom";
import "./UserJobs.css"

export default function UserJobs (props) {
  
  const { handleDeleteJob, jobs } = props;
  console.log(props)
  return (
    <div>
      <h2>User Jobs</h2>
      <div className="job-flex-container">
      {jobs.map((job) => (
        <div key={job.id} className="event">
          <p>{job.id}</p>
          <p>date: {job.date.slice(0, 10)}</p>
          <p>start: {job.start_time.slice(11, 16)}</p>
          <p> end: {job.end_time.slice(11, 16)}</p>
          <Link to={`/jobs/${job.id}`}>
            <button>Edit</button>
          </Link>
          <Link>
            <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
          </Link>
        </div>
      ))}
        </div>
    </div>
  );
};


