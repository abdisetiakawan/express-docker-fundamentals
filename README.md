# Express Docker Fundamentals

Proyek sederhana ini dibuat untuk memantapkan pemahaman saya terkait Docker dan Nginx. Proyek ini menggunakan Express.js sebagai server dan Docker untuk containerisasi.

## Struktur Proyek

- `Dockerfile`: Berisi konfigurasi untuk membangun image Docker.
- `docker-compose.yml`: Berisi konfigurasi untuk menjalankan aplikasi menggunakan Docker Compose.
- `src/`: Berisi kode sumber aplikasi Express.js.

## Cara Menjalankan

1. Pastikan Docker dan Docker Compose sudah terinstall di sistem Anda.
2. Clone repositori ini.
3. Jalankan perintah berikut untuk membangun dan menjalankan container:

   ```sh
   docker-compose up --build
   ```

4. Akses aplikasi di browser dengan membuka `http://localhost:3000`.

## Teknologi yang Digunakan

- **Express.js**: Framework untuk membangun aplikasi web dengan Node.js.
- **Docker**: Platform untuk membuat, mengirim, dan menjalankan aplikasi di dalam container.
- **Nginx**: Server HTTP dan reverse proxy.

## Tujuan

Proyek ini bertujuan untuk:

- Memahami konsep dasar Docker dan bagaimana menggunakannya untuk containerisasi aplikasi.
- Memahami bagaimana menggunakan Nginx sebagai reverse proxy untuk aplikasi Express.js.

## Kontribusi

Jika Anda ingin berkontribusi, silakan fork repositori ini dan buat pull request dengan perubahan yang Anda usulkan.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.
```

Anda dapat menyesuaikan README.md ini sesuai kebutuhan Anda.
