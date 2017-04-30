import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import styles from './UsersPage.scss'

import EntityList from 'components/EntityList'
import UserItemContainer from 'containers/UserItemContainer'
import UserMetaContainer from 'containers/UserMetaContainer'
import Button from 'components/Button'
import FilterQuestionList from 'containers/FilterQuestionList'
import PageLoading from 'components/PageLoading'

class UsersPage extends React.Component {
  render() {
    return (
      <div className={styles.fullscreen}>
        <Switch>
          <Route path={`/users/${this.props.myself.id}`}>
            <Redirect to="/me"/>
          </Route>
          <Route path="/users/:id" render={props =>
            <UserPage {...props} addQuestion={this.props.addQuestion}/>
          }/>
          <Route path="/users">
            <EntityList entityIds={this.props.page.list} entity={UserItemContainer} fullscreen/>
          </Route>
        </Switch>
        <PageLoading isLoading={this.props.page.loadingNum > 0}/>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.page.page === 0) {
      this.props.appendData()
    }
  }
}

class UserPage extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      questionValue: ''
    }
  }
  
  handleChange = e => {
    if (e.target.value.length < 61) {
      this.setState({
        questionValue: e.target.value
      })
    }
  }
  
  handleSubmit = e => {
    this.props.addQuestion(this.state.questionValue, this.props.match.params.id)
      .then(() => {
      debugger
      })
  }
  
  render() {
    return (
      <div>
        <UserMetaContainer id={this.props.match.params.id} only/>
        <div className={styles['ask-container']}>
          <textarea
            id={styles.question}
            placeholder="在此输入你的问题。如果回答被别人收听，你将得到收入的一半。若超过48小时未被回答，费用会退回你的微信钱包。"
            value={this.state.questionValue}
            onChange={this.handleChange}
          />
          <Button
            size="md"
            onClick={this.handleSubmit}
          >
            ¥1 提个问题
          </Button>
        </div>
        <FilterQuestionList filter="asked" type={1} userId={this.props.match.params.id}/>
      </div>
    )
  }
}

export default UsersPage