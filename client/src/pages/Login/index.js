import React from 'react';
import '../../css/login.css';

class Login extends React.Component{
  handleSubmit(event){
    event.preventDefault()
  }
  render(){
    return(
      <div className='login_wrap'>
        <div>主人，永远是100分</div>
        <form onSubmit={this.handleSubmit.bind(this)} className='login_form'>
          <div>
            <span>用户名</span>
            <input />
          </div>
          <div>
            <span>密码</span>
            <input type='password'/>
          </div>
          <div>
            <input type='submit' value='登陆'/>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
