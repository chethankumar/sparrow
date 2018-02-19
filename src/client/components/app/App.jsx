import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

const defaultProps = {
  user: {},
};
const muiTheme = getMuiTheme({
  appBar: {
    color: indigo800,
  },
});

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
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="container">
            <Route exact path="/" component={LoadableExample} />
            <Route path="/login" component={LoadableLogin} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

App.defaultProps = defaultProps;

