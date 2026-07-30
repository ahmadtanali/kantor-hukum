export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-yellow-500/20 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              AHMAD TANALI & REKAN
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Kantor Hukum yang memberikan pelayanan hukum secara
              profesional, berintegritas, dan berorientasi pada
              kepentingan terbaik bagi setiap klien.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Navigasi
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-yellow-400 transition">
                  Beranda
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  Tentang
                </a>
              </li>

              <li>
                <a href="#practice" className="hover:text-yellow-400 transition">
                  Bidang Praktik
                </a>
              </li>

              <li>
                <a href="#whyus" className="hover:text-yellow-400 transition">
                  Mengapa Kami
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Kontak
                </a>
              </li>

            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Hubungi Kami
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>📍 Delft Apartment, Kawasan CPI, Makassar</p>

              <p>📞 0813-1687-1100</p>

              <p>✉️ ahmad.asrlaw@gmail.com.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Ahmad Tanali & Rekan. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}