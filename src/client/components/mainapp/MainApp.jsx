import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from 'material-ui/RaisedButton';
import MonacoEditor from 'react-monaco-editor';
import { saveJSON } from '../../actions/app/AppActions';

@connect(store => ({
  user: store.login.user,
}))
export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: {},
    };
    this.saveJSON = this.saveJSON.bind(this);
    this.jsonDataOnChange = this.jsonDataOnChange.bind(this);
  }

  saveJSON() {
    this.props.dispatch(saveJSON(this.props.user.email, this.props.user.password, this.state.jsonData));
  }

  jsonDataOnChange(e) {
    this.setState({
      jsonData: e.target.value,
    });
  }

  render() {
    // const requireConfig = {
    //   url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
    //   paths: {
    //     vs: 'https://www.mycdn.com/monaco-editor/0.6.1/min/vs',
    //   },
    // };
    return (
      <Grid fluid className="mainapp">
        <Row middle="xs" >
          <Col xs={8}>
            <h1>Quick Server</h1>
          </Col>
          <Col xs={4} className="user">
            <p>Welcome, {this.props.user.email}</p>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col xs={8}>
            <MonacoEditor
              width="800"
              height="600"
              language="json"
              // value={this.state.jsonData.toString()}
              // requireConfig={requireConfig}
              onChange={e => this.onChange(e)}
            />
            {/* <TextArea
              labelText="JSON data"
              onChange={e => this.jsonDataOnChange(e)}
            /> */}
          </Col>
          <Col xs={4}>
            <Button onClick={() => this.saveJSON()}>Save</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

