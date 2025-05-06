import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div>
      <div className="h-64 overflow-y-auto border p-3 mb-4 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <div className={`inline-block px-4 py-2 rounded mb-2 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
