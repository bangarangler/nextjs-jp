import React from 'react';
import Header from '../shared/Header.js';
import Head from 'next/head';

const BaseLayout = props => {
  const {className, children, isAuthenticated, user} = props;
  const headerType = props.headerType || 'default';
  return (
    <>
    <Head>
    <title>Jonathan Dain Palacio</title>
    <script src="https://kit.fontawesome.com/530582d694.js"></script>
    </Head>
    <div className="layout-container">
      <Header
        className={`port-nav-${headerType}`}
        isAuthenticated={isAuthenticated}
        user={user}
      />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
    </>
  );
};

export default BaseLayout;
