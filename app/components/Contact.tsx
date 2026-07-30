export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400 mb-3">
            Hubungi Kami
          </p>

          <h2 className="text-5xl font-bold">
            Konsultasikan Permasalahan Hukum Anda
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Kami siap memberikan konsultasi dan pendampingan hukum secara
            profesional untuk kebutuhan litigasi maupun non-litigasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informasi */}
          <div
            className="space-y-8"
            data-aos="fade-right"
          >

            <div className="border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-yellow-400 font-semibold mb-2">
                📍 Alamat
              </h3>

              <p className="text-gray-300 leading-7">
                Delft Apartment<br />
                Kawasan Center Point Indonesia<br />
                Jl. Sunset Boulevard<br />
                Makassar
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-yellow-400 font-semibold mb-2">
                ☎ WhatsApp
              </h3>

              <p className="text-gray-300">
                0813-1687-1100
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-yellow-400 font-semibold mb-2">
                ✉ Email
              </h3>

              <p className="text-gray-300">
                ahmad.asrlaw@gmail.com
              </p>
            </div>

          </div>

          {/* CTA */}
          <div
            className="border border-yellow-500 rounded-2xl p-10 flex flex-col justify-center"
            data-aos="fade-left"
          >

            <h3 className="text-3xl font-bold mb-6">
              Butuh Bantuan Hukum?
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Hubungi kami untuk mendapatkan konsultasi awal dan solusi hukum
              yang sesuai dengan kebutuhan Anda.
            </p>

            <a
              href="https://wa.me/6281316871100?text=Halo%20Kantor%20Hukum%20Ahmad%20Tanali%20%26%20Rekan,%20saya%20ingin%20berkonsultasi%20mengenai%20permasalahan%20hukum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl text-center transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
            >
              Konsultasi Sekarang
            </a>

            <a
              href="https://maps.google.com/?q=Kantor+Pengacara+Ahmad+Tanali+%26+Rekan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl border border-yellow-500 px-5 py-3 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              📍 Buka di Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}