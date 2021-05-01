import { Link } from "react-router-dom"

const UserJobs = (props) => {
  console.log(props);
  const { currentUser, handleDeleteJob} = props;
  const jobs = currentUser.jobs;
  console.log(jobs);
  return (
    <div>
      <h2>User Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <p>{job.id}</p>
          <p>date: {job.date}</p>
          <p>start: {job.start_time}</p>
          <p> end: {job.end_time}</p>
          <Link to={`/jobs/${job.id}/edit`}><button>Edit</button></Link>
          <Link><button onClick={() => handleDeleteJob(job.id)}>Delete</button></Link>
        </div>
      ))}
    </div>
  );
};

export default UserJobs;
