import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props;

    return (
      <li>
        <section>
          <p>{user.name}</p>
          <p>Completed Goals: {user.completed}</p>
          <p>Total Goals: {user.total}</p>
        </section>
      </li>
    );
  }

}

export default User;
