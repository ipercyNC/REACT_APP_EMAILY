// SurveyForm shows form where user will enter data
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields(){
      return _.map(formFields, ({ label, name })=> {
        return <Field key={name}component={SurveyField} type="text" label={label} name={name}/>
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // Redux form will stop if the errors object has items (not null)
  const errors = {};
  //errors only cares if error has a value
  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if(!values[name]){
      errors[name] = 'You must provide a value'
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
