import React from 'react';
import axios from 'axios';

class NewKid extends React.Component{
  constructor(){
    super()
    this.state = {
      image:''
    }
  }
  handleSubmit(event){
    event.preventDefault()
    let API_URL = 'http://localhost:4000';
    let formData = new FormData()
    let variety = this.refs.variety.value.trim()
    let narration = this.refs.narration.value.trim()
    let picture = this.state.file
    console.log(this.state.file)

    formData.append('variety', variety)
    formData.append('narration', narration)
    formData.append('picture', picture)
    console.log("hello",picture )

    axios.post(`${API_URL}/kids`, formData)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        if(res.data.error !== undefined) alert(res.data.error)
        // browserHistory.push('/')
      }).catch(error =>{
        console.log(error)
      })
  }
  handleChange(event){
    const file = event.target.files[0]
    console.log(file)
    if (!file.type.match('image.*')) {
      alert('请上传图片')
    } else {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.setState({
          image: event.target.result,
          file: file
        })
      }

      reader.readAsDataURL(file)
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className='newkid_form'>
          <input type = 'text' ref='variety'/>
          <input type = 'text' ref='narration'/>
          <input type='file' onChange={this.handleChange.bind(this)}/>
          { this.state.image !== '' ? <img src={this.state.image} /> : ''}
          <div className='action'>
              <button type='submit' className='button'>保存</button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewKid;
