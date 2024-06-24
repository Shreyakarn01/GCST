import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import backendurl from "../../urls";
import toast, { LoaderIcon, Toaster } from 'react-hot-toast';

const Anemia = () => {
  const navigate = useNavigate()
  const [filei, setFileI] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const uploadInputRef = useRef(null);
  const [message, setMessage] = useState()
  const [isLoading, setIsLoading] = useState(false);

  const anemiatoken = localStorage.getItem('anemiatoken');
  const anemiatokenjson = JSON.parse(anemiatoken);

  const words = [
    "Prioritize Your Health",
    "Early Detection Saves Lives",
    "Know Your Blood Health",
    "Take Control Today",
    "Empower Yourself with Knowledge",
    "Prevent Anemia Complications",
    "Stay Strong, Get Tested",
    "Don't Wait, Get Checked",
    "Your Health Matters",
    "Invest in Your Well-being",
  ];
  const [index, setIndex] = useState(0);
  const [innerIndex, setInnerIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[index]);
  const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   if (!anemiatokenjson?.token?.token) {
  //     navigate('/login');
  //   }
  //   const type = () => {
  //     setCurrentWord((prev) => {
  //       let newWord = prev;
  //       if (isDeleting) {
  //         newWord = prev.substring(0, innerIndex - 1);
  //         setInnerIndex((prevIndex) => prevIndex - 1);
  //         if (innerIndex === 0) {
  //           setIsDeleting(false);
  //           setIndex((prevIndex) => (prevIndex + 1) % words.length);
  //         }
  //       } else {
  //         newWord = words[index].substring(0, innerIndex + 1);
  //         setInnerIndex((prevIndex) => prevIndex + 1);
  //         if (innerIndex === words[index].length) {
  //           setIsDeleting(true);
  //         }
  //       }
  //       return newWord;
  //     });
  //   };

  //   const timeout = setTimeout(type, 100);
  //   return () => clearTimeout(timeout);
  // }, [index, innerIndex, isDeleting, words]);

  //   const apiResponse = useSelector((state) => {
  //     return state?.anemia?.data;
  //   });
  //   const isLoading = useSelector((state) => state.anemia.isLoading);

  useEffect(() => {
    if (!anemiatokenjson?.token?.access) {
      navigate('/login');
    }
  }, [])

  const handleFileChange = (event) => {
    setFileI(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleImagePreviewClick = () => {
    uploadInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select an image");
    }
    if (selectedFile) {
      try {
        const image = selectedFile;

        // dispatch(anemiaTest({ image })).then((result) => {
        //   if (result.payload && result.payload.error) {
        //     setErrorMessage(result?.payload?.error);
        //   }
        // });

        const formData = new FormData();
        formData.append("image", filei);

        const response = await fetch(`${backendurl}/image_analysis/`, {
          method: 'POST',
          headers: {
            // "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${anemiatokenjson?.token?.access}`
          },
          body: formData
        })

        

        const responsejson = await response.json();

        if (response.ok) {
          console.log(responsejson);
          setMessage(responsejson);
          toast.success('Successfull');
          setIsLoading(false)
        }

      } catch (error) {
        console.error("Faild : ", error);
        setIsLoading(false)
      }
    }
  };

  return (
    <section className="container w-full mx-auto items-center py-32">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerclassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
        <div className="w-[900px] mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
          <div className="px-4 py-6">
            <div className="flex items-start justify-start">
              <div className="w-[44%]">
                <form onSubmit={handleSubmit}>
                  <div
                    id="image-preview"
                    className={`max-w-[350px] p-6 mb-4  ${selectedFile
                      ? ""
                      : "bg-gray-100 border-dashed border-2 border-gray-400"
                      } rounded-lg items-center mx-auto text-center cursor-pointer`}
                    onClick={handleImagePreviewClick}
                  >
                    {selectedFile ? (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        className="max-h-48 rounded-lg mx-auto"
                        alt="Image preview"
                      />
                    ) : (
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                        No image preview
                      </div>
                    )}
                    <input
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={uploadInputRef}
                    />
                    <label htmlFor="upload" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-700 mx-auto mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                        Upload picture
                      </h5>
                      <p className="font-normal text-sm text-gray-400 md:px-6">
                        Choose a clear picture of an{" "}
                        <b className="text-gray-600">Eye</b>
                      </p>
                      <span
                        id="filename"
                        className="text-gray-500 bg-gray-200 z-50"
                      >
                        {selectedFile ? selectedFile.name : ""}
                      </span>
                    </label>
                  </div>
                  <div className="flex items-start justify-start">
                    <div className="w-[370px]">
                      <button
                        type="submit"
                        className="w-full bg-gray-900 font-medium text-xl rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer"
                      >
                        <span className="text-center ml-2">Predict</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-end justify-end">

                {/* {!isLoading && apiResponse?.length === 0 && (
                <>
                <div className="w-full h-full flex justify-center items-center">
                <h1
                  id="typewriter"
                  className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                >
                  {currentWord}
                </h1>
              </div>
                </>
              )}

              {isLoading && apiResponse?.length === 0 && (
                <>
                 <div className="bg-white w-full h-4 pt-10 mt-10 flex flex-col items-center justify-center">
                    <div className="flex h-1 w-full pt-10 items-center justify-center bg-white">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
                        <div className="h-9 w-9 rounded-full bg-white"></div>
                      </div>
                    </div>

                    <div class="text-center text-slate-500 mt-10">
                      <p class="text-sm mb-1 animate-pulse">
                        Analyzing blood samples for indicators of anemia... 🩸
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Calculating hemoglobin levels... 💉
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Assessing red blood cell count... 🔍
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Scanning for abnormalities... 🧬
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Analyzing results for comprehensive diagnosis... ⚕️
                      </p>
                      <p class="text-sm animate-pulse">
                        Loading complete. Your anemia detection report is ready.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {!isLoading && apiResponse?.length > 0 &&(
                <>
                <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                  <div className="bg-white p-7 rounded-md">
                    <h1 className="font-bold text-xl mb-2 text-black">
                      Result: {apiResponse.anemia_prediction}
                    </h1>
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="font-light text-gray-700">
                      Prescription: <br /> {apiResponse.image_description}
                    </p>
                  </div>
                </div>
                </>
              )
              } */}


                {/* <div className="w-full h-full flex justify-center items-center">
                <h1
                  id="typewriter"
                  className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                >
                  {currentWord}
                </h1>
              </div> */}
                {/* {isLoading ? ( */}
                <>
                  <div className="bg-white w-full h-4 pt-10 mt-10 flex flex-col items-center justify-center">
                    {/* <div className="flex h-1 w-full pt-10 items-center justify-center bg-white">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
                        <div className="h-9 w-9 rounded-full bg-white"></div>
                      </div>
                    </div> */}

                    {/* <div class="text-center text-slate-500 mt-10">
                      <p class="text-sm mb-1 animate-pulse">
                        Analyzing blood samples for indicators of anemia... 🩸
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Calculating hemoglobin levels... 💉
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Assessing red blood cell count... 🔍
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Scanning for abnormalities... 🧬
                      </p>
                      <p class="text-sm mb-1 animate-pulse">
                        Analyzing results for comprehensive diagnosis... ⚕️
                      </p>
                      <p class="text-sm animate-pulse">
                        Loading complete. Your anemia detection report is ready.
                      </p>
                    </div> */}
                  </div>
                </>
                {/* ) : ( */}
                <div className="relative w-96 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                  <div className="bg-white p-7 rounded-md">
                    <div className="flex items-center justify-center">

                      {isLoading && <div className="relative">
                        <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                        </div>
                      </div>}

                    </div>
                    <h1 className="font-bold text-xl mb-2 text-black">
                      Result:
                    </h1>
                    <div>
                      <ul>
                        <h3 className="font-semibold">Colors:</h3>
                        {message && Object.keys(message?.color)?.map((col, index) => (
                          <li key={index}> {col}: {message?.color[col]} </li>
                        ))}
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <li><span className="font-semibold">Anemia:</span> {message?.anemia}</li>
                        <li><span className="font-semibold">Jaundice:</span> {message?.jaundice}</li>
                      </ul>
                    </div>
                    {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="font-light text-gray-700">
                      Prescription: <br />
                    </p> */}
                  </div>
                </div>
                {/* )}  */}


              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Anemia;
