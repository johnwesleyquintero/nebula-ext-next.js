import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function Settings() {
  const [googleSheetId, setGoogleSheetId] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', { googleSheetId, apiKey });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Google Sheet ID
            </label>
            <input
              type="text"
              value={googleSheetId}
              onChange={(e) => setGoogleSheetId(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Google Sheet ID"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amazon API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter API Key"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Settings
          </button>
        </div>
      </div>
    </Layout>
  );
}