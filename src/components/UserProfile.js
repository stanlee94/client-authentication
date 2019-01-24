import React from "react";
import requireAuth from './requireAuth';

class UserProfile extends React.Component {
  render() {
    return <div>UserProfile</div>;
  }
}

export default requireAuth(UserProfile);
