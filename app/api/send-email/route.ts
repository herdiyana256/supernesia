import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Mengambil data dari form
    const data = await request.json();

    // Validasi data (jika diperlukan)
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Semua kolom wajib diisi." },
        { status: 400 }
      );
    }

    // Setup transporter untuk mengirim email
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // pastikan emailnya benar
        pass: process.env.EMAIL_PASS,  // pastikan passwordnya benar
      },
      tls: {
        rejectUnauthorized: false, // Bisa diubah jika diperlukan
      },
    });

    // Setup email
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Email pengirim
      to: "info@supernesia.id",      // Email tujuan (juga bisa diubah)
      replyTo: data.email,           // Balasan dikirim ke email pengirim
      subject: `Pesan dari ${data.name}: ${data.subject}`,
      text: `Nama: ${data.name}
Email: ${data.email}
Telepon: ${data.phone}
Pesan: ${data.message}`,
    };

    // Kirim email
    const info = await transporter.sendMail(mailOptions);

    // Tanggapan jika email berhasil dikirim
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Error sending email:", error);
    // Menampilkan error lebih rinci
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
