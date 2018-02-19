import React from 'react';
import AppBar from 'material-ui/AppBar';

const defaultProps = {
  isLoggedIn: false,
};
const iconStyles = {
  fontSize: '25px',
  marginRight: '0.3rem',
};

export default class PrimaryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.setLoginPage = this.setLoginPage.bind(this);
  }

  setLoginPage() {
    this.props.history.push('/login');
  }
  render() {
    return (
      <AppBar iconElementLeft="">
        <section className="primaryHeader_section-left">
          <a href="www.google.com" target="_blank">
            <img src="https://ul-a.akamaihd.net/media/ul/logo/new-logo.gif" alt="ecommerce-logo" />
          </a>
        </section>
        <section className="primaryHeader_section-left">
          <a href="javascript:void(0)" onClick={this.setLoginPage}> Login</a>
        </section>
      </AppBar>
    );
  }
}


PrimaryHeader.defaultProps = defaultProps;
