import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button, FormGroup, Label} from 'reactstrap';
import PortInput from '../form/FormInput.js';

const validateInputs = values => {
  let errors = {};

  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      errors[key] = `Field ${key} is required!`
    }
  })
  return errors;
};

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: '',
};

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
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

          <FormGroup>
            <Label>Start Date</Label>
            <Field className="form-control" type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>End Date</Label>
            <Field
              className="form-control"
              type="text"
              name="endDate"
            />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
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
