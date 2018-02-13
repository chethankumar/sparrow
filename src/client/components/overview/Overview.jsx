import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import _ from 'lodash';
import Login from '../login/Login';

const defaultProps = {
  user: {},
};


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
      <div style={{ height: '100%' }}>
        {!_.isEmpty(this.props.user) ? null : <Login />}
      </div>
    );
  }
}

Overview.defaultProps = defaultProps;

