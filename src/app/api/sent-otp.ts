// // pages/api/send-otp.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// //import twilio from 'twilio';

// // Twilio credentials
// const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
// const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER;

// //const client = twilio(accountSid, authToken);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { phone } = req.body;

//     if (!phone) {
//       return res.status(400).json({ error: 'Phone number is required' });
//     }

//     // Generate a random 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     // You can save the OTP to a database or cache it here with an expiration time (e.g., 5 minutes)
//     // For simplicity, we'll skip that part in this example

//     try {
//       // Send the OTP via Twilio SMS
//       await client.messages.create({
//         body: `Your OTP is ${otp}`,
    
//         to: phone,
//       });

//       return res.status(200).json({ success: true, message: 'OTP sent successfully' });
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       return res.status(500).json({ success: false, message: 'Failed to send OTP' });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
// }