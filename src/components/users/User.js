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
        <section className="completed-container">
          <p className="completed">{user.name} has completed {user.completed} out of {user.total} goals.</p>
        </section>
      </li>
    );
  }

}

export default User;
