import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button, Alert} from 'reactstrap';
import PortInput from '../form/PortInput.js';
import PortDate from '../form/PortDate.js';
import moment from 'moment';

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`;
    }
  });
  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);
  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date Cannot be before Start Date!';
  }
  return errors;
};

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}>
      {({isSubmitting}) => (
        <Form>
          <Field type="text" name="title" component={PortInput} label="Title" />

          <Field
            type="text"
            name="company"
            component={PortInput}
            label="Company"
          />

          <Field
            type="text"
            name="location"
            component={PortInput}
            label="Location"
          />

          <Field
            type="text"
            name="position"
            component={PortInput}
            label="Position"
          />

          <Field
            type="textarea"
            name="description"
            component={PortInput}
            label="Description"
          />

          <Field
            name="startDate"
            label="Start Date"
            initialDate={initialValues.startDate}
            component={PortDate}
          />

          <Field
            name="endDate"
            label="End Date"
            initialDate={initialValues.endDate}
            component={PortDate}
            canBeDisabled={true}
          />

          {error && <Alert color="danger">{error}</Alert>}
          <Button
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
//import React from 'react';

//export default class PortfolioCreateForm extends React.Component {
//constructor(props) {
//super(props)
//this.state = {title: "", description: "", language: ""}

//this.handleChange = this.handleChange.bind(this)
//this.handleSubmit = this.handleSubmit.bind(this)
//}

//handleChange(event) {
//const field = event.target.name
//this.setState({[field]: event.target.value})
//}

//handleSubmit(event) {
//alert('A name was submitted:' + this.state.title + " " + this.state.description + " " + this.state.language)
//event.preventDefault()
//}

//render() {
//return (
//<form onSubmit={this.handleSubmit}>
//<label>
//Name:
//<input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//</label>
//<label>
//Description:
//<textarea name="description" value={this.state.description} onChange={this.handleChange} />
//</label>
//<label>
//Pick your favorite Programming Language
//<select name="language" value={this.state.language} onChange={this.handleChange}>
//<option value="javascript">JavaScript</option>
//<option value="java">Java</option>
//<option value="c">C</option>
//<option value="python">Python</option>
//</select>
//</label>
//<input type="submit" value="submit" />
//</form>
//)
//}
//}
