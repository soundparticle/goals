import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/auth/actions';
import { user, checkedAuth }  from '../components/auth/reducers';
import { goalList, goalsById } from '../components/goals/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  user,
  checkedAuth,
  goalList,
  goalsById
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;