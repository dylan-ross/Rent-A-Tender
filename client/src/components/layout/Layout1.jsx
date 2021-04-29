import "./Layout.css"
import Navbar from '../navbar/Navbar1';


const Layout = (props) => (
  <div className='layout'>
      <Navbar />
      <div className="layout-children">
          {props.children}
      </div>
      
  </div>
)

export default Layout;