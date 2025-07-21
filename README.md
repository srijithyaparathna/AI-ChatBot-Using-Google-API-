# 💬 React Chatbot UI

This is a simple and responsive chatbot interface built using **React**. It allows users to send messages, get AI responses via API, and provides a toggle button to show/hide the chatbot.

---
<img width="1897" height="883" alt="image" src="https://github.com/user-attachments/assets/0a7903d5-32a6-4505-a2aa-073087bf04a9" />

## ✨ Features

- 📩 Send and receive chat messages
- 🔄 Smooth toggle with rotating button
- 🧠 Dynamic AI responses from API (like OpenAI)
- 💅 Responsive UI with animation and styling
- ⚙️ Environment-based API configuration using `.env`

---
<img width="1899" height="886" alt="image" src="https://github.com/user-attachments/assets/f3f9ac14-197a-4eb1-8889-e01b1d77f5d4" />

## 🚀 Getting Started

### 1. Clone the Repository

<img width="1891" height="889" alt="image" src="https://github.com/user-attachments/assets/d2a08b4e-4785-42b0-9d53-b2b2e4d1a72f" />

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
