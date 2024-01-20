import React from 'react';
import {useParams} from 'react-router-dom';
import courseData from '../data/CourseData';

const CourseDetails = () => {
    const { id } = useParams();
    const course = courseData.find((course) => course.id === parseInt(id, 10));
  
    if (!course) {
      return <div>Loading...</div>;
    }
  
    return (
        <div>
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Prerequisites: {course.prerequisites.join(', ')}</p>
  
        <details>
          <summary>Syllabus</summary>
          <ul>
            {course.syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  };
    
  
  export default CourseDetails;