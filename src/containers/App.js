import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import './App.scss'
import { promiseCatch } from 'scripts/utils'

import { getParameterByName } from 'sources/utils'
import { login } from 'actions'
import { settings } from 'sources/index'

import Nav from 'components/Nav'
import HotPageContainer from 'containers/HotPageContainer'
import MePageContainer from 'containers/MePageContainer'
import UsersPageContainer from 'containers/UsersPageContainer'

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log('re-config wx')
      // wx.config({
      //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //   appId: '', // 必填，公众号的唯一标识
      //   timestamp: , // 必填，生成签名的时间戳
      //   nonceStr: '', // 必填，生成签名的随机串
      //   signature: '',// 必填，签名，见附录1
      //   jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      // });
    }
  }

  render() {
    if (!this.props.myself.id) {
      return null
    }
    
    return (
      <div>
        <Route path="/" exact component={HotPageContainer}/>
        <Route path="/users" component={UsersPageContainer}/>
        <Route path="/me" component={MePageContainer}/>
        <Nav/>
      </div>
    )
  }
  
  componentDidMount() {
    if (!this.props.myself.id) {
      let code = getParameterByName('code')
      if (!code) {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${settings.appId}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=${settings.scope}&state=STATE#wechat_redirect`
      } else {
        this.props.loginIn(code)
      }
    }
  }
}

const mapState = state => ({
  myself: state.myself
})

const mapDispatch = dispatch => ({
  loginIn(code) {
    return dispatch(login(code))
      .catch(promiseCatch)
  }
})

export default connect(mapState, mapDispatch)(App)