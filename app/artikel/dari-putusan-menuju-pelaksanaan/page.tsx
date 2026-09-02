import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Dari Putusan Menuju Pelaksanaan: Pidana Pengawasan dan Pidana Kerja Sosial dalam KUHP Nasional | Ahmad Tanali & Rekan",
  description:
    "Kajian mengenai kesiapan ekosistem pidana pengawasan dan pidana kerja sosial dalam implementasi KUHP Nasional.",
};

const paragraphs = [
  {
    type: "heading",
    text: "Abstrak",
  },
  {
    type: "p",
    text: "Berlakunya Undang-Undang Nomor 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana sejak 2 Januari 2026 menandai perubahan penting dalam sistem pemidanaan Indonesia. Salah satu perubahan fundamental tersebut adalah penguatan alternatif pemidanaan non-pemenjaraan melalui pidana pengawasan dan pidana kerja sosial. Kehadiran kedua jenis pidana tersebut menggeser locus pemidanaan dari institusi tertutup menuju masyarakat dan, pada saat yang sama, mengubah kebutuhan sistem dari sekadar kapasitas pemenjaraan menjadi kapasitas pengawasan, pembimbingan, asesmen, pengelolaan kasus, penempatan kerja sosial, serta koordinasi lintas institusi. Artikel ini menganalisis kesenjangan antara konstruksi normatif pidana pengawasan dan pidana kerja sosial dengan kesiapan ekosistem implementasinya setelah KUHP Nasional mulai berlaku. Penelitian menggunakan pendekatan yuridis-normatif dan analisis kebijakan dengan pendekatan perundang-undangan, konseptual, kebijakan, dan komparatif. Bahan penelitian meliputi peraturan perundang-undangan, kebijakan institusional, perkembangan praktik awal pada tahun 2026, serta praktik community corrections pada beberapa yurisdiksi. Hasil analisis menunjukkan bahwa tantangan utama implementasi tidak lagi terletak pada pengakuan hukum terhadap pidana non-pemenjaraan, melainkan pada kemampuan menghubungkan proses penjatuhan pidana dengan asesmen risiko dan kebutuhan, kapasitas Balai Pemasyarakatan dan Pembimbing Kemasyarakatan, case management, mekanisme pengawasan, sistem penempatan kerja sosial, kemitraan masyarakat, interoperabilitas data, pembiayaan, serta monitoring dan evaluasi. Artikel ini mengusulkan kerangka Integrated Community-Based Sentencing Ecosystem yang menghubungkan empat tahap utama, yaitu sentencing readiness, implementation readiness, community supervision and intervention, serta outcome evaluation. Pendekatan tersebut diperlukan agar pidana pengawasan dan pidana kerja sosial tidak hanya menjadi alternatif normatif terhadap pidana penjara, tetapi berkembang menjadi instrumen pemidanaan yang kredibel, proporsional, dapat dilaksanakan, dan berorientasi pada reintegrasi sosial serta keselamatan masyarakat.",
  },
  {
    type: "keywords",
    text: "Kata Kunci: pidana pengawasan; pidana kerja sosial; KUHP Nasional; Balai Pemasyarakatan; community corrections; pemidanaan non-pemenjaraan.",
  },

  {
    type: "heading",
    text: "Abstract",
  },
  {
    type: "p",
    text: "The enactment of Law Number 1 of 2023 concerning the Indonesian Criminal Code, effective from 2 January 2026, marks a significant transformation in Indonesia's sentencing system. One of its fundamental changes is the strengthening of non-custodial sanctions through supervision sentences and community service orders. These sanctions shift the locus of punishment from closed correctional institutions to the community and consequently require a transformation from prison-based capacity towards community supervision, offender assessment, case management, social-work placement, and inter-agency coordination. This article examines the gap between the normative construction of supervision and community service sentences and the readiness of the implementation ecosystem following the entry into force of the new Criminal Code. The study employs a normative legal and policy-analysis approach using statutory, conceptual, policy, and comparative perspectives. The findings indicate that the primary challenge is no longer the legal recognition of non-custodial punishment but the ability to connect sentencing decisions with risk-and-needs assessment, the institutional capacity of probation offices and community supervisors, case management, supervision mechanisms, community-service placement systems, community partnerships, data interoperability, sustainable financing, and outcome-based monitoring and evaluation. The article proposes an Integrated Community-Based Sentencing Ecosystem consisting of four interconnected stages: sentencing readiness, implementation readiness, community supervision and intervention, and outcome evaluation. Such an approach is necessary to transform supervision and community service sentences from merely normative alternatives to imprisonment into credible, proportionate, implementable sanctions that promote social reintegration while safeguarding public safety.",
  },
  {
    type: "keywords",
    text: "Keywords: supervision sentence; community service; Indonesian Criminal Code; probation; community corrections; non-custodial sentencing.",
  },

  {
    type: "heading",
    text: "1. Pendahuluan",
  },
  {
    type: "p",
    text: "Pemberlakuan Undang-Undang Nomor 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana pada 2 Januari 2026 merupakan salah satu tonggak paling penting dalam pembaruan hukum pidana Indonesia. Pembaruan tersebut tidak hanya menggantikan KUHP yang berakar pada Wetboek van Strafrecht, tetapi juga membawa perubahan terhadap filosofi dan arsitektur pemidanaan. Sistem pemidanaan tidak lagi sepenuhnya bertumpu pada pidana penjara, tetapi menyediakan variasi sanksi yang memungkinkan respons negara terhadap tindak pidana disesuaikan dengan karakteristik perbuatan, kondisi pelaku, kepentingan korban, tujuan rehabilitasi, serta kepentingan masyarakat.",
  },
  {
    type: "p",
    text: "Pidana pengawasan dan pidana kerja sosial merupakan dua manifestasi penting dari perubahan tersebut. Dalam KUHP Nasional, pidana pengawasan dan pidana kerja sosial ditempatkan sebagai instrumen yang memperluas pilihan pemidanaan di luar perampasan kemerdekaan. Konstruksi ini menunjukkan adanya upaya mengurangi ketergantungan sistem pemidanaan terhadap pidana penjara, terutama pidana penjara jangka pendek, sekaligus mendorong pendekatan yang lebih proporsional, rehabilitatif, dan berbasis masyarakat.",
  },
  {
    type: "p",
    text: "Perubahan tersebut memiliki konsekuensi kelembagaan yang sangat besar. Ketika pemidanaan dilakukan di dalam lembaga pemasyarakatan, negara mengendalikan individu melalui lingkungan fisik yang relatif tertutup dan terstruktur. Sebaliknya, ketika pidana dilaksanakan di masyarakat, pengendalian tidak lagi terutama dilakukan melalui tembok dan pengamanan fisik. Negara harus membangun kemampuan untuk melakukan asesmen, pembimbingan, pengawasan, intervensi, monitoring kepatuhan, pengelolaan pelanggaran, serta koordinasi dengan keluarga, pemerintah daerah, organisasi sosial, dan masyarakat.",
  },
  {
    type: "p",
    text: "Dengan demikian, pidana non-pemenjaraan bukanlah pemidanaan yang membutuhkan kapasitas negara lebih sedikit; ia membutuhkan jenis kapasitas negara yang berbeda. Pergeseran locus pemidanaan dari institusi tertutup menuju masyarakat menuntut perubahan dari prison-centred capacity menuju community corrections capacity. Perkembangan setelah berlakunya KUHP memperlihatkan bahwa persoalan tersebut bukan lagi bersifat hipotetis. Pada fase awal tahun 2026, pidana pengawasan telah mulai dijatuhkan oleh berbagai pengadilan tingkat pertama. Pada saat yang sama, pelaksanaan pidana kerja sosial juga mulai berkembang di sejumlah wilayah melalui keterlibatan Bapas, Kejaksaan, dan lembaga mitra. Perkembangan tersebut menunjukkan bahwa pidana non-pemenjaraan telah bergerak dari law in the books menuju law in action.",
  },
  {
    type: "p",
    text: "Fase awal implementasi ini menimbulkan pertanyaan yang lebih kompleks dibandingkan sekadar apakah hakim memiliki kewenangan menjatuhkan pidana non-pemenjaraan. Pertanyaan selanjutnya adalah apakah sistem mempunyai kapasitas untuk melaksanakan putusan tersebut secara konsisten, proporsional, aman, dan akuntabel. Efektivitas pidana pengawasan dan pidana kerja sosial pada akhirnya sangat bergantung pada kemampuan sistem menghubungkan sentencing dengan implementation.",
  },
  {
    type: "p",
    text: "Literatur Indonesia mengenai pidana pengawasan dan pidana kerja sosial selama ini banyak membahas dasar filosofis, konstruksi normatif, perbandingan hukum, serta potensinya sebagai alternatif terhadap pidana penjara dan overcrowding. Kajian tersebut tetap penting, tetapi setelah KUHP berlaku muncul kebutuhan penelitian yang berbeda. Pertanyaan akademiknya bergeser dari “mengapa Indonesia membutuhkan pidana non-pemenjaraan?” menjadi “kapasitas sistem seperti apa yang diperlukan agar pidana non-pemenjaraan benar-benar bekerja?”",
  },
  {
    type: "p",
    text: "Artikel ini menggunakan perspektif implementation readiness. Argumen utama artikel adalah bahwa keberhasilan pidana pengawasan dan pidana kerja sosial sangat bergantung pada kemampuan membangun suatu community-based sentencing ecosystem yang menghubungkan proses penjatuhan pidana dengan kesiapan pelaksanaan, asesmen individual, pengawasan berbasis risiko dan kebutuhan, case management, penempatan kerja sosial, koordinasi lintas institusi, serta evaluasi outcome.",
  },
  {
    type: "p",
    text: "Berdasarkan persoalan tersebut, artikel ini menjawab tiga pertanyaan. Pertama, bagaimana perubahan arsitektur pemidanaan yang dibawa oleh pidana pengawasan dan pidana kerja sosial dalam KUHP Nasional? Kedua, kesenjangan implementasi apa yang muncul pada fase awal penerapannya? Ketiga, bagaimana desain ekosistem implementasi yang diperlukan agar kedua pidana tersebut dapat dilaksanakan secara kredibel, proporsional, dan berkelanjutan?",
  },

  {
    type: "heading",
    text: "2. Transformasi Arsitektur Pemidanaan dalam KUHP Nasional",
  },
  {
    type: "heading",
    text: "2.1 Dari Prison-Centred menuju Diversified Sentencing",
  },
  {
    type: "p",
    text: "Salah satu perubahan penting KUHP Nasional adalah diversifikasi instrumen pemidanaan. Pidana penjara tetap memiliki posisi penting, tetapi tidak lagi diposisikan sebagai respons yang harus selalu digunakan terhadap setiap tindak pidana. Sistem membuka ruang yang lebih luas bagi sanksi yang dapat dijalankan di masyarakat dengan tetap mempertahankan unsur pertanggungjawaban, kontrol, dan tujuan perubahan perilaku. Perubahan tersebut penting karena pidana penjara, khususnya penjara jangka pendek, mempunyai sejumlah konsekuensi sosial. Pemenjaraan memisahkan individu dari keluarga dan pekerjaan, meningkatkan risiko stigmatisasi, serta dapat menghambat proses reintegrasi setelah individu kembali ke masyarakat. Di tingkat sistem, penggunaan pidana penjara secara berlebihan juga berkontribusi terhadap tekanan kapasitas lembaga pemasyarakatan.",
  },
  {
    type: "p",
    text: "Pidana pengawasan dan pidana kerja sosial menawarkan logika berbeda. Individu tetap dimintai pertanggungjawaban, tetapi pertanggungjawaban tersebut dijalankan dalam lingkungan masyarakat. Perubahan ini sejalan dengan gagasan internasional mengenai non-custodial measures yang mendorong pengembangan alternatif terhadap pemenjaraan dengan tetap memperhatikan keseimbangan antara hak pelaku, hak korban, dan kepentingan masyarakat (United Nations, 1990; UNODC, 2007).",
  },
  {
    type: "p",
    text: "Namun demikian, penggunaan pidana non-pemenjaraan tidak boleh dipahami sebagai pengurangan kontrol negara. Kontrol tersebut berubah bentuk, dari kontrol berbasis institusi menjadi kontrol berbasis kondisi, supervisi, intervensi, dan case management.",
  },

  {
    type: "heading",
    text: "2.2 Pidana Pengawasan sebagai Community-Based Sentence",
  },
  {
    type: "p",
    text: "Pidana pengawasan dapat dipahami sebagai bentuk community-based sentence yang menggabungkan kontrol terhadap kepatuhan dengan pembimbingan di masyarakat. Struktur normatifnya memungkinkan hakim menetapkan syarat umum dan syarat khusus tertentu yang harus dipenuhi oleh terpidana selama masa pengawasan.",
  },
  {
    type: "p",
    text: "Secara konseptual, pidana pengawasan mempunyai dua fungsi yang harus berjalan bersamaan. Pertama adalah fungsi kontrol dan akuntabilitas, yaitu memastikan terpidana memenuhi persyaratan yang ditentukan pengadilan. Kedua adalah fungsi perubahan perilaku dan reintegrasi, yaitu menggunakan masa pengawasan untuk mengurangi faktor yang berhubungan dengan perilaku kriminal dan memperkuat faktor protektif. Jika fungsi pertama terlalu dominan, pengawasan berisiko berubah menjadi sekadar mekanisme wajib lapor. Sebaliknya, jika fungsi kedua dijalankan tanpa kontrol yang memadai, kredibilitas pidana dan perlindungan masyarakat dapat dipertanyakan. Karena itu, pidana pengawasan membutuhkan keseimbangan antara control, support, and change.",
  },
  {
    type: "p",
    text: "Konsekuensinya, kapasitas Pembimbing Kemasyarakatan tidak cukup diukur dari kemampuan administratif, tetapi juga dari kemampuan melakukan asesmen, menyusun rencana pembimbingan, mendokumentasikan perkembangan, mendeteksi ketidakpatuhan, mengelola risiko, memberikan intervensi dasar, dan membangun rujukan layanan sosial.",
  },

  {
    type: "heading",
    text: "2.3 Pidana Kerja Sosial dan Community Participation",
  },
  {
    type: "p",
    text: "Pidana kerja sosial mempunyai karakter yang berbeda. Pelaksanaannya mensyaratkan adanya pekerjaan yang layak, lokasi yang sesuai, supervisi lapangan, keselamatan kerja, pencatatan jam, dan mekanisme pelaporan. Dengan demikian, pidana kerja sosial tidak dapat diperlakukan sekadar sebagai penempatan tenaga kerja tanpa bayaran. Pelaksanaan kerja sosial membutuhkan kesesuaian antara individu, jenis pekerjaan, lokasi, kemampuan fisik, keselamatan, waktu, serta tujuan pemidanaan. Konsekuensinya, keberhasilan pidana kerja sosial sangat bergantung pada keberadaan community service placement system.",
  },
  {
    type: "p",
    text: "Sistem tersebut setidaknya harus menjawab lima pertanyaan: di mana kerja sosial dilakukan; jenis pekerjaan apa yang layak; siapa yang menilai kesesuaian individu dan pekerjaan; siapa yang melakukan supervisi; dan bagaimana kehadiran, kepatuhan, keselamatan, serta penyelesaian jam kerja dicatat dan diverifikasi. Karena itu, masyarakat tidak dapat ditempatkan hanya sebagai lokasi pelaksanaan pidana. Pemerintah daerah, organisasi sosial, fasilitas pelayanan publik, lembaga pendidikan, dunia usaha, dan lembaga mitra lainnya harus ditempatkan sebagai bagian dari ekosistem community corrections.",
  },

  {
    type: "heading",
    text: "3. Fase Awal Implementasi: Dari Norma Menuju Praktik",
  },
  {
    type: "p",
    text: "Berlakunya KUHP sejak Januari 2026 memberikan kesempatan pertama untuk mengamati bagaimana norma baru diterjemahkan ke dalam praktik. Perkembangan awal menunjukkan mulai digunakannya pidana pengawasan oleh berbagai pengadilan dan mulai terbentuknya praktik pelaksanaan pidana kerja sosial melalui koordinasi antara aparat penegak hukum, Bapas, dan lembaga mitra.",
  },
  {
    type: "p",
    text: "Kejaksaan juga telah menerbitkan pedoman internal mengenai penerapan pidana bersyarat, pidana pengawasan, dan pidana kerja sosial. Kehadiran pedoman tersebut penting karena pelaksanaan pidana non-pemenjaraan membutuhkan konsistensi sejak tahap tuntutan, eksekusi, koordinasi, hingga monitoring pelaksanaan.",
  },
  {
    type: "p",
    text: "Pada sisi Pemasyarakatan, praktik pembimbingan dan pengawasan pidana kerja sosial mulai memperlihatkan kebutuhan yang konkret: registrasi klien, pembimbingan awal mengenai hak dan kewajiban, koordinasi dengan kejaksaan, penempatan pada lokasi kerja sosial, dan monitoring pelaksanaan. Pada saat yang sama, beberapa wilayah mulai membangun kerja sama dengan lembaga masyarakat untuk mendukung lokasi dan aktivitas kerja sosial.",
  },
  {
    type: "p",
    text: "Fakta-fakta tersebut menunjukkan bahwa Indonesia telah memasuki early implementation phase. Namun fase awal ini justru merupakan periode kritis. Praktik yang berkembang pada tahun-tahun pertama berpotensi menjadi pola institusional jangka panjang. Jika sistem berkembang tanpa standar asesmen, case management, pembagian tanggung jawab, sistem data, dan outcome measurement yang memadai, variasi antarwilayah dapat semakin besar.",
  },
  {
    type: "p",
    text: "Karena itu, keberhasilan awal seharusnya tidak hanya diukur dari meningkatnya jumlah putusan pidana pengawasan atau kerja sosial. Pertanyaan yang lebih penting adalah apakah setiap putusan tersebut dapat dilaksanakan dengan kualitas dan tingkat akuntabilitas yang relatif konsisten.",
  },

  {
    type: "heading",
    text: "4. Implementation Gap dalam Pemidanaan Non-Pemenjaraan",
  },
  {
    type: "heading",
    text: "4.1 Sentencing-Implementation Gap",
  },
  {
    type: "p",
    text: "Kesenjangan pertama terletak antara keputusan pemidanaan dan kemampuan sistem melaksanakan keputusan tersebut. Hakim dapat menjatuhkan pidana non-pemenjaraan berdasarkan pertimbangan hukum dan kondisi perkara. Namun efektivitas putusan pada akhirnya bergantung pada ketersediaan kapasitas implementasi.",
  },
  {
    type: "p",
    text: "Pidana kerja sosial merupakan contoh paling jelas. Putusan mengenai sejumlah jam kerja sosial tidak akan efektif tanpa tersedianya lokasi, jenis pekerjaan, supervisor, mekanisme keselamatan, pencatatan kehadiran, serta prosedur pelanggaran. Karena itu, informasi mengenai implementation feasibility idealnya tersedia sebelum atau segera setelah keputusan pemidanaan.",
  },

  {
    type: "heading",
    text: "4.2 Assessment Gap",
  },
  {
    type: "p",
    text: "Tidak seluruh individu membutuhkan tingkat pengawasan yang sama. Community corrections modern berkembang ke arah risk and needs-based supervision. Prinsip Risk-Need-Responsivity menekankan bahwa intensitas intervensi harus menyesuaikan tingkat risiko, kebutuhan kriminogenik menjadi sasaran perubahan, dan metode intervensi harus disesuaikan dengan karakteristik individu (Andrews & Bonta, 2010; Bonta & Andrews, 2017).",
  },
  {
    type: "p",
    text: "Indonesia karena itu perlu menghindari one-size-fits-all supervision. Pengawasan dengan intensitas sama terhadap seluruh klien tidak hanya tidak efisien, tetapi dapat mengalihkan sumber daya dari kasus yang mempunyai kebutuhan lebih tinggi.",
  },

  {
    type: "heading",
    text: "4.3 Capacity Gap Bapas dan Pembimbing Kemasyarakatan",
  },
  {
    type: "p",
    text: "Perluasan pemidanaan berbasis masyarakat secara langsung memperluas peran Bapas dan Pembimbing Kemasyarakatan. PK tidak cukup hanya mempunyai kemampuan administratif. Community supervision membutuhkan kemampuan melakukan asesmen, menyusun case plan, melakukan motivational intervention, menghubungkan klien dengan layanan sosial, melakukan monitoring, mendokumentasikan perkembangan, mendeteksi pelanggaran, serta berkoordinasi dengan aktor lain.",
  },
  {
    type: "p",
    text: "Karena itu, kesiapan Bapas harus dianalisis berdasarkan beban kerja, cakupan wilayah pelayanan, komposisi kompetensi, mobilitas petugas, dukungan teknologi digital, dan kapasitas kemitraan. Semakin berhasil kebijakan mengalihkan pelaksanaan pidana dari penjara menuju pemidanaan berbasis masyarakat, semakin besar pula beban pembimbingan, pengawasan, dan pengelolaan kasus yang harus ditangani oleh Bapas.",
  },

  {
    type: "heading",
    text: "4.4 Community Service Placement Gap",
  },
  {
    type: "p",
    text: "Pidana kerja sosial membutuhkan kapasitas yang bahkan lebih luas daripada pidana pengawasan. Penempatan harus mempertimbangkan keselamatan masyarakat dan individu, kesehatan, keterampilan, waktu, aksesibilitas, serta karakteristik pekerjaan. Karena itu, Indonesia membutuhkan database lembaga mitra dan jenis pekerjaan yang telah diverifikasi. Penempatan tidak seharusnya dilakukan secara ad hoc setelah putusan dijatuhkan. Setiap wilayah idealnya memiliki community service placement network yang diperbarui secara berkala dan didukung standar minimum nasional.",
  },

  {
    type: "heading",
    text: "4.5 Inter-Agency Governance Gap",
  },
  {
    type: "p",
    text: "Pidana non-pemenjaraan merupakan kebijakan yang secara struktural bersifat lintas institusi. Pengadilan, kejaksaan, Pemasyarakatan, Bapas, pemerintah daerah, dan organisasi masyarakat memiliki fungsi berbeda tetapi saling bergantung.",
  },
  {
    type: "p",
    text: "Masalahnya, koordinasi sering kali dibangun berdasarkan hubungan personal atau komunikasi ad hoc. Model tersebut sulit dipertahankan ketika volume kasus meningkat. Diperlukan institutional role and responsibility matrix yang menjelaskan siapa melakukan apa, kapan, berdasarkan informasi apa, bagaimana informasi ditransmisikan, dan siapa yang bertanggung jawab ketika terjadi kegagalan.",
  },

  {
    type: "heading",
    text: "4.6 Data and Digital Case Management Gap",
  },
  {
    type: "p",
    text: "Community corrections menghasilkan informasi yang bersifat longitudinal. Informasi tidak berhenti pada putusan. Sistem perlu merekam hasil asesmen, case plan, persyaratan pengawasan, kontak dengan PK, lokasi kerja sosial, kehadiran, intervensi, pelanggaran, perubahan risiko, dan penyelesaian pidana.",
  },
  {
    type: "p",
    text: "Tanpa integrated case management, informasi tersebar pada berbagai dokumen dan institusi. Akibatnya, monitoring kinerja sistem menjadi sulit. Digitalisasi karena itu tidak seharusnya hanya berarti mengubah formulir kertas menjadi formulir elektronik. Teknologi harus menjadi decision-support and accountability infrastructure.",
  },

  {
    type: "heading",
    text: "4.7 Outcome Measurement Gap",
  },
  {
    type: "p",
    text: "Keberhasilan pidana non-pemenjaraan tidak dapat hanya diukur berdasarkan jumlah putusan atau jumlah klien yang menyelesaikan pidana. Indikator tersebut merupakan output.",
  },
  {
    type: "p",
    text: "Outcome yang lebih substantif meliputi compliance rate, completion rate, breach rate, perubahan tingkat risiko, keberhasilan mempertahankan pekerjaan atau pendidikan, stabilitas hubungan sosial, reintegrasi, dan reoffending. Pada tingkat sistem, indikator juga dapat melihat kontribusi terhadap pengurangan penggunaan pidana penjara jangka pendek, efisiensi biaya, dan keselamatan masyarakat.",
  },

  {
    type: "heading",
    text: "5. Pembelajaran dari Community Corrections Internasional",
  },
  {
    type: "p",
    text: "Pengalaman internasional memperlihatkan bahwa keberhasilan pemidanaan non-pemenjaraan sangat ditentukan oleh kualitas sistem pemasyarakatan berbasis masyarakat. Australia memberikan contoh mengenai integrasi antara pengawasan, asesmen, intervensi, dan kerja sosial. Penyelenggaraan pemasyarakatan tidak hanya diarahkan untuk melaksanakan perintah pengadilan, tetapi juga mengelola individu berdasarkan tingkat risiko dan kebutuhannya, menyediakan program untuk menangani faktor-faktor yang berkontribusi terhadap terjadinya tindak pidana, serta meningkatkan peluang keberhasilan reintegrasi sosial.",
  },
  {
    type: "p",
    text: "Pendekatan tersebut memperlihatkan bahwa supervision bukan sekadar observasi. Petugas mempunyai fungsi sebagai controller sekaligus change agent. Prinsip risk-need-responsivity relevan untuk memastikan sumber daya pengawasan tidak digunakan secara seragam, tetapi diarahkan sesuai tingkat risiko, kebutuhan, dan responsivitas individu.",
  },
  {
    type: "p",
    text: "Kanada memberikan pembelajaran lain melalui conditional sentence. Dalam sistem tersebut, pidana tertentu dapat dijalankan di masyarakat apabila pengadilan menilai pelaksanaannya tidak membahayakan keselamatan masyarakat dan konsisten dengan tujuan serta prinsip pemidanaan. Kondisi tertentu dapat dikenakan, dan pelanggaran dapat menimbulkan konsekuensi terhadap kelanjutan pelaksanaan pidana di masyarakat.",
  },
  {
    type: "p",
    text: "Pengalaman tersebut menunjukkan pentingnya hubungan antara eligibility, public safety assessment, enforceable conditions, supervision, and breach response. Sementara itu, Tokyo Rules memberikan kerangka normatif internasional yang menekankan penggunaan non-custodial measures secara proporsional, keterlibatan masyarakat, perlindungan hak, dan kebutuhan monitoring yang efektif.",
  },
  {
    type: "p",
    text: "Dari pembelajaran tersebut dapat ditarik lima prinsip yang relevan bagi Indonesia: keputusan pemidanaan non-pemenjaraan harus mempertimbangkan keterlaksanaan dan keselamatan masyarakat; intensitas pengawasan perlu ditentukan berdasarkan tingkat risiko dan kebutuhan; setiap klien membutuhkan rencana penanganan individual; pidana kerja sosial membutuhkan jejaring lokasi pelaksanaan yang terverifikasi dan sistem pengawasan yang memadai; serta hasil pemidanaan harus diukur berdasarkan perubahan perilaku dan keselamatan masyarakat, bukan sekadar penyelesaian administratif.",
  },

  {
    type: "heading",
    text: "6. Implikasi Kebijakan bagi Sistem Pemasyarakatan Indonesia",
  },
  {
    type: "p",
    text: "Implementasi kerangka tersebut membutuhkan perubahan posisi Bapas dalam arsitektur pemidanaan nasional. Pertama, Bapas perlu ditempatkan sebagai community corrections hub, bukan semata-mata unit administratif pembimbingan. Bapas menjadi simpul antara sistem peradilan dengan masyarakat dan menghubungkan pengadilan serta kejaksaan dengan individu, keluarga, pemerintah daerah, layanan sosial, serta lembaga pelaksana kerja sosial.",
  },
  {
    type: "p",
    text: "Kedua, diperlukan strategi workforce planning bagi Pembimbing Kemasyarakatan. Proyeksi kebutuhan PK seharusnya tidak hanya menggunakan jumlah klien saat ini, tetapi juga memperhitungkan potensi pertumbuhan pidana pengawasan dan pidana kerja sosial.",
  },
  {
    type: "p",
    text: "Ketiga, kompetensi PK perlu dikembangkan menuju risk assessment, case formulation, motivational interviewing, behavioral intervention, crisis response, partnership management, dan digital case management.",
  },
  {
    type: "p",
    text: "Keempat, pemerintah perlu mengembangkan National Community Service Placement Framework yang memberikan standar minimum tetapi memungkinkan adaptasi daerah. Pemerintah daerah mempunyai posisi penting dalam framework tersebut karena memiliki jaringan fasilitas publik, layanan sosial, lingkungan, kebersihan, pendidikan, dan aktivitas komunitas yang potensial menjadi lokasi kerja sosial.",
  },
  {
    type: "p",
    text: "Kelima, dibutuhkan interoperabilitas informasi antara pengadilan, kejaksaan, dan Pemasyarakatan. Informasi mengenai keputusan dan persyaratan seharusnya dapat ditransmisikan secara cepat dan akurat, sedangkan informasi pelaksanaan dapat digunakan untuk monitoring dan keputusan selanjutnya.",
  },
  {
    type: "p",
    text: "Keenam, pembiayaan community corrections harus dipandang sebagai investasi sistem pemidanaan. Pengalihan dari penjara tidak otomatis menghasilkan efisiensi jika Bapas tidak mendapatkan sumber daya untuk melakukan pengawasan yang berkualitas.",
  },

  {
    type: "heading",
    text: "Kesimpulan",
  },
  {
    type: "p",
    text: "Berlakunya KUHP Nasional telah membawa Indonesia memasuki fase baru pemidanaan. Pidana pengawasan dan pidana kerja sosial mengubah paradigma bahwa pertanggungjawaban pidana harus selalu identik dengan pemenjaraan.",
  },
  {
    type: "p",
    text: "Namun transformasi normatif tersebut membawa tantangan implementasi yang besar. Ketika locus pemidanaan berpindah dari penjara menuju masyarakat, kebutuhan kapasitas negara tidak berkurang, melainkan berubah. Negara membutuhkan kapasitas dalam asesmen, case management, differentiated supervision, behavioral intervention, community service placement, partnership management, data integration, serta outcome evaluation.",
  },
  {
    type: "p",
    text: "Perkembangan awal tahun 2026 menunjukkan bahwa proses implementasi telah dimulai. Pidana pengawasan telah digunakan oleh berbagai pengadilan, pedoman institusional mulai tersedia, dan pelaksanaan pidana kerja sosial telah mulai dilakukan di sejumlah wilayah. Perkembangan tersebut merupakan momentum penting, tetapi sekaligus memperlihatkan urgensi membangun sistem sebelum praktik berkembang secara terfragmentasi.",
  },
  {
    type: "p",
    text: "Artikel ini mengusulkan Integrated Community-Based Sentencing Ecosystem yang menghubungkan sentencing readiness, implementation readiness, supervision and intervention, serta outcome evaluation. Dalam kerangka tersebut, Bapas perlu berkembang menjadi community corrections hub dan Pembimbing Kemasyarakatan menjadi aktor profesional yang mengintegrasikan fungsi asesmen, pengawasan, pembimbingan, intervensi, dan case management.",
  },
  {
    type: "p",
    text: "Pada akhirnya, keberhasilan reformasi tidak seharusnya diukur berdasarkan banyaknya orang yang tidak masuk penjara. Ukuran keberhasilannya adalah apakah alternatif tersebut mampu menghasilkan pertanggungjawaban yang proporsional, meningkatkan reintegrasi sosial, mengurangi risiko pengulangan tindak pidana, serta tetap menjamin keselamatan masyarakat.",
  },
  {
    type: "p",
    text: "Dengan demikian, agenda strategis pasca berlakunya KUHP Nasional bukan lagi sekadar memperluas pilihan pidana, melainkan membangun kapasitas negara untuk membuat pilihan pidana tersebut benar-benar bekerja.",
  },

  {
    type: "heading",
    text: "Daftar Pustaka",
  },
  {
    type: "reference",
    text: "Andrews, D. A., & Bonta, J. (2010). The Psychology of Criminal Conduct. Anderson Publishing.",
  },
  {
    type: "reference",
    text: "Bonta, J., & Andrews, D. A. (2017). The Psychology of Criminal Conduct. Routledge.",
  },
  {
    type: "reference",
    text: "Department of Justice Canada. Criminal Code, Conditional Sentence of Imprisonment, section 742.1.",
  },
  {
    type: "reference",
    text: "Department of Justice Canada. Conditional Sentencing in Canada: An Overview of Research Findings.",
  },
  {
    type: "reference",
    text: "Kejaksaan Republik Indonesia. (2025). Pedoman Nomor 1 Tahun 2025 tentang Penerapan Pidana Bersyarat, Pidana Pengawasan, dan Pidana Kerja Sosial.",
  },
  {
    type: "reference",
    text: "Khomaini. (2026). Implementasi Pidana Kerja Sosial dalam KUHP Nasional sebagai Solusi Overkapasitas Lembaga Pemasyarakatan: Tantangan dan Model Sinergi Tripartit. Law Jurnal, 7(1).",
  },
  {
    type: "reference",
    text: "Productivity Commission. (2026). Report on Government Services 2026: Corrective Services. Australian Government.",
  },
  {
    type: "reference",
    text: "Queensland Corrective Services. (2026). Understanding Probation Orders. Queensland Government.",
  },
  {
    type: "reference",
    text: "Tasmania Department of Justice. Community Correction Orders. Community Corrections.",
  },
  {
    type: "reference",
    text: "Tasmania Department of Justice. Community Service Supervision. Community Corrections.",
  },
  {
    type: "reference",
    text: "United Nations. (1990). United Nations Standard Minimum Rules for Non-Custodial Measures (The Tokyo Rules). United Nations.",
  },
  {
    type: "reference",
    text: "United Nations Office on Drugs and Crime. (2007). Handbook of Basic Principles and Promising Practices on Alternatives to Imprisonment. United Nations.",
  },
  {
    type: "reference",
    text: "Undang-Undang Republik Indonesia Nomor 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana.",
  },
  {
    type: "reference",
    text: "Undang-Undang Republik Indonesia Nomor 22 Tahun 2022 tentang Pemasyarakatan.",
  },
  {
    type: "reference",
    text: "Undang-Undang Republik Indonesia Nomor 20 Tahun 2025 tentang Kitab Undang-Undang Hukum Acara Pidana.",
  },
];

