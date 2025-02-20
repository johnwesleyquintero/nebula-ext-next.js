// Header.tsx
import Login from '../auth/Login';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Amazon Analytics Extension</h1>
        <Login />
      </div>
    </header>
  );
}