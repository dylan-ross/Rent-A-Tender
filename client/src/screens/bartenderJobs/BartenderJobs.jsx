import "./BartenderJobs.css"
const UserJobs = (props) => {
  console.log(props);
  const {  handleDeleteJob, jobs} = props;
  return (
    <div>
      <h2>Bartender Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job">
          <p>Job number {job.id}</p>
          <p>date: {job.date.slice(0, 10)}</p>
          <p>start: {job.start_time.slice(11, 16)}</p>
          <p> end: {job.end_time.slice(11, 16)}</p>
        </div>
      ))}
    </div>
  );
};

export default UserJobs;