import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // "info@supernesia.id"
        pass: process.env.EMAIL_PASS  // dari .env.local
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: 'info@supernesia.id', // HARUS sama dengan EMAIL_USER (jangan diubah!)
      to: 'info@supernesia.id',   // Kirim ke inbox Supernesia
      replyTo: data.email,        // Supaya balasan diarahkan ke email klien
      subject: `Pesan dari ${data.name}: ${data.subject}`,
      text: `Nama: ${data.name}
Email: ${data.email}
Telepon: ${data.phone}
Pesan: ${data.message}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
