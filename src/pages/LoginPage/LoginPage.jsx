import React, { Component } from 'react';

// TODO: Facebook signin

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username </label><input type="text" name="username"/>
          </div>
          <div>
            <label>Password </label><input type="password" name="password"/>
          </div>
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