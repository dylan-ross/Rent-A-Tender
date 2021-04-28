  
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentBartender, currentUser, handleSignOutBartender, handleSignOutUser } = props;
  return (
    <div>
      <header>
        <h1>Rent-A-Tender</h1>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleSignOutUser}>Logout</button>
            </>
            :
            <Link to='/user_signin'>Login/Register</Link>
        }
        <hr />
        {
          currentBartender ?
            <>
              <p>{currentBartender.name}</p>
              <button onClick={handleSignOutBartender}>Logout</button>
            </>
            :
            <Link to='/bartender_signin'>Bartend</Link>
        }
        <hr />
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