import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import withAuth from '../components/hoc/withAuth.js';
import {Router} from '../routes';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm.js';
import {Row, Col} from 'reactstrap';
import {createPortfolio} from '../actions';

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: '',
};

class PortfolioNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData, {setSubmitting}) {
    setSubmitting(true);
    createPortfolio(portfolioData)
      .then(portfolio => {
        setSubmitting(false);
        this.setState({error: undefined});
        Router.pushRoute('/portfolios');
      })
      .catch(err => {
        const error = err.message || 'Server Error!';
        setSubmitting(false);
        this.setState({error});
      });
  }

  render() {
    const {error} = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create New Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={this.savePortfolio}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
