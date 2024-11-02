import { google } from "googleapis";
import { sheets_v4 } from "googleapis/build/src/apis/sheets";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = "Forms!A:C";

const googleCredentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_CREDENTIALS || "", "base64").toString("utf-8")
);

class GoogleSheetsService {
  private sheets: sheets_v4.Sheets;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      credentials: googleCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    this.sheets = google.sheets({ version: "v4", auth });
  }

  async getAllForms() {
    const result = await this.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });
    if (!result.data.values) return [];
    const [headers, ...rows] = result.data.values;
    const convertedData = rows.map((row) =>
      row.reduce((acc, value, index) => {
        acc[headers[index]] = value;
        return acc;
      }, {} as Record<string, string>)
    );

    return convertedData;
  }

  async addForm(phone: string, name: string, description: string) {
    const now = new Date();
    const bangkokOffset = 7 * 60; // Bangkok is UTC+7
    const localISOTime = new Date(now.getTime() + bangkokOffset * 60 * 1000)
      .toISOString()
      .replace("Z", "+07:00");
    await this.sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[phone, name, description, localISOTime]],
      },
    });
  }

  async updateForm(
    index: number,
    phone: string,
    name: string,
    description: string,
    createAt?: string
  ) {
    const range = `Forms!A${index + 1}:C${index + 1}`;
    await this.sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[phone, name, description, createAt]],
      },
    });
  }

  async deleteForm(index: number) {
    const range = `Forms!A${index + 1}:C${index + 1}`;
    await this.sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range,
    });
  }
}

export default GoogleSheetsService;
