import React from 'react';
import axios from 'axios';
import '../../css/kid.css';

class Kid extends React.Component{
  constructor(){
    super()
    this.state={
      variety:'',
      narration:'',
      picture:''
    }
  }
  componentWillMount(){
    console.log(this.props.params._id);
    axios.get(`http://localhost:4000/kids/${this.props.params._id}`)
    .then(res=>{this.setState({
      variety:res.data.kid.variety,
      narration:res.data.kid.narration,
      picture:`http://localhost:4000/${res.data.kid.picture}`
    })
  })
  }
  render(){
    console.log(this.state)
    return(
      <div className='kid_wrap'>
        <div>{this.state.variety}</div>
        <div>{this.state.narration}</div>
        <div className='kid_img_wrap'>
          <img src={this.state.picture} className='kid_img'/>
        </div>
      </div>
    )
  }
}

export default Kid;
