import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout.js'
import BasePage from '../components/BasePage.js'
import SlateEditor from '../components/slate-editor/Editor.js'

import withAuth from '../components/hoc/withAuth.js'

class BlogEditor extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page" >
          <SlateEditor />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);
