---
title: Cara Konfigurasi NodeJs & Babel
date: 2020-03-15
modifiedDate: 2020-03-15
author: Dwiki Arlan
featured: false
published: true
image: ./cover.jpg
videoId: w4H6AkgDivk
description: Membuat Basic Konfigurasi Aplikasi NodeJs Menggunakan Babel Yang Dapat Digunakan Sebagai Template Proyek NodeJs
category:
  - template
  - beginner
tags:
  - nodejs
  - babel
  - javascript
---

Node.js didesain agar dapat digunakan untuk membuat aplikasi berbasis javascript dalam skala kecil hingga skala besar.

Pada tutorial ini akan dibahas cara inisialisasi proyek atau langkah-langkah mempersiapkan suatu proyek berbasis Node.js yang menggunakan babel sehingga inisial proyek ini dapat kita gunakan sebagai template atau dapat digunakan berulang-ulang untuk pembuatan proyek-proyek node.js dikemudian hari.

Kita akan menggunakan Babel sebagai transcompiler agar bisa menggunakan fitur-fitur baru yang ada pada JavaScript.

Untuk itu pastikan node.js dan git sudah terinstal dengan benar pada komputer kamu.

Kalau belum, silahkan ikuti panduan berikut: 
- [Cara Instal Node.js](https://kodekoki.com/instal-nodejs)
- [Panduan Git](https://kodekoki.com/belajar-git#cara-instal).

Dan kode editor yang digunakan adalah **VSCode**, tapi kamu dipersilahkan untuk menggunakan kode editor lain atau jika mau install VSCode silahkan kunjungi link: [code.visualstudio.com](https://code.visualstudio.com/download) untuk mendapatkan installernya.

### Inisialisasi Proyek NodeJs

Pada suatu aplikasi JavaScript dibutuhkan suatu tempat yang digunakan sebagai penyimpan source code dan konfigurasi aplikasi. Jika kedepannya kamu akan memiliki banyak proyek aplikasi maka diperlukan suatu tempat atau folder khusus yang akan berisikan folder proyek-proyek kamu yang nantinya kita bisa mengetahui lokasi proyek-proyek yang sudah di kerjakan dengan mudah.

Untuk membuat sebuah folder dengan nama `nodejs-babel`. Ketikan perintah berikut pada terminal / command prompt kamu:

```bash
mkdir nodejs-babel

cd nodejs-babel

```


Untuk membuat suatu proyek Node.js kita akan membuat meta data yang akan disimpan pada suatu file bernama package.json. File ini berisikan kumpulan informasi-informasi mengenai proyek yang sedang dibuat serta menginformasikan kepada npm (Node Package Manager) mengenai depedencies/module yang akan digunakan pada proyek.

Untuk membuat file package.json secara otomatis kita bisa menggunakan perintah inisialisasi nya npm, yaitu dengan cara:

```bash
npm init -y
```

Maka sebuah file `package.json` akan digenerate, file ini berisikan informasi default seperti nama proyek, versi, deskripsi dll.

Jika kamu mau merubah informasi default yang digenarate oleh npm kamu bisa mengeditnya langsung dengan kode editor atau VSCode.

### Membuat File JavaScript

Pada folder `nodejs-babel` buatlah sebuah folder dengan nama `src`, folder itu akan kita gunakan untuk menyimpan source code aplikasi.

```bash
mkdir src

cd src
```

Kemudian didalam folder `src` buatlah sebuah file dengan nama `index.js` yang akan digunakan sebagai entry point atau sebagai file utama yang akan diakses oleh node.js untuk menjalankan aplikasi.

```bash
touch index.js
```

Kemudian bukalah folder `nodejs-babel` menggunakan kode editor, pada file `src/index.js` tuliskan script berikut.

```javascript
console.log("Halo proyek node.js")
```

Lalu pada file `package.json`, tambahkan pengaturan `"start": "node src/index.js"` pada properti `scripts`. Sehingga file `package.json` akan terlihat sebagai berikut:

```json
{
  "name": "nodejs-babel",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Selanjutnya untuk menjalankan aplikasi ketikan perintah:

```bash
npm start
```

Maka akan terlihat output sebagai berikut:

```bash
Halo proyek node.js
```

Selamat, kamu sudah berhasil membuat aplikasi node.js pertama mu.

Tapi jika kita melakukan suatu perubahan pada file `index.js`, untuk menjalankan ulang aplikasi kita harus menghentikan aplikasi menggunakan `ctrl + c` dan `npm start` lagi. Tentu saja hal ini akan memperlambat kita dalam membangun aplikasi.

Untuk itu kita akan membuat aplikasi kita reload secara otomatis jika ada perubahan menggunakan library `nodemon`.

Untuk menginstal nya, ketikan perintah:

`npm install nodemon --save-dev`

Sekarang pada file `package.json`, ubahlah script start yang awalnya `node src/index.js` menjadi `nodemon src/index.js`

Silahkan coba lagi menjalankan apalikasi dengan `npm start` dan coba rubah script yang ada pada `index.js` menjadi:

```javascript
console.log("Proyek node.js menggunakan nodemon")
```

Maka aplikasi akan reload secara otomatis dan menjalankan script yang baru.

### Instalasi Babel

Untuk menggunakan fitur terbaru JavaScript seperti import / export pada versi node.js saat ini, kita membutuhkan babel sebagai *transcompiler* yang mengubah kodingan kita agar dapat dibaca dan dijalankan oleh node.js.

Untuk menginstallnya gunakan perintah:

```bash
npm install @babel/core @babel/node --save-dev
```

Kemudian pada `package.json` anda ubahlah script `start` menjadi: `nodemon --exec babel-node src/index.js`

Sekarang aplikasi node.js sudah berjalan menggunakan babel, tapi untuk menggunakan fitur-fitur terbaru pada JavaScript kita harus menambahkan babel preset atau babel plugin.

Pada projyek ini kita akan gunakan babel preset env, silahkan ketikan perintah berikut:

```bash
npm install @babel/preset-env --save-dev
```

Pada root proyek, buatlah sebuah file .babelrc untuk menyimpan pengaturan babel.
```bash
touch .babelrc
```

Kemudian kita tambahkan preset kedalam pengaturan babel:
```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

### Menggunakan Environment Variable

Dalam membuat suatu aplikasi, biasanya kita akan membutuhkan beberapa informasi rahasia sebagai pengaturan aplikasi, dimana informasi tersebut tidak boleh ditampilkan pada kodingan. Contohnya seperti password, email, api-key dll. Maka untuk membuat environment variable, buatlah file `.env` pada root proyek:

```bash
touch .env
```

Pada file `.env` ketikan script berikut:
```bash
APP_SECRET=53cR37
```

Agar aplikasi node.js bisa membaca env variable, dibutuhkan dependencies `dotenv`. Untuk menginstalnya ketikan:

```bash
npm install dotenv --save
```

Sekarang aplikasi node.js kita sudah dapat membaca env variable. Untuk mencobanya tulis script berikut pada `src/index.js`:

```javascript
import 'dotenv/config';

console.log('Proyek node.js menggunakan nodemon');
console.log(process.env.APP_SECRET);
```

Lalu jalankan aplikasi dengan `npm start`, dan kamu akan melihat hasil outputnya sebgai berikut:

```bash
Halo proyek node.js menggunakan nodemon
53cR37
```

> Sekarang proyek node.js kita siap untuk dikembangkan!

**Bonus:** Sampai disini kita bisa mulai menggunakan version kontrol git untuk me-manage versi aplikasi. Kamu bisa memulai dengan sebuah inisial git, dengan perintah:

```bash
# inisialisasi git
git init
# menambahkan semua file ke stage
git add .
# commit pertama
git commit -m "inisialisasi basic app nodejs babel"
```

Pada panduan ini kamu sudah berhasil membuat sebuah basic konfigurasi proyek nodeJs. Dan kamu diharapkan juga mampu memahami beberapa konsep dasar, seperti: 

- Penggunaan `npm init`
- Penggunaan `npm install`
- Manfaat menggunakan nodemon untuk development
- Kenapa menggunakan babel js?
- Bagaimana cara kerja environment variable?

Untuk hasil akhir dari source kode bisa [dilihat disini](https://github.com/kodekoki/basic-nodejs-babel).