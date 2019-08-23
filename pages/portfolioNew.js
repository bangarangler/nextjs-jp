import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import withAuth from '../components/hoc/withAuth.js';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm.js';
import {Row, Col} from 'reactstrap';
import { createPortfolio } from '../actions';


class PortfolioNew extends React.Component {
  constructor(props) {
    super(props)
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    createPortfolio(portfolioData).then((portfolio) => {
      console.log(portfolio);
    }).catch(( err ) => console.error(err)
    )}

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create New Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm onSubmit={this.savePortfolio} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
