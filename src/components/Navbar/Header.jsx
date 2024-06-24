// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     // const navigate = useNavigate();
//     // const anemiatoken = localStorage.getItem('anemiatoken');
//     // const anemiatokenjson = JSON.parse(anemiatoken);
//     // const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // useEffect(() => {
//     //     if (anemiatokenjson?.token?.access) {
//     //         setIsLoggedIn(true);
//     //     }
//     // }, [anemiatokenjson]);

//     // const handleLogout = () => {
//     //     localStorage.removeItem('anemiatoken');
//     //     setIsLoggedIn(false);
//     //     navigate('/login');
//     // };

//     let navigate = useNavigate();

//     const handleLogout=()=>{
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('username'); 
//       navigate("/login");
//     }

//     return (
//         <>
//             <nav className="bg-black text-white border-gray-200 py-4 shadow dark:bg-gray-900">
//                 <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//                     <Link to="/" className="flex items-center">
//                         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Survey Tool</span>
//                     </Link>
//                     <div className="flex items-center lg:order-2 space-x-4">
//                         {/* {isLoggedIn ? (
//                             <div className="flex space-x-4">
//                                 <Link to="/anemia"
//                                     className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
//                                     Anemia
//                                 </Link>
//                                 <button
//                                     onClick={handleLogout}
//                                     className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800">
//                                     Logout
//                                 </button>
//                             </div>
//                         ) : (
//                             <Link to="/login"
//                                 className=" text-white bg-blue-800 hover:bg-blue-700  font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none  dark:focus:ring-purple-800 ">
//                                 Login
//                             </Link>
//                         )} */}
//                         {!localStorage.getItem('authToken')?<Link
//                 to="/login"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Login</Link>:<button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>}
//                         <button data-collapse-toggle="mobile-menu-2" type="button"
//                             className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                             aria-controls="mobile-menu-2" aria-expanded="true">
//                             <span className="sr-only">Open main menu</span>
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd"
//                                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                     clipRule="evenodd"></path>
//                             </svg>
//                             <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd"
//                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                     clipRule="evenodd"></path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <Link to="/" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Profile</Link>
//                             </li>
//                             <li>
//                                 <Link to="/health-record" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Health Records</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        navigate("/login");
    }

    return (
        <>
            <nav className="bg-black text-white border-gray-200 py-4 shadow dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Survey Tool</span>
                    </Link>
                    <div className="flex items-center lg:order-2 space-x-4">
                        {!localStorage.getItem('authToken') ? (
                            <Link
                                to="/login"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Login
                            </Link>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Logout
                            </button>
                        )}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Profile</Link>
                            </li>
                            <li>
                                <Link to="/health-record" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white">Health Records</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
