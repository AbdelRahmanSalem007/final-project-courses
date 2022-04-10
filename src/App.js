import { Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import PricingPage from "./views/PricingPage";
import Home from "./views/Home";
import Header from "./components/shared/Header";
import CoursesPage from "./views/CoursesPage";
import Profile from "./components/instructor/Profile";
import MyLearningPage from "./views/MyLearningPage";
import CoursesLessons from "./components/Courses-Lessons/CoursesLesson";
import StudentSetting from "./components/Student/StudentSettings";
import ForgetPassword from "./components/registeration/ForgetPassword";
import CourseDetails from "./components/courses/CourseDetails";

// styling
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="my-learning" element={<MyLearningPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ForgetPassword />} />
          <Route path="course-lessons" element={<CoursesLessons />} />
          <Route path="student-settings" element={<StudentSetting />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
