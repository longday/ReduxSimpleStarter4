import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createPost} from "../actions";


class PostsNew extends  React.Component {

    renderField(field){
        const { meta:{touched, error}, label, input } = field;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="title"
                    label="Title For Post"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="\" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate (values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }
    return errors;
}


export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    connect(null, {createPost})(PostsNew)
);