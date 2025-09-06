import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">SynergySphere</h2>
      <ul>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">Dashboard</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">Projects</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">Tasks</li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">Messages</li>
      </ul>
    </div>
  );
};

export default Sidebar;
