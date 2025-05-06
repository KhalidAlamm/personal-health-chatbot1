import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Personal Health Chatbot</div>
        <div className="space-x-4">
          <Link
            to="/"
            className={`hover:underline ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
          >
            Chat
          </Link>
          <Link
            to="/profile"
            className={`hover:underline ${pathname === '/profile' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
          >
            Profile
          </Link>
          <Link
            to="/reminders"
            className={`hover:underline ${pathname === '/reminders' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
          >
            Reminders
          </Link>
        </div>
      </div>
    </nav>
  );
}
