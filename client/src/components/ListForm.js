import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Button } from 'semantic-ui-react'

class ListForm extends React.Component {

    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) =>{
        const { input, label, meta } = formProps;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render(){   
        return (
            <Container>
            <form className="ui form error" 
            onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title: " />
                <Field name="description" component={this.renderInput} label="Enter descripiton: " />
                <Button color="violet">Submit</Button>
            </form>
            </Container>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        // only ran if user did not enter title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'ListForm',
    validate
})(ListForm);
