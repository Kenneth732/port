import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);

  function handleFileUpload(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    // Send the form data to the server using fetch or axios
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Upload Image</button>
      </form>
      {file && (
        <div className='images_file'>
          <img src={URL.createObjectURL(file)} alt="Uploaded image" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
