import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Authentication/Login.jsx'
import Home from './components/Home.jsx'
import Signup from './components/Authentication/Signup.jsx'
import Anemia from './components/Dashboard/Anemia.jsx'
import Profile from './components/Profile/Profile.jsx'
import UpdateDetail from './components/UpdateDetail/UpdateDetail.jsx'
import HealthRecord from './components/HealthRecord/HealthRecord.jsx'
import TestDetails from './components/TestDetails/TestDetails.jsx'
import Test from './components/Test/Test.jsx'
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} ></Route>
      <Route path='/anemia' element={<Anemia />} ></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/update-detail' element={<UpdateDetail/>}></Route>
      <Route path='/test-details' element={<TestDetails/>}></Route>
      <Route path='/test' element={<ProtectedRoute><Test/></ProtectedRoute>}></Route>
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="/health-record" element={<ProtectedRoute><HealthRecord /></ProtectedRoute>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
