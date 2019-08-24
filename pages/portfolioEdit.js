import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import withAuth from '../components/hoc/withAuth.js';
import { Router } from '../routes';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm.js';
import {Row, Col} from 'reactstrap';
import { createPortfolio, getPortfolioById } from '../actions';


class PortfolioEdit extends React.Component {
  static async getInitialProps({query}) {
  let portfolio = {};
    try {
      portfolio = await getPortfolioById(query.id);
    } catch(err) {
      console.error(err);
    }
    console.log('portfolio: ', portfolio);
    return {portfolio}
  }
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData, {setSubmitting}) {
    /*setSubmitting(true)*/
    //createPortfolio(portfolioData).then((portfolio) => {
      //setSubmitting(false)
      //this.setState({error: undefined})
      //Router.pushRoute('/portfolios')
    //}).catch(( err ) => {
      //const error = err.message || 'Server Error!'
      //setSubmitting(false)
      //this.setState({error});
    //}
    /*)*/}

  render() {
    const { error } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create New Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm error={error} onSubmit={this.savePortfolio} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioEdit);
