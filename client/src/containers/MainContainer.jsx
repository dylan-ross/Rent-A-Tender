import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../screens/home/Home";
import Bartenders from "../screens/bartenders/Bartenders";
import BartenderDetail from "../screens/bartenderDetail/BartenderDetail";
// import BartenderProfileForm from '../screens/bartenderProfileForm/BartenderProfileForm';
import BartenderJobs from "../screens/bartenderJobs/BartenderJobs";
import Confirmation from "../screens/confirmation/Confirmation";
import UserJobs from "../screens/userJobs/UserJobs";
import CreateJob from "../screens/createJob/CreateJob";
import EditJob from "../screens/editJob/EditJob";
// import Category from "../screens/category/Category";
// import Search from "../components/search/Search";
import { getAllJobs, postJob, putJob, deleteJob } from "../services/jobs";
import {
  getAllBartenders,
  // postBartender,
  // putBartender,
} from "../services/bartenders";

export default function MainContainer(props) {
  const [bartenders, setBartenders] = useState([]);
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const { currentUser, currentBartender, queriedBartendrs } = props;

  useEffect(() => {
    const fetchBartenders = async () => {
      const bartenderData = await getAllBartenders();
      setBartenders(bartenderData);
    };
    fetchBartenders();
  }, []);

  const fetchJobs = async () => {
    const jobsData = await getAllJobs();
    setJobs(jobsData);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsData = await getAllJobs();
      setJobs(jobsData);
    };
    fetchJobs();
  }, []);

  // const handleEditBartender = async (id, formData) => {
  //   const bartenderData = await putBartender(id, formData);
  //   setBartenders(prevState => prevState.map(bartender => {
  //     return bartenderData.id === Number(id) ? bartenderData : bartender
  //   }))
  //   history.push('bartenders/:bartender_id/jobs')
  // }

  const handleCreateJob = async (formData) => {
    const jobData = await postJob(formData);
    setJobs((prevState) => [...prevState, jobData]);
    history.push("/job/confirmation");
  };

  const handleEditJob = async (id, formData) => {
    const jobData = await putJob(id, formData);
    setJobs((prevState) =>
      prevState.map((job) => {
        return jobData.id === Number(id) ? jobData : job;
      })
    );
    fetchJobs();
    history.push("/user/jobs");
  };

  const handleDeleteJob = async (id) => {
    await deleteJob(id);
    setJobs((prevState) => prevState.filter((job) => job.id !== id));
    history.push("/user/jobs");
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home
          currentUser={currentUser}
          currentBartender={currentBartender}
          bartenders={bartenders}
          queriedBartenders={queriedBartendrs}
        />
      </Route>
      <Route exact path="/bartenders">
        <Bartenders bartenders={bartenders} currentUser={currentUser} />
      </Route>
      {/* <Route exact path="/bartenders/category">
        <Category bartenders={bartenders}/>
      </Route> */}
      <Route exact path="/bartenders/:id">
        <BartenderDetail
          currentBartender={currentBartender}
          currentUser={currentUser}
        />
      </Route>
      {/* <Route exact path='/bartenders/:id/create_profile'>
        <BartenderProfileForm bartenders={bartenders} currentBartender={currentBartender}/>
      </Route>
      <Route exact path='/bartenders/:id/edit_profile'>
        <BartenderProfileForm bartenders={bartenders} currentBartender={currentBartender} handleEditBartender={handleEditBartender}/>
      </Route> */}
      <Route exact path="/bartenders/:id/jobs">
        <BartenderJobs
          currentBartender={currentBartender}
          jobs={jobs}
          handleDeleteJob={handleDeleteJob}
        />
      </Route>
      <Route exact path="/bartenders/:id/jobs/new">
        <CreateJob
          currentUser={currentUser}
          jobs={jobs}
          handleCreateJob={handleCreateJob}
        />
      </Route>
      <Route exact path="/user/jobs">
        <UserJobs
          currentUser={currentUser}
          jobs={jobs}
          handleEditJob={handleEditJob}
          handleDeleteJob={handleDeleteJob}
        />
      </Route>
      <Route exact path="/job/confirmation">
        <Confirmation currentUser={currentUser} jobs={jobs} />
      </Route>
      <Route exact path="/jobs/:id/edit">
        <EditJob
          currentUser={currentUser}
          jobs={jobs}
          handleEditJob={handleEditJob}
          handleDeleteJob={handleDeleteJob}
        />
      </Route>
    </Switch>
  );
}
