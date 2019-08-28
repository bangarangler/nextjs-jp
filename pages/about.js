import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to browse to your hearts content!
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Jon Palacio and I am an experienced software
                  engineer and freelance developer.{' '}
                </p>
                <p>
                  I'm 31 years young and have made it to the top of every
                  industry I have had the pleasure to work in. I've driven
                  tractor trailers, excelled at marketing and communication,
                  founded and helped maintain a massage therapy business, and
                  most recently ran a startup company as the Lead Locksmith /
                  Business Manager!
                </p>
                <p>
                  My skills are constantly growing and while the top of those
                  industries where great, my heart has always been in technology
                  and security. I'm very security focused and find software
                  development to be the most fascinating and compelling journey
                  I've been on in quite a long time.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
