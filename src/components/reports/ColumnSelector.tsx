// ColumnSelector.tsx
import { useState } from 'react';

interface ColumnSelectorProps {
  onSelect: (columns: string[]) => void;
}

export default function ColumnSelector({ onSelect }: ColumnSelectorProps) {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const columns = [
    'Title',
    'Sessions - Mobile App',
    'Sessions - Mobile App - B2B',
    'Sessions - Browser',
    'Sessions - Browser - B2B',
    'Sessions - Total',
    'Sessions - Total - B2B',
    'Session Percentage - Mobile App',
    'Session Percentage - Mobile App - B2B',
    'Session Percentage - Browser',
    'Session Percentage - Browser - B2B',
    'Session Percentage - Total',
    'Session Percentage - Total - B2B',
    'Page Views - Mobile App'
  ];

  const handleSelectAll = () => {
    setSelectedColumns(columns);
    onSelect(columns);
  };

  const handleColumnToggle = (column: string) => {
    const updatedColumns = selectedColumns.includes(column)
      ? selectedColumns.filter(c => c !== column)
      : [...selectedColumns, column];
    
    setSelectedColumns(updatedColumns);
    onSelect(updatedColumns);
  };

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-medium">Column Selection</h3>
        <button
          onClick={handleSelectAll}
          className="ml-auto text-sm text-blue-600 hover:text-blue-800"
        >
          Select All
        </button>
      </div>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {columns.map((column) => (
          <label key={column} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedColumns.includes(column)}
              onChange={() => handleColumnToggle(column)}
              className="rounded border-gray-300"
            />
            <span className="text-sm">{column}</span>
          </label>
        ))}
      </div>
    </div>
  );
}