import React, { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await API.post("/projects", { name: newProject, userId: user._id });
    setNewProject("");
    fetchProjects();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="flex mb-4">
        <input className="border p-2 flex-grow" value={newProject} onChange={(e) => setNewProject(e.target.value)} placeholder="New project name" />
        <button className="bg-blue-500 text-white px-4 ml-2 rounded" onClick={createProject}>+</button>
      </div>
      <ul>
        {projects.map((p) => (
          <li key={p._id} className="border-b py-2">{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
