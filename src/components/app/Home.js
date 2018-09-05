import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends PureComponent {
  state = {
    subject: 'exercise',
    goalList: ['running, swimming']
  };

  handleChange = ({ target }) => {
    const { subject, value } = target;
    this.setState({ [subject]: value });
  }

  render() {
    const { subject, goalList } = this.state;

    return (
      <section>
        <p>
          subject: <input name="subject" value={subject} onChange={this.handleChange}/>
        </p>
        <p>
          goalList: <input name="goalList" value={goalList} onChange={this.handleChange}/>
        </p>

        <ChildComponent name={subject}/>

        <WithRouterDisplay>
          <span>{subject}</span>
        </WithRouterDisplay>

        <Tabs>
          <TabList>
            <Tab>Subject 1</Tab>
            <Tab>Subject 2</Tab>
            <Tab>Subject 3</Tab>
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
    console.log(children);
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
    subject: PropTypes.string
  };

  render() {
    const { subject } = this.props;
    console.log('ChildComponent render()');
    return (
      <p>
        Subject: {subject}
      </p>
    );
  }
}

export default Home;