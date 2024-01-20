import React from 'react'
//import { useState } from 'react'
import courseData from '../data/CourseData'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const CourseCard = ({ course }) => (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={course.thumbnail} className="card-img-top" alt={course.name} />
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text">Instructor: {course.instructor}</p>
        <p className="card-text">Enrollment Status: {course.enrollmentStatus}</p>
        <Link to={`/course/${course.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
  
  const CourseList = () => (
    <div className="d-flex flex-wrap justify-content-around align-items-start p-4">
        
      {courseData.map((course) => (
        <CourseCard key={course.id} course={course} />
        
      ))}
      <button onClick={() => window.location.href = '/dashboard'} className="btn btn-success">
      Go to User Dashboard
    </button>
    </div>
  );
  
export default CourseList;


