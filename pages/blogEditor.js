import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout.js'
import BasePage from '../components/BasePage.js'
import SlateEditor from '../components/slate-editor/Editor.js'

import withAuth from '../components/hoc/withAuth.js'

class BlogEditor extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-editor-page" title="Write your story...">
          <SlateEditor />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);
