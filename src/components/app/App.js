
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Auth from '../auth/Auth';
import GoalList from '../goals/GoalList';
import GoalDetail from '../goals/GoalDetail';
import AddGoal from '../goals/AddGoal';
import styles from './App.css';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            { checkedAuth &&
            <Switch>
              <Route exact path="/" render={() => <h2>I&#39m Home!</h2>}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/goals" component={GoalList}/>
              <PrivateRoute path="/goals/new" component={AddGoal}/>

              <PrivateRoute path="/goals/:id" component={GoalDetail}/>
              <Redirect to="/"/>
            </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);