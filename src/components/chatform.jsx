import React, { useRef } from "react";

const ChatForm = ({ setchatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    setchatHistory((prev) => [
      ...prev,
      { role: "user", text: userMessage },
      { role: "model", text: "Thinking..." },
    ]);

    generateBotResponse({ role: "user", text: userMessage });
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button type="submit" className="material-symbols-outlined">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
