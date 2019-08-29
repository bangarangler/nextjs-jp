import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import Portfolio from './portfolio/[id].js';
import PortfolioCard from '../components/portfolios/PortfolioCard.js';
import Link from 'next/link';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import {getPortfolios, deletePortfolio} from '../actions';
import {Router} from '../routes';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios = [];
    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }
    return {portfolios};
  }

  navigateToEdit(portfolioId, e) {
    e.stopPropagation()
    Router.pushRoute(`/portfolios/${portfolioId}/edit`)
  }

  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation()
    const isConfirm = confirm(
      'Are you sure you want to delete this portfolio?',
    );

    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId).then(() => {});
    Router.pushRoute('/portfolios').catch(err => console.error(err));
  }

  renderPortfolios(portfolios) {
    const {isAuthenticated, isSiteOwner} = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <Col md="4" key={index}>
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && (
              <>
                <Button
                  onClick={(e) => this.navigateToEdit(portfolio._id, e) }
                  color="warning">
                  Edit
                </Button>{' '}
                <Button
                  onClick={(e) => this.displayDeleteWarning(portfolio._id, e)}
                  color="danger">
                  Delete
                </Button>
              </>
            )}
          </PortfolioCard>
        </Col>
      );
    });
  }

  render() {
    const {portfolios} = this.props;
    const {isAuthenticated, isSiteOwner} = this.props.auth;

    return (
      <BaseLayout {...this.props.auth} title="Jon Palacio - See My Portfolio">
        <BasePage className="portfolio-page" title="Portfolios Page">
          {isAuthenticated && isSiteOwner && (
            <Button
              onClick={() => Router.pushRoute('/portfolios/new')}
              color="success"
              className="portfolio-port-btn">
              Create Portfolio
            </Button>
          )}
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
