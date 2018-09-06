import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGoalList } from './reducers';
import { loadGoals } from './actions';
import GoalItem from './GoalItem';

class GoalList extends PureComponent {
  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    goals: PropTypes.array
  };

  componentDidMount() {
    this.props.loadGoals();
  }

  render() {
    const { goals } = this.props;

    return (
      <section>
        <Link to="/goals/new">Add a New Goal</Link>
        <ul>
          {goals.map(id => <GoalItem key={id} id={id}/>)}
        </ul>    
      </section>
    );
  }
}

export default connect(
  state => ({ goals: getGoalList(state) }),
  { loadGoals }
)(GoalList);