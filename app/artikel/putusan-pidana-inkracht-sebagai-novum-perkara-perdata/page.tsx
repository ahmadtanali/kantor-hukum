import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Putusan Pidana yang Telah Inkracht sebagai Novum dalam PK Perdata | Ahmad Tanali & Rekan",
  description:
    "Apakah putusan pidana yang telah berkekuatan hukum tetap dapat menjadi novum dalam Peninjauan Kembali perkara perdata? Memahami kedudukan, syarat, dan relevansinya.",
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1120] text-white">
        {/* HEADER ARTIKEL */}
        <section className="border-b border-white/10 px-6 pb-16 pt-32 md:px-12 md:pb-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              HUKUM PERDATA
            </p>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Putusan Pidana yang Telah Inkracht sebagai Novum dalam PK Perdata
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span>Ahmad Tanali, S.H.</span>
              <span className="hidden text-gray-600 md:inline">•</span>
              <span>10 September 2026</span>
            </div>
          </div>
        </section>

        {/* ISI ARTIKEL */}
        <article className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-10 text-[17px] leading-8 text-gray-300 md:text-lg">
              <p>
                Dalam perkara perdata, Peninjauan Kembali (PK) merupakan upaya
                hukum luar biasa yang hanya dapat diajukan berdasarkan alasan
                tertentu sebagaimana ditentukan dalam Undang-Undang Mahkamah
                Agung.
              </p>

              <p>
                Salah satu alasan yang sering menjadi perhatian adalah adanya
                <strong className="font-semibold text-white">
                  {" "}
                  bukti baru atau novum
                </strong>
                . Persoalannya kemudian menjadi menarik ketika bukti baru
                tersebut berupa <strong className="text-white">putusan pidana</strong>
                yang telah berkekuatan hukum tetap atau inkracht.
              </p>

              {/* HIGHLIGHT */}
              <div className="border-l-2 border-yellow-400 bg-white/[0.04] px-6 py-6 md:px-8">
                <p className="text-xl font-medium leading-8 text-white md:text-2xl">
                  Apakah putusan pidana yang telah inkracht dapat menjadi novum
                  dalam PK perkara perdata?
                </p>
              </div>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Novum dalam Peninjauan Kembali Perdata
                </h2>

                <p>
                  Pasal 67 huruf b Undang-Undang Mahkamah Agung memberikan
                  ruang bagi pengajuan Peninjauan Kembali apabila setelah
                  perkara diputus ditemukan surat-surat bukti yang bersifat
                  menentukan yang pada waktu perkara diperiksa tidak dapat
                  ditemukan.
                </p>

                <p className="mt-6">
                  Dengan demikian, novum bukan sekadar dokumen yang baru
                  diperoleh setelah putusan. Bukti tersebut harus memiliki
                  relevansi dan kekuatan untuk memengaruhi penilaian terhadap
                  perkara yang telah diputus.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Bagaimana dengan Putusan Pidana?
                </h2>

                <p>
                  Mahkamah Agung telah memberikan penegasan mengenai persoalan
                  ini melalui SEMA Nomor 5 Tahun 2021 tentang Pemberlakuan
                  Rumusan Hasil Rapat Pleno Kamar Mahkamah Agung Tahun 2021
                  sebagai Pedoman Pelaksanaan Tugas bagi Pengadilan.
                </p>

                <p className="mt-6">
                  Dalam rumusan tersebut ditegaskan bahwa putusan pidana yang
                  diajukan sebagai alasan PK berdasarkan Pasal 67 huruf b
                  Undang-Undang Mahkamah Agung dapat diterima apabila memenuhi
                  persyaratan yang ditentukan, termasuk keadaan bahwa putusan
                  pidana tersebut telah ada tetapi tidak ditemukan ketika
                  perkara perdata yang menjadi objek PK diperiksa oleh
                  pengadilan tingkat pertama.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Inkracht Saja Tidak Cukup
                </h2>

                <p>
                  Hal yang perlu diperhatikan adalah bahwa status inkracht
                  bukan satu-satunya ukuran. Putusan pidana tersebut tetap
                  harus memiliki keterkaitan yang relevan dengan perkara
                  perdata yang dimohonkan Peninjauan Kembali.
                </p>

                <p className="mt-6">
                  Dengan kata lain, tidak setiap putusan pidana yang telah
                  berkekuatan hukum tetap secara otomatis berubah menjadi
                  novum dalam perkara perdata.
                </p>

                <div className="my-8 rounded-sm border border-yellow-400/20 bg-black/30 p-6 md:p-8">
                  <p className="text-base leading-7 text-gray-300 md:text-lg">
                    <span className="font-semibold text-yellow-400">
                      Prinsip penting:
                    </span>{" "}
                    yang menentukan bukan semata-mata bahwa putusan pidana
                    tersebut lebih baru atau telah inkracht, melainkan apakah
                    putusan tersebut memenuhi karakteristik novum dan memiliki
                    relevansi menentukan terhadap perkara perdata yang
                    dimohonkan PK.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Mengapa Relevansi Menjadi Penting?
                </h2>

                <p>
                  PK bukan merupakan kesempatan untuk mengulang seluruh
                  pemeriksaan perkara dari awal. Oleh karena itu, bukti baru
                  yang diajukan harus ditempatkan dalam konteks perkara yang
                  telah diputus.
                </p>

                <p className="mt-6">
                  Apabila putusan pidana tersebut membuktikan atau memberikan
                  fakta yang secara langsung berkaitan dengan dasar pertimbangan
                  putusan perdata sebelumnya, kedudukannya dapat menjadi sangat
                  penting untuk dianalisis sebagai novum.
                </p>

                <p className="mt-6">
                  Sebaliknya, apabila isi putusan pidana tidak mempunyai
                  hubungan yang menentukan dengan objek sengketa atau dasar
                  putusan perdata, keberadaannya belum tentu cukup untuk
                  memenuhi alasan PK.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Perhatikan Batas Waktu
                </h2>

                <p>
                  Pengajuan PK dengan alasan novum juga tidak terlepas dari
                  batas waktu yang ditentukan oleh hukum acara. Karena itu,
                  tanggal ditemukannya bukti baru harus diperhatikan dan
                  dibuktikan sesuai dengan prosedur yang berlaku.
                </p>

                <p className="mt-6">
                  Persoalan ini menjadi penting terutama ketika putusan pidana
                  baru diperoleh setelah perkara perdata telah berkekuatan
                  hukum tetap. Penentuan kapan bukti tersebut dianggap
                  ditemukan menjadi bagian yang tidak dapat dipisahkan dari
                  strategi pengajuan PK.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                  Penutup
                </h2>

                <p>
                  Putusan pidana yang telah berkekuatan hukum tetap{" "}
                  <strong className="text-white">
                    dapat memiliki kedudukan sebagai novum dalam PK perdata
                  </strong>
                  , tetapi tidak secara otomatis.
                </p>

                <p className="mt-6">
                  Harus dilihat apakah putusan tersebut memenuhi persyaratan
                  novum, telah ada tetapi tidak ditemukan ketika perkara
                  diperiksa pada tingkat pertama, serta mempunyai relevansi
                  yang menentukan terhadap perkara perdata yang menjadi objek
                  PK.
                </p>

                <p className="mt-6">
                  Karena itu, sebelum mengajukan PK, penting untuk membaca
                  secara utuh hubungan antara putusan pidana, alat bukti dalam
                  perkara perdata sebelumnya, serta pertimbangan hukum yang
                  menjadi dasar putusan yang hendak dimohonkan Peninjauan
                  Kembali.
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
                  Memiliki persoalan hukum yang serupa?
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  Setiap perkara memiliki fakta dan dokumen yang berbeda.
                  Analisis terhadap posisi hukum dan alat bukti perlu dilakukan
                  secara menyeluruh sebelum menentukan langkah hukum.
                </p>

                <a
                  href="https://wa.me/6281316871100?text=Halo%20Ahmad%20Tanali%20%26%20Rekan%2C%20saya%20ingin%20berkonsultasi%20mengenai%20perkara%20hukum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-yellow-300"
                >
                  Konsultasi via WhatsApp
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}