import React from 'react'
import '../components/login.css';


function Login() {
  return (
    <div className='wrapper'>
        <div className='container main' >
            <div className='row'>
                <div className='col-md-6 side-image'>
                  <img src='' alt=''/> 
                  <div className='text'>
                     <p>
                        "Join the community of developers"
                     </p>
                  </div>
                </div>
                <div className='col-md-6 right'>
                    <div className='input-box'>
                        <header>Login</header>
                        <div className='input-field' >
                           <input type="text" className='input' id='email' required autoComplete='off' />
                           <label for="email" >Email</label>
                        </div>
                        <div className='input-field' >
                           <input type="password" className='input' id='password' required />
                           <label for="password" >Password</label>
                        </div>
                        <div className='input-field' >
                           <input type="submit" className='submit' value='Login'/>
                        </div>
                        <div className='signin' >
                          <span>
                             I am not registered<br/>
                            <a href='#/register' >Sign in here</a>
                          </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Login