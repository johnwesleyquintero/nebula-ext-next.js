import axios from 'axios';

export interface ReportRequest {
  reportType: 'business' | 'search' | 'catalog';
  startDate: string;
  endDate: string;
  columns: string[];
  asins?: string[];
}

export class ReportService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = '/api/reports';
  }

  async generateReport(data: ReportRequest) {
    try {
      const response = await axios.post(`${this.baseUrl}/generate`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getReportHistory() {
    try {
      const response = await axios.get(`${this.baseUrl}/history`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      return {
        message: error.response?.data?.message || 'An error occurred',
        status: error.response?.status
      };
    }
    return { message: 'An unexpected error occurred' };
  }
}

export const reportService = new ReportService();