import React from 'react';
import {Link} from 'react-router';
import '../css/header.css';

class Header extends React.Component{
  render(){
    return(
      <div className='wrap'>
        <div className='header_top' >
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <input className='header_search'/>
          </div>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        <div className='header_bottom'>
          <div className='kid'>
            <Link to='/'>收养Kid</Link>
          </div>
          <div className='kid'>
            <Link to='/'>寻找Kid</Link>
          </div>
          <div className='kid'>
            <Link to='/'>谈论Kid</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
