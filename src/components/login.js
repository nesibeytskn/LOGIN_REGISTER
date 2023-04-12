import {useState} from 'react'
import useApi from '../hooks/useApi'
import {connect, useDispatch} from 'react-redux'
import {SET_TOKEN} from '../redux/reducers/authReducer'

import '../components/login.css';

 


const Login = (props) =>{
   console.log('>>LOGIN PAGE PROPS ', props)

   const [email, setEmail] =useState('')
   const [password, setPassword] = useState ('')
   const api = useApi()

   const onLoginBtnClick = () => {
      const postData = {
         email, password,
      }
      console.log('>> POST DATA', postData)

      api.post(`auth/login`, postData)
      .then((response) => {
         console.log('>>RES', response)
         console.log('>>TOKEN', response.data.data.token)

         if (response.data.status === 'success'){
            localStorage.setItem('token', response.data.data.token)

            const action = {
               type: SET_TOKEN,
               payload:{
                  token: response.data.data.token
               },
            }
            props.dispatch(action)

            window.location.href = '/#'
         }else{
            alert ('')
         }
      })
      .catch((err) => {
         console.log('>>ERR', err)
         alert(err.response.data.errorMessage)
      })
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
                        <header>Login</header>
                        <div className='input-field' >
                           <input type="text" className='input' id='email' required autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                           <label for="email" >Email</label>
                        </div>
                        <div className='input-field' >
                           <input type="password" className='input' id='password' required onChange={(e)=> setPassword(e.target.value)} />
                           <label for="password" >Password</label>
                        </div>
                        <div className='input-field' >
                           <button type="button" className='submit' value='Login' onClick={onLoginBtnClick}>Login</button>
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