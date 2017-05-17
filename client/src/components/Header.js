import React from 'react';
import {Link} from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';
import '../css/header.css';

class Header extends React.Component{
  render(){
    let currentUser = store.getState().account.currentUser;
    return(
      <div className='wrap'>
        <div className='header_top' >
          <Link to='/' className='header_logo'></Link>
          <div>
            <div></div>
            <input className='header_search'/>
          </div>
          <div className='waha'>
            <Link to='/login' className='login'>Login</Link>
            <Link to='/signup' className='signup'>Signup</Link>
            { this.props.currentUser.email }
          </div>
        </div>
        <div className='header_bottom'>
          <Link to='/' className='unforgettable'>我的一生只有你！</Link>
          <div className='nav'>
          <div className='header_nav'>
            <Link to='/'>收养Kid</Link>
          </div>
          <div className='header_nav'>
            <Link to='/'>寻找Kid</Link>
          </div>
          <div className='header_nav'>
            <Link to='/'>关爱Kid</Link>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
});

export default connect(mapStateToProps)(Header);
