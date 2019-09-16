import React from 'react';
import Navbar from './nevbar'
import Button from './button'



export default class Home extends React.Component{
    render(){
        return(
            <div>
        <Navbar btn={<Button value="log out" />} email={this.props.email}/>

            </div>
        )
    }
}