import React, { useState } from 'react';
import './App.css';

function Login() {
  const [firstName, setFirstName] = useState('');
  const [description, setDescription] = useState('');
  const [helpRequests, setHelpRequests] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new help request to the queue
    setHelpRequests([...helpRequests, { firstName, description }]);
    // Reset form fields
    setFirstName('');
    setDescription('');
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update corresponding state variable
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  // Function to handle deleting a help request
  const handleDelete = (index) => {
    // Remove help request at specified index
    const newHelpRequests = [...helpRequests];
    newHelpRequests.splice(index, 1);
    setHelpRequests(newHelpRequests);
  };

  // Function to handle updating a help request
  const handleUpdate = (index, newFirstName, newDescription) => {
    // Replace help request at specified index with updated values
    const newHelpRequests = [...helpRequests];
    newHelpRequests[index] = { firstName: newFirstName, description: newDescription };
    setHelpRequests(newHelpRequests);
  };

  return (
    <div className="help-queue">
      <h2 className="help-queue__title">Portfolio</h2>
      <form onSubmit={handleSubmit} className="help-queue__form">
        <label className="help-queue__label">
          Portfolio Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            className="help-queue__input"
          />
        </label>
        <label className="help-queue__label">
          Description:
          <textarea
            name="description"
            value={description}
            onChange={handleInputChange}
            className="help-queue__textarea"
          />
        </label>
        <button type="submit" className="help-queue__button">Add!</button> <br />
        <a className='btn btn-primary' href='App.js'>Back</a>
      </form>
      <h3 className="help-queue__subtitle">Current Portfolio Requests:</h3>
      <ul className="help-queue__list">
        {helpRequests.map((request, index) => (
          <li key={index} className="help-queue__item">
            <div className="help-queue__details">
              <strong>{request.firstName}:</strong> {request.description}
            </div>
            <div className="help-queue__actions">
              <button onClick={() => handleDelete(index)} className="help-queue__delete-button">Delete</button>
              <button onClick={() => handleUpdate(index, 'New Name', 'New Description')} className="help-queue__update-button">Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Login;
