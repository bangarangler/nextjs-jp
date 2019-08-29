import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class Resume extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Preview of My Resume" className="resume-page">
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <div className="resume-title">
                <a
                  className="btn btn-success"
                  download="resume.pdf"
                  href="/static/resume.pdf">
                  Download
                </a>
              </div>
              <iframe
                src="/static/resume.pdf"
                style={{width: '100%', height: '800px'}}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Resume;
