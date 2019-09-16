import React from 'react';


export default class Nevbar extends React.Component {
  render() {
    return (


      <div>




        <div className="nvbar">

          <nav>
            <a href="#!" className="brand-logo">React Auth</a>
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
            <ul className="right hide-on-med-and-down">
            <li><a href="mobile.html">{this.props.email}</a></li>             
              <li><a href="mobile.html">{this.props.btn}</a></li>
            </ul>
          </nav>
        </div>


      </div>


    )
  }
}