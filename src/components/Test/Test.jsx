import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image first.');
      return;
    }
    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);
    try {
      const response = await axios.post('https://backendgcst.clinicosis.com/image_analysis/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading the image:', error);
      alert('There was an error uploading the image.');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mb-80 mt-40">
        <h1 className="text-2xl font-bold mb-4 text-center underline text-green-900">Eye Image Analysis</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <input type="file" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="max-w-80 h-60 mx-auto" />
            </div>
          )}
          <button type="submit" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 w-60">
            {loading ? 'Uploading...' : 'Analyze Image'}
          </button>
        </form>
        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;


