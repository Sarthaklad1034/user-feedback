import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './FeedbackForm.module.css';

const FeedbackForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', comment: '' });
    };

    return ( <
        form onSubmit = { handleSubmit }
        className = { styles.form } >
        <
        h2 className = { styles.title } > User Feedback < /h2> <
        Input label = "Name"
        type = "text"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >
        <
        Input label = "Comment"
        type = "textarea"
        name = "comment"
        value = { formData.comment }
        onChange = { handleChange }
        required /
        >
        <
        Button type = "submit" > Submit Feedback < /Button> <
        /form>
    );
};

export default FeedbackForm;