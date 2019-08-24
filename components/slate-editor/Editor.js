import React from 'react';
import {Editor} from 'slate-react';
import {Value} from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

function BoldMark(props) {
  return <strong>{props.children}</strong>;
}

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
    isLoaded: false,
  };

  componentDidMount() {
    this.setState({isLoaded: true});
  }

  onChange = ({value}) => {
    this.setState({value});
  };

  onKeyDown = (e, editor, next) => {
    if (!e.ctrlKey) return next();
    switch (e.key) {
      case 'b': {
        e.preventDefault();
        editor.toggleMark('bold');
        break;
      }
      case 'x': {
        const isCode = editor.value.blocks.some(block => block.type == 'code');
        e.preventDefault();
        editor.setBlocks(isCode ? 'paragraph' : 'code');
        break;
      }
      default: {
        return next();
      }
    }
  };

  renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />;
      case 'paragraph':
        return <p {...props.attributes}>{props.children}</p>;
      default:
        return next();
    }
  };

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />;
      default:
        return next();
    }
  };

  render() {
    const {isLoaded} = this.state;
    return (
      <>
        {isLoaded && (
          <Editor
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
          />
        )}
      </>
    );
  }
}
