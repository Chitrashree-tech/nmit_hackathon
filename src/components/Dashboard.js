// src/components/Dashboard.js
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function Dashboard({ user, setSelectedProject }) {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetchProjects = async () => {
    const q = query(collection(db, "projects"));
    const snapshot = await getDocs(q);
    setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const createProject = async () => {
    await addDoc(collection(db, "projects"), { name, members: [user.uid] });
    setName("");
    fetchProjects();
  };

  useEffect(() => { fetchProjects(); }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl">Projects</h2>
      {projects.map(p => (
        <div key={p.id} className="p-2 border" onClick={() => setSelectedProject(p)}>
          {p.name}
        </div>
      ))}
      <input placeholder="New Project" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={createProject}>+ Add Project</button>
    </div>
  );
}
