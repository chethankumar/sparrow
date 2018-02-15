import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
            <button>Login</button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

