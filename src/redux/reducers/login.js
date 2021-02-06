import { LOGIN } from "../actions/login";

const defaultState = [];
const validLogin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.data;

    default:
      return state;
  }
};

export default validLogin;
