import ChatbotIcon from "./components/chatbotlcon";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
           
          </div>
           <span className="material-symbols-outlined">keyboard_arrow_down</span>


        </div>
      </div>
    </div>
  );
}

export default App;
