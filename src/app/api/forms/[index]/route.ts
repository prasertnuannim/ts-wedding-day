import { verifyToken } from "@/app/utils/auth";
import GoogleSheetsService from "@/services/googleSheetService";
import { headers } from "next/headers";
const googleSheetsService = new GoogleSheetsService();
export async function PUT(request: Request, { params }: { params: Promise<{ index: string }> }) {
    const headersList = await headers();
    const Authorization = headersList.get("Authorization");
    const token = Authorization?.split("Bearer ");
    verifyToken(token?.[1] || "");

    const index = (await params).index;
    const res = await request.json();
    const { phone, name, description } = res;
    await googleSheetsService.updateForm(Number(index), phone, name, description);
    return Response.json({ message: "Form updated successfully" });
}
export async function DELETE(request: Request, { params }: { params: Promise<{ index: string }> }) {
    const headersList = await headers();
    const Authorization = headersList.get("Authorization");
    const token = Authorization?.split("Bearer ");
    verifyToken(token?.[1] || "");

    const index = (await params).index;
    await googleSheetsService.deleteForm(Number(index));
    return Response.json({ message: "Form deleted successfully" });
}
