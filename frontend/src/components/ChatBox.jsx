import { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../services/chatService";
import MessageBubble from "./MessageBubble";
import { useAuth } from "@clerk/clerk-react";

const ME = "Mohit"; // hardcoded until Clerk lands in Commit 14

export default function ChatBox({ room }) {
const { userId } = useAuth();
//after clerk
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const loadMessages = async () => {
    const res = await getMessages(room);
    setMessages(res.data.reverse()); // backend sorts newest-first for pagination; UI wants oldest-first
  };

  useEffect(() => { loadMessages(); }, [room]);

  const handleSend = async () => {
    if (!text.trim()) return;
    await sendMessage({ room, text }); //sender is decided by backend
    setText("");
    await loadMessages();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      <div className="px-4 py-3 border-b-2 border-[#1A1A1A] bg-white font-black text-lg"># {room}</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 && (
          <div className="text-center text-[#4A4A4A] mt-12">No messages yet — send the first one.</div>
        )}
        {messages.map((m) => (
          <MessageBubble key={m._id} message={m} isSelf={m.sender === userId} />
        ))}
      </div>

      <div className="p-3 border-t-2 border-[#1A1A1A] bg-white flex items-end gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 resize-none border-2 border-[#1A1A1A] rounded-xl px-3 py-2 text-[15px]"
        />
        <button onClick={handleSend} disabled={!text.trim()}
          className="border-2 border-[#1A1A1A] bg-[#FFD3B6] rounded-xl px-4 py-2 font-bold disabled:opacity-50">
          Send
        </button>
      </div>
    </div>
  );
}