import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import withAuth from '../components/hoc/withAuth.js';
import { Router } from '../routes.js';
import SlateEditor from '../components/slate-editor/Editor.js';
import {toast} from 'react-toastify';

import { createBlog } from '../actions';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      lockId: Math.floor(1000 + Math.random() + 9000)
    }
    this.saveBlog = this.saveBlog.bind(this);
  }
  saveBlog(story, heading) {
    const { lockId } = this.state;
    const blog = {}
    blog.title = heading.title;
    blog.subTitle = heading.subtitle
    blog.story = story
    this.setState({ isSaving: true })

    createBlog(blog, lockId).then(createdBlog => {
      this.setState({ isSaving: false });
      toast.success('Blog Saved Successfuly!')
      Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
    }).catch(err => {
      this.setState({ isSaving: false })
      toast.error('Unexpected Error... Try again ; )')
      const message = err.message || 'Server Error!'
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
