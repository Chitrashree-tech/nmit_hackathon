import React, { useEffect, useState } from "react";
import API from "../api";

export default function TaskBoard({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (projectId) fetchTasks();
  }, [projectId]);

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${projectId}`);
    setTasks(res.data);
  };

  const addTask = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await API.post("/tasks", {
      title,
      description: "",
      assignee: user._id,
      project: projectId,
    });
    setTitle("");
    fetchTasks();
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Tasks</h3>
      <div className="flex mb-4">
        <input className="border p-2 flex-grow" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task" />
        <button className="bg-green-500 text-white px-3 ml-2 rounded" onClick={addTask}>+</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t._id} className="border p-2 mb-2">
            {t.title} - {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
