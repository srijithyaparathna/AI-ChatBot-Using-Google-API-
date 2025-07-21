# 💬 React Chatbot UI

This is a simple and responsive chatbot interface built using **React**. It allows users to send messages, get AI responses via API, and provides a toggle button to show/hide the chatbot.

---

## ✨ Features

- 📩 Send and receive chat messages
- 🔄 Smooth toggle with rotating button
- 🧠 Dynamic AI responses from API (like OpenAI)
- 💅 Responsive UI with animation and styling
- ⚙️ Environment-based API configuration using `.env`

---

## 🚀 Getting Started

### 1. Clone the Repository


git clone https://github.com/yourusername/react-chatbot-ui.git
cd react-chatbot-ui
npm install
VITE_API_URL=https://your-api-endpoint.com/api
src/
├── components/
│   ├── ChatMessage.jsx      # Renders each message (user/bot)
│   ├── ChatForm.jsx         # Input form for user messages
│   └── ChatbotIcon.jsx      # Bot avatar/icon
├── App.jsx                  # Main component (handles toggle, chat logic)
├── main.jsx                 # React entry point
├── index.css                # Global styles
└── ...
