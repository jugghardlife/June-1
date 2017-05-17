import React from 'react';
import '../../css/login.css';
import { login } from '../../redux/actions/accountActions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Login extends React.Component{
  handleSubmit(event){
    event.preventDefault();
    let _user = {
      email:this.refs.email.value,
      password:this.refs.password.value
    }
    console.log(_user)
    this.props.login(_user)
    browserHistory.push(`/`)
  }
  render(){
    return(
      <div className='login_wrap'>
        <div>主人，永远是100分</div>
        <form onSubmit={this.handleSubmit.bind(this)} className='login_form'>
          <div>
            <span>用户名</span>
            <input ref='email'/>
          </div>
          <div>
            <span>密码</span>
            <input type='password' ref='password'/>
          </div>
          <div>
            <input type='submit' value='登陆'/>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = () => ({});

export default connect(mapStateToProps, { login } )(Login);
