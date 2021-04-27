import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Bartenders from '../screens/bartenders/Bartenders';
import BartenderDetail from '../screens/bartenderDetail/BartenderDetail';
import BartenderProfileForm from '../screens/bartenderProfileForm/bartenderProfileForm';
import BartenderJobs from '../screens/bartenderJobs/BartenderJobs';
import Confirmation from '../screens/confirmation/Confirmation';
import UserEvents from '../screens/userEvents/UserEvents'
import { getAllJobs, postJob, putJob, deleteJob, } from '../services/jobs'


