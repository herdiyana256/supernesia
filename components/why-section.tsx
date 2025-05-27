export default function WhySection() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-primary rounded-3xl mx-4 md:mx-12 lg:mx-20 my-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black">WHY CHOOSE US</h2>
        <h1 className="text-5xl md:text-6xl font-black text-black">
          KENAPA <span className="text-secondary">SUPERNESIA</span>
          <br />
          ADALAH <span className="text-black">SOLUSI?</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">🔧</span> Support After Sales
          </h3>
          <p className="text-gray-600">
            Website udah jadi? Tenang, kita tetap standby bantuin kalo ada kendala teknis, update konten, atau
            pengembangan lebih lanjut.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">⚡</span> Fitur Sesuai Kebutuhan
          </h3>
          <p className="text-gray-600">
            Ga semua UMKM butuh fitur ribet. Kita baru sediain fitur yang katalog produk, tombol WA, form order, sampai
            booking jadwal. Simpel, tapi powerful.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">✂️</span> Bisa Custom Bebas
          </h3>
          <p className="text-gray-600">
            Mau request khusus? Bisa! Supernesia ngasih fleksibilitas buat custom konten, warna, layout, sampe fitur.
            Biar websitenya sesuai identitas brand kamu.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">✨</span> Harga Terjangkau, Value Maksimal
          </h3>
          <p className="text-gray-600">
            Gak perlu budget gede buat punya website keren. Supernesia kasih solusi harga bersahabat tapi kualitas tetap
            premium.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">🎨</span> Desain Eksklusif untuk UMKM
          </h3>
          <p className="text-gray-600">
            Website bukan cuma buat tampil keren, tapi harus bisa naikin trust & jualan. Desain dari Supernesia udah
            disesuaikan buat kebutuhan UMKM, biar kelihatan profesional tapi tetap hemat.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold flex items-center mb-3 text-black dark:text-black">
            <span className="text-secondary mr-2">🚀</span> Proses Cepat & Gampang
          </h3>
          <p className="text-gray-600">
            Ga pake ribet. Dari konsultasi sampai website live, semua diproses cepat dengan panduan step-by-step yang
            gampang dipahami. Cocok buat yang baru mulai digital.
          </p>
        </div>
      </div>
    </section>
  )
}
