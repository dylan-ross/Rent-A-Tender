import './App.css';
import { useEffect, useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout1';
import UserSignIn from './screens/userSignIn/UserSignIn';
import UserSignUp from './screens/userSignUp/UserSignUp';
import BartenderSignIn from './screens/bartenderSignIn/BartenderSignIn';
import BartenderSignUp from './screens/bartenderSignUp/BartenderSignUp1';
import Home from './screens/home/Home'
import { signInUser, signUpUser, removeToken, verifyUser, signInBartender, signUpBartender, verifyBartender } from '../src/services/auth';
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
  }

  const handleSignInBartender = async (formData) => {
    const bartenderData = await signInBartender(formData);
    setCurrentBartender(bartenderData)
    history.push('/')
  }

  const handleSignUpBartender = async (formData) => {
    const bartenderData = await signUpBartender(formData);
    setCurrentBartender(bartenderData)
    history.push('/')
  }

  const handleSignOutBartender = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }


  return (
    <div className="App">
      <Layout currentBartender={setCurrentBartender} currentUser={currentUser} handleSignOutBartender={handleSignOutBartender} handleSignOutUser={handleSignOutUser}>
        <Switch>
          <Route exact path='/user_signin'>
            <UserSignIn handleSignInUser={handleSignInUser} />
          </Route>
          <Route exact path='/user_signup'>
            <UserSignUp handleSignUpUser={handleSignUpUser} />
          </Route>
          <Route exact path='/bartender_signin'>
            <BartenderSignIn handleSignInBartender={handleSignInBartender} />
          </Route>
          <Route exact path='/bartender_signup'>
            <BartenderSignUp handleSignUpBartender={handleSignUpBartender} />
          </Route>
          <Route exact path='/'> 
            <Home/>
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
