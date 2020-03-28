import React, { Component } from 'react'
import classes from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  onSubmitHandler = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Authorization</h1>
          <form className={classes.AuthForm} onSubmit={this.onSubmitHandler}>
            <Input
              label="Email"
              type="email"
            />
            <Input
              label="Password"
              type="password"
            />
            <Button type="success" onClick={this.loginHandler}>Sign in</Button>
            <Button type="primary" onClick={this.registerHandler}>Sign up</Button>
          </form>
        </div>
      </div>
    )
  }
}
