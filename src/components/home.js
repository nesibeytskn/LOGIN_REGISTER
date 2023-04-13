import React from 'react'
import Login from './login'

function Home() {

    const onLoginBtn = () => {

        window.location.href = '#/login'
    }

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
                    <div className='input-field' >
            
                           <button type="button" className='submit' value='Login' onClick={onLoginBtn}>Login</button>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Home