import React from 'react';
import { singup } from '../../redux/actions/accountActions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Signup extends React.Component{
  handleSubmit(event){
    event.preventDefault();
    console.log('hello')
    let _user = {
      email:this.refs.email.value,
      password:this.refs.password.value,
      admin:this.refs.admin.value
    }
    this.props.singup(_user)
    browserHistory.push(`/user`)
  }
  render(){
    return(
      <div className='singup_wrap'>
        <form onSubmit={this.handleSubmit.bind(this)} className='singup_form'>
          <div>
            <span>用户名</span>
            <input ref='email'/>
          </div>
          <div>
            <span>密码</span>
            <input type='password' ref='password'/>
          </div>
          <div>
            <span>管理员</span>
            <select name="admin" ref='admin'>
              <option  value="true">是</option>
              <option  value="false">否</option>
            </select>
          </div>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { singup } )(Signup);
