import "./Layout.css";
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
  console.log(props);
  const { currentUser, currentBartender, handleSignOutUser, handleSignOutBartender } = props;
  console.log(handleSignOutBartender);
  console.log(handleSignOutUser);
  // console.log(currentUser);
  // console.log(currentBartender);
  return (
    <div className="layout">
      <Navbar currentUser={currentUser} currentBartender={currentBartender} handleSignOutBartender={handleSignOutBartender} handleSignOutUser={handleSignOutUser}/>
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
