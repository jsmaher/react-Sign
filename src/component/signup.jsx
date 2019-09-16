import React from 'react'
import Navbar from './nevbar'
import Form from './form'
import Button from './button'

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            phone: ''

        }
    }


    render() {
        return (
            <div className='loginform'>
                <Navbar />
                <h3>SIGN UP</h3>

                <Form type="text" placeholder='Enter Name' onChange={(e) => this.setState({ name: e.target.value })} />
                <Form type="number" placeholder='Enter Phone ' onChange={(e) => this.setState({ phone: e.target.value })} />
                <Form type="email" placeholder='Enter Email' onChange={(e) => this.setState({ email: e.target.value })} />
                <Form type="password" placeholder='Enter password' onChange={(e) => this.setState({ password: e.target.value })} />
                <Button value="Signup" onClick={()=>this.props.userSignup(this.state)} />
            </div>
        )
    }
}