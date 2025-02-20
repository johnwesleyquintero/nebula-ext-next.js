import { BusinessReportData } from '@/types';

export const formatDataForExport = (
  data: BusinessReportData[],
  columns: string[]
): string[][] => {
  const header = columns;
  const rows = data.map(item => {
    return columns.map(column => {
      switch (column) {
        case 'Title':
          return item.title;
        case 'Sessions - Mobile App':
          return item.sessions.mobileApp.toString();
        case 'Sessions - Mobile App - B2B':
          return item.sessions.mobileAppB2B.toString();
        // Add more cases for other columns
        default:
          return '';
      }
    });
  });

  return [header, ...rows];
};

export const validateAsins = (asins: string[]): boolean => {
  const asinRegex = /^[A-Z0-9]{10}$/;
  return asins.every(asin => asinRegex.test(asin));
};

export const parseCSV = (csv: string): string[][] => {
  return csv
    .split('\n')
    .map(row => row.split(',').map(cell => cell.trim()));
};