---
title: Cara Install Node.js & npm pada windows, mac & linux
date: 2020-08-01
modifiedDate: 2020-08-01
author: Dwiki Arlan
featured: false
published: true
image: ./cover.jpg
description: Panduan Lengkap Instalasi NodeJs & npm, Serta Latihan Cara Memulai Sebuah Proyek Menggunakan NodeJs
category:
  - tools
  - beginner
tags:
  - nodejs
  - npm
  - javascript
---

Node.js adalah development platform untuk mengesekusi program JavaScript kamu disisi server dan sering digunakan untuk pengembangan aplikasi JavaScript baik itu backend maupun frontend. Oleh karna itu wajib bagi seorang web developer untuk menginstal tools ini di komputer / laptop nya.

Sedangkan npm merupakan *package manager* untuk Node.js. npm itu adalah bawaan atau default *package manager* nya dari Node.js. Adapun package manager lain yang banyak digunakan adalah [yarn](https://yarnpkg.com/en/docs/getting-started), banyak developer menggunakan yarn karna performa nya lebih cepat dari npm.

## Instalasi NodeJs & npm

### Langkah 1

Download instalasi Node.js pada [situs resminya ini](https://nodejs.org/en/download/)

Pada halaman download tersebut kalian akan diberikan versi terbaru & stabil dari Node.js.

- **Untuk Windows**

Silahkan cek windows kalian apakah arsitektur nya 32 bit atau 64 bit, lalu pilih versi installer untuk didownload.

- **Untuk MacOS**

Untuk Mac hanya tersedia versi 64 bit, lalu pilih versi installer untuk didownload.

- **Untuk Linux**

Untuk linux terdapat versi 64 bit dan ARM, silahkan disesuaikan lalu download.

### Langkah 2

Setelah selesai mendownload, saatnya melakukan instalasi.

- **Untuk Windows**

Buka file installer yang sudah didownload dan ikuti langkah instalasi dengan menekan tombol next.

![instalasi nodejs pada windows](https://res.cloudinary.com/kodekoki/image/upload/v1578458605/kodekoki-images/windows_node_install_xpebsm.png)

- **Untuk MacOS**

Buka file installer dan ikuti langkah instalasi dengan menekan tombol continue.

![instalasi nodejs pada mac](https://res.cloudinary.com/kodekoki/image/upload/c_fit,h_809,w_1176/v1578448048/kodekoki-images/node_install_mac_tepnfz.jpg)

- **Untuk Linux / Debian**

Untuk linux family tersedia file binary yang dapat di install dengan cara berikut:

Pertama, buka terminal. Kemudian ketikan perintah berikut:

```bash
# Untuk Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Untuk Debian, menggunakan root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```

<div class="info">
<strong>📝 Catatan</strong>
<p>Perintah diatas akan menggunakan Node.js versi 12 yang merupakan versi terbaru dan stabil saat artikel ini ditulis.</p>
</div>

Untuk versi linux lain dan versi Node.js lainnya bisa lihat [selengkapnya disini.](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

### Langkah 3

Setelah instalasi selesai, saatnya untuk cek apakah Node.js sudah terinstal dengan benar.


Untuk pengguna windows buka aplikasi `command prompt` / `shell` dan untuk pengguna MacOs/linux buka aplikasi `terminal` lalu ketikan perintah:

```bash
# Cek versi nodejs, versi yang ditampilkan bisa saja berbeda
node -v

v.12.14.1

# cek versi npm
npm -v

v.6.13.4
```

Jika kamu bisa melihat versi node dan npm berarti proses instalasinya sudah berhasil.


## Latihan Membuat Proyek

Disini kita akan buat sebuah aplikasi sederhana menggunakan nodejs.

### Inisialisasi Proyek

Buatlah sebuah folder dengan nama `nodejs-app`

Kemudian menggunakan terminal / command prompt masuk kedalam folder tersebut.

```bash
cd nodejs-app
```

Lalu init proyek menggunakan perintah:

```bash
npm init
```

Maka akan ditampilkan beberapa pertanyaan mengenai informasi proyek yang akan di buat, semua informasi ini dapat dirubah.

Pertama adalah package name / nama aplikasi:
```bash
nodejs-app
```

Version number / versi aplikasi:
```bash
1.0.0
```

Description / deskripsi aplikasi:
```bash
Aplikasi nodejs percobaan
```

Sisanya silahkan tekan enter untuk menggunakan *settingan default* nya.

Jika sudah selesai , sebuah file bernama package.json akan dibuat, isinya akan terlihat seperti berikut:


```json:title=package.json
{
  "name": "nodejs-app",
  "version": "1.0.0",
  "description": "Aplikasi nodejs percobaan",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mr.Koki",
  "license": "ISC"
}
```

File `package.json` merupakan file yang berisi informasi metadata suatu proyek dan termasuk didalamnya *list dependencies* atau modul tambahan yang ada pada proyek tersebut.

Pada informasi yang ada pada `package.json` diatas terdapat `main` atau entry point aplikasi. Dimana file tersebuat akan dieksekusi pertama kali oleh nodejs.


### Membuat index.js

Buat sebuah file didalam folder proyek dengan nama `index.js`

Kemudian isikan kode berikut kedalam file tersebut:

```javascript
console.log("Halo Node.js")
```

Melalui aplikasi terminal / command prompt, jalankan program diatas menggunakan perintah:

```bash
node index.js
```

Maka akan ditampilkan output:

```bash
Halo Node.js
```

### Instal Dependency / modul tambahan

Pada output aplikasi diatas, tulisan `Halo Node.js` nya masih berwarna hitam putih. Untuk memberikan warna pada output log, kita akan butuh sebuah library bernama [chalk](https://github.com/chalk/chalk).

Untuk menginstalnya, tuliskan perintah: 

```bash
npm install chalk
```

Setelah instalasi selesai kamu bisa melihat pada `package.json` dimana chalk ditambahkan pada daftar dependencies. Dan terdapat sebuah folder `node_modules` yang merupakan tempat libraray tersebut disimpan pada proyek kamu.

Untuk menggunakan library chalk pada aplikasi, ubah kode yang ada pada `index.js` menjadi seperti berikut:

```javascript
const chalk = require('chalk');

console.log(chalk.blue('Halo Node.js'));
```

Sekarang coba jalankan kembali aplikasi kamu dengan `node index.js`. Maka output yang ditampilkan akan berubah menjadi warna biru.


## Alternatif Node.js (Versi Online)

Kamu tidak harus menginstal Node.js di komputer lokal karna kamu bisa mencoba menggunakan nodejs versi online yang ada pada [codesandbox ini.](https://codesandbox.io/s/node)

