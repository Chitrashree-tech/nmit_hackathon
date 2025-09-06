import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hey team!" },
    { user: "Bob", text: "Let’s finish the dashboard." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-80 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">Team Chat</h2>
      <div className="flex-1 overflow-y-auto mb-2 space-y-1">
        {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.user}:</strong> {m.text}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border flex-1 rounded-l-md p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
