import React from 'react';
import {Link} from 'react-router';
import '../css/header.css';

class Header extends React.Component{
  render(){
    return(
      <div className='wrap'>
        <div className='header_top' >
          <Link to='/' className='header_logo'></Link>
          <div>
            <div></div>
            <input className='header_search'/>
          </div>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        <div className='header_bottom'>
          <div className='unforgettable'>我的一生只有你！</div>
          <div className='nav'>
          <div className='header_nav'>
            <Link to='/'>收养Kid</Link>
          </div>
          <div className='header_nav'>
            <Link to='/'>寻找Kid</Link>
          </div>
          <div className='header_nav'>
            <Link to='/'>谈论Kid</Link>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
