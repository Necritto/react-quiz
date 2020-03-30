import React, { Component } from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { createControl } from '../../form/formShared'
import Select from '../../components/UI/Select/Select'

function createOptionControl(number) {
  return createControl({
    label: `Option ${number}`,
    errorMessage: 'Value cannot be empty!'
  }, { required: true })
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Enter a question',
      errorMessage: 'The question cannot be empty!'
    }, { required: true }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  onSubmitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (value, controlName) => {

  }

  selectChangeHandler = e => {
    this.setState({
      rightAnswerId: +e.target.value
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            errorMessage={control.errorMessage}
            shouldValidate={!!control.validation}
            onChange={e => this.changeHandler(e.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </React.Fragment>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>

          <form onSubmit={this.onSubmitHandler}>

            {this.renderControls()}

            <Select
              label="Choose the correct answer"
              value={this.state.rightAnswerId}
              onChange={this.selectChangeHandler}
              options={[
                { text: 1, value: 1 },
                { text: 2, value: 2 },
                { text: 3, value: 3 },
                { text: 4, value: 4 }
              ]}
            />

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Add question
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Create quiz
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
