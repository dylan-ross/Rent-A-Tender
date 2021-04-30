import "./Layout.css"
import Navbar from '../navbar/Navbar';


const Layout = (props) => {
  console.log(props)
  const { currentUser, currentBartender } = props
  console.log(currentUser)
  console.log(currentBartender)
  return(
  <div className='layout'>
      <Navbar currentUser={currentUser} currentBartender={currentBartender}/>
      <div className="layout-children">
          {props.children}
      </div>
    </div>
  )
}

export default Layout;