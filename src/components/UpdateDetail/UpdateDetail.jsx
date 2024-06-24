import React, { useState, useEffect } from 'react'
import backendurl from '../../urls';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdateDetail = () => {
    const navigate = useNavigate();

    const handleSignUp=()=>{

    }

    const handleInputChange=()=>{

    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl my-7">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Existing Details</h2>
        <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input id="fname" type="text" name="fname" onChange={handleInputChange} placeholder="Enter first name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" type="email" name="email" onChange={handleInputChange} placeholder="Enter last name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input id="lname" type="text" name="lname" onChange={handleInputChange} placeholder="Enter username" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="adhaar" className="block text-sm font-medium text-gray-700">Adhaar Number</label>
            <input id="adhaar" type="text" name="adhaar"  onChange={handleInputChange} placeholder="Enter adhaar no." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input id="phone_no" type="tel" name="phone_no"  onChange={handleInputChange} placeholder="Enter contact number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input id="dob" type="date" name="dob"  onChange={handleInputChange} placeholder="Enter date of birth" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" placeholder="Enter address" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
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
        checked=''//{formData.gender === "male"}
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
        checked=''//{formData.gender === "male"}
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
        checked=''//{formData.gender === "male"}
        onChange={handleInputChange}
        required
      />
      <span className="ml-2">Others</span>
    </label>
  </div>
</div>



          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
            <input id="height" type="text" name="height" onChange={handleInputChange} placeholder="Enter height" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
            <input id="weight" type="text" name="weight" onChange={handleInputChange} placeholder="Enter weight" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="medical_hist" className="block text-sm font-medium text-gray-700">Medical History</label>
            <input id="medical_hist" type="text" name="medical_hist" onChange={handleInputChange}  placeholder="Enter medical history" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="family_medical_hist" className="block text-sm font-medium text-gray-700">Family Medical History</label>
            <input id="family_medical_hist" type="text" name="family_medical_hist" onChange={handleInputChange} placeholder="Enter family medical history" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="prescribed_medicines" className="block text-sm font-medium text-gray-700">Prescribed Medicines</label>
            <input id="prescribed_medicines" type="text" name="prescribed_medicines" onChange={handleInputChange} placeholder="Enter prescribed medicines" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="language_spoken" className="block text-sm font-medium text-gray-700">Language Spoken</label>
            <input id="language_spoken" type="text" name="language_spoken" onChange={handleInputChange} placeholder="Enter languages spoken" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="eyeresult" className="block text-sm font-medium text-gray-700">Eye result</label>
            <input id="eyeresult" type="text" name="eyeresult" onChange={handleInputChange} placeholder="Enter eye results" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" name="password" onChange={handleInputChange} placeholder="Enter password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div>
            <label  htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input id="cpassword" type="password" name="cpassword" onChange={handleInputChange} placeholder="Confirm password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-purple-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-700">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetail;

