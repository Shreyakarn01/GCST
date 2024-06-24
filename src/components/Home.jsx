// import React from 'react'
// import { Link,useNavigate } from 'react-router-dom';
// import Testimonials from './Testimonials/Testimonials.jsx'

// const Home = () => {
//     const navigate = useNavigate();
//   const authToken = localStorage.getItem('authToken');

//   const handleTakeTestClick = () => {
//     if (!authToken) {
//       navigate('/login', { state: { from: '/test' }});
//     } else {
//       navigate('/test');
//     }
//   };
//     return (
//         <main className='min-h-screen'>
//             {/* <div className="flex flex-col items-center"> */}
//             <section className="bg-white dark:bg-gray-900 min-h-screen py-16">
//                 <div className="grid max-w-screen-xl px-4 pt-20 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:pt-10  bg-blue-100 bg-opacity-50 rounded-md shadow-md p-4 mt-4">
//                     <div className="mr-auto place-self-center lg:col-span-7">
//                         <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Anemia Detection</h1>
//                         <p className="max-w-2xl  font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to Anemia Detection, your reliable software solution for detecting anemia through the analysis of eye images. Our cutting-edge technology harnesses the power of advanced algorithms to provide accurate assessments of various parameters, aiding in the early detection and management of anemia </p>
//                         <p className="max-w-2xl  font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With just a simple input of an eye image, our software swiftly processes the data to deliver comprehensive results. From hemoglobin levels to red blood cell counts, our system provides a detailed analysis that can be crucial for healthcare professionals in making informed decisions regarding patient care.</p>

//                     </div>
//                     <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
//                         <img className='rounded-md transition-transform duration-300 transform hover:scale-105' src="/eye.jpg" alt="hero image" />
//                     </div>
//                     <Link to='/test'>
//                 <button className='bg-purple-900 text-white rounded-md p-2 font-bold hover:bg-purple-800' onClick={handleTakeTestClick}>Take a test</button>
//                 </Link>
//                 </div>
//             </section>

//             <Testimonials/>

//             {/* </div> */}
//             {/* Footer */}
//             <div className="py-10 bg-slate-800 text-white">
//                 <div className="container mx-auto px-4">
//                     <div className="row flex flex-col sm:flex-row justify-between items-center py-10" id="contact">
//                         <div className="sm:w-1/3 text-center sm:text-left">
//                             <h3 className="text-lg font-semibold">Want to stay Updated about Health?</h3>
//                             <h2 className="text-2xl font-bold"><Link to='/register' className="underline text-indigo-600">Sign Up</Link> today!</h2>
//                             <h4 className="text-base font-medium mt-4">Join our community of healthcare professionals and enthusiasts dedicated to improving health and wellness.</h4>
//                         </div>

//                         <div className="mt-6 sm:mt-0 sm:w-1/3 flex flex-col items-center">
//                             <div className="flex w-full">
//                                 {/* <input type="email" className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email"/> */}
//                                 {/* <button type="button" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Submit</button> */}
//                                 <p><span className="underline">Feel free to reach us at </span>: +911234567890 , +912345678901</p>
//                             </div>
//                             <div className="mt-3 text-sm text-center">
//                                 <Link to='#' className="text-indigo-600 underline">Terms and condition</Link> |&nbsp;
//                                 <Link to='#' className="text-indigo-600 underline">Privacy Policy</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </main>
//     )
// }

// export default Home;



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Testimonials from './Testimonials/Testimonials.jsx';

// const Home = () => {
//   const navigate = useNavigate();
//   const authToken = localStorage.getItem('authToken');

//   const handleTakeTestClick = () => {
//     if (!authToken) {
//       navigate('/login', { state: { from: '/test' } });
//     } else {
//       navigate('/test');
//     }
//   };

//   return (
//     <main className="min-h-screen">
//       <section className="bg-white dark:bg-gray-900 py-16 min-h-screen">
//         <div className="grid max-w-screen-xl px-4 pt-20 mx-auto gap-8 lg:grid-cols-12 lg:pt-10 bg-blue-100 bg-opacity-50 rounded-md shadow-md p-4 mt-4">
//           <div className="mr-auto place-self-center lg:col-span-7">
//             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
//               Anemia Detection
//             </h1>
//             <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
//               Welcome to Anemia Detection, your reliable software solution for
//               detecting anemia through the analysis of eye images. Our
//               cutting-edge technology harnesses the power of advanced algorithms
//               to provide accurate assessments of various parameters, aiding in
//               the early detection and management of anemia.
//             </p>
//             <p className="max-w-2xl mb-8 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
//               With just a simple input of an eye image, our software swiftly
//               processes the data to deliver comprehensive results. From
//               hemoglobin levels to red blood cell counts, our system provides a
//               detailed analysis that can be crucial for healthcare professionals
//               in making informed decisions regarding patient care.
//             </p>
//           </div>
//           <div className="hidden lg:flex lg:col-span-5 lg:mt-0">
//             <img
//               className="rounded-md transition-transform duration-300 transform hover:scale-105"
//               src="/eye.jpg"
//               alt="hero image"
//             />
//           </div>
//           <div className="flex justify-center lg:justify-start">
//             <button
//               className="bg-purple-900 text-white rounded-md p-2 font-bold hover:bg-purple-800"
//               onClick={handleTakeTestClick}
//             >
//               Take a test
//             </button>
//           </div>
//         </div>
//       </section>

