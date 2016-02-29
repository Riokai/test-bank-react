import { browserHistory } from 'react-router'
import getService from '../config/api'

class Auth {
  login(username, password) {
    fetch(getService('login'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res) => {
      return res.json()
    }).then(function(json) {
      console.log(json)
      if (json.errorCode === 10000) {
        alert(json.msg)
        localStorage.setItem('token', json.token)
        browserHistory.push('/dashboard')
      } else {
        alert(json.msg)
      }
    }).catch((e) => {
      console.log('error', e)
    })
  }
  // 退出登录
  logout() {
    localStorage.removeItem('token')

    browserHistory.push('/login')
  }

  isLogin() {
    let token = localStorage.getItem('token')

    return !!token
  }
}

export default new Auth()
