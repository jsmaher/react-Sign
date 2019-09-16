import React from 'react'
import Navbar from './nevbar'
import Form from './form'
import Button from './button'

export default class Login extends React.Component{
constructor(){
    super();
    this.state={
        email:"",
        password:""
    }
}
    render(){
        console.log(this.state);
        return(
            <div className='loginform'>
                <Navbar />
                <h3>LOG IN</h3>
                <Form type="email"  placeholder='Enter Email' onChange={(e)=>this.setState({email:e.target.value})}/>
                <Form type="password"  placeholder='Enter password' onChange={(e)=>this.setState({password:e.target.value})} />
                <Button value="login" onClick={()=>this.props.func(this.state)}/>
            </div>
        )
    }
}