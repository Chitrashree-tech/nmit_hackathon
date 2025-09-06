// src/components/Chat.js
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Chat({ project }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "projects", project.id, "messages"), orderBy("timestamp"));
    const unsub = onSnapshot(q, snap => {
      setMessages(snap.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, [project.id]);

  const sendMessage = async () => {
    await addDoc(collection(db, "projects", project.id, "messages"), {
      senderId: auth.currentUser.uid,
      text,
      timestamp: new Date()
    });
    setText("");
  };

  return (
    <div className="p-4">
      <h3>Chat</h3>
      <div className="h-40 overflow-y-auto border p-2">
        {messages.map((m, i) => (
          <p key={i}><b>{m.senderId}</b>: {m.text}</p>
        ))}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
