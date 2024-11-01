import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const THAIBULKSMS_OTP_API_URL = "https://otp.thaibulksms.com/v2/otp";
const API_KEY = process.env.THAIBULKSMS_API_KEY as string;
const API_SECRET = process.env.THAIBULKSMS_API_SECRET as string;

export async function POST(request: NextRequest) {
    const { phone } = await request.json();

    if (!phone) {
        return NextResponse.json({ message: "Phone number is required." }, { status: 400 });
    }

    try {
        const response = await axios.post(
            `${THAIBULKSMS_OTP_API_URL}/request`,
            {
                key: API_KEY,
                secret: API_SECRET,
                msisdn: phone,
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        if (response.status === 200) {
            return NextResponse.json({
                message: "OTP sent successfully",
                ...response.data,
            });
        } else {
            return NextResponse.json(
                { message: "Failed to send OTP", error: response.status },
                { status: 500 }
            );
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error sending OTP" }, { status: 500 });
    }
}
