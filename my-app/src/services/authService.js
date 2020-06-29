import axios from 'axios'

const API_URL = 'http:///'

class AuthService {

  login(userName, password) {
    if(userName === "Abhishek" && password === "123456789"){
localStorage.setItem('userName',userName)
      return true;}
else return false;
  }

  logout() {
    localStorage.removeItem('userName')
  }

  register(userName, email, password) {
    return axios.post(API_URL + 'signup', {
      userName,
      email,
      password
    })
  }

  getCurrentUserToken() {
    return localStorage.getItem('userName')
  }

  // Commented out after adding new get username api
  // getCurrentUserName() {
  //   return localStorage.getItem('userName')
  // }

}

export default new AuthService()