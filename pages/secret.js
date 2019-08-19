import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth.js';
import { getSecretData } from '../actions/index.js';

class Secret extends React.Component {
  static getInitialProps() {
    const superSecretValue = 'Super Secret Value';
    return {superSecretValue};
  }
  //constructor(props) {
    //super()
    //this.state = {
      //secretData: []
    //}
  //}

  state = {
    secretData: []
  }

  async componentDidMount() {
    const secretData = await getSecretData()

    this.setState({
      secretData,
    });
  }

  displaySecretData() {
    const {secretData} = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        );
      });
    }
    return null;
  }

  render() {
    const {superSecretValue} = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Secret Page</h1>
          <b>SECRET CONTENT HERE</b>
          <h2>{superSecretValue}</h2>
            {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
