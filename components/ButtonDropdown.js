import React from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class PortButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)
    this.state= {
      dropDownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    })
  }

  renderMenu(items) {
    return (
      <DropdownMenu>
      {items.map((item, index) => (
        <DropdownItem key={index} {...item.handlers}>{item.text}</DropdownItem>
      ))}
      </DropdownMenu>
    )
  }

  render() {
    const { items } = this.props;
    return (
      <ButtonDropdown className="port-dropdown" isOpen={this.state.dropDownOpen} toggle={this.toggle}>
      <DropdownToggle caret size="sm"></DropdownToggle>
        {this.renderMenu(items)}
      </ButtonDropdown>
    )
  }
}
