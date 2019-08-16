import React from "react";
import Header from "../components/shared/Header.js";

class Index extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome Page!</h1>
        <Header title={`I am a Header Component`}>
          <h1>Header Subtitle!</h1>
        </Header>
      </>
    );
  }
}

export default Index;
