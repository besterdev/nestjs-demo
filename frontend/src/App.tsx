import "./App.css";

import React, { useEffect, useState } from "react";

import { Course } from "./interfaces";
import CourseItem from "./components/CourseItem";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello React</h1>

      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
