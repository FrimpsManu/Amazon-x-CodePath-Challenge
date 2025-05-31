import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you with your food reservation today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: newMessages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const reply = res.data.choices[0].message.content;
      setMessages([...newMessages, { sender: 'bot', text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { sender: 'bot', text: 'Oops, something went wrong!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 z-50 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {visible ? 'Close Chat' : 'Chat with Us'}
      </button>

      {visible && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
          <div className="h-60 overflow-y-auto mb-2 space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-2 rounded ${msg.sender === 'user' ? 'bg-orange-100' : 'bg-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 px-2 py-1 border rounded text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="text-white bg-orange-500 px-3 py-1 rounded text-sm"
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
