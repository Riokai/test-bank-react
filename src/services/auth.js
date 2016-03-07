import { browserHistory } from 'react-router'
import getService from '../config/api'
import { post } from 'superagent'

class Auth {
  login(username, password) {

    post(getService('login'))
      .send({
        username: username,
        password: password
      })
      .end((err, res) => {
        if (err) console.log('login error:', err)

        if (res.body.errorCode === 10000) {
            // alert(res.body.msg)
            localStorage.setItem('token', res.body.token)
            browserHistory.push('/admin')
          } else {
            alert(res.body.msg)
          }
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
