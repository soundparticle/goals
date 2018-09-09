import React, { PureComponent } from 'react';
import styles from './AddGoal.css';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  render() {

    return (
      <section className={styles['add-goal']}>
        <h2>Add a New Goal</h2>
        <form>
          <FormControl label="Goal Focus">
            <input name="goal"/>
          </FormControl>

          <FormControl label="">
            <input name="Nested Goal List"/>
          </FormControl>
          
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddGoal;