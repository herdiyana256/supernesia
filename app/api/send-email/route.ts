import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Gunakan SMTP dari Hostinger/Niagahoster
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Email dari .env
        pass: process.env.EMAIL_PASS, // Password dari .env
      },
    });

    const mailOptions = {
      from: `"${data.name}" <info@supernesia.id>`, // Tetap pakai pengirim resmi
      to: ["supernesia619@gmail.com", "herdiyanitdev@gmail.com"], // Banyak penerima
      replyTo: data.email, // Agar tombol balas ke pengirim form
      subject: `Pesan dari ${data.name}: ${data.subject}`,
      text: `Nama: ${data.name}
    Email: ${data.email}
    Telepon: ${data.phone}
    Pesan: ${data.message}`,
    };
    

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
