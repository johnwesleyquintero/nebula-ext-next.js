import { NextApiRequest, NextApiResponse } from 'next';
import { googleSheetsService } from '@/services/googleSheets';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { reportType, dateRange, columns, asins, destination } = req.body;

    // Here you would implement the logic to fetch data from Amazon's API
    // This is a placeholder for the actual data fetching
    const data = [
      columns, // Header row
      ['Sample Data 1', '100', '200', '300'],
      ['Sample Data 2', '150', '250', '350'],
    ];

    let result;

    switch (destination) {
      case 'csv':
        // Implementation for CSV download
        result = {
          type: 'csv',
          data: data.map(row => row.join(',')).join('\n'),
        };
        break;

      case 'drive':
        // Implementation for Google Drive upload
        const spreadsheetId = await googleSheetsService.createSpreadsheet(
          `Amazon Report - ${new Date().toISOString()}`,
          data
        );
        result = {
          type: 'drive',
          spreadsheetId,
        };
        break;

      default:
        throw new Error('Invalid destination');
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ message: 'Error generating report' });
  }
}