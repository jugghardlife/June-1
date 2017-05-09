import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import '../../css/home.css';

class Home extends React.Component{
  constructor(){
    super()
    this.state={
      
    }
  }
  componentWillMount() {
    axios.get('http://localhost:4000')
    .then(res=>{
      this.setState()
    })
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

export default Home;
