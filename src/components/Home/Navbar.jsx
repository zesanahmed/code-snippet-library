import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {

  const {logOut, user} = useAuth();

  const handleLogout = async () => {
    await logOut();

  }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/login"}>Login</Link></li>
              <li><Link to={"/registration"}>Registration</Link></li>
              <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Code Snippet</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              {
                !user && 
                <>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/registration"}>Registration</Link></li>
                </>
              }
              {
                user && 
                <>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                </>
              }
          </ul>
          
        </div>
        <div className="">
          {
            user && 
            <a onClick={handleLogout} className="btn">LogOut</a>
          }
          </div>
      </div>
    );
};

export default Navbar;