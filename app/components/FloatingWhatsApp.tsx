export default function FloatingWhatsApp() {
  const phone = "62813XXXXXXXX"; // Ganti dengan nomor WhatsApp kamu
  const message =
    "Halo Kantor Hukum Ahmad Tanali & Rekan.%0A%0ANama:%0ADomisili:%0APermasalahan Hukum:%0A%0ASaya ingin berkonsultasi.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-9 w-9 fill-current"
      >
        <path d="M19.11 17.19c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z" />
        <path d="M16.02 3C8.84 3 3 8.74 3 15.82c0 2.5.73 4.92 2.1 7L3 29l6.39-2.03a13.1 13.1 0 0 0 6.63 1.8h.01C23.2 28.77 29 23.03 29 15.95 29 8.87 23.2 3 16.02 3zm0 23.46c-2.05 0-4.05-.56-5.79-1.62l-.42-.25-3.79 1.2 1.23-3.69-.28-.44a10.5 10.5 0 0 1-1.63-5.63c0-5.82 4.79-10.56 10.68-10.56 5.89 0 10.68 4.74 10.68 10.56S21.91 26.46 16.02 26.46z" />
      </svg>
    </a>
  );
}