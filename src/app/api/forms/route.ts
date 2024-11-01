import { NextApiRequest, NextApiResponse } from "next";
import GoogleSheetsService from "@/services/googleSheetService";
import { headers } from 'next/headers'
import { verifyToken } from "@/app/utils/auth";

const googleSheetsService = new GoogleSheetsService();
export async function GET() {
    const forms = await googleSheetsService.getAllForms();
    return Response.json({ forms });
}

export async function POST(request: Request) {
    const headersList = await headers()
    const Authorization = headersList.get('Authorization')
    const token = Authorization?.split("Bearer ")
    verifyToken(token?.[1] || "")

    const res = await request.json();
    const { phone, name, description } = res;
    await googleSheetsService.addForm(phone, name, description);
    return Response.json({ message: "Form added successfully" });
}
