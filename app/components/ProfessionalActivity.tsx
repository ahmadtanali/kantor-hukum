"use client";

import Image from "next/image";

const activities = [
  {
    image: "/images/ppkhi/penyumpahan-1.jpg",
    caption: "Kegiatan Pengambilan Sumpah/Janji Advokat di wilayah hukum Pengadilan Tinggi Makassar.",
  },
  {
    image: "/images/ppkhi/penyumpahan-2.jpg",
    caption: "Kehadiran dalam agenda profesi advokat di Pengadilan Tinggi Makassar.",
  },
  {
    image: "/images/ppkhi/penyumpahan-3.jpg",
    caption: "Bagian dari perjalanan dan pengabdian dalam menjaga profesionalisme advokat.",
  },
];

export default function ProfessionalActivity() {
  return (
    <section
      id="aktivitas"
      className="relative bg-[#0b0b0b] py-28 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-yellow-500/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[0.45em] text-sm">
            AKTIVITAS PROFESIONAL
          </p>

          <h2 className="font-cinzel text-4xl md:text-5xl text-white mt-4">
            Kiprah dalam Profesi
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-8 mb-8" />

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Perjalanan sebagai advokat tidak hanya berkaitan dengan
            penanganan perkara, tetapi juga dengan pengabdian,
            pengembangan profesi, dan keterlibatan dalam berbagai
            kegiatan organisasi serta agenda profesi hukum.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-5">
              PROFESIONALISME & PENGABDIAN
            </p>

            <h3 className="font-cinzel text-3xl md:text-4xl text-white leading-tight">
              Berproses, Berkarya,
              <br />
              dan Mengabdi dalam Profesi
            </h3>

            <div className="w-16 h-1 bg-yellow-500 rounded-full my-7" />

            <p className="text-gray-400 leading-8 mb-6">
              Ahmad Tanali, S.H. aktif dalam berbagai kegiatan profesi
              advokat di Kota Makassar. Dalam perjalanan profesionalnya,
              beliau telah beberapa kali hadir dalam agenda pengambilan
              sumpah/janji advokat di wilayah hukum Pengadilan Tinggi
              Makassar.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Keterlibatan tersebut menjadi bagian dari perjalanan dalam
              menjaga nilai profesionalisme, integritas, serta marwah
              profesi advokat.
            </p>

            <p className="text-gray-400 leading-8">
              Di samping menjalankan praktik hukum, Ahmad Tanali juga
              dipercaya untuk mengemban amanah sebagai{" "}
              <span className="text-yellow-400 font-semibold">
                Ketua DPC PPKHI Makassar
              </span>
              , Perkumpulan Pengacara dan Konsultan Hukum Indonesia.
            </p>

          </div>

          {/* FOTO UTAMA */}
          <div className="relative">

            <div className="absolute -inset-3 border border-yellow-500/20 rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-yellow-500/40 bg-[#121212]">

              <Image
                src={activities[0].image}
                alt="Kegiatan profesi advokat di Pengadilan Tinggi Makassar"
                width={900}
                height={650}
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8 pt-24">

                <p className="text-white text-sm leading-6">
                  {activities[0].caption}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* PHOTO GALLERY */}
        <div className="mt-20">

          <div className="grid md:grid-cols-3 gap-6">

            {activities.slice(1).map((activity, index) => (

              <div
                key={index}
                className="
                group
                relative
                rounded-2xl
                overflow-hidden
                border
                border-yellow-500/20
                bg-[#121212]
                hover:border-yellow-500
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(234,179,8,0.20)]
                "
              >

                <Image
                  src={activity.image}
                  alt={activity.caption}
                  width={700}
                  height={500}
                  className="
                  w-full
                  h-64
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-gray-200 text-sm leading-6">
                    {activity.caption}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* FOOTNOTE */}
        <div className="mt-16 text-center">

          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-7">
            Dokumentasi kegiatan merupakan bagian dari perjalanan
            profesional dan pengabdian dalam menjalankan profesi advokat
            serta berkontribusi terhadap perkembangan profesi hukum.
          </p>

        </div>

      </div>
    </section>
  );
}