import { useState } from "react";

export default function RemindersPage() {
  const [reminders, setReminders] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setReminders((prev) => [...prev, input.trim()]);
    setInput("");
  };

  const handleDelete = (index) => {
    setReminders((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Reminders</h1>

      <div className="mb-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="e.g. Drink water at 3PM"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {reminders.map((reminder, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
          >
            <span>{reminder}</span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
