import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends PureComponent {
  state = {
    goal: 'exercise',
    completed: false,
    // author: user._id
  };

  handleChange = ({ target }) => {
    const { goal, value } = target;
    this.setState({ [goal]: value });
  }

  render() {
    const { goal, completed } = this.state;

    return (
      <section>
        <p>
          goal: <input name="goal" value={goal} onChange={this.handleChange}/>
        </p>
        <p>
          completed: <input name="completed" value={completed} onChange={this.handleChange}/>
        </p>

        <ChildComponent name={goal}/>

        <WithRouterDisplay>
          <span>{goal}</span>
        </WithRouterDisplay>

        <Tabs>
          <TabList>
            <Tab>Goal 1</Tab>
            <Tab>Goal 2</Tab>
            <Tab>Goal 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          
          <TabPanel>
            <h2>New Tab</h2>
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

class Display extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  };

  render() {
    const { children, location } = this.props;
    // console.log(children);
    return (
      <div>
        <h3>Display Component</h3>
        {children}
        <div>{location.pathname}</div>
      </div>
    );
  }
}

const WithRouterDisplay = withRouter(Display);

class ChildComponent extends PureComponent {
  static propTypes = {
    goal: PropTypes.string
  };

  render() {
    const { goal } = this.props;
    // console.log('ChildComponent render()');
    return (
      <p>
        Goal: {goal}
      </p>
    );
  }
}

export default Home;