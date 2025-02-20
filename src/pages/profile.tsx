import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '@/components/layout/Layout';

export default function Profile() {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
  });

  const handleSave = async () => {
    // Save profile settings
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Profile Settings</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications(prev => ({
                    ...prev,
                    email: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                <span className="ml-2">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications.browser}
                  onChange={(e) => setNotifications(prev => ({
                    ...prev,
                    browser: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                <span className="ml-2">Browser notifications</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </Layout>
  );
}