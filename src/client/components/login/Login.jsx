import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { login } from '../../actions/login/LoginActions';
import { withRouter } from 'react-router-dom';

// @connect(store => ({
//   user: store.login.user,
//   isLoginLoading: store.login.isLoginLoading,
//   hasErrored: store.login.hasErrored,
//   errorDetails: store.login.errorDetails,
// }))

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: true,
    };
    this.loginUser = this.loginUser.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.selectSignUp = this.selectSignUp.bind(this);
    this.selectLogin = this.selectLogin.bind(this);
  }

  componentDidMount() {

  }

  selectLogin() {
    this.setState({
      login: true,
    });
  }

  selectSignUp() {
    this.setState({
      login: false,
    });
  }

  emailOnChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  passwordOnChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  loginUser() {
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  render() {
    return (
      <Grid fluid className="login">
        {this.props.isLoginLoading ?
          <div className="overlay ">
            <p>Loading....</p>
          </div>
        : null}
        <Row className="customRow">
          <Col md={12} className="page" >
            <h1 className="header">Sparrow</h1>
            <br /><br />
            <div className="loginStuff">
              <div className="labels">
                <h1
                  className={this.state.login ? 'selected' : 'unselected'}
                  onClick={() => this.selectLogin()}
                >Log In
                </h1><p> or </p><h1
                  className={this.state.login ? 'unselected' : 'selected'}
                  onClick={() => this.selectSignUp()}
                >Sign Up
                                </h1>
              </div>
              <input
                id="emailId"
                placeholder="Email Id"
                onChange={e => this.emailOnChange(e)}
              />
              <br /><br />
              <input
                id="password"
                placeholder="Password"
                type="password"
                onChange={e => this.passwordOnChange(e)}
              />
              <br /><br />
              {this.props.hasErrored ?
                <div>
                  <p className="err">{this.props.errorDetails}</p>
                </div> : null}
              <div className="btns">
                {this.state.login ?
                  <button className="loginBtn" onClick={() => this.loginUser()} >Login</button>
                  :
                  <button className="signupBtn" >Sign up</button>
                }
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = store => ({
  user: store.login.user,
  isLoginLoading: store.login.isLoginLoading,
  hasErrored: store.login.hasErrored,
  errorDetails: store.login.errorDetails,
});

export default withRouter(connect(mapStateToProps)(Login));
