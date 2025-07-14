import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import CoursesPage from './pages/Courses/Courses';
import CourseDetail from './components/CourseDetail/CourseDetail';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
