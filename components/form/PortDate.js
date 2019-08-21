import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateValue: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const formattedDate = date.format()
    this.setState({
      dateValue: date
    })
  }

  render() {
    return (
      <DatePicker
      selected={this.state.dateValue}
      onChange={this.handleChange}
      />
    )
  }
}
