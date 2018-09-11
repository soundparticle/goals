import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersGoals } from './user-reducers';
import { loadUsersGoals } from './user-actions';
import User from './User';
import styles from './Users.css';

class Users extends PureComponent {
  
  static propTypes = {
    loadUsersGoals: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadUsersGoals();
  }

  render() {
    const { users } = this.props;
    return (
      <div className={styles.users}>
        <section className="users-header">
          <h3> Other Users Goals:</h3>
        </section>
        <ul className="users-list">
          {users.map(user => (
            <User
              key={user._id}
              user={user}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    users: getUsersGoals(state)
  }),
  { loadUsersGoals }
)(Users);