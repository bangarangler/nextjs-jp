import React from "react";
import BaseLayout from "../components/layouts/BaseLayout.js";
import SuperComponent from "../components/SuperComponent.js";

class Index extends SuperComponent {
  static getInitialProps() {
    console.log('get initial props')
    return {initialData: [1,2,3,4]}
  }
  constructor(props) {
    super(props);
    this.state = {
      title: "I am Index Page"
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updateTitle = () => {
    this.setState({ title: "updated index page" });
  }

  render() {
    const { title } = this.state;
    const initialData = this.props.initialData;
    console.log("render");
    return (
      <BaseLayout>
        <h1>Welcome Page!</h1>
        <h2>{title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
