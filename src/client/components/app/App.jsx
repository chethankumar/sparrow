import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

const defaultProps = {
  user: {},
};

export function fakeDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const LoadableExample = Loadable({
  loader: () => fakeDelay(400).then(() => import('../home/Home')),
  loading() {
    return <div>Loading...</div>;
  },
});
const LoadableLogin = Loadable({
  loader: () => fakeDelay(400).then(() => import('../login/Login')),
  loading() {
    return <div>Loading...</div>;
  },
});

@connect(store => ({
  user: store.login.user,
}))
export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={LoadableExample} />
          <Route path="/login" component={LoadableLogin} />
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = defaultProps;

