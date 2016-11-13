import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import s from './UserProfilePage.scss';

export default (props) => {
  // spoof data for now
  const user = {
    firstName: 'Amy',
    lastName: 'Hua',
    imageUrl: 'https://avatars0.githubusercontent.com/u/3581705?v=3&s=460',
    stats: {
      sang: 101,
      status: 'Super Star'
    },
    accounts: [{
      provider: 'Apple Music'
    }, {
      provider: 'Spotify'
    }]
  };
  return (
    <div className={s.root}>
      <div className={s.preview}>
        <div className={s.imageWrapper}>
          <img src={user.imageUrl}/>
        </div>
        <div className={s.name}>
          {user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName}
        </div>
      </div>
    </div>
  );
};

// class UserProfilePage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className={styles.root}>
//         <h1>UserProfilePage {this.props.params.username}</h1>
//       </div>
//     );
//   }
// }

// // note: working fix on cssModules
// // https://github.com/gajus/react-css-modules/issues/147
// export default UserProfilePage;