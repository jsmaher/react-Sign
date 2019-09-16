import React from 'react';
import './App.css';
import Navbar from './component/nevbar.jsx'
import Home from './component/Home'

import Login from './component/login.jsx'
import Signup from './component/signup'
import { signup,login } from './component/Functions/function.jsx'
import { async } from 'q';


// import {funct} from '.functions/function'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      login: false,
      signup : false
    }
  }

  login = async (data) => {
    let user = await login(data)
    this.setState({
      email: user.email,
      login: true
    })
  }

  userSignup = async (data)=>{
    let user = await signup(data)
    this.setState({
      signup:true
    })

   
  }

  render() {

    return (
      <div>
      <center>
        {
          this.state.login ? <Home email = {this.state.email} /> : 
          this.state.signup ? 
          <div>
          <Login func={this.login}  />
          <p onClick={()=>this.setState({signup:false})}>Create new account</p>
          </div>
          :
          <div>
          <Signup userSignup = {this.userSignup} />
          <p onClick={()=>this.setState({signup:true})}>Already have account ?</p>

          </div>
        }

        </center>
      </div>


    )
  }
}
export default App;