import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './login.css';

function Login() {
  const navigate = useHistory();
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
  const validEmail = regexp.test(email);

  const handlehange = (event) => {
    setEmail(event.target.value)
    setErrMsg('')
  }

  const handlehangePassWrd = (event) => {
    setPassword(event.target.value)
    setErrMsg('')
  }

  const handleSubmit = () => {
    if (validEmail === true && password !== '') {
        navigate.push('/home')
    } else {
      setErrMsg('Please enter valid email an password')
    }
  }

    return (
      <div className='container'>
          <div className='row login-row'>
              <div className='login-left-side .ping-col-6'>
                  <div className='login-food-img-wrapper'>
                      <img src="https://media.istockphoto.com/photos/home-cooking-classes-hands-of-a-woman-holding-a-mobile-phone-above-a-picture-id1301094972?b=1&k=20&m=1301094972&s=170667a&w=0&h=RghUo8y4fU4IBzuiVcrnoo8m-3deI1JnMEIZHBlTVNA=" 
                      alt="FoodImg" className='login-food-img' />
                  </div>
              </div>
              <div className='login-right-side .ping-col-6'>
                       <div className='text-center text-wrapper'>
                          <h1>Food World</h1>
                          <br />
                          <h4>Welcome Back</h4>
                          <br />
                          <p className='text-muted'>sign in with your email an password</p>
                       </div>
                  <div className='login-food-card-wrapper'>
                  <div className='card card1'>
                      <div className="login-food-card-input-wrapper">
                          <form onSubmit={handleSubmit}>
                          <input
                            className="login-food-card-input"
                            onChange={(event) => handlehange(event)}
                            type="email"
                            placeholder="Enter your email"
                          />
                          <br />
                          <input type="password" className="login-food-card-input" placeholder="Enter your password"
                          onChange={(event) => handlehangePassWrd(event)}
                           />
                           <div className='login-err-text'>{errMsg}</div>
                          <button type='submit' className='signBtn'>sign</button>
                          </form>
                      </div>
                      </div>
                  </div>                          
                         
              </div>

          </div>
        
      </div>
    );
  }
  
  export default Login;