// src/pages/reports/business.tsx
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ColumnSelector from '@/components/reports/ColumnSelector';

export default function BusinessReports() {
  const [selectedTab, setSelectedTab] = useState('date');
  const [dateRange, setDateRange] = useState('daily');
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Business Reports</h1>
      
      <Tab.Group>
        <Tab.List className="flex space-x-4 border-b mb-6">
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${
                selected ? 'border-b-2 border-blue-500' : ''
              }`
            }
          >
            By Date
          </Tab>
          <Tab
            className={({ selected }) =>
              `px-4 py-2 ${
                selected ? 'border-b-2 border-blue-500' : ''
              }`
            }
          >
            By ASIN
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            {/* Date Range Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Data date range grouping
              </label>
              <select 
                className="w-full p-2 border rounded"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </select>
            </div>
          </Tab.Panel>
          
          <Tab.Panel>
            {/* ASIN Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Enter ASINs
              </label>
              <textarea 
                className="w-full p-2 border rounded"
                placeholder="Enter up to 100 ASINs (optional)"
                rows={4}
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Export Options */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Choose data destination
        </label>
        <select className="w-full p-2 border rounded">
          <option value="csv">Save CSV file to computer</option>
          <option value="drive">Upload data to Google Drive folder</option>
          <option value="sheets">Write data to Google Sheet</option>
        </select>
      </div>

      // Add this inside the Tab.Panel for date selection, after the date range select
      <div className="mt-4">
        <ColumnSelector onSelect={(columns) => setSelectedColumns(columns)} />
      </div>

      // Update the submit button to include onClick handler
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>

      // Add this function before the return statement
      const handleSubmit = async () => {
        try {
          const response = await fetch('/api/reports/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reportType: 'business',
              dateRange,
              columns: selectedColumns,
              destination: 'drive', // Update this based on selected destination
            }),
          });
      
          const data = await response.json();
      
          if (data.type === 'csv') {
            // Handle CSV download
            const blob = new Blob([data.data], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `amazon-report-${new Date().toISOString()}.csv`;
            a.click();
          } else if (data.type === 'drive') {
            // Handle Google Drive success
            alert('Report successfully saved to Google Drive!');
          }
        } catch (error) {
          console.error('Error submitting report:', error);
          alert('Error generating report. Please try again.');
        }
      };
    </div>
  );
}