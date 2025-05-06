import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Mendapatkan data dari form yang diisi oleh klien
    const data = await request.json();

    // Mengonfigurasi nodemailer dengan SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,  // info@supernesia.id
        pass: process.env.EMAIL_PASS,  // Password untuk info@supernesia.id
      },
    });

    // Menentukan mail options
    const mailOptions = {
      from: `${data.name} <${data.email}>`,  // Pengirimnya adalah email yang diisi oleh klien
      to: "info@supernesia.id", // Semua email akan diterima di info@supernesia.id
      replyTo: data.email, // Jika penerima membalas, balasan akan pergi ke email klien
      subject: `Pesan dari ${data.name}: ${data.subject}`,
      text: `Nama: ${data.name}\nEmail: ${data.email}\nTelepon: ${data.phone}\nPesan: ${data.message}`,
    };

    // Mengirimkan email menggunakan nodemailer
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
