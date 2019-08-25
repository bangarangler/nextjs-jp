import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import SlateEditor from '../components/slate-editor/Editor.js';

import withAuth from '../components/hoc/withAuth.js';
import { saveBlog } from '../actions';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false
    }
    this.saveBlog = this.saveBlog.bind(this);
  }
  saveBlog(heading) {
    const blog = {}
    blog.title = heading.title;
    blog.subtitle = heading.subtitle
    this.setState({ isSaving: true })

    saveBlog().then(data => {
      this.setState({ isSaving: false })
      console.log(data)
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
