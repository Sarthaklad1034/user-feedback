import logo from './logo.svg';
import './App.css';
import React from 'react';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
export default App;