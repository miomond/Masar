import { Route } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Subscribtion from "./Pages/Subscribtion";
import StudentLogin from "./Pages/StudentLogin";
import StudentRegister from "./Pages/StudentRegister";
import TeacherLogin from "./Pages/TeacherLogin";
import TeacherRegister from "./Pages/TeacherRegister";
import CourseDetails from "./Pages/StudentLauout/CourseDetails";
import LessonDetails from "./Pages/StudentLauout/LessonDetails";

import TProfile from "./Pages/TeacherLayout/TProfile";
import TeacherLay from "./Pages/TeacherLayout/TeacherLay";
import Tcources from "./Pages/TeacherLayout/Tcources";
import TSittings from "./Pages/TeacherLayout/TSittings";
import { AuthProvider, useAuth } from "./context/auth";
import { RequireAuth } from "./context/RequireAuth";
import Homy from "./Pages/Homy";
import SingleEvent from "./Pages/SingleEvent";
import EventsPage from "./Pages/Events";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <>
      <AuthProvider>
        {/*  */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Homy" element={<Homy />} />
            <Route path="about" element={<About />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="eventsingle" element={<SingleEvent />} />

            <Route path="Subscribtion" element={<Subscribtion />} />
            <Route path="StudentLogin" element={<StudentLogin />} />
            <Route path="StudentRegister" element={<StudentRegister />} />
            <Route path="TeacherLogin" element={<TeacherLogin />} />
            <Route path="TeacherRegister" element={<TeacherRegister />} />
            <Route path="CourseDetails" element={<CourseDetails />} />
            <Route path="LessonVideo" element={<LessonDetails />} />
            <Route
              path="/Teacherprofile"
              element={
                <RequireAuth>
                  <TeacherLay />
                </RequireAuth>
              }
            >
              <Route path="profile" element={<TProfile />} />
              <Route path="cources" element={<Tcources />} />
              <Route path="Sittings" element={<TSittings />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
