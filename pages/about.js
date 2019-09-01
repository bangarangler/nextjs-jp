import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="Jon Palacio - Learn More About Me">
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
                <p>This is not my actual portfolio just wanted to get in some practice with NEXTJS and Server Side Rendering with React.  I've really enjoyed working with NEXTJS!  Exciting things happening all over the place in the JavaScript community!</p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
