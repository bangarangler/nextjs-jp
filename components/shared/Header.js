import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes.js';
import '../../styles/main.scss';

class Header extends React.Component {
  render() {
    return (
      <>
        <p className="customClass">Styled p element</p>
        <p className="customClassFromFile">Styled p element</p>
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
          <NextLink route="test" params={{id: '2'}}><a>Test 2</a></NextLink>
            <NextLink route="test" params={{ id: '5' }}><a>Test 5</a></NextLink>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
            .customClass {
              color: red;
            }
          `}
        </style>
      </>
    );
  }
}

export default Header;
