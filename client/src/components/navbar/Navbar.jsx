import "./Navbar.css"  
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { currentBartender, currentUser, handleSignOutBartender, handleSignOutUser } = props;
  console.log(props)
  // console.log(handleSignOutBartender)
  // console.log(handleSignOutUser)
  // console.log(currentBartender)
  // console.log(currentUser)
  return (
    <div className="nav">
      <header>
        <Link to='/'><h1>Rent-A-Tender</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleSignOutUser}>Logout</button>
            </>
            :
            <Link to='/user_signin'>Sign In / Sign Up</Link>
        }
   
        {
          currentBartender ?
            <>
              <p>{currentBartender.name}</p>
              <button onClick={handleSignOutBartender}>Logout</button>
            </>
            :
            <Link to='/bartender_signin'>Bartend</Link>
        }
        {/* {
          currentUser &&
          <>
            <Link to='/foods'>Foods</Link>
            <Link to='/flavors'>Flavors</Link>
          </>
        } */}
      </header>
      {props.children}
    </div>
  )
}