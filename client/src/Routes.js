import React from 'react';
import App from './components/App';
import Home from './pages/Home';
import Kid from './pages/Kid';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewKid from './pages/NewKid';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

class Routes extends React.Component{
  render(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/kid' component={Kid} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/newkid' component={NewKid} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Routes;