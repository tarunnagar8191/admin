import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Lecture from "./Pages/Lectures/Lectures"
import DashBoard from "./Pages/DashBoard/DashBoard";
import AddLecture from "./Pages/Lectures/AddLecture";
import Subject from "./Pages/Subject/Subject";
import AddSubject from "./Pages/Subject/AddSubject";
import AddTopic from "./Pages/Topic/AddTopic";
import Topic from "./Pages/Topic/Topic";
import Login from "./Pages/Login/Login";
import ValidateOtp from "./Pages/Login/ValidateOtp";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import UpdateSubject from "./Pages/Subject/UpdateSubject";
// import {ReactQueryDevTools} from "react-query/devtools"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddMcqSubject from "./Pages/Mcq/AddMcqSubject";
import McqSubject from "./Pages/Mcq/McqSubject";
import AddMcq from "./Pages/Mcq/AddMcq";
import AddMcqTest from "./Pages/Mcq/AddMcqTest";



function App() {


  return (
    <>
    <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/subject"
          element={
            <PrivateRoute>
              <Subject />
            </PrivateRoute>
          }
        />
         <Route
          path="/add-subject"
          element={
            <PrivateRoute>
              <AddSubject />
            </PrivateRoute>
          }
        />
         <Route
          path="/update-subject/:id"
          element={
            <PrivateRoute>
              <UpdateSubject />
            </PrivateRoute>
          }
        />
        <Route
          path="/topic/:id"
          element={
            <PrivateRoute>
              <Topic />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-topic/:id"
          element={
            <PrivateRoute>
              <AddTopic />
            </PrivateRoute>
          }
        /><Route
        path="/lecture"
        element={
          <PrivateRoute>
            <Lecture />
          </PrivateRoute>
        }
      /><Route
      path="/add-lecture"
      element={
        <PrivateRoute>
          <AddLecture />
        </PrivateRoute>
      }
    />
    <Route
      path="/add-mcqSubject"
      element={
        <PrivateRoute>
          <AddMcqSubject />
        </PrivateRoute>
      }
    /><Route
    path="/mcqSubject"
    element={
      <PrivateRoute>
        <McqSubject />
      </PrivateRoute>
    }
  />
   <Route
      path="/add-mcq/:id"
      element={
        <PrivateRoute>
          <AddMcq />
        </PrivateRoute>
      }
    />
    <Route
      path="/add-mcqTest/:id"
      element={
        <PrivateRoute>
          <AddMcqTest />
        </PrivateRoute>
      }
    />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-validate" element={<ValidateOtp />} />
        </Routes>
        <ToastContainer />

    </>
        
  );
}

export default App;