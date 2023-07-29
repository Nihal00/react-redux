import {
  ADD_USER_DETAILS,
  SAVE_USER_PROFILE,
  LOGIN,
  LOGOUT,
} from "./ActionType";

export const addUserDetails = (user) => ({
  type: ADD_USER_DETAILS,
  payload: user,
});

export const saveUserProfile = (profile) => ({
  type: SAVE_USER_PROFILE,
  payload: profile,
});

export const userLogin = (log) => ({
  type: LOGIN,
  payload: {
    session: sessionStorage.setItem("token", log),
    status: true,
  },
});

export const userLoggout = (log) => ({
  type: LOGOUT,
  payload: {
    session: sessionStorage.clear(),
    status: false,
  },
});

export const fetchUserProfile = (id) => {
  return (dispatch) => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(saveUserProfile(data)));
  };
};
