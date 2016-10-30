import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  console.log('action received', action);
  // never do state = something
  // Avoid mutate the state by do push
  // or any operation over the same state
  // concat is a good solution for it and
  // return a complete new value
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }

  return state;
}
