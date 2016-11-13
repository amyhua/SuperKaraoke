import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import cssModules from 'react-css-modules';
import styles from './LoginPage.scss';

// TODO: Facebook signin

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('submitted login');
    // TODO: real user auth.
    // Just log them in with fake profile for now
    // redirect to user /user/amy for now
    this.context.router.push('/user/amy');
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div className={styles.root}>
        <h1>Sign in</h1>
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Username"
              onChange={this.handleChangeEmail}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChangePassword}
            />
          </FormGroup>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
};

LoginPage.contextTypes = {
  router: React.PropTypes.object
};
