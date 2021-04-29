import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Bartenders from '../screens/bartenders/Bartenders';
import BartenderDetail from '../screens/bartenderDetail/BartenderDetail';
import BartenderProfileForm from '../screens/bartenderProfileForm/BartenderProfileForm';
import BartenderJobs from '../screens/bartenderJobs/BartenderJobs';
import Confirmation from '../screens/confirmation/Confirmation';
import UserJobs from '../screens/userJobs/UserJobs';
import JobForm from '../screens/jobForm/JobForm';

import { getAllJobs, postJob, putJob, deleteJob, } from '../services/jobs';
import { getAllBartenders, postBartender, putBartender} from '../services/bartenders';

export default function MainContainer(props) {
  const [bartenders, setBartenders] = useState([]);
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const { currentUser, currentBartender } = props;

  useEffect(() => {
    const fetchBartenders = async () => {
      const bartenderData = await getAllBartenders();
      setBartenders(bartenderData);
    }
    fetchBartenders()
  }, [])

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const jobsData = await getAllJobs();
  //     setJobs(jobsData)
  //   }
  //   fetchJobs()
  // }, [])

  const handleCreateBartender = async (formData) => {
    const bartenderData = await postBartender(formData);
    setBartenders(prevState => [...prevState, bartenderData])
    history.push('/bartenders/:bartender_id/jobs')
  }

  const handleEditBartender = async (id, formData) => {
    const bartenderData = await putBartender(id, formData);
    setBartenders(prevState => prevState.map(bartender => {
      return bartenderData.id === Number(id) ? bartenderData : bartender
    }))
    history.push('bartenders/:bartender_id/jobs')
  }

  // const handleDeleteBartender = async (id) => {
  //   await deleteBartender(id);
  //   setBartenders(prevState => prevState.filter(bartender => bartender.id !== id))
  // }

  const handleCreateJob = async (formData) => {
    const jobData = await postJob(formData);
    setJobs(prevState => [...prevState, jobData])
    history.push('/jobs/:job_id')
  }

  const handleEditJob = async (id, formData) => {
    const jobData = await putJob(id, formData);
    setJobs(prevState => prevState.map(job => {
      return jobData.id === Number(id) ? jobData : job
    }))
    history.push('/jobs/:job_id')
  }

  const handleDeleteJob = async (id) => {
    await deleteJob(id);
    setJobs(prevState => prevState.filter(job => job.id !== id))
  }

  return (
    <Switch>
      <Route exact path='/bartenders'>
        <Bartenders bartenders={bartenders} currentUser={currentUser}/>
      </Route>
      <Route exact path='/bartenders/:id'>
        <BartenderDetail bartenders={bartenders} currentUser={currentUser}/>
      </Route>
      {/* <Route exact path='/bartenders/:id/create_profile'>
        <BartenderProfileForm bartenders={bartenders} handleCreateBartender={handleCreateBartender}/>
      </Route> */}
      {/* <Route exact path='/bartenders/:id/edit_profile'>
        <BartenderProfileForm bartenders={bartenders} handleEditBartender={handleEditBartender}/>
      </Route> */}
      <Route exact path='/bartenders/:bartender_id/jobs'>
        <BartenderJobs currentBartender={currentBartender} jobs={jobs} handleDeleteJob={handleDeleteJob}/>
      </Route>
      <Route exact path='/users/user_:id/jobs/new'>
        <JobForm currentUser={currentUser} jobs={jobs} handleCreateJob={handleCreateJob}/>
      </Route>
      {/* <Route exact path='/users/:user_id/jobs'>
        <UserJobs currentUser={currentUser} jobs={jobs} handleEditJob={handleEditJob} handleDeleteJob={handleDeleteJob}/>
      </Route> */}
      {/* <Route exact path='/jobs/:id'>
        <Confirmation currentUser={currentUser} jobs={jobs}/>
      </Route> */}
    </Switch>
  )
}


