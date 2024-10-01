import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App() {
    const handleSubmit = (formData) => {
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your feedback!');
    };

    return ( <
        div className = "App" >
        <
        FeedbackForm onSubmit = { handleSubmit }
        /> <
        /div>
    );
}

export default App;