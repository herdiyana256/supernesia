import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Dalam implementasi sebenarnya, di sini Anda akan menggunakan
    // library seperti nodemailer untuk mengirim email ke herdiyanitdev@gmail.com

    console.log("Email data:", {
      to: "herdiyanitdev@gmail.com",
      subject: `Pesan dari ${data.name}: ${data.subject}`,
      body: `
        Nama: ${data.name}
        Email: ${data.email}
        Telepon: ${data.phone}
        Pesan: ${data.message}
      `,
    })

    // Simulasi pengiriman email berhasil
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