//       <Testimonials />

//       <div className="py-10 bg-slate-800 text-white">
//         <div className="container mx-auto px-4">
//           <div
//             className="flex flex-col sm:flex-row justify-between items-center py-10"
//             id="contact"
//           >
//             <div className="sm:w-1/3 text-center sm:text-left">
//               <h3 className="text-lg font-semibold">
//                 Want to stay Updated about Health?
//               </h3>
//               <h2 className="text-2xl font-bold">
//                 <Link to="/register" className="underline text-indigo-600">
//                   Sign Up
//                 </Link>{' '}
//                 today!
//               </h2>
//               <h4 className="text-base font-medium mt-4">
//                 Join our community of healthcare professionals and enthusiasts
//                 dedicated to improving health and wellness.
//               </h4>
//             </div>

//             <div className="mt-6 sm:mt-0 sm:w-1/3 flex flex-col items-center">
//               <div className="flex w-full">
//                 <p>
//                   <span className="underline">Feel free to reach us at </span>:
//                   +911234567890 , +912345678901
//                 </p>
//               </div>
//               <div className="mt-3 text-sm text-center">
//                 <Link to="#" className="text-indigo-600 underline">
//                   Terms and condition
//                 </Link>{' '}
//                 |&nbsp;
//                 <Link to="#" className="text-indigo-600 underline">
//                   Privacy Policy
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials/Testimonials.jsx';

const Home = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');

  const handleTakeTestClick = () => {
    if (!authToken) {
      navigate('/login', { state: { from: '/test' } });
    } else {
      navigate('/test');
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-white dark:bg-gray-900 py-16 min-h-screen">
        <div className="max-w-screen-xl px-4 pt-20 mx-auto lg:pt-10 bg-blue-100 bg-opacity-50 rounded-md shadow-md p-4 mt-4">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Anemia Detection
              </h1>
              <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Welcome to Anemia Detection, your reliable software solution for detecting anemia through the analysis of eye images. Our cutting-edge technology harnesses the power of advanced algorithms to provide accurate assessments of various parameters, aiding in the early detection and management of anemia.
              </p>
              <p className="max-w-2xl mb-8 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                With just a simple input of an eye image, our software swiftly processes the data to deliver comprehensive results. From hemoglobin levels to red blood cell counts, our system provides a detailed analysis that can be crucial for healthcare professionals in making informed decisions regarding patient care.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-purple-900 text-white rounded-md p-2 font-bold hover:bg-purple-800" onClick={handleTakeTestClick}>
                  Take a test
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center  lg:flex lg:col-span-5 lg:mt-0 lg:h-80 md:flex flex-row justify-center h-60 sm:flex flex-row justify-center h-60">
              <img className="rounded-md transition-transform duration-300 transform hover:scale-105" src="/eye.jpg" alt="hero image" />
            </div>
          </div>
        </div>
      </section>
        
        <div className="mt-40 xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40">
          <Testimonials />
        </div>

      <div className="py-10 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center py-10" id="contact">
            <div className="sm:w-1/3 text-center sm:text-left">
              <h3 className="text-lg font-semibold">Want to stay Updated about Health?</h3>
              <h2 className="text-2xl font-bold">
                <Link to="/register" className="underline text-indigo-600">
                  Sign Up
                </Link>{' '}
                today!
              </h2>
              <h4 className="text-base font-medium mt-4">
                Join our community of healthcare professionals and enthusiasts dedicated to improving health and wellness.
              </h4>
            </div>

            <div className="mt-6 sm:mt-0 sm:w-1/3 flex flex-col items-center">
              <div className="flex w-full">
                <p>
                  <span className="underline">Feel free to reach us at </span>: +911234567890 , +912345678901
                </p>
              </div>
              <div className="mt-3 text-sm text-center">
                <Link to="#" className="text-indigo-600 underline">
                  Terms and condition
                </Link>{' '}
                |&nbsp;
                <Link to="#" className="text-indigo-600 underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
