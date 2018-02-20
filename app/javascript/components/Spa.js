import React from 'react'
import Header from './Header'
import Banner from './Banner.js.erb'
// import Header from './Header'
export default class SPA extends React.Component {
  render(){
    return <div>
            <Header />
            <Banner/>
          </div>
  }
}
