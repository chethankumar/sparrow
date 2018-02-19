import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';

const defaultProps = {
  isVisible: false,
  notification: '',
  isButton: false,
  buttonLink: '',
};

export default class TopNotification extends React.Component {
  render() {
    return (
      <Row className="top-notification-ecomm">
        {this.props.isVisible ?
          <Row className="notifcation-wrapper">
            <Col xs={10} className="notification-content">
              <p>{this.props.notification}&nbsp;</p>
              {this.props.isButton ?
                <a href={this.props.buttonLink} target="_blank">Click here</a>
          : null}
            </Col>
            <Col xs={2}>
              <FontIcon className="material-icons">close</FontIcon>
            </Col>
          </Row>
      : null}
      </Row>
    );
  }
}
TopNotification.propTypes = {
  isVisible: PropTypes.bool,
  notification: PropTypes.string,
  isButton: PropTypes.bool,
  buttonLink: PropTypes.string,
};


TopNotification.defaultProps = defaultProps;
