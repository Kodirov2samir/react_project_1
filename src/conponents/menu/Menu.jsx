// css
import "./Menu.css";
// images
import guy from "../../assets/guy.jpg";
// Icons
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";

function Menu({bool}) {
  
 
  return (
    <div className={bool ? "site-menu" :"menu-shortened"}>
      <h1 className="main-title">CRUD OPERATIONS</h1>
      <div className="person-info">
        <img className="guy-img" src={guy} alt="" />
        <h2 className="name">Karthi Madesh</h2>
        <p className="job">Admin</p>
        <nav>
          <ul className={bool ? "menu-list":"list-short"}>
            <li className="menu-list-item">
              <a href="#">
                <span>
                  <IoHomeOutline />
                </span>
                <h3 className={bool ? "item-title":"disappear"}>Home</h3>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#">
                <span>
                  <CiBookmark/>
                </span>
                <h3 className={bool ? "item-title" :"disappear"}>Course</h3>
              </a>
            </li>
            <li className="menu-list-item chosen">
              <a href="#">
                <span>
                  <RiGraduationCapLine/>
                </span>
                <h3 className={bool ? "item-title":"disappear"}>Students</h3>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#">
                <span>
                  <RiMoneyDollarBoxLine/>
                </span>
                <h3 className={bool ? "item-title":"disappear"}>Payment</h3>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#">
                <span>
                  <BsFileEarmarkBarGraph/>
                </span>
                <h3 className={bool ? "item-title":"disappear"}>Report</h3>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#">
                <span>
                  <GiSettingsKnobs/>
                </span>
                <h3 className={bool ? "item-title":"disappear"}>Settings</h3>
              </a>
            </li>
          </ul>
        </nav>
        <div className={bool?'leave':"leave-short"}>
          <h3>Log out</h3>
          <span><CiLogout/></span>
        </div>
      </div>
     
    </div>
  );
}
export default Menu;
