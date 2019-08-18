import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import axios from 'axios';
import Portfolio from './portfolio/[id].js';
import Link from 'next/link';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }
    return {posts: posts.splice(0, 10)};
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <div key={post.id}>
          <li>
            <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
              <a>{post.title}</a>
            </Link>
          </li>
        </div>
      );
    });
  }

  render() {
    const {posts} = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Portfolios Page!</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
