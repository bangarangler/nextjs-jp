import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout.js';
import {Container, Row, Col, Button} from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipping: false,
    };

    this.roles = [
      'Developer',
      'React',
      'Node.js',
      'GraphQL',
      'MongoDB',
      'SQL',
      'Python',
      'C',
      'Gatsby',
      'Next.js',
      'Express',
      'Svelte',
      'Sapper',
    ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping,
      });
    }, 5000);
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;
    const {isFlipping} = this.state;
    return (
      <BaseLayout
        {...this.props.auth}
        className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`}
        headerType="index"
        title="Jonathan Palacio | Full Stack Developer">
        <div className="main-section">
          <div className="background-image">
            <img style={{maxWidth: '100%'}} src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.jpg"
                        alt="Guy programming welcome picture"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Feel free to reach out!</h2>
                        <div className="hero-section-content-intro">
                          I look forward to speaking with you!
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-2.jpg"
                        alt="Guy programming welcome picture"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        <b>{user.given_name} &nbsp;</b>
                      </span>
                    )}
                    Welcome to my server side rendered portfolio website! Get
                    informed, collaborate and discover projects I've worked on
                    through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h2>Let's take a look at my work.</h2>
                </div>
              </Col>
            </Row>
          </Container>
      <span className="service-link">Vector illustration credit: <a  href="https://www.vecteezy.com/">
            Free Vector Art by Vecteezy!
      </a></span>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
