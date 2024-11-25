import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return unsubscribe;
  }, []);

  const handleSend = async () => {
    if (newMessage.trim()) {
      const messagesRef = collection(db, "messages");
      await addDoc(messagesRef, {
        text: newMessage,
        timestamp: new Date(),
      });
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 bg-blue-500 text-white">SmartSapp</header>
      <main className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <p className="p-2 bg-gray-200 rounded">{msg.text}</p>
          </div>
        ))}
      </main>
      <footer className="flex p-4 bg-gray-100">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </footer>
    </div>
  );
};

export default ChatRoom;
