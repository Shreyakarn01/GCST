import React, { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Profile = (handleInputChange, handleUpdate ) => {
  const [profileDetails, setProfileDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
   const fetchDetail =async ()=>{
    const authToken = localStorage.getItem('authToken');
    try {
      const response = await axios.get('https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/', {
          headers:{
              'Authorization': `Bearer ${authToken}`,
              "Content-Type": "application/json"
          },
      });
      if (response.data) {
        setProfileDetails(response.data);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching personal details', error);
      navigate('/login');
    }finally {
      setLoading(false);
  }
   } 

   useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      fetchDetail();
    }
    else{
      navigate('/login'); // Redirect to login if no token is found
      return;
    }       
}, [navigate]);

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden mt-10 p-6 py-30">
      <div className="px-4 py-6">
        <h2 className="text-4xl font-bold mb-6 my-6 text-center">Patient Profile</h2>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div>
            <label htmlFor="username" className="block text-xl font-medium text-gray-700 ">Username : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="fname" className="block text-xl font-medium text-gray-700">First Name : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="lname" className="block text-xl font-medium text-gray-700">Last Name : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="phone_no" className="block text-xl font-medium text-gray-700">Phone Number : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="adhaar" className="block text-xl font-medium text-gray-700">Adhaar Number : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="dob" className="block text-xl font-medium text-gray-700">Date of Birth : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="gender" className="block text-xl font-medium text-gray-700">Gender : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="height" className="block text-xl font-medium text-gray-700">Height : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="weight" className="block text-xl font-medium text-gray-700">Weight : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="medical_hist" className="block text-xl font-medium text-gray-700">Medical History : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="family_medical_hist" className="block text-xl font-medium text-gray-700">Family Medical History : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="prescribed_medicines" className="block text-xl font-medium text-gray-700">Prescribed Medicines : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="language_spoken" className="block text-xl font-medium text-gray-700">Language Spoken : </label>
            <p></p>
          </div>
          <div>
            <label htmlFor="eyeresult" className="block text-xl font-medium text-gray-700">Eye Result : </label>
            <p></p>
          </div>
        </div>
        <Link to='/update-detail'>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600"
        >
          Update Details
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Profile;
