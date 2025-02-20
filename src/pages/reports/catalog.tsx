// src/pages/reports/catalog.tsx
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DateRangePicker from '@/components/reports/DateRangePicker';
import ColumnSelector from '@/components/reports/ColumnSelector';

export default function CatalogReport() {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [asinList, setAsinList] = useState('');

  const handleDateChange = (startDate: string, endDate: string) => {
    console.log('Date range:', startDate, endDate);
  };

  const handleSubmit = async () => {
    const asins = asinList.split('\n').map(asin => asin.trim()).filter(Boolean);
    // Handle report generation
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Catalog Performance Report</h1>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">ASIN List</h2>
          <textarea
            value={asinList}
            onChange={(e) => setAsinList(e.target.value)}
            placeholder="Enter ASINs (one per line)"
            className="w-full h-32 p-2 border rounded"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Date Range</h2>
          <DateRangePicker onDateChange={handleDateChange} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4">Select Metrics</h2>
          <ColumnSelector onSelect={setSelectedColumns} />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Generate Report
        </button>
      </div>
    </Layout>
  );
}