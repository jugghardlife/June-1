import axios from 'axios';
import jwtDecode from 'jwt-decode';

export function login(user){
  return dispatch => {
    axios.post('http://localhost:4000/login/',user)
    .then((res) => {
      console.log('login',res)
      const token = res.data.token
      sessionStorage.setItem('jwtToken',token)
      console.log('jwtDecode',jwtDecode(token))
      dispatch({type:'login',user:jwtDecode(token).email})
    })
    .catch((error) => console.log(error))
  }
}

export function singup(user) {
  return dispatch => {
    console.log("user",user)
    axios.post('http://localhost:4000/signup/',user)
    .then((res) => {
      console.log('singup',res)
      }
    )
  }
}

export function fetchUser() {
  return dispatch => {
    if(sessionStorage.getItem("jwtToken")){
      let userId = jwtDecode(sessionStorage.getItem("jwtToken"))._id;
      console.log("id",userId)
      if (userId) {
        console.log(userId)
        axios.get(`http://localhost:4000/user/${userId}`)
        .then((res) => {
           dispatch({type: 'LOAD_USER', user: res.data.user});
        }).catch((err) => console.log(err));
      }
    }
  }
}
