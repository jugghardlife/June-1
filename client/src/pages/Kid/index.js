import React from 'react';
import axios from 'axios';
import '../../css/kid.css';

class Kid extends React.Component{
  constructor(){
    super()
    this.state={
      Variety:'',
      narration:'',
      picture:''
    }
  }
  componentWillMount(){
    console.log(this.props.params._id);
    axios.get(`http://localhost:4000/kids/${this.props.params._id}`)
    .then(res=>{this.setState({
      Variety:res.data.kid.Variety,
      narration:res.data.kid.narration,
      picture:`http://localhost:4000/${res.data.kid.picture}`
    })
  })
  }
  render(){
    console.log(this.state)
    return(
      <div className='kid_wrap'>
        <div>{this.state.Variety}</div>
        <div>{this.state.narration}</div>
        <div className='kid_img_wrap'>
          <img src={this.state.picture} className='kid_img'/>
        </div>
      </div>
    )
  }
}

export default Kid;
