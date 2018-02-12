import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { login } from '../../actions/login/LoginActions';

@connect(store => ({
  user: store.login.user,
  isLoginLoading: store.login.isLoginLoading,
  hasErrored: store.login.hasErrored,
  errorDetails: store.login.errorDetails,
}))
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
  }

  componentDidMount() {

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
            <CircularProgress />
          </div>
        : null}
        <Row className="customRow">
          <Col md={7} className="leftPart" >
            <Row center="xs">
              <h1>Login</h1>
            </Row>
          </Col>
          <Col md={5} className="rightPart" >
            <h1>Sparrow</h1>
            <br /><br />
            <TextField
              id="emailId"
              floatingLabelText="Email Id"
              onChange={e => this.emailOnChange(e)}
            />
            <br /><br />
            <TextField
              id="password"
              floatingLabelText="Password"
              type="password"
              onChange={e => this.passwordOnChange(e)}
            />
            <br /><br />
            {this.props.hasErrored ?
              <div>
                <p className="err">{this.props.errorDetails}</p>
              </div> : null}
            <Button primary onClick={() => this.loginUser()} >Login</Button>
            <Button >Sign up</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

