import { useState, useRef, useEffect } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messageEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    // Simulated assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sample response.' },
      ]);
    }, 800);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] w-full max-w-2xl mx-auto">
      {/* Message Container */}
      <div className="flex-1 overflow-y-auto bg-white border rounded p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.role === 'user' ? 'right' : 'left'}`}>
            <span className={`inline-block px-4 py-2 rounded ${
              msg.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}>
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Input Box at Bottom */}
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
