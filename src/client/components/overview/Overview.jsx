import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pink900 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Button } from 'carbon-components-react';
import _ from 'lodash';
import MainApp from '../mainapp/MainApp';
import Login from '../login/Login';

const defaultProps = {
  user: {},
};
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink900,
  },
});

@connect(store => ({
  user: store.login.user,
}))
export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme} style={{ height: '100%' }}>
          {!_.isEmpty(this.props.user) ? <MainApp /> : <Login />}
        </MuiThemeProvider>
      </div>
    );
  }
}

Overview.defaultProps = defaultProps;

