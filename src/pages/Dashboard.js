import TaskBoard from "../components/TaskBoard";
import ChatBox from "../components/ChatBox";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <TaskBoard />
      <ChatBox />
    </div>
  );
}
