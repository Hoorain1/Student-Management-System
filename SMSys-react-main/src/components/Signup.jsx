import React, { useState } from 'react'
import image3 from '../assets/pc.jpg'
import { Link } from 'react-router-dom';



const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setfirstName, setlastName] = useState('');

    const handleSignup = () => {

        let formData = new FormData();
        formData.append("email", email );
        formData.append("password", password);
    
        login(formData).then((data)=>{
    
          if(data.token){
            localStorage.setItem("token", data.token);
            navigate("/home");    
          }
        });
    
    
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

 return (
        <div className="card mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image3} className="img-fluid rounded-start" alt="pC" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Sign UP</h5>



              <div className="relative flex flex-col tet-center justify-center  min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
               
                <form onSubmit={handleSignup} className="mt-6" action='/login' method='POST'>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-center text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           First Name
                        </label>
                        <input
                            type="text"
                            value={name} onChange={(e) => setfirstName(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Last Name 
                        </label>
                        <input
                            type="text"
                            value={name} onChange={(e) => setlastName(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type= "password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type='Submit' className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" onClick={() => props.onFormSwitch('Login')}>
                            Signup
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700"
                   onClick={() => props.onFormSwitch('Login')} >
                    {" "}
                    Already have an account?{""}
                    <Link to="/login"
                        className="font-medium text-indigo-600 hover:underline"
                    >Login</Link>
                </p>
            </div>

            </div>








              <p className="card-text"></p>
              <p className="card-text"><small className="text-body-secondary"></small></p>
            </div>
          </div>
          </div>
          </div>





    );
};

export default Signup
