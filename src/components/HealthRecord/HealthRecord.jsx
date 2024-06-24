// import React, { useState } from 'react';

// const HealthRecord = () => {
//     const tests = [
//         { id: 1, title: 'Blood Test' },
//         { id: 2, title: 'X-Ray' },
//         { id: 3, title: 'MRI' },
//         { id: 4, title: 'Ultrasound' },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             <input
//                 type="text"
//                 placeholder="Search tests"
//                 className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {tests
//                     .filter((test) =>
//                         test.title.toLowerCase().includes(searchTerm.toLowerCase())
//                     )
//                     .map((test) => (
//                         <div
//                             key={test.id}
//                             className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
//                         >
//                             <h3 className="text-lg font-semibold">{test.title}</h3>
//                             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                                 More Details
//                             </button>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default HealthRecord;


//hover effect added to cards

// import React, { useState } from 'react';

// const HealthRecord = () => {
//     const tests = [
//         { id: 1, title: 'Blood Test' },
//         { id: 2, title: 'X-Ray' },
//         { id: 3, title: 'MRI' },
//         { id: 4, title: 'Ultrasound' },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             <input
//                 type="text"
//                 placeholder="Search tests"
//                 className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {tests
//                     .filter((test) =>
//                         test.title.toLowerCase().includes(searchTerm.toLowerCase())
//                     )
//                     .map((test) => (
//                         <div
//                             key={test.id}
//                             className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//                         >
//                             <h3 className="text-lg font-semibold">{test.title}</h3>
//                             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                                 More Details
//                             </button>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default HealthRecord;



//color to cards added
//this one is correct
// import React, { useState } from 'react';

// const HealthRecord = () => {
//     const tests = [
//         { id: 1, title: 'Blood Test' },
//         { id: 2, title: 'X-Ray' },
//         { id: 3, title: 'MRI' },
//         { id: 4, title: 'Ultrasound' },
//         { id: 5, title:'Eye Test'}
//     ];

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             <input
//                 type="text"
//                 placeholder="Search tests"
//                 className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {tests
//                     .filter((test) =>
//                         test.title.toLowerCase().includes(searchTerm.toLowerCase())
//                     )
//                     .map((test) => (
//                         <div
//                             key={test.id}
//                             className="bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//                         >
//                             <h3 className="text-lg font-semibold">{test.title}</h3>
//                             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                                 More Details
//                             </button>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default HealthRecord;


// import React, { useState } from 'react';

// const HealthRecord = () => {
//     const tests = [
//         { id: 1, title: 'Blood Test' },
//         { id: 2, title: 'X-Ray' },
//         { id: 3, title: 'MRI' },
//         { id: 4, title: 'Ultrasound' },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             <div className="max-w-sm">
//             <input
//                 type="text"
//                 placeholder="Search tests"
//                 className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             </div>
//             <div className="grid gap-4">
//                 {tests
//                     .filter((test) =>
//                         test.title.toLowerCase().includes(searchTerm.toLowerCase())
//                     )
//                     .map((test) => (
//                         <div
//                             key={test.id}
//                             className="bg-blue-300 hover:bg-blue-200 border border-blue-300 rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full py-5 my-4"
//                         >
//                             <h3 className="text-lg font-semibold">{test.title}</h3>
//                             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                                 More Details
//                             </button>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default HealthRecord;



// import React, { useState } from 'react';

// const HealthRecord = () => {
//     const tests = [
//         { id: 1, title: 'Blood Test' },
//         { id: 2, title: 'X-Ray' },
//         { id: 3, title: 'MRI' },
//         { id: 4, title: 'Ultrasound' },
//         { id: 5, title: 'Eye Test' }
//     ];

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-6">
//             <div className="max-w-7xl mx-auto px-4">
//                 <input
//                     type="text"
//                     placeholder="Search tests"
//                     className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {tests
//                         .filter((test) =>
//                             test.title.toLowerCase().includes(searchTerm.toLowerCase())
//                         )
//                         .map((test) => (
//                             <div
//                                 key={test.id}
//                                 className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//                             >
//                                 <h3 className="text-lg font-semibold">{test.title}</h3>
//                                 <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                                     More Details
//                                 </button>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HealthRecord;


// import React, { useState } from 'react';

// const CardList = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const cards = Array.from({ length: 8 }, (_, index) => index + 1);

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-6">
//             <input
//                 type="text"
//                 placeholder="Search"
//                 className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 {cards.map((card) => (
//                     <div
//                         key={card}
//                         className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//                     >
//                         <h3 className="text-lg font-semibold">Card {card}</h3>
//                         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                             Button
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CardList;

import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const HealthRecord = () => {


   
    const tests = [
        { id: 1, title: 'Blood Test' },
        { id: 2, title: 'X-Ray' },
        { id: 3, title: 'MRI' },
        { id: 4, title: 'Ultrasound' },
        { id: 5, title: 'Eye Test' },
        { id: 6, title: 'CT Scan' },
        { id: 7, title: 'Dental X-Ray' },
        { id: 8, title: 'ECG' }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // const navigate = useNavigate();
    // const authToken = localStorage.getItem('authToken');
    // console.log('authToken:', authToken);

    //     // If user is not authenticated, redirect to login page
    //     if (authToken === null || authToken === undefined) {
    //         navigate('/login', { state: { from: '/health-record' } });
    //         return null; // Prevent rendering the health record page
    //     }

    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-md flex m-auto">
                <input
                    type="text"
                    placeholder="Search tests"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tests
                        .filter((test) =>
                            test.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((test) => (
                            <div
                                key={test.id}
                                className="bg-blue-100 border-gray-200 rounded-lg p-4 flex flex-col justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-lg my-6 mx-6"
                                style={{ height: '11rem', minWidth: '14rem' }}
                            >
                                <h3 className="text-xl font-bold py-3">{test.title}</h3>
                                <Link to='/test-details'>
                                <button className="mt-4 px-4 py-2 text-white font-bold bg-purple-900 rounded-md hover:bg-purple-800 focus:outline-none">
                                    More Details
                                </button>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HealthRecord;
