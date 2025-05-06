import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import RemindersPage from './pages/RemindersPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-6 flex justify-center">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reminders" element={<RemindersPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
