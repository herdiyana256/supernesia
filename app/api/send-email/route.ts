import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Ambil data JSON dari request body
    const data = await request.json();

    // Setup transporter Nodemailer menggunakan kredensial dari .env.local
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Gunakan Gmail sebagai penyedia email
      auth: {
        user: process.env.EMAIL_USER,  // Email pengirim dari .env.local
        pass: process.env.EMAIL_PASS,  // App password atau password akun email
      },
      tls: {
        rejectUnauthorized: false,  // Pastikan koneksi TLS dapat diterima
      },
    });

    // Setup email yang akan dikirim
    const mailOptions = {
      from: data.email,  // Email pengirim yang diisi di form
      to: "supernesia619@gmail.com",  // Email penerima (perwakilan Supernesia)
      subject: `Pesan dari ${data.name}: ${data.subject}`,  // Subjek email
      text: `
        Nama: ${data.name}
        Email: ${data.email}
        Telepon: ${data.phone}
        Pesan: ${data.message}
      `,  // Isi email
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });  // Tampilkan detail error
  }
}
