import React from 'react';
import Header from '../shared/Header.js';
import Head from 'next/head';

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical,
  } = props;
  const headerType = props.headerType || 'default';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hi I'm Jon! I'm a web developer with a extreme interest in marketing and business! I've owned a few business's in my time and I still enjoy the thrill of planning and organizing a business. Regardless if it's day one or you have been in business for generations; I'm confident that I can make it even better!"
        />
        <meta
          name="keywords"
          content="jon palacio portfolio, jon palacio developer, jon palacio web developer, jon palacio freelancing, SSR NextJS"
        />
        <meta
          property="og:title"
          content="Jon Palacio - programmer, developer, full-stack"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hi I'm Jon! I'm a web developer with a extreme interest in marketing and business! I've owned a few business's in my time and I still enjoy the thrill of planning and organizing a business. Regardless if it's day one or you have been in business for generations; I'm confident that I can make it even better!"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          isSiteOwner={isSiteOwner}
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
