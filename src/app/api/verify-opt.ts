// // pages/api/verify-otp.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// // Mock storage (In production, use a database or Redis cache)
// const otpStorage: { [key: string]: string } = {};

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { phone, otp } = req.body;

//     if (!phone || !otp) {
//       return res.status(400).json({ error: 'Phone number and OTP are required' });
//     }

//     // Verify OTP (you should compare with the one stored in the database or cache)
//     if (otpStorage[phone] === otp) {
//       return res.status(200).json({ success: true, message: 'OTP verified successfully' });
//     } else {
//       return res.status(400).json({ success: false, message: 'Invalid OTP' });
//     }
//   }

//   return res.status(405).json({ message: 'Method not allowed' });
// }