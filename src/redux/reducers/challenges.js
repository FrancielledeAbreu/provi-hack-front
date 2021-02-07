import { CHALLENGESLIST } from "../actions/challenges";

const defaultState = [];
const challengeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHALLENGESLIST:
      return action.data;

    default:
      return state;
  }
};

export default challengeReducer;
