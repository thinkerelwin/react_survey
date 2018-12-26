import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './DashBoard'
import SurveyNew from './surveys/SurveyNew'

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.fetchUser()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/surveys" component={ Dashboard } />
          <Route path="/surveys/new" component={ SurveyNew } />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)