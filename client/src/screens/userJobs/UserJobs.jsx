import { Link } from "react-router-dom"
const UserJobs = (props) => {
  console.log(props);
  const {  handleDeleteJob, jobs} = props;
  return (
    <div>
      <h2>User Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <p>{job.id}</p>
          <p>date: {job.date.slice(0, 10)}</p>
          <p>start: {job.start_time.slice(11, 16)}</p>
          <p> end: {job.end_time.slice(11, 16)}</p>
          <Link to={`/jobs/${job.id}/edit`}><button>Edit</button></Link>
          <Link><button onClick={() => handleDeleteJob(job.id)}>Delete</button></Link>
        </div>
      ))}
    </div>
  );
};

export default UserJobs;
