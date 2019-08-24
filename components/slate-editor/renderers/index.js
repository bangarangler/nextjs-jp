import React from 'react';
import {Button, Icon} from '../components';

export const onClickMark = (e, type, editor) => {
  e.preventDefault();
  editor.toggleMark(type);
};

export const renderMarkButton = (type, icon, editor) => {
  const {value} = editor;
  const isActive = value.activeMarks.some(mark => mark.type == type);
  return (
    <Button
      reversed
      active={isActive}
      onMouseDown={e => onClickMark(e, type, editor)}>
      <Icon>{icon}</Icon>
    </Button>
  );
};

export const renderMark = (props, editor, next) => {
  const {children, mark, attributes} = props;

  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'code':
      return <code {...attributes}>{children}</code>;
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underlined':
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};
