export default function Sidebar() {
    return (
      <aside className="bg-gray-100 w-64 h-screen p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-3">
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-600 cursor-pointer">Tasks</li>
          <li className="hover:text-blue-600 cursor-pointer">Chat</li>
          <li className="hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </aside>
    );
  }
  