export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">SynergySphere</h1>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-3 py-1 rounded">Login</button>
          <button className="bg-white text-blue-600 px-3 py-1 rounded">Signup</button>
        </div>
      </nav>
    );
  }
  