import './App.css';
import { useEffect, useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout1';
import UserSignIn from './screens/userSignIn/UserSignIn';
import UserSignUp from './screens/userSignUp/UserSignUp1';
import BartenderSignIn from './screens/bartenderSignIn/BartenderSignIn';
import BartenderSignUp from './screens/bartenderSignUp/BartenderSignUp1';
import Home from './screens/home/Home'
import { signInUser, signUpUser, verifyUser, removeToken } from '../src/services/auth';
import { signInBartender, signUpBartender, verifyBartender, removeBarToken } from '../src/services/bar_auth';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentBartender, setCurrentBartender] = useState([])
  const history = useHistory();

  useEffect(() => {
    const handleVerifyUser = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerifyUser()
  }, [])

  useEffect(() => {
    const handleVerifyBartender = async () => {
      const bartenderData = await verifyBartender();
      setCurrentBartender(bartenderData);
    }
    handleVerifyBartender()
  }, [])

  const handleSignInUser = async (formData) => {
    const userData = await signInUser(formData);
    setCurrentUser(userData)
    history.push('/')
  }

  const handleSignUpUser = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData)
    history.push('/')
  }


  const handleSignOutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  const handleSignInBartender = async (formData) => {
    const bartenderData = await signInBartender(formData);
    setCurrentBartender(bartenderData)
    history.push(`/bartenders/${bartenderData.id}/jobs`)
  }

  const handleSignUpBartender = async (formData) => {
    const bartenderData = await signUpBartender(formData);
    setCurrentBartender(bartenderData)
    history.push(`/bartenders/${bartenderData.id}/jobs`)
  }

  const handleSignOutBartender = () => {
    setCurrentBartender(null);
    localStorage.removeItem('authToken');
    removeBarToken();
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentBartender={currentBartender} currentUser={currentUser} handleSignOutBartender={handleSignOutBartender} handleSignOutUser={handleSignOutUser}>
        <Switch>
          <Route exact path='/user_signin'>
            <UserSignIn handleSignInUser={handleSignInUser} />
          </Route>
          <Route exact path='/user_signup'>
            <UserSignUp handleSignUpUser={handleSignUpUser} />
          </Route>
          <Route exact path='/bartender_signin'>
            <BartenderSignIn currentBartender={currentBartender} handleSignInBartender={handleSignInBartender} />
          </Route>
          <Route exact path='/bartender_signup'>
            <BartenderSignUp handleSignUpBartender={handleSignUpBartender} />
          </Route>
          <Route exact path='/'> 
            <Home currentUser={currentUser} currentBartender={currentBartender}/>
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} currentBartender={currentBartender} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
