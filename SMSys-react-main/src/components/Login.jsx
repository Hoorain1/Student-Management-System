import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import { login } from './services/auth.service.js';



const Loginform = (props) => {
  const {email, setEmail} = useState ('');
  const [password,setPassword] = useState ('');

  // const handleSubmit = (e) => {
  //   e.preventDeafault ();
  //   console.log(email);
  // }
  const handleLogin = () => {

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

return (
  <form onSubmit={handleLogin} className="space-y-6" action="/" method="POST">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In To Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name={email} onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name={password} onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                           ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                           focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-sm">
                <Link to='/'></Link>
              </div>
              <p/>
          <div>
            <button
              type="Submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
        </div>   
        
        <p className="mt-10 text-center text-sm text-gray-500"
         onClick={( ) => props.onFormSwitch('Signup')}>
          Not Registered Yet  ? 
          <Link to='/signup'>Signup</Link>  
        </p>
      </div>
    </div>
  
    </form>
)
};

export default Loginform

