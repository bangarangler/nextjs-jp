import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth.js';

class Secret extends React.Component {

  static getInitialProps() {
    const superSecretValue = 'Super Secret Value'
    return { superSecretValue }
  }

  render() {
    const { superSecretValue } = this.props;
    return (
    <BaseLayout {...this.props.auth}>
      <BasePage>
        <h1>Secret Page</h1>
        <b>SECRET CONTENT HERE</b>
        <h2>{superSecretValue}</h2>
      </BasePage>
    </BaseLayout>
    );
  }
}

export default withAuth(Secret);
