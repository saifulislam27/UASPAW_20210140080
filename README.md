# My React App

## Deskripsi

Ini adalah proyek React yang dikembangkan dengan menggunakan Vite sebagai build tool. Proyek ini mencakup fitur-fitur berikut:

- **Daftar Produk**: Menampilkan daftar produk dengan kemampuan untuk mengurutkan berdasarkan harga.
- **Routing**: Menggunakan React Router untuk navigasi antar halaman (Home, Products, Product Details, About).
- **Manajemen State**: Mengelola keranjang belanja dengan React Context API.
- **RESTful API**: API menggunakan Node.js dan Express untuk mengelola produk.
- **Integrasi Frontend dan Backend**: Menghubungkan aplikasi React dengan backend Node.js dan menangani status loading serta error.

## Struktur Direktori

- `public/` - Berisi file HTML dan aset statis.
- `src/` - Kode sumber aplikasi React.
  - `components/` - Komponen React seperti `ProductList`.
  - `context/` - Kode untuk React Context API.
  - `pages/` - Halaman-halaman untuk routing.
  - `styles/` - File CSS untuk styling.
- `server/` - Kode server Node.js dan Express.
- `package.json` - Konfigurasi dan dependensi proyek.
- `vite.config.js` - Konfigurasi Vite.

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone <URL_REPOSITORI>
   cd my-react-app
