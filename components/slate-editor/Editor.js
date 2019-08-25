import React from 'react';

import HoverMenu from './HoverMenu';
import ControlMenu from './ControlMenu.js';
import {Editor} from 'slate-react';
import {renderMark, renderNode} from './renderers';
import { initialValue } from './initial-value';

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
    isLoaded: false,
  };

  componentDidMount() {
    this.updateMenu();
    this.setState({isLoaded: true});
  }

  componentDidUpdate = () => {
    this.updateMenu();
  };

  onChange = ({value}) => {
    this.setState({value});
  };

  updateMenu = () => {
    const menu = this.menu;
    if (!menu) return;

    const {value} = this.state;
    const {fragment, selection} = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style');
      return;
    }

    const native = window.getSelection();
    const range = native.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    menu.style.opacity = 1;
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`;

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`;
  };

  getTitle() {
    const { value } = this.state;
    const firstBlock = value.document.getBlocks().get(0)
    const secondBlock = value.document.getBlocks().get(1)
    const title = firstBlock && firstBlock.text ? firstBlock.text : 'No Title'
    const subTitle = secondBlock && secondBlock.text ? secondBlock.text : 'No Sub Title'
    return {
      title,
      subTitle
    }
  }

  save() {
    const { save } = this.props;
    const headingValues = this.getTitle()

    save(headingValues)
  }


  render() {
    const {isLoaded} = this.state;
    return (
      <>
        {isLoaded && (
          <Editor
            {...this.props}
            placeholder="some text here..."
            value={this.state.value}
            onChange={this.onChange}
            renderMark={renderMark}
            renderNode={renderNode}
            renderEditor={this.renderEditor}
          />
        )}
      </>
    );
  }

  renderEditor = (props, editor, next) => {
    const children = next();
    const { isLoading } = props;
    return (
      <>
        <ControlMenu isLoading={isLoading} save={() => this.save()} />
        {children}
        <HoverMenu innerRef={menu => (this.menu = menu)} editor={editor} />
      </>
    );
  };
}
