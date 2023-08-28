import { Link, Outlet } from 'react-router-dom';


const Root = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          School Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                Home
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Admin">
                Admin
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link active" to="/Teacher">
                Teacher
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/Student">
                 Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Login/Logout
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/Login">Log in</Link></li>
          <li><Link className="dropdown-item" to="/Signup">Sign Up</Link></li>
          <li><Link className="dropdown-item" to="/Logout">Log Out</Link></li>   
        </ul>
      </div>
    </nav> 
<div className="container">
  <Outlet />
</div>





</>
);
};

export default Root;