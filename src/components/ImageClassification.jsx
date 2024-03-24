import React, { useState } from "react";
import axios from 'axios';

// Functional component for Image Classification
const ImageClassification = () => {
  // State variables for image, result, and loading status
  const [image, setImage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle image upload and classification
  const handleImageUpload = async () => {
    // Creating a new FormData object to store the image
    const formData = new FormData();
    formData.append('image', image);// Appending the uploaded image to the FormData object

    try {
      setLoading(true);
      // Sending a POST request to the classification endpoint with the FormData containing the image
      const response = await axios.post('http://localhost:8501/classify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Setting headers for the request
        }
      });
      setResult(response.data);// Setting the classification result received from the server
    } catch (error) {
      console.error('Error:', error);// Logging any errors that occur during the request
    } finally {
      setLoading(false);// Setting loading status back to false after request completion (success or error)
    }
  };

  // Rendering the component
  return (
    <div>
      <h1>Image Classification</h1>
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload} disabled={!image || loading}>Classify Image</button>
      {loading && <p>Loading...</p>}
      {result && (
        <div>
          <img src={URL.createObjectURL(image)} alt="Uploaded" width="200" />
          <p>Gym machine in the image is {result.gym_machine}</p>
          <p>With accuracy of {result.accuracy.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default ImageClassification;
