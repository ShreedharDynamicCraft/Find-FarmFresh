import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { PiDotOutlineFill } from "react-icons/pi";

const ChatPage = ({ userRole ,userId}) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help?", sender: "admin" },
    { text: "I need a price quote.", sender: "customer" },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const navigate = useNavigate();

  // Dummy Online/Offline Status
  const isUserOnline = true; // Toggle between true/false for testing

  // Send message
  const sendMessage = () => {
    if (!messageInput.trim()) return;
    setMessages([...messages, { text: messageInput, sender: userId }]);
    setMessageInput("");
  };

  // Submit final price (Admin Only)
  const submitFinalPrice = () => {
    if (!finalPrice.trim()) return;
    navigate("/shopping-cart", { state: { price: finalPrice } });
  };

  // Handle key press for chat input
  const handleChatKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Handle key press for final price input
  const handlePriceKeyPress = (e) => {
    if (e.key === "Enter") {
      submitFinalPrice();
    }
  };

  // Prevent non-numeric input (including "e") in number input
  const handlePriceInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFinalPrice(value);
    }
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-gray-100 to-blue-300">
      {/* Chat Container */}
      <div className="flex flex-col w-3/4 h-screen bg-gray-900 text-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-lg font-semibold">Live Chat</h1>
          {/* Online/Offline Status */}
          <div className="flex items-center space-x-2">
            <PiDotOutlineFill size={25} className="text-green-400"/>
            <span className={`${isUserOnline ? "text-green-400" : "text-red-500"}`}>
              {isUserOnline ? "User Online" : "User Offline"}
            </span>
          </div>
        </div>

        {/* Chat Messages Section */}
        <div className="flex flex-col flex-grow p-6 space-y-3 overflow-auto">
          {messages.length === 0 ? (
            <p className="text-gray-300 text-center">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-xs text-white shadow-lg transition-all duration-200 ${
                  msg.sender === userId
                    ? "bg-blue-500 self-end animate-slideInRight"
                    : "bg-gray-700 self-start animate-slideInLeft"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-gray-800 shadow-md flex items-center gap-3">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-600 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleChatKeyPress} // Enter to send message
          />
          <button
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition transform hover:scale-105"
            onClick={sendMessage}
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>

      {/* Admin Panel for Final Price (Only for Admins) */}
      {userRole === "admin" && (
        <div className="w-1/4 h-screen bg-white p-6 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Final Price</h2>
          <input
            type="text"
            className="p-3 border border-gray-400 rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter final price"
            value={finalPrice}
            onChange={handlePriceInput} // Prevent non-numeric input
            onKeyDown={handlePriceKeyPress} // Enter to submit price
          />
          <button
            className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
            onClick={submitFinalPrice}
          >
            Submit Price
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatPage;