import React from 'react'
export default class Header extends React.Component {
  render(){
    return <header id="header">
            <div className="menu">
              <i className="fa fa-bars"></i>
              <div className="menuList">
                <ul>
                  <li><a href="#about">O mnie</a></li>
                  <li><a href="#architecture">Architektura</a></li>
                  <li><a href="#landscape">Krajobrazy</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                </ul>
              </div>
            </div>
          </header>
  }
}
