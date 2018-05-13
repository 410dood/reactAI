import {
  PREDICT_IMAGE
} from '../actions/constants';

const predictions = (state = { concepts: [] }, action) => {
  switch (action.type) {
    case PREDICT_IMAGE:
      return {
        ...state,
        concepts: action.payload
      }
    default:
      return state;
  }
}

export default predictions;