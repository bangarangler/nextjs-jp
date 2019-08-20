import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import  withAuth  from '../components/hoc/withAuth.js';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm.js';

class PortfolioNew extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Create New Portfolio">
      <PortfolioCreateForm />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
