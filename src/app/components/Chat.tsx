"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket: any;

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const startSocket = async () => {
      await fetch("/api/socket"); // 

      socket = io({
        path: "/api/socket",
      });

      socket.on("connect", () => {
        console.log("🟢 Connected to Socket.IO server");
      });

      socket.on("message", (msg: string) => {
        console.log("💬 New message:", msg);
        setMessages((prev) => [...prev, msg]);
      });
    };

    startSocket();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">💬 Live Chat</h1>

      <div className="w-full max-w-md border p-4 mb-4 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-64"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
