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

  render() {
    return (
      <ButtonDropdown className="port-dropdown" isOpen={this.state.dropDownOpen} toggle={this.toggle}>
      <DropdownToggle caret size="sm"></DropdownToggle>
      <DropdownMenu>
      <DropdownItem>Make a Draft / Publish Blog</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
