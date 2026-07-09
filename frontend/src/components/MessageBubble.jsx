export default function MessageBubble({ message, isSelf }) {
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[70%] px-3 py-2 rounded-xl border-2 border-[#1A1A1A] text-[15px] ${isSelf ? "bg-[#FFD3B6]" : "bg-white"}`}>
        {!isSelf && <div className="text-xs font-bold mb-0.5">{message.sender}</div>}
        <div>{message.text}</div>
      </div>
    </div>
  );
}