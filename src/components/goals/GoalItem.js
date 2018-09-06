import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoalById } from './reducers';
import { Link } from 'react-router-dom';

class GoalItem extends PureComponent {

  static propTypes = {
    goal: PropTypes.object
  };

  render() {
    const { goal } = this.props;

    return (
      <li>
        <Link to={`/goals/${goal._id}`}>{goal.name}</Link>
      </li>
    );
  }
}

export default connect(
  (state, { id }) => ({
    goal: getGoalById(state, id)
  }),
  null
)(GoalItem);