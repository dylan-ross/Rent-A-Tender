import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserSignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleSignInUser } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSignInUser(formData)
    }}>
      <h3>Sign In</h3>
        <input
          type='text'
          name='username'
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
      <br />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      <br />
      <Link to='/user_signup'>Sign Up</Link>
      <button>Submit</button>
    </form>
  )
}