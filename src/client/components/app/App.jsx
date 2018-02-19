import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import constants from '../common/globals';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import TopNotification from '../common/TopNotification/TopNotification';
import PrimaryHeader from '../common/header/Header';

const defaultProps = {
  user: {},
};
const muiTheme = getMuiTheme({
  appBar: {
    color: constants.colors.secondaryColorSceheme,
    textColor: constants.colors.primaryBlackColor,
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
          <div className="ecommerce-wrapper">
            <TopNotification isVisible notification="Want to meet our furniture in real life? Drop in to our stores at Domlur or Whitefield." isButton buttonLink="https://www.urbanladder.com/furniture-stores?src=headbanner" />
            <PrimaryHeader />
            <Route exact path="/" component={LoadableExample} />
            <Route path="/login" component={LoadableLogin} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

App.defaultProps = defaultProps;

