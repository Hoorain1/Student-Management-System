import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SubAssignment = () => {
  return (
    <div>
        <div className="card mb-3" style={{width: '55rem'}}>
          <div className="card-body">
            <h5 className="card-title">Assignment # 1</h5>
            <p className="card-text">One point solution for total educational institute management
Reflect your Institute unique character
Helps build image of a modern techno savvy institution
Reduce papers/files, save environment and money
Run it on your intranet or internet
Platform independent i.e. run on Windows, MAC and Linux
Cloud server ready architecture, host and use
More Secure & Powerful on Cloud Infrastructure
User friendly application interface, multiple themes
Engineered to be customization friendly
Enabled internet front-end for school portal
Secure and reliable, satisfy all modern security standards
Process depending on automation, not on people
Work flow automation
Online information available on finger tips</p>

        <Link to="/Student/Assignment1" className="btn btn-primary">  Assignment1 </Link>
          </div>


        </div>
        <div className="card text-center mb-3" style={{width: '55rem'}}>
          <div className="card-body">
            <h5 className="card-title">Assignment # 2</h5>
            <p className="card-text">One point solution for total educational institute management
Reflect your Institutes unique character
Helps build image of a modern techno savvy institution
Reduce papers/files, save environment and money
Run it on your intranet or internet
Platform independent i.e. run on Windows, MAC and Linux
Cloud server ready architecture, host and use
More Secure & Powerful on Cloud Infrastructure
User friendly application interface, multiple themes
Engineered to be customization friendly
Enabled internet front-end for school portal
Secure and reliable, satisfy all modern security standards
Process depending on automation, not on people
Work flow automation
Online information available on finger tips</p>
            <Link to="/Student/Assignment2" className="btn btn-primary">Assignment2</Link>
          </div>
        </div>
        <div className="card text-end" style={{width: '55rem'}}>
          <div className="card-body">
            <h5 className="card-title">Assignment # 3</h5>
            <p className="card-text">One point solution for total educational institute management
Reflect your Institute unique character
Helps build image of a modern techno savvy institution
Reduce papers/files, save environment and money
Run it on your intranet or internet
Platform independent i.e. run on Windows, MAC and Linux
Cloud server ready architecture, host and use
More Secure & Powerful on Cloud Infrastructure
User friendly application interface, multiple themes
Engineered to be customization friendly
Enabled internet front-end for school portal
Secure and reliable, satisfy all modern security standards
Process depending on automation, not on people
Work flow automation
Online information available on finger tips</p>
            <Link to="/Student/assignment3" className="btn btn-primary">Assignment3</Link>
          </div>
        </div>
        <Outlet/>
      </div>

      
  )
}

export default SubAssignment
