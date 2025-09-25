import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import WelcomeModal from './components/WelcomeModal';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedChatbot');
    if (!hasVisited) {
      setShowWelcomeModal(true);
    }
  }, []);

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('hasVisitedChatbot', 'true');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sendMessage = async (message) => {
    const newMessages = [...messages, { role: 'user', parts: [message] }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: message,
          history: messages 
        }),
      });

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botMessage = '';

      setMessages([...newMessages, { role: 'model', parts: [''] }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        botMessage += decoder.decode(value, { stream: true });
        setMessages([...newMessages, { role: 'model', parts: [botMessage] }]);
      }

      const separator = "---";
      const parts = botMessage.split(separator);
      let finalMessage = botMessage;
      let suggestions = [];

      if (parts.length > 1) {
        finalMessage = parts[0];
        suggestions = parts[1]
          .split('\n')
          .filter(s => s.trim().startsWith('*'))
          .map(s => s.replace('*', '').trim());
      }

      setMessages([...newMessages, { role: 'model', parts: [finalMessage], suggestedQuestions: suggestions }]);

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, { role: 'model', parts: ['Error: No se pudo conectar con el servidor.'] }]);
    } finally {
      setIsTyping(false);
    }
  };

  const sendExampleMessage = (message) => {
    sendMessage(message);
  };

  return (
    <div className="app-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} sendExampleMessage={sendExampleMessage} />
      <ChatArea messages={messages} isTyping={isTyping} sendMessage={sendMessage} />
      {showWelcomeModal && (
        <WelcomeModal onClose={closeWelcomeModal} theme={theme} />
      )}
    </div>
  );
}

export default App;
