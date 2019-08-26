import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/BasePage.js';
import SlateEditor from '../components/slate-editor/Editor.js';

import withAuth from '../components/hoc/withAuth.js';
import { getBlogById } from '../actions';

class BlogEditorUpdate extends React.Component {
  static async getInitialProps({query}) {
    const blogId = query.id;
    try {
      const blog = await getBlogById(blogId)
      return { blog }
    } catch (err) {
      return { err }
    }
  }

  render() {
    const { blog } = this.props;
    console.log('blog: ', blog);
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
      <SlateEditor save={() => console.log('update')} isLoading={isSaving} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);
