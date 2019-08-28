import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';

class BlogDetail extends React.Component {
  static async getInitialProps() {

  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page" title="Blog Detail Page!">
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
