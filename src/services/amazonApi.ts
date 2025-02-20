// src/services/amazonApi.ts
import axios from 'axios';
import { BusinessReportData, ApiResponse } from '@/types';

export class AmazonApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = process.env.AMAZON_API_URL || '';
    this.apiKey = process.env.AMAZON_API_KEY || '';
  }

  private async request<T>(endpoint: string, params: any): Promise<ApiResponse<T>> {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          'x-api-key': this.apiKey,
        },
        params,
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: error.message,
          status: error.response?.status,
        },
      };
    }
  }

  async getBusinessReport(params: {
    dateRange: string;
    asins?: string[];
  }): Promise<ApiResponse<BusinessReportData[]>> {
    return this.request<BusinessReportData[]>('/business-report', params);
  }
}

export const amazonApiService = new AmazonApiService();