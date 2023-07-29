import {
  ADD_USER_DETAILS,
  SAVE_USER_PROFILE,
  LOGIN,
  LOGOUT,
} from "../action/ActionType";

const initialState = {
  user: {},
  profile: {},
  log: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return { ...state, user: { ...action.payload } };
    case SAVE_USER_PROFILE:
      return { ...state, profile: { ...action.payload } };
    case LOGIN:
      return { ...state, log: { ...action.payload } };
    case LOGOUT:
      return { ...state, log: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
