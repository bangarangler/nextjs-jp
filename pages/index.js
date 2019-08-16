import React from "react";
import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Page!</h1>
        <Link href="/">
          <a>Home!</a>
        </Link>
        <Link href="/about">
          <a>About!</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios!</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs!</a>
        </Link>
        <Link href="/about">
          <a>About!</a>
        </Link>
      </div>
    );
  }
}

export default Index;
