# Panduan Setup Proyek HuaPau

Dokumen ini menjelaskan langkah-langkah untuk menginstal, mengkonfigurasi, dan menjalankan proyek dashboard manajemen router Huawei (HuaPau).

## 1. Prasyarat

Pastikan Anda memiliki perangkat lunak berikut terinstal di sistem Anda:
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
## 2. Instalasi

Ikuti langkah-langkah berikut untuk menyiapkan proyek di lingkungan lokal Anda.

**a. Clone Repositori**
```bash
git clone https://github.com/Rhyred/Integrated-ADK-into-My-Project-Huapau.git
cd Integrated-ADK-into-My-Project-Huapau
```

**b. Instal Dependensi**
Gunakan `npm` untuk menginstal semua dependensi yang diperlukan.
```bash
npm install
```

## 3. Konfigurasi Lingkungan

Proyek ini memerlukan kunci API dari Google AI Studio agar chatbot dapat berfungsi.

**a. Buat File `.env.local`**
Buat file baru bernama `.env.local` di direktori root proyek.

**b. Tambahkan Kunci API**
Buka file `.env.local` dan tambahkan kunci API Google Anda dengan format berikut. Ganti `[KUNCI_API_ANDA]` dengan kunci yang Anda dapatkan dari Google AI Studio.

```env
# Kunci API Google AI untuk penggunaan di sisi server
GOOGLE_API_KEY=[KUNCI_API_ANDA]

# URL Aplikasi untuk panggilan API internal (opsional, default ke localhost:3000)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Penting**: File `.env.local` sudah terdaftar di `.gitignore` untuk mencegah kunci API Anda terkirim ke repositori Git.

## 4. Menjalankan Proyek

Setelah instalasi dan konfigurasi selesai, jalankan server pengembangan:

```bash
npm run dev
```

Aplikasi sekarang akan berjalan dan dapat diakses di [http://localhost:3000](http://localhost:3000).

## 5. Menguji Chatbot

Untuk memastikan implementasi chatbot berfungsi dengan benar:
1. Buka aplikasi di browser Anda.
2. Klik ikon chat di pojok kanan bawah untuk membuka widget "HuaPau Assistant".
3. Ajukan pertanyaan yang relevan dengan data yang ditampilkan di dasbor, misalnya:
   - *"Berapa penggunaan CPU saat ini?"*
   - *"Bagaimana status koneksi internet?"*
4. Chatbot seharusnya memberikan jawaban yang kontekstual berdasarkan data (simulasi) yang ada di dasbor.
