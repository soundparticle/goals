
import React, { Component, /*Fragment*/ } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { /*Route*/ Link } from 'react-router-dom';
import Error from './Error';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <header>
        <h1>Goal Tracker</h1>
        <nav>
          <h1><Link to="/">Home</Link></h1>
          <ul>
            <li>
              <Link to="/goals">My Goals</Link>
            </li>            
            <li>
              <Link to="/users">Other User Goals</Link>
            </li>            
          </ul>
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }

          {/* <Route path="/goals/:id" render={({ match: { url } }) => {
            return (
              <Fragment>
                &bsp;
                <Link to={`${url}/paragraph`}>paragraph view</Link>
                &bsp;
                <Link to={`${url}/list`}>list view</Link>
              </Fragment>            
            );
          }}/> */}
        </nav>
        { user && <span>Welcome {user.name}!</span> }
        <Error/>
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);