import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icons from 'react-icons-kit';
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';

const categoryList = [{
  name: 'Sofa',
  icon: '',
},
{
  name: 'Beds',
  icon: '',
},
{
  name: 'Dining',
  icon: '',
},
{
  name: 'TV Units',
  icon: '',
}];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderCategories = this.renderCategories.bind(this);
  }

  renderCategories() {
    const list = [];
    categoryList.map((category) => {
      list.push(<Col xs>
        <Row center="xs">
          <Icons size={32} icon={arrowLeft} />
        </Row>
        <Row center="xs">
          {category.name}
        </Row>
                </Col>);
    });

    return list;
  }

  render() {
    return (
      <Row className="category-wrapper">
        <Row center="xs" className="category-header">
          <h1>Explore our Furniture Range</h1>
        </Row>
        <Row className="category-items">
          {this.renderCategories()}
        </Row>
      </Row>
    );
  }
}

