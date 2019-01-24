import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signUp, flipPage } from "../../actions";

class SignUp extends React.Component {
  handleSubmit = event => {
    this.props.signUp(event, () => {
      this.props.history.push("/feature");
    });
  };

  componentDidMount() {
    this.props.flipPage();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="ui form error"
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <div className="field">
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />

          <label>Password</label>
          <Field
            name="password"
            type="password"
            component='input'
            autoComplete="none"
          />
        </div>
        <div style={{color: 'red'}}>{this.props.errorMessage}</div>
        <div style={{ textAlign: "center" }}>
          <button className="ui button primary">Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

const wrappedSignUp = reduxForm({ form: "signup" })(SignUp);

export default connect(
  mapStateToProps,
  { signUp, flipPage }
)(wrappedSignUp);
