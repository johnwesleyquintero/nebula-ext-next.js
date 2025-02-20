// Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const navigation = [
    { name: 'Report Fetcher', href: '/reports', icon: 'DocumentIcon' },
    { name: 'UI Enhancements', href: '/ui-enhancements', icon: 'PencilIcon' },
    { name: 'Integrations', href: '/integrations', icon: 'LinkIcon' },
  ];

  return (
    <div className="w-64 bg-gray-100 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          TOOLS
        </h2>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`mt-2 flex items-center px-4 py-2 text-sm rounded-lg
              ${router.pathname === item.href 
                ? 'bg-red-100 text-red-600' 
                : 'text-gray-700 hover:bg-gray-200'}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;