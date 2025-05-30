"use client";  // Menandai komponen ini untuk dijalankan di sisi klien

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappCTA from "@/components/whatsapp-cta";
import SupernesiaChatbot from "@/components/supernesia-chatbot";
import { ArrowRight } from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Menampilkan pesan error dari server
        setSubmitStatus("error");
        console.error("Error from server:", result.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <main>
      <Navbar />
      <SupernesiaChatbot />

      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
  <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">LET'S GET IN TOUCH</h1>
  <p className="text-xl font-bold mb-8">Jangan ragu untuk mengatakan "Hello, Supernesia!"</p>
  <p>  Silakan hubungi kami untuk informasi lebih lanjut atau konsultasi; kami siap membantu kebutuhan Anda dengan profesional dan responsif.
</p>
<br />
  <div className="space-y-6">
    {/* Kontak Info */}
    <div>
      <p className="font-medium mb-1">Phone</p>
      <a
        href="https://wa.me/6281281892625"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:underline"
      >
        0812-8189-2625
      </a>
    </div>

    <div>
      <p className="font-medium mb-1">Email</p>
      <a
        href="mailto:info@supernesia.id"
        className="text-gray-600 hover:underline"
      >
        info@supernesia.id
      </a>
    </div>

    <div>
                <p className="font-medium mb-1">Head Office</p>
                <p className="text-gray-600">
          Gedung Wirausaha Lantai 1 Unit 104, Jalan HR Rasuna Said Kav. C-5 RT 003/RW 001 Kelurahan Karet, Kecamatan Setia Budi, Kota Jakarta Selatan, 12920                </p>
              </div>

              <div className="mt-4 rounded overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3772447608194!2d106.82853571097047!3d-6.213877660839031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4088c56757d%3A0x253f935e5b0a44fd!2sGedung%20Wirausaha!5e0!3m2!1sid!2sid!4v1748183082352!5m2!1sid!2sid"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Head Office"
                ></iframe>
              </div>
            </div>
          </div>


          <div>
            <div className="flex items-center mb-8">
              <ArrowRight className="h-8 w-8 mr-4" />
              <p className="text-gray-600">
                Bagus, kami sangat tertarik untuk mendengar kabar darimu. Ayo mulai sesuatu yang special bersama. Jangan
                lupa hubungi kami.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">CONTACT</h2>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-primary mb-2 block">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-primary mb-2 block">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="text-primary mb-2 block">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-primary mb-2 block">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-primary mb-2 block">Jelaskan kebutuhanmu</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:border-primary outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary text-black font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhatsappCTA />
      <Footer />
    </main>
  );
}
