"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappCTA from "@/components/whatsapp-cta";
import SupernesiaChatbot from "@/components/supernesia-chatbot";
import { ArrowRight, MapPin, Phone, Mail, Send, CheckCircle, XCircle } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        setSubmitStatus("error");
        console.error("Error from server:", result.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <main className="overflow-hidden">
      <Navbar />
      <SupernesiaChatbot />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className={`relative z-10 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-yellow-50 text-[#2b2b2b] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce border border-[#e9e15b]/30">
            <Mail className="w-4 h-4 mr-2" />
            Mari Terhubung
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-[#2b2b2b] via-gray-800 to-[#2b2b2b] bg-clip-text text-transparent">
            LET'S CREATE
            <br />
            <span className="text-[#e9e15b]">TOGETHER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siap mengubah ide brilian Anda menjadi kenyataan digital? 
            <br className="hidden md:block" />
            Mari berdiskusi dan ciptakan sesuatu yang luar biasa bersama Supernesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info Side */}
            <div className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              {/* Intro Card */}
              <div className="bg-gradient-to-br from-[#2b2b2b] to-gray-800 rounded-2xl p-8 text-white mb-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e9e15b]/10 to-transparent"></div>
                <div className="relative z-10">
                  <ArrowRight className="h-12 w-12 mb-6 text-[#e9e15b] group-hover:translate-x-2 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Kami percaya setiap proyek hebat dimulai dari percakapan yang tepat. 
                    Ceritakan visi Anda, dan mari kita wujudkan bersama dengan teknologi terdepan.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                  <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e9e15b]/20 rounded-lg flex items-center justify-center group-hover:bg-[#e9e15b]/30 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-[#2b2b2b]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Telepon</p>
                      <a
                        href="https://wa.me/6281281892625"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#2b2b2b] transition-colors duration-200 text-lg"
                      >
                        0812-8189-2625
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Tersedia 24/7 untuk konsultasi</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e9e15b]/20 rounded-lg flex items-center justify-center group-hover:bg-[#e9e15b]/30 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-[#2b2b2b]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a
                        href="mailto:info@supernesia.id"
                        className="text-gray-600 hover:text-[#2b2b2b] transition-colors duration-200 text-lg"
                      >
                        info@supernesia.id
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Respons cepat dalam 2-4 jam</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e9e15b]/20 rounded-lg flex items-center justify-center group-hover:bg-[#e9e15b]/30 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-[#2b2b2b]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Head Office</p>
                      <p className="text-gray-600 leading-relaxed">
                        Gedung Wirausaha Lt. 1 Unit 104<br />
                        Jl. HR Rasuna Said Kav. C-5<br />
                        Jakarta Selatan, 12920
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Kunjungi kami untuk meeting langsung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3772447608194!2d106.82853571097047!3d-6.213877660839031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4088c56757d%3A0x253f935e5b0a44fd!2sGedung%20Wirausaha!5e0!3m2!1sid!2sid!4v1748183082352!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Head Office"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Mulai Proyek Anda
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Ceritakan detail proyek Anda dan kami akan merespons dalam 24 jam
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-6 flex items-center animate-fade-in">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <p className="font-medium">Pesan berhasil dikirim!</p>
                      <p className="text-sm text-green-600">Tim kami akan menghubungi Anda segera.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-6 flex items-center animate-fade-in">
                    <XCircle className="h-5 w-5 mr-3 text-red-600" />
                    <div>
                      <p className="font-medium">Terjadi kesalahan</p>
                      <p className="text-sm text-red-600">Silakan coba lagi atau hubungi langsung via WhatsApp.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e9e15b] focus:border-transparent outline-none transition-all duration-200 group-hover:border-gray-400"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e9e15b] focus:border-transparent outline-none transition-all duration-200 group-hover:border-gray-400"
                        placeholder="contoh@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e9e15b] focus:border-transparent outline-none transition-all duration-200 group-hover:border-gray-400"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subjek Proyek *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e9e15b] focus:border-transparent outline-none transition-all duration-200 group-hover:border-gray-400"
                        placeholder="Website, Mobile App, dll"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Detail Kebutuhan Proyek *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e9e15b] focus:border-transparent outline-none transition-all duration-200 group-hover:border-gray-400 resize-none"
                      placeholder="Deskripsikan proyek Anda: tujuan, fitur yang diinginkan, timeline, budget estimasi, dan detail lainnya yang membantu kami memahami kebutuhan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#e9e15b] to-yellow-400 text-[#2b2b2b] font-bold py-4 px-8 rounded-xl hover:from-yellow-400 hover:to-[#e9e15b] transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
                      isSubmitting ? "opacity-70 cursor-not-allowed transform-none" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#2b2b2b] border-t-transparent"></div>
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Dengan mengirim pesan, Anda menyetujui bahwa kami akan menghubungi Anda untuk diskusi lebih lanjut.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsappCTA />
      <Footer />

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </main>
  );
}