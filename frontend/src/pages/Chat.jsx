import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div className="h-screen flex flex-col bg-[#FDFBF7]">
      <ChatBox room="public" />
    </div>
  );
}