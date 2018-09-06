import { LOADING_START, LOADING_END, ERROR } from '../components/auth/reducers';

const isPromise =  val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {

  const { type, payload } = action;
  console.log('*** action', action);
  console.log('*** type', type);
  if(!isPromise(payload)) return next(action);
  dispatch({ type: LOADING_START });

  return payload
    .then(
      result => {
        dispatch({ type: LOADING_END }); 
        
        return dispatch({
          type,
          payload: result
        });

      },
      err => {
        dispatch({ type: LOADING_END });
        dispatch({ type: ERROR, payload: err });
        throw err;
      }
    );
};