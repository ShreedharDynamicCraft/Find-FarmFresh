import { useState } from "react";
import { PhoneCall, Send, User } from "lucide-react";

export default function TalkToSpecialist({ questionTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "system",
      content:
        "Welcome to the specialist chat. How can we help you with your question today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatHistory([...chatHistory, userMessage]);
    setMessage("");

    setTimeout(() => {
      const specialistMessage = {
        id: chatHistory.length + 2,
        sender: "specialist",
        content: getSpecialistResponse(message, questionTitle),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setChatHistory((prev) => [...prev, specialistMessage]);
    }, 1000);
  };

  const getSpecialistResponse = (userMessage, title) => {
    const responses = [
      `Thank you for your question about "${title}". Our agricultural experts recommend checking soil moisture levels and ensuring proper drainage.`,
      `Based on your question, I'd suggest looking into organic pest control methods that are safe for your crops and beneficial insects.`,
      `That's a common issue many farmers face. Have you considered crop rotation as a solution? It can help prevent soil depletion and reduce pest problems.`,
      `Great question! For this specific issue, monitoring pH levels in your soil might provide valuable insights. Would you like me to explain how to do a simple soil test?`,
      `I understand your concern. Many farmers in your region have had success with drought-resistant varieties. Would you like specific recommendations?`,
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="mb-6">
      <div className="border border-green-200 bg-green-50 rounded-lg p-4 shadow-md">
        <div className="pb-3">
          <h2 className="text-lg font-semibold text-green-800 flex items-center">
            <PhoneCall className="mr-2 h-5 w-5" />
            Talk to an Agriculture Specialist
          </h2>
          <p className="text-sm text-gray-600">
            Get expert advice about your farming question from our specialists.
          </p>
        </div>

        {!isOpen ? (
          <div className="mt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition"
            >
              Start Chat with Specialist
            </button>
          </div>
        ) : (
          <>
            <div className="h-64 overflow-y-auto border rounded-md p-3 bg-white mb-3">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {msg.sender === "specialist" && (
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                        SP
                      </div>
                    )}

                    {msg.sender === "user" && (
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                        <User className="h-4 w-4" />
                      </div>
                    )}

                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        msg.sender === "user"
                          ? "bg-green-700 text-white"
                          : msg.sender === "specialist"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-gray-200 text-gray-600 italic"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <textarea
                placeholder="Type your message to the specialist..."
                className="min-h-10 resize-none border border-gray-300 rounded-md p-2 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-2">
              Our specialists typically respond within a few minutes during
              business hours.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
