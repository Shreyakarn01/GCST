import React, { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    adhaar: "",
    dob: "",
    gender: "",
    height: "",
    weight: "",
    medical_hist: "",
    family_medical_hist: "",
    prescribed_medicines: "",
    languages_spoken: "",
    eyeresult: "",
    role: "Patient"
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);

   const fetchDetail =async ()=>{
    
    try {
      const response = await axios.get('https://gcst-api.onrender.com/api/profile/', {
          headers:{
              "Authorization": `Token ${authToken}`,
              "Content-Type": "application/json"
          }
      });
      const data = response.data;
      console.log(data);
      if (data) {
        setProfileDetails(data);
        console.log(profileDetails);
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

//    if (loading) {
//     return <div>Loading...</div>;
// }

   useEffect(() => {
    fetchDetail();     
}, [navigate]);

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden mt-10 p-6 py-30">
      <div className="px-4 py-6">
        <h2 className="text-4xl font-bold mb-6 my-6 text-center">Patient Profile</h2>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div>
            <label htmlFor="username" className="block text-xl font-medium text-gray-700 ">Username : {profileDetails.username}</label>
          </div>
          <div>
            <label htmlFor="fname" className="block text-xl font-medium text-gray-700">First Name : {profileDetails.first_name}</label>
          </div>
          <div>
            <label htmlFor="lname" className="block text-xl font-medium text-gray-700">Last Name : {profileDetails.last_name}</label>
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email : {profileDetails.email}</label>
          </div>
          <div>
            <label htmlFor="phone_no" className="block text-xl font-medium text-gray-700">Phone Number : {profileDetails.phone_no}</label>
          </div> 
          <div>
            <label htmlFor="adhaar" className="block text-xl font-medium text-gray-700">Adhaar Number : {profileDetails.adhaar}</label>
          </div>
          <div>
            <label htmlFor="dob" className="block text-xl font-medium text-gray-700">Date of Birth : {profileDetails.dob}</label>
          </div>
          <div>
            <label htmlFor="gender" className="block text-xl font-medium text-gray-700">Gender : {profileDetails.gender}</label>
          </div>
          <div>
            <label htmlFor="height" className="block text-xl font-medium text-gray-700">Height : {profileDetails.height}</label>
          </div>
          <div>
            <label htmlFor="weight" className="block text-xl font-medium text-gray-700">Weight : {profileDetails.weight}</label>
          </div>
          <div>
            <label htmlFor="medical_hist" className="block text-xl font-medium text-gray-700">Medical History : {profileDetails.medical_hist}</label>
          </div>
          <div>
            <label htmlFor="family_medical_hist" className="block text-xl font-medium text-gray-700">Family Medical History : {profileDetails.family_medical_hist}</label>
          </div>
          <div>
            <label htmlFor="prescribed_medicines" className="block text-xl font-medium text-gray-700">Prescribed Medicines : {profileDetails.prescribed_medicines}</label>
          </div>
          <div>
            <label htmlFor="language_spoken" className="block text-xl font-medium text-gray-700">Language Spoken : {profileDetails.languages_spoken}</label>
          </div>
          <div>
            <label htmlFor="eyeresult" className="block text-xl font-medium text-gray-700">Eye Result : {profileDetails.eyeresult}</label>
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email : {profileDetails.email}</label>
          </div>
           <div>
            <label htmlFor="role" className="block text-xl font-medium text-gray-700">Role : {profileDetails.role}</label>
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
