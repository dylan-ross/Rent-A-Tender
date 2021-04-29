import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BartenderSignIn(props) {
  console.log(props)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { name, password } = formData;
  const { handleSignInBartender, currentBartender } = props;
  console.log(currentBartender)
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
      handleSignInBartender(formData)
    }}>
      <h3>Bartender Sign In</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/bartender_signup'>Sign Up</Link>
      <Link to={`/bartenders/${currentBartender.id}/jobs`}><button>Submit</button></Link>
    </form>
  )
}