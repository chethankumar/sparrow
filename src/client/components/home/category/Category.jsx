import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icons from 'react-icons-kit';
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';
import { bed } from 'react-icons-kit/fa/bed';
import { ic_local_dining } from 'react-icons-kit/md/ic_local_dining';
import { ic_tv } from 'react-icons-kit/md/ic_tv';

const categoryList = [{
  name: 'Sofa',
  icon: arrowLeft,
},
{
  name: 'Beds',
  icon: bed,
},
{
  name: 'Dining',
  icon: ic_local_dining,
},
{
  name: 'TV Units',
  icon: ic_tv,
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
          <Icons size={32} icon={category.icon} />
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

