import React from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends  React.Component {
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.index}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){

    }

    render(){
        const { handleSubmit } =  this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title For Post" component={this.renderField} />
                <Field name="tags"  label="Tags" component={this.renderField} />
                <Field name="content"  label="Post Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate (values) {
    const errors ={};
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.tags) {
        errors.tags = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }


    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);