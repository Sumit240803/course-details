// UserDashboard.js
import React from 'react' 
import { useState } from 'react';
import courseData from '../data/CourseData'; // Adjust the path

const UserDashboard = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
  
    // Simulate user's enrolled courses
    // In a real-world scenario, you would fetch this data from the server based on user authentication.
    const userId = 101; // Assuming the user with ID 101
    const userEnrolledCourses = courseData.filter((course) =>
      course.students.some((student) => student.id === userId)
    );
  
    // Initialize progress status for each course
    const initialProgress = Object.fromEntries(
      userEnrolledCourses.map((course) => [course.id, false])
    );
    const [courseProgress, setCourseProgress] = useState(initialProgress);
  
    const handleCourseCompletion = (courseId) => {
      setCourseProgress((prevProgress) => ({
        ...prevProgress,
        [courseId]: true,
      }));
    };
  
    return (
      <div>
        <h2>User Dashboard</h2>
        <ul>
          {userEnrolledCourses.map((course) => (
            <li key={course.id}>
              <div>
                <h3>{course.name}</h3>
                <p>Instructor: {course.instructor}</p>
                <img src={course.thumbnail} alt={`${course.name} thumbnail`} />
                <p>Due Date: {course.dueDate || 'Not specified'}</p>
                <div>
                  Progress:
                  <progress
                    value={courseProgress[course.id] ? 100 : 0}
                    max="100"
                  ></progress>
                </div>
                <button
                  onClick={() => handleCourseCompletion(course.id)}
                  disabled={courseProgress[course.id]}
                >
                  Mark as Completed
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserDashboard;
