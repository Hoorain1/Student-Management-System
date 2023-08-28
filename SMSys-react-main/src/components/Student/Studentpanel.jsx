import React from 'react'
import image6 from '../../assets/image6.jpg'
import { Link, Outlet } from 'react-router-dom'

const SubAssignment = () => {
  return (
    <>
    <div className="card" style={{maxWidth: '85vh'}}>
        <img src={image6} className="img-fluid rounded-start" alt="pC" />
        <div className="card-body">
          <h5 className="card-title">Student Panel</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
        <a href="/Signup" className="btn btn-dark" position="center">Singup</a><p/>
              
              <a href="/Login" className="btn btn-dark" position="center">Login</a><p/>
              
              <a href="/Logout" className="btn btn-dark" position="center">Logout</a><p/>
        </ul>
        <div className="card-body">
          <Link to="/Student/student_assignment" className="card-link">View Assignment</Link>
          <Link to="/Student/view_assignment" className="card-link">Submit Assignment</Link>
        </div>
      </div>
      <Outlet/>
      </>
  )
}

export default SubAssignment
