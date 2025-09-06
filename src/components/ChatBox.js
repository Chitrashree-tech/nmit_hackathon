import React, { useEffect, useState } from "react";
import API from "../api";

export default function ChatBox({ projectId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (projectId) fetchMessages();
  }, [projectId]);

  const fetchMessages = async () => {
    const res = await API.get(`/messages/${projectId}`);
    setMessages(res.data);
  };

  const sendMessage = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await API.post("/messages", { user: user._id, project: projectId, text });
    setText("");
    fetchMessages();
  };

  return (
    <div className="p-4 border-t">
      <h3 className="font-bold mb-2">Chat</h3>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((m) => (
          <div key={m._id} className="mb-1">
            <b>{m.user?.name || "User"}:</b> {m.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input className="border p-2 flex-grow" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type message" />
        <button className="bg-blue-500 text-white px-3 ml-2 rounded" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
