import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import SlateEditor from '../components/slate-editor/Editor.js';

import withAuth from '../components/hoc/withAuth.js';
import {getBlogById} from '../actions';

class BlogEditorUpdate extends React.Component {
  static async getInitialProps({query}) {
    const blogId = query.id;
    let blog = {};
    try {
      blog = await getBlogById(blogId);
    } catch (err) {
      console.error(err);
    }
    return {blog};
  }
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
    };
  }

  render() {
    const {blog} = this.props;
    const {isSaving} = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor
            initialValue={blog.story}
            save={() => console.log('update')}
            isLoading={isSaving}
          />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);
