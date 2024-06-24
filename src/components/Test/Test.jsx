// import React, { useState } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       alert('Please upload an image first.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('file', image);

//     setLoading(true);
//     try {
//       const response = await axios.post('https://gcst-api.onrender.com/api/anemic-image-analysis/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setResult(response.data);
//     } catch (error) {
//       console.error('Error uploading the image:', error);
//       alert('There was an error uploading the image.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mb-80 mt-40">
//         <h1 className="text-2xl font-bold mb-4 text-center underline text-green-900">Eye Image Analysis</h1>
//         <form onSubmit={handleSubmit} className="mb-4">
//           <div className="mb-4">
//             <input type="file" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
//           </div>
//           {preview && (
//             <div className="mb-4">
//               <img src={preview} alt="Preview" className="max-w-80 h-60 mx-auto" />
//             </div>
//           )}
//           <button type="submit" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 w-60">
//             {loading ? 'Uploading...' : 'Analyze Image'}
//           </button>
//         </form>
//         {result && (
//           <div className="mt-4 p-4 border rounded bg-gray-100">
//             <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
//             <pre>{JSON.stringify(result, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Test;


import React, { useState } from 'react';

const EyeImageAnalysis = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const authToken=localStorage.getItem('authToken');

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('age', age);
      formData.append('gender', gender);

      const response = await fetch('https://gcst-api.onrender.com/api/anemic-image-analysis/', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Token ${authToken}`,
        },
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white mt-80 xl:mt-60 md:mt-80 lg:mt-80 sm:mt-80">
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mb-80 mt-40">
        <h1 className="text-4xl font-bold mb-4 text-center underline text-green-900">Eye Image Analysis</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <input type="file" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="max-w-60 h-40 mx-auto" />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 w-60">
            {loading ? 'Uploading...' : 'Analyze Image'}
          </button>
        </form>
        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
            {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
            <h2 className="font-bold">Anemia Result : {result.anemia_result}</h2>
            <h2 className="font-bold">Hex colour : {result.hex_color}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default EyeImageAnalysis;


