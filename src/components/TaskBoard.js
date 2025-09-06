import { useState } from "react";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Build UI", status: "In Progress" },
    { id: 2, title: "Setup Backend", status: "Pending" },
  ]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3">Team Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between p-2 border rounded-md bg-gray-50"
          >
            <span>{t.title}</span>
            <span className="text-sm text-gray-600">{t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
