import { useContext, useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const user = true;
  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="logo.png" alt="" />
            <span>Estate-Easy</span>
          </a>
          <a href="/">Home</a>
          <a href="/about">Author</a>
          <a href="/contact">Contact</a>
          <a href="/list">Properties</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">Sign up</a>
            </>
          )}
          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={()=>{setOpen(!open)}}/> 
          </div>
          <div className={open ? "menu active": "menu"}>
          <a href="">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/list">Properties</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;