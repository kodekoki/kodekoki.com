---
title: Panduan Belajar Git Untuk Pemula
date: 2019-12-15
author: Dwiki Arlan
featured: false
published: true
image: ./cover.jpg
description: Belajar Konsep Dasar & Cara Menggunakan Git Untuk Mengontrol Versi Kodemu Dengan Fitur-Fitur Canggihnya seperti branching,  staging, dll
category:
  - tools
  - beginner
tags:
  - git
  - version-control
  - productivity
  - github
---

## Apa itu git?

Git awalnya dibuat oleh Linus Torvalds pada tahun 2005, yang juga merupakan pencipta kernel sistem operasi linux.

Dikutip dari situs resminya. Git adalah **_version control system_** (sistem pengontrol versi) terdistribusi yang dirancang untuk menangani proyek kecil hingga besar dengan kecepatan dan efisiensi.

**Apa itu _version control system_ ?** Version Control System adalah suatu sistem yang merekam perubahan pada satu atau beberapa file dari waktu ke waktu sehingga developer dapat mengetahui semua perubahan yang telah dilakukan pada file tersebut.

Git merupakan salah satu _version control system_ yang paling populer saat ini dibanding dengan vcs lainnya seperti `subversion` atau `mercurial`.

Pada situs [resminya, git](https://git-scm.com/) menyatakan bahwa git itu **mudah dipelajari** dan **memiliki kinerja yang cepat**.

### Kenapa harus menggunakan git?

Git bertugas untuk mengontrol versi, apa maksudnya?

---

Misalkan dalam suatu proyek kamu ditugaskan untuk membuat laporan proyek dalam suatu file txt. Setelah selesai kamu menyimpannya dengan nama **laporan-proyek-kodekoki.txt**

Setelah beberapa saat kamu melakukan revisi terhadap laporan tersebut, tapi sebelum melakukan revisi kamu tidak mau kehilangan informasi yang ada pada file aslinya. Kamu pun membuat file salinan baru dengan nama **laporan-proyek-kodekoki-revisi-1.txt**

Dan begitu seterusnya, jika ada 3 revisi maka akan ada file seperti berikut di folder kamu:

- **laporan-proyek-kodekoki.txt** (File pertama)
- **laporan-proyek-kodekoki-revisi-1.txt**
- **laporan-proyek-kodekoki-revisi-2.txt**
- **laporan-proyek-kodekoki-revisi-3.txt**
- **laporan-proyek-kodekoki-revisi-final.txt**

Nah dengan menggunakan **git**, kamu hanya butuh satu file **laporan-proyek-kodekoki.txt** namun kamu tetap bisa memiliki history dari revisi-revisi yang sudah kamu kerjakan.

---

Tapi ada banyak sekali fitur yang diberikan oleh git antara lain seperti:

- Fitur _Branching_ / Memisahkan versi master menjadi suatu _branch_ baru yang nantinya dapat dengan mudah digabungkan kembali
- Fitur _Pull request_ yang dapat membantu dalam menggabungkan suatu versi branch ke versi lain dimana perubahannya dapat dilihat dulu sebelum di gabungkan.
- Fitur _Staging Area_ yang merupakan suatu area yand dapat digunakan untuk mereview perubahan pada file yang sudah dilakukan sebelum di `commit`

Selengkapnya akan kita bahas pada bagian [Cara Penggunaan](#Cara-Penggunaan)

#### Github

Setiap developer itu biasanya memiliki [akun github](https://github.com/join).

Apa itu Github ? **Github adalah suatu layanan hosting untuk git repository.**

Sedang kan **git adalah sebuah tools** untuk _versioning_.

Jelas sekali tidak sama dimana github digunakan untuk untuk menghosting/upload proyek yang menggunakan git.

#### Git Repository

Pada suatu proyek yang menggunakan git, git akan membuat sebuah folder bernama `.git` di dalam folder proyek. Folder `.git` inilah yang akan digunakan git untuk menyimpan semua perubahan yang ada pada folder proyek.

Setiap folder proyek yang menggunakan git disebut dengan repository atau sering juga disebut secara singkat dengan _repo_.

## Cara Instalasi

Sebelum melakukan instalasi, kamu bisa cek apakah pada komputer kamu sudah terinstall git atau belum, dengan cara:

- Buka terminal atau command prompt
- Ketikan `git --version`
- lalu enter untuk menjalankan perintah

Jika git sudah terinstall, kamu akan melihat pesan seperti `git version X.XX.X` dimana X adalah versi git yang sudah terinstal di komputer. Contohnya seperti berikut:

```git
$ git --version
git version 2.22.0
```

Jika belum ada, silahkan download terlebih dahulu.

#### Download

Kunjungi situs resmi git halaman [download ini](https://git-scm.com/downloads), lalu pilih git sesuai sistem operasi. Terdapat pilihan installer untuk MacOS & Windows dan perintah instalasi menggunakan terminal untuk Linux/Unix.

#### Instalasi:

#### 1. Pengguna Windows

- Buka file download dan lakukan instalasi seperti biasa. Pilih `Next` sampai `Finish`
- Jika sudah selesai, buka command prompt dan ketikan `git --version`. Jika instalasi berhasil kamu akan melihat versi git.
- Kemudian lakukan konfigurasi profil seperti berikut:

```git
$ git config --global user.name "Mr Koki"
$ git config --global user.email "mr.koki@kodekoki.com"
```

**Silahkan ganti nama dan email diatas sesuai dengan profil kamu**. Informasi nama dan email ini nantinya akan selalu digunakan dalam setiap `commit`.

#### 2. Pengguna Linux

- Buka terminal
- Ketik perintah berikut untuk menjalankan instalasi

```git
$ sudo apt-get update
$ sudo apt-get install git
```

- Jika sudah selesai, lakukan cek versi untuk memastikan git terinstall dengan sukses.
- Terakhir lakukan konfigurasi profil dengan cara yang sama dengan pengguna window diatas.

#### 3. Pengguna Mac

- Install git menggunakan file installer yang sudah didownload atau **alternative nya** bisa menggunakan brew dengan perintah berikut pada terminal:

```git
$ brew install git
```

- Jika sudah selesai, lakukan cek versi untuk memastikan git terinstall dengan sukses.
- Terakhir lakukan konfigurasi profil dengan cara yang sama dengan pengguna window diatas.

## Git Terdistribusi

Sebagai sistem yang terdistribusi, berikut adalah gambaran distribusi git secara umum.

![alur-kerja-git](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/panduang-belajar-git.jpg?raw=true)

- **_Remote Repository_** merupakan repository yang terletak disisi server seperti private server atau layanan hosting git seperti github, bitbucket, gitlab dll. Repository ini juga digunakan sebagai penghubung antara beberapa _local repository_
- **Area Kerja** adalah tempat atau suatu `branch` dimana developer melakukan pengkodingan.
- **_Staging Area_** merupakan tempat sementara untuk file-file yang akan di `commit`
- Setelah melakukan `commit` maka file akan ditempatkan pada **_Local Repository_**

## Cara Penggunaan

Semua perintah / command git hanya dapat di eksekusi dari folder **Area Kerja**. Jika nama folder proyeknya adalah `proyek-kodekoki`. Maka gunakan terminal / command prompt untuk mengakses folder tersebut.

Contoh:

```git
$ cd proyek-kodekoki
```

### Membuat Repository

Untuk membuat repository baru gunakan perintah `git init`

```git
git init
Initialized empty Git repository in /Users/proyek-kodekoki/.git/
```

### Cek Status

Untuk melihat file yang sedang di tracking dan belum ditracking gunakan command `git status`

```git
$ git status
On branch master

No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

### Traking File

Untuk memulai men-traking sebuah file gunakan `git add [namafile]`

`[namafile]` bisa di isi lebih dari satu file.

Contoh jika pada folder terdapat file baru bernama `catatan.txt`:

```git
$ git add catatan.txt
```

Maka lokasi file saat ini berada di **Staging Area**

---

Tips: Untuk menambahkan banyak file sekaligus gunakan `git add --all` atau `git add .`

---

### Commit File

Gunakan `git commit` untuk `commit` file menggunakan dialog text. Sebuah dialog terbuka untuk memasukan pesan `commit`.

Atau

Gunakan `git commit -m [pesan/nama commit] -m [deskripsi commit]` untuk melakukan penyimpanan file dan menambahkan file ke **Local repository** tanpa dialog text.

`[pesan commit]` bersifat wajib di input dan `[deskripsi commit]` bersifat _optional_

Contoh:

```git
$ git commit -m "Menambahkan catatan belanja" -m "Belanja bahan pokok senilai satu juta"
```

---

**Pro Tips**

- Gunakan maksimal 50 karakter untuk panjang pesan commit
- Gunakan maksimal 72 karakter untuk panjang deskrisi commit dalam satu line.

Tips ini bertujuan agar pesan atau deskripsi commit nya bisa mudah dibaca

---

### Melihat Comit-an Sebelumnya

Untuk melihat history commit gunakan `git log`

```git
$ git log

commit ad304e8d404f158119f6b372dcbf6268dd8fa5ae (HEAD -> master)
Author: Mr Koki <mr.koki@kodekoki.com>
Date:   Sat Dec 14 12:33:05 2019 +0700

    Menambahkan catatan belanja

    Belanja bahan pokok senilai satu juta
(END)
```

Disini akan terlihat siapa, kapan dan pesan apa yang ada pada setiap `commit`. Jika ada 100 komit semua _history_ dapat diakses melalui `git log` ini.

### Meng-copy Remote Repository

Untuk mengambil / mengcopy / cloning suatu proyek yang ada pada **remote repository** ke **local repository** gunakan `git clone [alamat remote repository]`

Contoh:

```git
$ git clone https://github.com/kodekoki/contoh-proyek-kodekoki.git
```

### Branching

Setiap repository menggunakan branch `master` sebagai branch utamanya pada. Branching digunakan pada saat mengerjakan fitur baru atau memperbaiki bugs (pada **area kerja**) tanpa harus merubah original file yang ada pada branch `master`. Jadi kodingan aslinya akan tetap aman pada **local repository**.

Artinya suatu branch dapat menyimpan versi baru dari suatu proyek tanpa merubah apapun dari versi aslinya.

ilustrasi branching ([sumber](https://rubygarage.s3.amazonaws.com/uploads/article_image/file/605/git-branches.jpg)):
![branching](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20branching.jpg?raw=true)

Pada contoh diatas terdapat 3 branch tambahan selain master:

1. Branch Development yang digunakan selama membuat fitur-fitur baru
2. Branch Admin Panel digunakan khusus untuk membuat fitur admin panel
3. Branch User Panel digunakan khusus untuk membuat fitur user panel

Setelah pembuatan fitur selesai, maka branch admin panel dan user panel akan di `merge` ke branch development. Fitur tersebut akan di test di branch development sebelum di `merge` ke branch master.

Untuk melihat list branch dan branch yang sedang digunakan gunakan `git branch`

### Pindah Antar Branch

Misalkan untuk pindah area kerja dari branch `master` ke branch `develoment` gunakan `git checkout development`. Jika branch `development` belum pernah dibuat gunakan perintah `git checkout -b development` maka secara otomatis branch `development` akan dibuat sekaligus dijadikan sebagai area kerja.

### Menarik Commit Dari Remote Server

Jika sudah ada banyak perubahan pada **remote repository**. Maka gunakan `git pull [nama remote server] [nama branch]` untuk mengambilan versi terbaru dari **remote repository** ke **local repository**

Contoh:

```git
$ git pull origin master
```

`origin` adalah nama remote server yang dituju dan `master` adalah branch yang akan diambil.

### Melakukan Push Ke Remote Server

Jika sudah melakukan perubahan pada **local repository**. Maka untuk mengupdate **remote repository** dengan file **local repository** gunakan `git push [nama remote server] [nama branch]`

Contoh:

```git
$ git push origin master
```

`origin` adalah nama remote server yang dituju dan `master` adalah branch yang akan diambil.

### Menambahkan Remote Server Baru

Jika sudah mempunyai proyek di **local repository** dan ingin mengirimkannya ke sebuah **remote repository** baru, langkah-langkahnya adalah seperti berikut:

1. Buat Repository baru pada server
2. Jika sudah memiliki repository baru di server, copy alamat url nya. Contoh alamat sebuah repo pada github: `https://github.com/kodekoki/contoh-proyek-kodekoki.git`
3. Pada **area kerja**, gunakan perintah `git remote add [nama origin] [alamat url remote repository]`

Contoh:

```git
$ git remote add origin https://github.com/kodekoki/contoh-proyek-kodekoki.git
```

### Penggabungan Branch

Pada saat anda sudah menyelesaikan fitur admin panel dengan nama branch `admin-panel` dan ingin digabungkan / merge ke branch `development`, caranya:

- Checkout ke branch admin panel dengan `git checkout development`
- Gabungkan branch dengan perintah `git merge admin-panel`

Maka branch `admin-panel` akan digabungkan ke branch `development`

---

Untuk membatalkan penggabungan branch, gunakan perintah `git merge --abort`

---

<small>
Referensi: <br />
- chris.beams.io/posts/git-commit <br />
- https://guides.github.com/introduction/git-handbook/#basic-git
</small>
