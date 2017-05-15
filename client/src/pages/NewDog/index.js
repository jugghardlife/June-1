import React from 'react';
import axios from 'axios';

class Dog extends React.Component{
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
    let name = this.refs.name.value.trim()
    let age = this.refs.age.value.trim()
    let gender = this.refs.gender.value.trim()
    let kid = this.refs.kid.value.trim()
    let picture = this.state.file
    console.log(this.state.file)
    console.log(name)
    console.log(age)
    console.log(gender)

    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
    formData.append('kid', kid)
    formData.append('picture', picture)
    console.log("hello",picture )

    axios.post(`${API_URL}/dogs/newdog`, formData)
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
        <form onSubmit={this.handleSubmit.bind(this)} className='newdog_form'>
          <input type = 'text' ref='name'/>
          <input type = 'text' ref='age'/>
          <input type = 'text' ref='gender'/>
          <input type = 'text' ref='kid'/>
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

export default Dog;
