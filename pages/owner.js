import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth.js';

class Owner extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Owner Only Pages</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(Owner);
