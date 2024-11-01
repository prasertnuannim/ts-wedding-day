import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import jwt from "jsonwebtoken";

const THAIBULKSMS_OTP_API_URL = "https://otp.thaibulksms.com/v2/otp";
const API_KEY = process.env.THAIBULKSMS_API_KEY as string;
const API_SECRET = process.env.THAIBULKSMS_API_SECRET as string;

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";
export async function POST(request: NextRequest) {
    const { phone, otp, reference } = await request.json();

    if (!phone || !otp || !reference) {
        return NextResponse.json({ message: "Phone number, OTP, and reference are required." }, { status: 400 });
    }

    try {
        const response = await axios.post(
            `${THAIBULKSMS_OTP_API_URL}/verify`,
            {
                key: API_KEY,
                secret: API_SECRET,
                // msisdn: phone,
                pin: otp,
                token: reference,
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        if (response.status === 200) {
            const token = jwt.sign({ phone, reference }, SECRET_KEY, { expiresIn: "1h" });
            return NextResponse.json({ message: "OTP verified successfully", token });
        } else {
            return NextResponse.json(
                { message: "OTP verification failed", error: response.data.status.description },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json({ message: "Error verifying OTP" }, { status: 500 });
    }
}
