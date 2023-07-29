import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../redux/action/UserDetailsAction";
import { userLoggout } from "../../redux/action/UserDetailsAction";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile(user.id));
  }, [dispatch, user.id]);

  function handleLogout() {
    dispatch(userLoggout());
  }

  return (
    <div className="Profile">
      <h3>Profile</h3>
      <div className="card">
        <div className="left-card">
          <div className="inner-left">
            <p>
              User Name:- <span>{user.username}</span>
            </p>
            <p>
              Email:- <span>{user.email}</span>
            </p>
            <p>
              First Name:- <span>{user.firstName}</span>
            </p>
            <p>
              Last Name:- <span>{user.lastName}</span>
            </p>
            <p>
              Gender:- <span>{user.gender}</span>
            </p>
          </div>
          <div className="button">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="right-card">
          <img className="image" src="https://robohash.org/autquiaut.pn" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
