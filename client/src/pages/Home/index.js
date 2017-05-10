import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import '../../css/home.css';

class Home extends React.Component{
  constructor(){
    super()
    this.state={
      kid:[]
    }
  }
  componentWillMount() {
    axios.get('http://localhost:4000')
    .then(res=>{
      console.log(res)
      this.setState({ kid:res.data.kids })
    })
  }
  render(){
    let kid = this.state.kid.map((kid,i)=>{
      return (
        <div key={i} className='kid'>
          <img src={`http://localhost:4000/${kid.picture}`} className='kid_img'/>
          <div className='kid_bg'></div>
        </div>
      )
    })
    return(
      <div className='home_wrap'>
        {kid}
      </div>
    )
  }
}

export default Home;
