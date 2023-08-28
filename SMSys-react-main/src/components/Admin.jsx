import React from 'react'
import image from '../assets/img1.jpg'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="card text-center">
    <div className="card-header">
      Admin Panel
    </div>
    <div className="card-body">
      <h5 className="card-title">A Complete, End-to-End Solution for your Institute</h5>
      <p className="card-text">eSchool is a Complete, end-to-end Solution for your Institute (School, College, University, Academy, Coaching Center, etc). eSchool is an Online, Web/Cloud based System which enables you to manage your School efficiently. Its not only simplifies and automate the routine tasks, but also provides you more control, visibility and reporting with future trends & analytics.</p>
      eSchool is a powerful educational system with all backend administration functions of the educational institute and online application to bring management, administration, parents, teachers and students on a common interactive platform. It significantly reduces staff time spent on administrative tasks, also helps to improve data consistency and efficiency.

eSchool, a product of SW3 Solutions, is a result of our years of research in local education sector. We have developed this system in a very efficient manner so that we can customize it easily for any educational institute's specific requirements. We are working on few new add-on modules keeping in view the future needs of education sector.
<p>
      <a href="/Teacher" className="btn btn-primary">Teacher</a></p>
<h6 className="card-title">A  better & easy way to learn as student</h6>
<p className="card-text">  Hub of learning   </p>
      <p>
      <a href="/Student" className="btn btn-primary">Student</a></p>
      <div className='img1'>
    <img src={image} alt="img1" />
</div>
    </div>
  </div>





  )
}

export default Admin
