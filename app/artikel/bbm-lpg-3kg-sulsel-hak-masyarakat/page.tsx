import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "BBM Antre, LPG 3 Kg Langka di Sulsel: Siapa yang Bertanggung Jawab dan Apa Hak Masyarakat? | Ahmad Tanali & Rekan",
  description:
    "Antrean BBM dan kelangkaan LPG 3 kg di Sulawesi Selatan menjadi perhatian. Bagaimana melihat persoalan ini dari sisi hukum dan apa yang dapat dilakukan masyarakat?",
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1120] text-white">
        {/* HEADER */}
        <section className="border-b border-white/10 px-6 pb-16 pt-32 md:px-12 md:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              HUKUM AKTUAL
            </p>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              BBM Antre, LPG 3 Kg Langka di Sulsel: Siapa yang Bertanggung
              Jawab dan Apa Hak Masyarakat?
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span>Ahmad Tanali, S.H.</span>
              <span className="hidden text-gray-600 md:inline">•</span>
              <span>11 September 2026</span>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-10 text-[17px] leading-8 text-gray-300 md:text-lg">
              <p>
                Antrean panjang untuk mendapatkan Bahan Bakar Minyak (BBM)
                serta sulitnya memperoleh LPG 3 kilogram kembali menjadi
                perhatian masyarakat di sejumlah daerah di Sulawesi Selatan.
              </p>

              <p>
                Kondisi tersebut mendorong Pemerintah Provinsi Sulawesi Selatan
                membentuk satuan tugas pemantauan dan pengawasan penyaluran BBM
                bersubsidi serta mengawasi persoalan LPG 3 kilogram di sejumlah
                wilayah.
              </p>

              <p>
                Kebijakan tersebut dituangkan antara lain melalui Surat Edaran
                Pemerintah Provinsi Sulawesi Selatan Nomor
                100.3.4/12077/DESDM tentang Pemantauan dan Pengawasan
                Penyaluran BBM pada SPBU. Satgas tersebut melibatkan sejumlah
                unsur untuk memastikan penyaluran BBM bersubsidi berjalan
                tertib, tepat sasaran, tepat volume, dan tepat manfaat.
              </p>

              <div className="border-l-2 border-yellow-400 bg-white/[0.04] px-6 py-6 md:px-8">
                <p className="text-xl font-medium leading-8 text-white md:text-2xl">
                  Persoalannya bukan hanya soal ada atau tidak adanya stok.
                  Pertanyaan hukumnya adalah: jika masyarakat kesulitan
                  memperoleh BBM atau LPG bersubsidi, siapa yang bertanggung
                  jawab dan apa yang dapat dilakukan masyarakat?
                </p>
              </div>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Kelangkaan Tidak Otomatis Berarti Tindak Pidana
                </h2>

                <p>
                  Hal pertama yang perlu diluruskan adalah bahwa antrean
                  panjang atau sulitnya memperoleh BBM dan LPG 3 kilogram tidak
                  dengan sendirinya membuktikan telah terjadi tindak pidana.
                </p>

                <p className="mt-6">
                  Penyebabnya dapat bermacam-macam, mulai dari peningkatan
                  kebutuhan, persoalan distribusi, perubahan pola konsumsi,
                  sampai kemungkinan adanya penyalahgunaan dalam rantai
                  penyaluran.
                </p>

                <p className="mt-6">
                  Karena itu, masyarakat perlu membedakan antara persoalan
                  ketersediaan dan distribusi dengan perbuatan yang benar-benar
                  memenuhi unsur pelanggaran atau tindak pidana.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Ada Persoalan Penyalahgunaan yang Memang Sedang Diawasi
                </h2>

                <p>
                  Kehati-hatian tersebut bukan berarti dugaan penyalahgunaan
                  dapat diabaikan.
                </p>

                <p className="mt-6">
                  Pada Juni 2026, BPH Migas mengapresiasi pengungkapan dugaan
                  penyalahgunaan BBM bersubsidi dalam skala besar di Sulawesi
                  Selatan. Dalam pengungkapan tersebut, Polda Sulsel dan jajaran
                  menyita antara lain 229.123 liter solar, 3.031 liter
                  Pertalite, serta 1.541 tabung LPG 3 kilogram.
                </p>

                <p className="mt-6">
                  Fakta tersebut menunjukkan bahwa persoalan penyalahgunaan
                  energi bersubsidi memang merupakan persoalan nyata yang perlu
                  diawasi dan ditindak sesuai hukum apabila ditemukan bukti yang
                  cukup.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Mengapa Antrean Bisa Terjadi?
                </h2>

                <p>
                  Dalam perkembangan terbaru, Pertamina Patra Niaga Regional
                  Sulawesi menyampaikan adanya peningkatan kebutuhan solar
                  sekitar 10–15 persen pada periode Juni hingga Agustus 2026.
                  Pertamina menyebut sejumlah faktor, antara lain peningkatan
                  aktivitas logistik, pelebaran disparitas harga, serta
                  indikasi aktivitas pelangsiran.
                </p>

                <p className="mt-6">
                  Pertamina juga menyampaikan langkah penambahan pasokan BBM dan
                  LPG 3 kilogram di wilayah yang mengalami peningkatan
                  kebutuhan.
                </p>

                <p className="mt-6">
                  Dengan demikian, penyebab antrean tidak boleh langsung
                  disimpulkan hanya berasal dari satu faktor. Justru di sinilah
                  fungsi pengawasan menjadi penting untuk mengetahui persoalan
                  sebenarnya di lapangan.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Bagaimana dengan LPG 3 Kilogram?
                </h2>

                <p>
                  LPG 3 kilogram termasuk LPG tertentu yang penyediaan dan
                  pendistribusiannya diatur pemerintah. Permen ESDM Nomor 28
                  Tahun 2021 merupakan salah satu dasar pengaturan mengenai
                  penyediaan dan pendistribusian LPG tertentu.
                </p>

                <p className="mt-6">
                  Peraturan tersebut juga mengatur mekanisme harga jual eceran
                  LPG tertentu pada titik serah serta pemberian subsidi.
                </p>

                <p className="mt-6">
                  Karena itu, persoalan harga dan distribusi LPG 3 kilogram
                  perlu dilihat berdasarkan posisi pelaku dalam rantai
                  distribusi dan ketentuan yang berlaku. Tidak setiap harga
                  tinggi di tingkat konsumen dengan sendirinya dapat
                  disimpulkan sebagai tindak pidana.
                </p>

                <div className="my-8 rounded-sm border border-yellow-400/20 bg-black/30 p-6 md:p-8">
                  <p className="text-base leading-7 text-gray-300 md:text-lg">
                    <span className="font-semibold text-yellow-400">
                      Prinsip penting:
                    </span>{" "}
                    persoalan kelangkaan, harga, distribusi, pelanggaran
                    administratif, dan tindak pidana adalah persoalan yang
                    berbeda. Masing-masing harus dibuktikan berdasarkan fakta
                    dan ketentuan hukum yang berlaku.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Apa yang Harus Dilakukan Masyarakat?
                </h2>

                <p>
                  Masyarakat yang menemukan dugaan penyimpangan sebaiknya tidak
                  hanya menyampaikan keluhan. Langkah pertama adalah
                  mendokumentasikan fakta yang ditemukan.
                </p>

                <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
                  <li>Foto atau video kondisi antrean.</li>
                  <li>Lokasi SPBU atau pangkalan LPG.</li>
                  <li>Tanggal dan waktu kejadian.</li>
                  <li>Harga yang dibayarkan.</li>
                  <li>Struk atau bukti transaksi.</li>
                  <li>Bukti penolakan atau pembatasan pembelian.</li>
                  <li>
                    Informasi lain yang menunjukkan adanya dugaan
                    penyimpangan.
                  </li>
                </ul>

                <p className="mt-6">
                  Bukti tersebut penting karena laporan yang baik bukan hanya
                  berisi dugaan, tetapi dapat menjelaskan apa yang terjadi,
                  kapan terjadi, di mana terjadi, dan siapa pihak yang
                  berkaitan dengan peristiwa tersebut.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Jangan Menuduh Sebelum Ada Bukti
                </h2>

                <p>
                  Di tengah keresahan masyarakat, informasi mengenai
                  kelangkaan BBM dan LPG dapat dengan cepat menyebar melalui
                  media sosial.
                </p>

                <p className="mt-6">
                  Namun masyarakat tetap harus berhati-hati. Dugaan penimbunan,
                  pelangsiran, manipulasi transaksi, atau penyalahgunaan
                  subsidi harus dibedakan dari fakta yang benar-benar telah
                  terbukti.
                </p>

                <p className="mt-6">
                  Menyampaikan laporan kepada lembaga yang berwenang jauh lebih
                  tepat daripada menyebarkan tuduhan terhadap individu atau
                  pelaku usaha tanpa dasar bukti yang memadai.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Ke Mana Masyarakat Dapat Mengadu?
                </h2>

                <p>
                  Untuk persoalan distribusi BBM bersubsidi, masyarakat dapat
                  menggunakan saluran pengaduan dan pengawasan yang disediakan
                  oleh lembaga terkait, termasuk BPH Migas dan Pertamina.
                </p>

                <p className="mt-6">
                  Untuk persoalan LPG 3 kilogram, pengaduan juga dapat
                  disampaikan melalui saluran resmi yang berkaitan dengan
                  distribusi dan pengawasan LPG bersubsidi.
                </p>

                <p className="mt-6">
                  Apabila ditemukan fakta yang mengarah pada dugaan tindak
                  pidana, laporan kepada aparat penegak hukum dapat
                  dipertimbangkan dengan membawa bukti awal yang tersedia.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Siapa yang Bertanggung Jawab?
                </h2>

                <p>
                  Pertanyaan ini tidak dapat dijawab dengan menunjuk satu pihak
                  secara otomatis.
                </p>

                <p className="mt-6">
                  Rantai penyediaan dan distribusi energi bersubsidi melibatkan
                  regulator, pemerintah daerah, badan usaha, penyalur, hingga
                  konsumen. Karena itu, apabila terjadi persoalan, yang perlu
                  diperiksa adalah pada titik mana penyimpangan tersebut
                  terjadi.
                </p>

                <p className="mt-6">
                  Apakah persoalannya berada pada pasokan, distribusi,
                  penyaluran di SPBU atau pangkalan, pembelian yang tidak sesuai
                  ketentuan, penggunaan identitas atau barcode, penjualan
                  kembali, penimbunan, atau bentuk penyalahgunaan lainnya?
                </p>

                <p className="mt-6">
                  Jawaban atas pertanyaan tersebut akan menentukan siapa yang
                  dapat dimintai pertanggungjawaban dan mekanisme hukum apa yang
                  tepat digunakan.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Pengawasan Harus Berujung pada Kepastian
                </h2>

                <p>
                  Pembentukan Satgas oleh Pemerintah Provinsi Sulawesi Selatan
                  merupakan langkah penting untuk mengurai persoalan antrean
                  dan distribusi BBM serta LPG 3 kilogram.
                </p>

                <p className="mt-6">
                  Namun pengawasan seharusnya tidak berhenti pada pembentukan
                  tim. Apabila ditemukan penyimpangan, harus ada tindak lanjut
                  sesuai kewenangan masing-masing lembaga.
                </p>

                <p className="mt-6">
                  Sebaliknya, apabila hasil pemeriksaan menunjukkan bahwa
                  persoalan terutama disebabkan oleh peningkatan kebutuhan atau
                  persoalan pasokan, masyarakat juga berhak memperoleh
                  penjelasan yang terbuka.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Penutup
                </h2>

                <p>
                  Antrean BBM dan sulitnya memperoleh LPG 3 kilogram bukan
                  semata-mata persoalan ekonomi sehari-hari. Di dalamnya
                  terdapat persoalan distribusi, pengawasan, subsidi,
                  pelayanan publik, dan kemungkinan penegakan hukum.
                </p>

                <p className="mt-6">
                  Masyarakat tentu berhak mempertanyakan mengapa barang
                  bersubsidi yang ditujukan kepada masyarakat yang berhak sulit
                  diperoleh.
                </p>

                <p className="mt-6">
                  Namun secara hukum, kelangkaan tidak boleh langsung
                  diterjemahkan sebagai tindak pidana. Yang harus dicari adalah
                  fakta, titik penyimpangan, pihak yang bertanggung jawab, dan
                  bukti yang mendukungnya.
                </p>

                <p className="mt-6">
                  Karena itu, apabila masyarakat menemukan dugaan penyimpangan,
                  langkah yang paling tepat adalah{" "}
                  <strong className="text-white">
                    mendokumentasikan, melaporkan melalui saluran yang tepat,
                    dan memastikan laporan tersebut didasarkan pada fakta yang
                    dapat dipertanggungjawabkan.
                  </strong>
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="rounded-sm border border-yellow-400/20 bg-white/[0.03] p-7 md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Konsultasi Hukum
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Menemukan dugaan penyimpangan dan membutuhkan pendampingan?
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  Setiap persoalan memiliki fakta dan bukti yang berbeda.
                  Pemeriksaan terhadap kronologi dan dokumen diperlukan sebelum
                  menentukan langkah hukum yang tepat.
                </p>

                <a
                  href="https://wa.me/6281316871100?text=Halo%20Ahmad%20Tanali%20%26%20Rekan%2C%20saya%20ingin%20berkonsultasi%20mengenai%20persoalan%20BBM%20atau%20LPG%203%20kg."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-yellow-300"
                >
                  Konsultasi via WhatsApp
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* CATATAN SUMBER */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Sumber informasi
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Artikel ini disusun berdasarkan perkembangan pemberitaan dan
                informasi resmi mengenai pengawasan BBM bersubsidi dan LPG
                tertentu di Sulawesi Selatan, serta ketentuan peraturan
                perundang-undangan yang relevan.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}