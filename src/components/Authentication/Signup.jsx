import React, { useState, useEffect } from 'react'
import backendurl from '../../urls';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
          email: "",
          username: "",
          password: "",
          first_name: "",
          last_name: "",
          role: "Patient",
          adhaar: "",
          phone_no: "",
          gender: "",
          dob: "",
          height: "",
          weight: "",
          medical_hist: "",
          family_medical_hist: "",
          prescribed_medicines: "",
          languages_spoken: "",
          eyeresult: "",
          is_staff: "",
          is_active: ""
    });

    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
      const { id, value, type, name } = e.target;
      if (type === 'radio') {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      }
    };

    const convertToBoolean = (value) => {
      return value.toLowerCase() === 'yes';
    };


    const handleSignUp = async (e) => {
      e.preventDefault();
      const payload = {
          email: formData.email,
          username: formData.username,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          role: formData.role,
          adhaar: formData.adhaar,
          phone_no: formData.phone_no,
          gender: formData.gender,
          dob: formData.dob,
          height: formData.height,
          weight: formData.weight,
          medical_hist: formData.medical_hist,
          family_medical_hist: formData.family_medical_hist,
          prescribed_medicines: formData.prescribed_medicines,
          languages_spoken: formData.languages_spoken,
          eyeresult: formData.eyeresult,
          is_staff: convertToBoolean(formData.is_staff),
          is_active: convertToBoolean(formData.is_active)
      };
  
      try {
          const res = await axios.post("https://gcst-api.onrender.com/api/register/", payload, {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          });
          console.log('Response:', res.data); // Log the full response
          console.log('Response data:', res.data.message);
              setResponse(res.data.message); // Update to handle the specific structure
              setFormData({
                  email: "", username: "", password: "", first_name: "", last_name: "", role: "Patient", adhaar: "", phone_no: "", gender: "", dob: "", height: "", weight: "", medical_hist: "", family_medical_hist: "", prescribed_medicines: "", languages_spoken: "", eyeresult: "", is_staff: "", is_active: ""
              })
              alert('Registration successful');
             } catch (error) {
              console.error('Error registering:', error);
              alert('Registration failed. Please try again.');
            }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl my-7">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Fill in your details</h2>
        <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input id="first_name" type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder="Enter first name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter last name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder="Enter username" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="adhaar" className="block text-sm font-medium text-gray-700">Adhaar Number</label>
            <input id="adhaar" type="text" name="adhaar" value={formData.adhaar} onChange={handleInputChange} placeholder="Enter adhaar no." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input id="username" type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter username" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input id="phone_no" type="tel" name="phone_no" value={formData.phone_no} onChange={handleInputChange} placeholder="Enter contact number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input id="dob" type="date" name="dob" value={formData.dob} onChange={handleInputChange} placeholder="Enter date of birth" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Enter role" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          {/* <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <input id="gender" type="text" name="gender" value={formData.gender} onChange={handleInputChange} placeholder="Enter gender" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div> */}

<div>
  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
  <div className="mt-2">
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio h-4 w-4 text-primary-600"
        name="gender"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleInputChange}
        required
      />
      <span className="ml-2">Male</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        className="form-radio h-4 w-4 text-primary-600"
        name="gender"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleInputChange}
        required
      />
      <span className="ml-2">Female</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        className="form-radio h-4 w-4 text-primary-600"
        name="gender"
        value="others"
        checked={formData.gender === "others"}
        onChange={handleInputChange}
        required
      />
      <span className="ml-2">Others</span>
    </label>
  </div>
</div>



          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
            <input id="height" type="text" name="height" value={formData.height} onChange={handleInputChange} placeholder="Enter height" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
            <input id="weight" type="text" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="Enter weight" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="medical_hist" className="block text-sm font-medium text-gray-700">Medical History</label>
            <input id="medical_hist" type="text" name="medical_hist" value={formData.medical_hist} onChange={handleInputChange}  placeholder="Enter medical history" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="family_medical_hist" className="block text-sm font-medium text-gray-700">Family Medical History</label>
            <input id="family_medical_hist" type="text" name="family_medical_hist" value={formData.family_medical_hist} onChange={handleInputChange} placeholder="Enter family medical history" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="prescribed_medicines" className="block text-sm font-medium text-gray-700">Prescribed Medicines</label>
            <input id="prescribed_medicines" type="text" name="prescribed_medicines" value={formData.prescribed_medicines} onChange={handleInputChange} placeholder="Enter prescribed medicines" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="languages_spoken" className="block text-sm font-medium text-gray-700">Language Spoken</label>
            <input id="languages_spoken" type="text" name="languages_spoken" value={formData.languages_spoken} onChange={handleInputChange} placeholder="Enter languages spoken" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="eyeresult" className="block text-sm font-medium text-gray-700">Eye result</label>
            <input id="eyeresult" type="text" name="eyeresult" value={formData.eyeresult} onChange={handleInputChange} placeholder="Enter eye results" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="is_staff" className="block text-sm font-medium text-gray-700">Are you a staff?</label>
            <input id="is_staff" type="text" name="is_staff" value={formData.is_staff} onChange={handleInputChange} placeholder="Enter Yes or No" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="is_active" className="block text-sm font-medium text-gray-700">Are you an active member?</label>
            <input id="is_active" type="text" name="is_active" value={formData.is_active} onChange={handleInputChange} placeholder="Enter Yes or No" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-purple-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-700">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