export default function ArticlePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-gray-900">
        <article className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          {/* HEADER */}
          <div className="mb-12 border-b border-gray-200 pb-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              HUKUM PIDANA
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Dari Putusan Menuju Pelaksanaan: Menakar Kesiapan Ekosistem
              Pidana Pengawasan dan Pidana Kerja Sosial dalam KUHP Nasional
            </h1>

            <div className="mt-7 space-y-1 text-sm text-gray-500">
              <p>
                <span className="font-medium text-gray-700">Penulis:</span>{" "}
                Lollong Manting, S.S., M.M. & Ahmad Tanali, S.H.
              </p>

              <p>
                <span className="font-medium text-gray-700">Kategori:</span>{" "}
                Hukum Pidana
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6 text-[17px] leading-8 text-gray-700">
            {paragraphs.map((item, index) => {
              if (item.type === "heading") {
                const majorHeading =
                  /^\d+\.\s/.test(item.text) ||
                  ["Abstrak", "Abstract", "Kesimpulan", "Daftar Pustaka"].includes(
                    item.text
                  );

                return (
                  <h2
                    key={index}
                    className={
                      majorHeading
                        ? "pt-10 text-2xl font-bold leading-tight text-gray-900 md:text-3xl"
                        : "pt-6 text-xl font-semibold leading-tight text-gray-900 md:text-2xl"
                    }
                  >
                    {item.text}
                  </h2>
                );
              }

              if (item.type === "keywords") {
                return (
                  <p
                    key={index}
                    className="border-l-4 border-yellow-600 bg-gray-50 px-5 py-4 text-[15px] leading-7 text-gray-700"
                  >
                    {item.text}
                  </p>
                );
              }

              if (item.type === "reference") {
                return (
                  <p
                    key={index}
                    className="text-[15px] leading-7 text-gray-600"
                  >
                    {item.text}
                  </p>
                );
              }

              return <p key={index}>{item.text}</p>;
            })}
          </div>

          {/* FOOTER ARTICLE */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-sm leading-6 text-gray-500">
              Artikel ini merupakan kajian hukum yang dipublikasikan melalui
              kanal Artikel Ahmad Tanali & Rekan.
            </p>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}