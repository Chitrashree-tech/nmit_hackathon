
import React, { useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!user) return <Auth setUser={setUser} />;

  return (
    <div className="grid grid-cols-2">
      {!selectedProject ? (
        <Dashboard user={user} setSelectedProject={setSelectedProject} />
      ) : (
        <div>
          <Tasks project={selectedProject} />
          <Chat project={selectedProject} />
          <button onClick={() => setSelectedProject(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;