// src/components/Tasks.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Tasks({ project }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects", project.id, "tasks"), (snap) => {
      setTasks(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [project.id]);

  const addTask = async () => {
    await addDoc(collection(db, "projects", project.id, "tasks"), {
      title, status: "To-Do"
    });
    setTitle("");
  };

  return (
    <div className="p-4">
      <h3>Tasks for {project.name}</h3>
      {tasks.map(t => (
        <div key={t.id} className="border p-2">
          {t.title} – {t.status}
        </div>
      ))}
      <input placeholder="New Task" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>+ Add Task</button>
    </div>
  );
}

