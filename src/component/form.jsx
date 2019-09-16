import React from 'react';
// import './App.css';



export default  class Form extends React.Component{
    render(){

return(

<div>




<input id="inputs" type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}/>

</div>


)



    }
}