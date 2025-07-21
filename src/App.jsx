import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/chatbotlcon";
import ChatForm from "./components/chatform";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const chatBodyRef = useRef();

  const toggleChatbot = () => setIsVisible((prev) => !prev);
  const closeChatbot = () => setIsVisible(false);

  const generateBotResponse = async (userMessage) => {
    const formattedHistory = [...chatHistory, userMessage].map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) throw new Error("❌ API URL is not set in .env");

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });

      const data = await response.json();
      console.log("Full API response:", data);
      console.log("First candidate:", data.candidates[0]);

      if (!response.ok) throw new Error(data?.error?.message || "Something went wrong");

      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        ?.trim();

      if (!responseText) throw new Error("⚠️ Empty or invalid response from server");

      setChatHistory((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((msg) => msg.text === "Thinking...");
        if (index !== -1) {
          updated[index] = { role: "model", text: responseText };
        }
        return updated;
      });
    } catch (error) {
      console.error("Error generating bot response:", error.message);
      setChatHistory((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((msg) => msg.text === "Thinking...");
        if (index !== -1) {
          updated[index] = {
            role: "model",
            text: "⚠️ Failed to get response. Try again later.",
          };
        }
        return updated;
      });
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      setTimeout(() => {
        const el = chatBodyRef.current;
        el.scrollTop = el.scrollHeight - el.clientHeight;
      }, 50);
    }
  }, [chatHistory]);

  return (
    <div className={`container ${isVisible ? "show-chatbot" : ""}`}>
      <button id="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>

      <div className={`chatbot-popup ${isVisible ? "show" : "hide"}`}>

        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-outlined" onClick={closeChatbot}>
            keyboard_arrow_down
          </button>
        </div>

        {/* Chat Body */}
        <div className="chat-body" ref={chatBodyRef}>
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> Hello! How can I assist you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chat Footer */}
        <div className="chat-footer">
          <ChatForm
            setchatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
