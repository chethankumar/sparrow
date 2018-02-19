import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Carousal from './carousal/Carousal';

export default class Home extends React.Component {
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
      <Grid fluid className="Home">
        <Row>
          <Col xs={6}>
            <RaisedButton label="Login" onClick={this.setLoginPage} />
            <Carousal />
          </Col>
        </Row>
      </Grid>
    );
  }
}

