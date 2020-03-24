import React from 'react'
import classes from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>&nbsp;
          How?
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>2.</strong>&nbsp;
          How?
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>1 of 2 right</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
