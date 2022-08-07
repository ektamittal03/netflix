import "./navbar.css" ;
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
  return (
    <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
      
          <SearchIcon classname="icons"/>
          <span>KIDS</span>
          <NotificationsIcon classname="icons"/>
          <img src="https://thumbs.dreamstime.com/b/flowers-4999705.jpg" alt="" />
          <div classname="profile" >
          <ArrowDropDownIcon classname="icons"/>
          <div classname="options">
            <span>Settings</span>
            <span>Logout</span>

          </div>
          </div>

          </div>
          </div>
  );
}

export default Navbar