import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage';
import moment from 'moment';
import {Container, Row, Col} from 'reactstrap';
import {Link} from '../routes';
import {getBlogs} from '../actions';
import {shortenText} from '../helpers/utils.js';

class Blogs extends React.Component {
  static async getInitialProps({req}) {
    let blogs = [];
    try {
      blogs = await getBlogs(req);
    } catch (err) {
      console.error(err);
    }
    return {blogs};
  }

  renderBlogs = blogs =>
    blogs.map((blog, index) => {
      return (
        <div key={index} className="post-preview">
          <Link route={`/blogs/${blog.slug}`}>
            <a>
              <h2 className="post-title">{blog.title}</h2>
              <h3 className="post-subtitle">{shortenText(blog.subTitle)}</h3>
            </a>
          </Link>
          <p className="post-meta">
            Posted by <a href="#">{blog.author} </a>
            {moment(blog.createdAt).format('LL')}
          </p>
        </div>
      );
    });

  render() {
    const {blogs} = this.props;
    return (
      <>
        <head>
          <script src="https://kit.fontawesome.com/530582d694.js" />
        </head>
        <BaseLayout
          title="Jon Palacio - Newest Blog Posts"
          {...this.props.auth}
          headerType={'landing'}
          className="blog-listing-page">
          <div
            className="masthead"
            style={{backgroundImage: "url('/static/images/home-bg.jpg')"}}>
            <div className="overlay" />
            <Container>
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>Fresh Blogs</h1>
                    <span className="subheading">
                      Programming, travelling...
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <BasePage className="blog-body">
            <Row>
              <Col md="10" lg="8" className="mx-auto">
                {this.renderBlogs(blogs)}
                <div className="clearfix">
                  <a className="btn btn-primary float-right" href="#">
                    Older Posts &rarr;
                  </a>
                </div>
              </Col>
            </Row>

            <footer>
              <Container>
                <Row>
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://twitter.com/bangarangler">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/jonathan-palacio-401945a3/">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://github.com/bangarangler">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-github fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                    </ul>
                    <p className="copyright text-muted">
                      Copyright &copy; Jon Palacio 2018
                    </p>
                  </div>
                </Row>
              </Container>
            </footer>
          </BasePage>
        </BaseLayout>
      </>
    );
  }
}

export default Blogs;
