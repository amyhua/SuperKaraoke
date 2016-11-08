import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './UserProfilePage.sass';

class UserProfilePage extends Component {
  render() {
    return (
      <div styleName="root">
        <h1>UserProfilePage</h1>
      </div>
    );
  }
}

export default cssModules(UserProfilePage, styles);
