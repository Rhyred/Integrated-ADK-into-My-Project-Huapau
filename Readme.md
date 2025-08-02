# HuaPau - Dashboard Manajemen Router Huawei

HuaPau adalah sebuah aplikasi web dasbor yang dirancang untuk memantau dan mengelola perangkat router Huawei. Proyek ini dibangun menggunakan Next.js dan TypeScript, dengan antarmuka yang modern dan responsif berkat Tailwind CSS dan shadcn/ui.

## ✨ Fitur Utama

- **Dasbor Real-time**: Menampilkan metrik vital router seperti penggunaan CPU, memori, suhu, dan status koneksi internet. (Saat ini menggunakan data simulasi).
- **Pemantauan Jaringan**: Visualisasi lalu lintas bandwidth (upload/download) dan status antarmuka jaringan.
- **Asisten AI Cerdas**: Dilengkapi dengan chatbot yang sadar-konteks untuk membantu pengguna memahami data dan status jaringan.
- **Alat Jaringan**: Termasuk fungsionalitas dasar untuk pengujian jaringan seperti Ping dan Traceroute.
- **Desain Modern**: Antarmuka yang bersih, responsif, dan dilengkapi dengan mode terang/gelap.

## 🤖 Implementasi Chatbot Asisten AI

Salah satu fitur unggulan dari proyek ini adalah "HuaPau Assistant", sebuah chatbot cerdas yang terintegrasi di dalam dasbor.

### Teknologi yang Digunakan
- **Model AI**: Chatbot ini didukung oleh model **Gemini 2.0 Flash** dari Google, diakses melalui Google AI Studio API.
- **Backend**: Logika chatbot sepenuhnya ditangani di sisi server melalui **Next.js API Route** (`/app/api/ai/google/route.ts`).
- **Keamanan**: Kunci API Google disimpan dengan aman di sisi server menggunakan *environment variables* (`.env.local`) dan tidak pernah diekspos ke sisi klien (browser).

### Cara Kerja
1.  **Sadar-Konteks (Context-Aware)**: Sebelum mengirimkan pertanyaan pengguna ke AI, aplikasi terlebih dahulu mengumpulkan semua data relevan yang sedang ditampilkan di dasbor (status CPU, info perangkat, daftar antarmuka, dll.).
2.  **Pembuatan Prompt**: Data konteks ini kemudian diformat menjadi teks yang jelas dan digabungkan dengan pertanyaan pengguna. Ini memastikan AI memiliki informasi yang lengkap untuk memberikan jawaban yang akurat.
3.  **Komunikasi Frontend-Backend**: Komponen UI chatbot (`FloatingChatWidget.tsx`) mengirimkan pertanyaan pengguna dan data konteks ke API Route backend.
4.  **Respons Cerdas**: Backend memproses permintaan, berkomunikasi dengan Google AI, dan mengembalikan jawaban yang sudah diolah kepada pengguna.

Dengan pendekatan ini, chatbot dapat menjawab pertanyaan spesifik seperti *"Bagaimana status interface Ethernet 0/0/1?"* atau *"Berapa suhu perangkat saat ini?"* berdasarkan data yang ada di layar.

## 🚀 Panduan Instalasi & Menjalankan

Untuk instruksi lengkap mengenai cara menginstal, mengkonfigurasi, dan menjalankan proyek ini di lingkungan lokal Anda, silakan merujuk ke file [**SETUP.md**](./SETUP.md).
