import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  // classical way to add state
  // constructor(props) {
  //   super(props)

  //   this.state = { new: true }
  // }
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}/>
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
  // take out destroyOnUnmount props to clear when user enter this route
})(SurveyNew)