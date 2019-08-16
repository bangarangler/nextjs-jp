import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Page!</h1>
        <a href="/">Home!</a>
        <a href="/about">About!</a>
        <a href="/blogs">Blogs!</a>
        <a href="/cv">Cv!</a>
        <a href="/portfolios">Portfolios!</a>
      </div>
    );
  }
}

export default Index;
