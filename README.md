# ts-auth-jwt-postgre-drizzle-express

## Deskripsi Proyek
Proyek ini adalah implementasi autentikasi menggunakan TypeScript, JWT, PostgreSQL, dan Drizzle ORM dengan Express.js. Tujuannya adalah menyediakan boilerplate untuk aplikasi backend yang aman dan terstruktur.

## Dependensi
Berikut adalah dependensi utama yang digunakan dalam proyek ini:
- **TypeScript**: Superset JavaScript untuk pengembangan aplikasi yang lebih terstruktur.
- **Express.js**: Framework web minimalis untuk Node.js.
- **JWT (jsonwebtoken)**: Untuk autentikasi berbasis token.
- **PostgreSQL**: Database relasional yang digunakan untuk menyimpan data.
- **Drizzle ORM**: ORM modern untuk TypeScript dan JavaScript.
- **dotenv**: Untuk mengelola variabel lingkungan.
- **bcrypt**: Untuk hashing password.

## Langkah-Langkah Instalasi
1. **Clone Repository**
    ```bash
    git clone https://github.com/username/ts-auth-jwt-postgre-drizzle-express.git
    cd ts-auth-jwt-postgre-drizzle-express
    ```

2. **Instalasi Dependensi**
    Pastikan Anda memiliki Node.js dan npm/yarn terinstal.
    ```bash
    npm install
    ```

3. **Konfigurasi Environment**
    Buat file `.env` di root proyek dan tambahkan variabel berikut:
    ```
    DATABASE_URL=your_postgresql_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Menjalankan Migrate**
    Jalankan server menggunakan perintah berikut:
    ```bash
    npx drizzle-kit migrate
    ```

6. **Menjalankan Aplikasi**
    Jalankan server menggunakan perintah berikut:
    ```bash
    npm run dev
    ```

7. **Akses Aplikasi**
    Aplikasi akan berjalan di `http://localhost:3000`.

## Copyright
Hak cipta © 2025. Semua hak dilindungi. Proyek ini dirilis di bawah lisensi MIT. Silakan lihat file `LICENSE` untuk informasi lebih lanjut.