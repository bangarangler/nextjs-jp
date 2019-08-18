import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <h1>About Page!</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
