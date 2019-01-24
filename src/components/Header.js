import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderSignedIn() {
    return (
      <div className="right menu">
        <Link to="feature" className="item">
          Feature
        </Link>
        <Link to="signout" className="ui button purple">
          Sign Out
        </Link>
      </div>
    );
  }

  renderNotSignedIn() {
    return (
      <div className="right menu">
        <Link to="signup" className="item">
          Sign up
        </Link>
        <Link to="signin" className="ui button primary">
          Sign In
        </Link>
      </div>
    );
  }

  renderLink() {
    return this.props.auth ? this.renderSignedIn() : this.renderNotSignedIn();
  }

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
          <Link to="/" className="item">Root Route</Link>
          {this.renderLink()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
