import axios from 'axios';
import jwtDecode from 'jwt-decode';

export function login(user){
  return dispatch => {
    axios.post('http://localhost:4000/login',user)
    .then((res) => {
      console.log('login',res)
      const token = res.data.token
      sessionStorage.setItem('jwtToken',token)
      console.log(jwtDecode(token))
      dispatch({type:'login',user:jwtDecode(token)})
    })
    .catch((err) => console.log(err))
  }
}
