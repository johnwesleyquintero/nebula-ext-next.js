// src/types/index.ts

// Report Types
export interface ReportOptions {
  reportType: 'business' | 'search-query' | 'catalog' | 'top-search';
  dateRange: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  columns: string[];
  asins?: string[];
  destination: 'csv' | 'drive' | 'sheets';
}

export interface ReportResponse {
  type: 'csv' | 'drive';
  data?: string;
  spreadsheetId?: string;
  error?: string;
}

// Amazon Data Types
export interface BusinessReportData {
  title: string;
  sessions: {
    mobileApp: number;
    mobileAppB2B: number;
    browser: number;
    browserB2B: number;
    total: number;
    totalB2B: number;
  };
  sessionPercentage: {
    mobileApp: number;
    mobileAppB2B: number;
    browser: number;
    browserB2B: number;
    total: number;
    totalB2B: number;
  };
  pageViews: {
    mobileApp: number;
  };
}

// Auth Types
export interface UserSession extends Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    accessToken?: string;
  };
}

// API Types
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}