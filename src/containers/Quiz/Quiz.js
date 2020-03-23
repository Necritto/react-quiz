import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    quiz: [
      {
        question: 'Is it a question?',
        rightAnswerId: 1,
        answers: [
          { text: 'Question 1', id: 1 },
          { text: 'Question 2', id: 2 },
          { text: 'Question 3', id: 3 },
          { text: 'Question 4', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log('Answer Id:', answerId);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions!</h1>
          <ActiveQuiz
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
