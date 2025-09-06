import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add new project
  const addProject = async (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) return;
    try {
      await api.post("/projects", newProject);
      setNewProject({ name: "", description: "" });
      fetchProjects(); // refresh projects
    } catch (err) {
      console.error("Error adding project", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {/* Add project form */}
      <form onSubmit={addProject} className="mb-6">
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          disabled={!newProject.name.trim()}
          className={`px-4 py-2 rounded text-white ${
            newProject.name ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add
        </button>
      </form>

      {/* Project list */}
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p._id} className="border p-3 mb-2 rounded">
              <h3 className="font-bold">{p.name}</h3>
              <p>{p.description}</p>
              <small className="text-gray-500">
                Created: {new Date(p.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
