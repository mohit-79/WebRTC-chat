import { UserButton } from "@clerk/clerk-react";

import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div className="h-screen flex flex-col bg-[#FDFBF7]">
    <UserButton />
      <ChatBox room="public" />
    </div>
  );
}