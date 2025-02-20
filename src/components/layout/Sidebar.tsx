// Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
      icon: 'HomeIcon',
    },
    {
      name: 'Business Reports',
      href: '/reports/business',
      icon: 'ChartBarIcon',
    },
    {
      name: 'Search Analytics',
      href: '/reports/search-query',
      icon: 'SearchIcon',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: 'CogIcon',
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-50 border-r">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}