import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  signUp() {
    console.log('this.state', this.state);
  }
  render() {
    return (
      <div className="form-inline">
        <div class="container">
          <h2>Sign Up</h2>
          <div className="form-group">
            <div class="col s12 l6 ">
              <input
                className="form-control"
                type="text"
                placeholder="email"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <input
                className="from-control"
                type="password"
                placeholder="password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <button
              className="btn wave-effect waves-light"
              type="submit"
              name="action"
              onClick={() => this.signUp()}
            >
              Sign Up
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
