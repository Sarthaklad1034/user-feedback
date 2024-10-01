import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App() {
    const handleSubmit = (formData) => {
        // Here you would typically send the data to a server
        // Destructure the formData object to get the values
        const { name, comment } = formData;

        // Display the values in the alert
        alert(`Thank you for your feedback!\nName: ${name}\nComment: ${comment}`);
    };

    return ( <
        div className = "App" >
        <
        FeedbackForm onSubmit = { handleSubmit }
        /> < /
        div >
    );
}

export default App;