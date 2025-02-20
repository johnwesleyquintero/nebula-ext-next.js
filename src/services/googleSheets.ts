// src/services/googleSheets.ts
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export class GoogleSheetsService {
  private auth: OAuth2Client;

  constructor() {
    this.auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
  }

  async createSpreadsheet(title: string, data: any[][]) {
    const sheets = google.sheets({ version: 'v4', auth: this.auth });

    try {
      // Create new spreadsheet
      const spreadsheet = await sheets.spreadsheets.create({
        requestBody: {
          properties: {
            title,
          },
        },
      });

      const spreadsheetId = spreadsheet.data.spreadsheetId;

      // Write data to the spreadsheet
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        requestBody: {
          values: data,
        },
      });

      return spreadsheetId;
    } catch (error) {
      console.error('Error creating spreadsheet:', error);
      throw error;
    }
  }

  async appendToSheet(spreadsheetId: string, range: string, data: any[][]) {
    const sheets = google.sheets({ version: 'v4', auth: this.auth });

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: data,
        },
      });
    } catch (error) {
      console.error('Error appending to sheet:', error);
      throw error;
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();