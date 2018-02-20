import React from 'react';
import test from '../../assets/images/test.jpg';
export default class Banner extends React.Component {
  render(){
    return <img className='img-responsive' src={test} />
  }
}
