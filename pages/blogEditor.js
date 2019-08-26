import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import SlateEditor from '../components/slate-editor/Editor.js';

import withAuth from '../components/hoc/withAuth.js';
import { createBlog } from '../actions';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false
    }
    this.saveBlog = this.saveBlog.bind(this);
  }
  saveBlog(story, heading) {
    const blog = {}
    blog.title = heading.title;
    blog.subTitle = heading.subtitle
    blog.story = story
    this.setState({ isSaving: true })

    createBlog(blog).then(data => {
      this.setState({ isSaving: false })
      console.log(data)
    }).catch(err => {
      this.setState({ isSaving: false })
      const message = err.message || 'Server Error!'
      console.error(err.message)
    })
  }

  render() {
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor save={this.saveBlog} isLoading={isSaving} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(BlogEditor);
