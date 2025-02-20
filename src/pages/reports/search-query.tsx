// src/pages/reports/search-query.tsx
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DateRangePicker from '@/components/reports/DateRangePicker';
import ColumnSelector from '@/components/reports/ColumnSelector';

export default function SearchQueryReport() {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const handleDateChange = (startDate: string, endDate: string) => {
    console.log('Date range:', startDate, endDate);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Search Query Report</h1>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Date Range</h2>
          <DateRangePicker onDateChange={handleDateChange} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Select Columns</h2>
          <ColumnSelector onSelect={setSelectedColumns} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Export Options</h2>
          <select className="w-full p-2 border rounded">
            <option value="csv">Download as CSV</option>
            <option value="sheets">Export to Google Sheets</option>
          </select>
          
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Generate Report
          </button>
        </div>
      </div>
    </Layout>
  );
}