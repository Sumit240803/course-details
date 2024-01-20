import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails'
import CourseList from './components/CourseList'
import StudentDashboard from './components/StudentDashboard'
function App() {
    return (
        <Router> 
             <Routes> 
                <Route path="/" element={<CourseList/>} /> 
                <Route path="/course/:id" element={<CourseDetails/>} /> 
                <Route path="/dashboard" element={<StudentDashboard/>} /> 
            </Routes> 
        </Router>
    )
}

export default App;