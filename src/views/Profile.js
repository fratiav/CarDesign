import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <Loading/>;
  }

  return (
    isAuthenticated ? (
      <div id="profile">
        <div id="infoProfile">
          <img src={user.picture} alt={user.name} width="100" />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </div>
        <Footer/>
      </div>
    ) : (
      loginWithRedirect()
    )
  );
};

export default Profile;