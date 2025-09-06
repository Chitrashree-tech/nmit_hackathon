import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}

export default App;
