import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Teacher = () => {
  return (

<>
<div className="card text-bg-primary mb-3" style={{maxWidth: '248rem'}}>
<div className="card-body">
        <h3 className="card-title">Teacher Panel</h3>
      </div>

    <div/>
<div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Mangement</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/Signup" className="btn btn-dark" position="center">singup</a><p/>
              <p>
              <a href="/Login" className="btn btn-warning">Login</a></p>
              <a href="/Logout" className="btn btn-light">Logout</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Student Mangement</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
             <p> <Link to="/Teacher/add_student" className="btn btn-success">Add Student</Link></p>
              <Link to="/Teacher/add_assignment" className="btn btn-danger">Add Assignment</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Outlet/>
      </>
  )
}

export default Teacher
