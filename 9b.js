// File: App.js
import React from 'react';

function App() {
  const students = ["Abhiram", "Rahul", "Sita", "Vivek", "Kavya"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>List of Students</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {students.map((name, index) => (
          <li key={index} style={{ margin: "8px 0", fontSize: "18px" }}>
            👨‍🎓 {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
