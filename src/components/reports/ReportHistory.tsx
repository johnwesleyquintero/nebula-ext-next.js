import { useState, useEffect } from 'react';

interface Report {
  id: string;
  type: string;
  date: string;
  status: 'completed' | 'failed' | 'processing';
  downloadUrl?: string;
}

export default function ReportHistory() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    // Fetch report history
    const fetchReports = async () => {
      // Implementation here
    };
    fetchReports();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium">Report History</h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {reports.map((report) => (
            <li key={report.id} className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {report.type}
                  </p>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
                {report.downloadUrl && (
                  <a
                    href={report.downloadUrl}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Download
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}