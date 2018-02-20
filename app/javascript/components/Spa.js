import React from 'react'
import Header from './Header'
import Banner from './Banner'
import AboutMe from './AboutMe'

export default class Spa extends React.Component {
  render(){
    return <div>
            <Header />
            <Banner/>
            <AboutMe/>
          </div>
  }
}
