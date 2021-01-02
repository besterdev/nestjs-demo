import "./App.css";

import React, { useEffect, useState } from "react";

type AppProps = {
  message?: string;
};

function App(props: AppProps) {
  const [courses, setCourses] = useState<any[]>([]);

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
          <li key={item.id}>
            {item.number} - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
