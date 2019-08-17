import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout.js';
import { withRouter } from 'next/router';

class Portfolio extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
      <p>test</p>
      <h2>{this.props.router.query.title}</h2>
      </div>
    )
  }
}

export default withRouter(Portfolio);
