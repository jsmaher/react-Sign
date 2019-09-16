import React from 'react';


export default class Button extends React.Component {

render(){


return(

<div>
<a onClick={this.props.onClick} className="waves-effect waves-light btn">{this.props.value}</a>
{/* <input type="button"  value='Submit'/> */}

</div>

)

}



}