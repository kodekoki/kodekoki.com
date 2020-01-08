---
title: Panduan Belajar Git Untuk Pemula
date: 2019-12-15
modifiedDate: 2019-12-22
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

Git awalnya dibuat oleh Linus Torvalds pada tahun 2005, yang juga merupakan pencipta kernel sistem operasi linux. Di acara [TED Talk](https://www.ted.com/talks/linus_torvalds_the_mind_behind_linux?language=id) tahun 2016, dia mengatakan bahwa git awalnya diciptakan untuk pemeliharaan kode program untuk proyek linux nya, dimana ada ribuan orang yang bekerja pada satu proyek tersebut.

Dikutip dari situs resminya. Git adalah **_version control system_** (sistem pengontrol versi) terdistribusi yang dirancang untuk menangani proyek kecil hingga besar dengan kecepatan dan efisiensi.

**Apa itu _version control system_ ?** Version Control System adalah suatu sistem yang merekam perubahan pada satu atau beberapa file dari waktu ke waktu sehingga developer dapat mengetahui semua perubahan yang telah dilakukan pada file tersebut.

Git merupakan salah satu _version control system_ yang paling populer saat ini dibanding dengan vcs lainnya seperti subversion, CVS, atau mercurial.

### Kenapa harus menggunakan git?

Berikut adalah 3 alasan utama kenapa developer harus menggunakan git:

**1. Pengontrol Versi**
Git akan merekam semua perubahan kode yang di `commit`.  Jika kamu ingin mengembalikan kodingan kamu ke versi sebelumnya atau bahkan versi satu tahun yang lalu git dapat mengembalikannya dengan mudah.

**2. Media Kolaborasi**
Jika kamu bekerja dalam suatu tim untuk membuat atau mengembangkan suatu aplikasi, git dapat menyinkronkan kodingan kamu dengan developer lain bahkan kamu bisa mengerjakan file yang sama dalam satu waktu.

**3. Penyimpanan Kode Yang Terdistribusi**
Saat mengerjakan proyek tiba-tiba harddisk komputer kamu rusak dan semua data nya hilang, lalu bagaimana?  Git menyediakan penyimpanan lokal dan *cloud storage*. Kode yang ada pada *cloud* akan dijadikan pusat penyimpanan, sehingga kamu bisa dengan mudah mengambil kembali data master yang ada pada *cloud storage* tersebut. Github adalah salah satu contoh *cloud storage* yang banyak digunakan.


### Github

Apa itu Github ? **Github adalah suatu layanan hosting atau cloud storage untuk git repository.**

Sedang kan **git adalah sebuah tools** untuk memanajemen versi kodinganmu.

<div class="info">
<strong>📝 Catatan</strong>
<p>Jangan sampai salah persepsi antara perbedaan git dan github, dimana github digunakan untuk untuk menghosting / upload proyek yang menggunakan git.</p>
</div>

Kalau kamu belum punya akun github silahkan daftar dulu di [github.com](https://github.com/join).

**Kenapa sih github?**

- Selain buat *versioning*, github juga merupakan komunitas open source terbesar didunia, kamu bisa menemukan banyak program yang diberikan secara gratis disana. Selain itu kamu berkesempatan berkenalan dengan *developer-developer* dari seluruh dunia, berkolaborasi, belajar *best practice* dan bisa terlibat proyek open source.
- Github menyediakan fitur *code review*, dimana kamu atau orang lain dapat mengevaluasi hasil kodinganmu dengan mudah dan github juga menyediakan beberapa tools yang dapat memeriksa kesalahan yang ada pada kodingan mu secara otomatis.
- Github juga menjadi tempat untuk memperlihatkan portfolio / karyamu sebagai seorang developer, rekruiter perusahaan akan menjadikan profil github mu sebagai bahan evaluasi.
- Digunakan oleh perusahaan-perusahaan besar seperti facebook, amazon, microsoft, yahoo dan masih banyak lagi.

### Git Repository

Git repository adalah sebuah folder dengan nama `.git` yang dibuat pada folder utama proyek dan akan digunakan oleh git untuk menyimpan semua perubahan yang ada pada folder proyek.

Setiap folder proyek yang menggunakan git disebut dengan repository atau sering juga disebut secara singkat dengan _repo_.

Terdapat 2 macam repository, yaitu *local repository* dan *remote repository*.

## Cara Instal

Sebelum melakukan instalasi, kamu bisa cek apakah pada komputer kamu sudah terinstall git atau belum, dengan cara:

- Buka terminal atau command prompt
- Ketikan `git --version`
- lalu enter untuk menjalankan perintah

Jika git sudah terinstall, kamu akan melihat pesan seperti `git version X.XX.X` dimana X adalah versi git yang sudah terinstal di komputer. Contohnya seperti berikut:

```sh
$ git --version
git version 2.22.0
```

Jika belum ada, silahkan download terlebih dahulu.

### Download

Kunjungi situs resmi git di halaman [download ini](https://git-scm.com/downloads), lalu pilih git sesuai sistem operasi. Terdapat pilihan installer untuk MacOS & Windows dan perintah instalasi menggunakan terminal untuk Linux/Unix.

### Instalasi:

#### 1. Pengguna Windows

- Buka file download dan lakukan instalasi seperti biasa. Pilih `Next` sampai `Finish`
- Jika sudah selesai, buka command prompt dan ketikan `git --version`. Jika instalasi berhasil kamu akan melihat versi git.
- Kemudian lakukan konfigurasi profil seperti berikut:

```sh
$ git config --global user.name "Mr Koki"
$ git config --global user.email "mr.koki@kodekoki.com"
```

**Silahkan ganti nama dan email diatas sesuai dengan profil kamu**. Informasi nama dan email ini nantinya akan selalu digunakan dalam setiap `commit`.

#### 2. Pengguna Linux

- Buka terminal
- Ketik perintah berikut untuk menjalankan instalasi

```sh
$ sudo apt-get update
$ sudo apt-get install git
```

- Jika sudah selesai, lakukan cek versi untuk memastikan git terinstall dengan sukses.
- Terakhir lakukan konfigurasi profil dengan cara yang sama dengan pengguna window diatas.

#### 3. Pengguna Mac

- Install git menggunakan file installer yang sudah didownload atau **alternative nya** bisa menggunakan brew dengan perintah berikut pada terminal:

```sh
$ brew install git
```

- Jika sudah selesai, lakukan cek versi untuk memastikan git terinstall dengan sukses.
- Terakhir lakukan konfigurasi profil dengan cara yang sama dengan pengguna window diatas.

## Konsep Dasar

Sebagai *version control* sistem yang terdistribusi, berikut adalah gambaran distribusi git secara umum.

![konsep-git](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20konsep.png?raw=true)

Pada sistem terdistribusi server pusat **(remote repository)** akan menjadi penghubung antara beberapa **local repository** untuk melakukan kolaborasi. Namun selama proses *development*, git tidak bergantung kepada server pusat, kebanyakan pekerjaan git akan dilakukan pada working area (area kerja), seperti melakukan `commit` / perubahan, membuat branch, melihat history, dll. Semua itu dapat dilakukan disaat offline / tanpa terhubung ke server.

- **_Remote Repository_** merupakan repository yang terletak disisi server seperti private server atau layanan hosting git seperti github, bitbucket, gitlab dll. Repository ini juga digunakan sebagai penghubung antara beberapa _local repository_
- **Area Kerja** adalah tempat atau suatu `branch` dimana developer melakukan pengkodingan.
- **_Staging Area_** merupakan tempat sementara untuk file-file yang akan di `commit`
- Setelah melakukan `commit` maka file akan ditempatkan pada **_Local Repository_**

## Cara Penggunaan Perintah

Semua perintah / command git hanya dapat di eksekusi dari folder **Area Kerja**. Jika nama folder proyeknya adalah `proyek-kodekoki`. Maka gunakan terminal / command prompt untuk mengakses folder tersebut.

Untuk mengakses folder pada terminal / command prompt, gunakan perintah `cd [nama folder]`, Contoh:

```sh
$ cd proyek-kodekoki
```

### 1. Membuat Repository dengan `init`

Untuk membuat repository baru gunakan perintah `git init`

```sh
$ git init
Initialized empty Git repository in /Users/proyek-kodekoki/.git/
```

### 2. Cek Status Commit

Untuk melihat file yang sedang di tracking dan belum ditracking gunakan command `git status`

```sh
$ git status
On branch master

No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

### 3. Traking File Dengan `add`

Untuk memulai men-traking sebuah file gunakan `git add [namafile]`

`[namafile]` bisa di isi lebih dari satu file.

Contoh jika pada folder terdapat file baru bernama `catatan.txt`:

```sh
$ git add catatan.txt
```
![git-add](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20add.gif?raw=true)


File dipindahkan ke **Staging Area**

**Tips:** Untuk menambahkan banyak file sekaligus gunakan `git add --all` atau `git add .`

### 4. Commit File

Commit digunakan untuk menyimpan perubahan, dimana perubahan tersebut disimpan pada sebuah *log* / catatan *history* git.

Gunakan `git commit` untuk `commit` file menggunakan dialog text. Sebuah dialog terbuka untuk memasukan pesan `commit`.

Atau

Gunakan `git commit -m [pesan/nama commit] -m [deskripsi commit]` untuk melakukan `commit` tanpa dialog text.

`[pesan commit]` bersifat wajib di input dan `[deskripsi commit]` bersifat _optional_

![git-commit](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20commit.gif?raw=true)

Maka file dipindahkan ke **local repository**

Contoh:

```sh
$ git commit -m "Menambahkan catatan belanja" -m "Belanja bahan pokok senilai satu juta"
```

<div class="info">
<strong>📝 Pro Tips:</strong>
<p>Gunakan maksimal 50 karakter untuk panjang pesan commit & Gunakan maksimal 72 karakter untuk panjang deskripsi commit per baris</p>
<p>  Hal ini bertujuan agar pesan atau deskripsi commit nya bisa mudah dibaca</p>
</div>

### 5. Melihat Log

Untuk melihat history commit gunakan `git log`

```sh
$ git log

commit ad304e8d404f158119f6b372dcbf6268dd8fa5ae (HEAD -> master)
Author: Mr Koki <mr.koki@kodekoki.com>
Date:   Sat Dec 14 12:33:05 2019 +0700

    Menambahkan catatan belanja

    Belanja bahan pokok senilai satu juta
(END)
```

Disini akan terlihat siapa, kapan dan pesan apa yang ada pada setiap `commit`. Jika ada 100 komit semua _history_ dapat diakses melalui `git log` ini.

Untuk keluar dari log tekan huruf `q`

### 6. Copy Repository Dengan `clone`

Untuk mengambil / mengcopy / cloning suatu proyek yang ada pada **remote repository** ke **local repository** gunakan `git clone [alamat remote repository]`

![git-clone](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20clone.gif?raw=true)

Contoh:

```sh
$ git clone https://github.com/kodekoki/contoh-proyek-kodekoki.git
```

### 7. Branching

Setiap repository menggunakan branch `master` sebagai branch utamanya. Branching digunakan pada saat mengerjakan fitur baru atau memperbaiki bugs (pada **area kerja**) tanpa harus merubah original file yang ada pada branch `master`. Jadi kodingan aslinya akan tetap aman pada **local repository**.

Artinya suatu branch dapat menyimpan versi baru dari suatu proyek tanpa merubah apapun dari versi aslinya.

Ilustrasi branching ([dari rubygarage](https://rubygarage.s3.amazonaws.com/uploads/article_image/file/605/git-branches.jpg)):
![branching](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20branching.jpg?raw=true)

Pada contoh diatas terdapat 3 branch tambahan selain master:

1. Branch Development yang digunakan selama membuat fitur-fitur baru
2. Branch Admin Panel digunakan khusus untuk membuat fitur admin panel
3. Branch User Panel digunakan khusus untuk membuat fitur user panel

Setelah pembuatan fitur selesai, maka branch admin panel dan user panel akan di `merge` / digabungkan ke branch development. Fitur tersebut akan di test di branch development sebelum di `merge` ke branch master.

Untuk melihat list branch dan branch yang sedang digunakan gunakan `git branch`

#### Pindah Branch Dengan `checkout`

Misalkan untuk pindah area kerja dari branch `master` ke branch `develoment` gunakan `git checkout development`. Jika branch `development` belum pernah dibuat gunakan perintah `git checkout -b development` maka secara otomatis branch `development` akan dibuat sekaligus dijadikan sebagai area kerja.

### 8. Mendapatkan Update Dengan `pull`

Jika sudah ada banyak perubahan pada **remote repository**. Maka gunakan `git pull [nama remote server] [nama branch]` untuk mengambilan versi terbaru dari **remote repository** ke **local repository** kemudian di `merge` ke **area kerja**.

![git-pull](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20pull.gif?raw=true)

Contoh:

```sh
git pull origin master
```

`origin` adalah nama remote server yang dituju dan `master` adalah branch yang akan diambil.

### 9. Update Dari Server Ke Lokal Dengan `fetch`

Untuk memperbarui versi *local repository* dengan *remote repository* gunakan perintah `git fetch`

![git-fetch](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20fetch.gif?raw=true)

### 10. Update Ke Server Dengan `push`

Untuk mengupdate **remote repository** dengan file dari **local repository** gunakan `git push [nama remote server] [nama branch]`

![git-push](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20push.gif?raw=true)

Contoh:

```sh
$ git push origin master
```

`origin` adalah nama remote server yang dituju dan `master` adalah branch yang akan dituju.

### 11. Menambahkan Remote Server Baru

Jika sudah mempunyai proyek di **local repository** dan ingin mengirimkannya ke sebuah **remote repository** baru, langkah-langkahnya adalah seperti berikut:

1. Buat Repository baru pada server
2. Jika sudah memiliki repository baru di server, copy alamat url nya. Contoh alamat sebuah repo pada github: `https://github.com/kodekoki/contoh-proyek-kodekoki.git`
3. Pada **area kerja**, gunakan perintah `git remote add [nama origin] [alamat url remote repository]`

Contoh:

```sh
$ git remote add origin https://github.com/kodekoki/contoh-proyek-kodekoki.git
```

### 12. Menggabungkan Dengan `merge`

Pada saat kamu sudah menyelesaikan fitur admin panel dengan nama branch `admin-panel` dan ingin digabungkan / merge ke branch `development`, caranya:

- Checkout ke branch admin panel dengan `git checkout development`
- Gabungkan branch dengan perintah `git merge admin-panel`

Maka branch `admin-panel` akan digabungkan ke branch `development`

Untuk membatalkan penggabungan branch, gunakan perintah `git merge --abort`

### 13. Menyimpan Sementara Dengan `stash`

Jika kamu sedang mengerjakan sesuatu di **area kerja**, tiba-tiba ada hal lain yang harus dikerjakan terlebih dulu. Gunakan `git stash` untuk menyimpan sementara perubahan tanpa harus melakukan `commit`.

![git-stash](https://github.com/kodekoki/gallery/blob/master/snippet/belajar-git/git%20stash.gif?raw=true)

Untuk mengembalikan perubahan yang di stash gunakan `git stash apply`

### 14. Membandingkan Dengan `diff` 

`git diff` dapat digunakan untuk membandingkan perubahan secara keseluruhan.

`git diff [file1] [file2]` digunakan untuk membandingkan 2 file berbeda.

`git diff [branch1]..[branch2]` digunakan untuk membandingkan perbedaan antara dua branch yang berbeda.

## Contoh Project

1. Buatlah sebuah folder dengan nama `my-blog`
2. Masuk kedalam folder `my-blog`, lalu buat sebuah file dengan nama `index.html` sehingga struktur file kamu akan terlihat seperti berikut:

```sh
myblog
-- index.html
```

4. Lalu buka `index.html` dengan kode editor atau notepad juga bisa kemudian tulis dan simpan kode dibawah ini didalam file index.html tersebut:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Blog</title>
  </head>
  <body>
    <h1>Judul Postingan</h1>
    <p>Isi Postingan</p>
  </body>
</html>
```

4. Ok, sekarang mari kita buat repository untuk project ini:

- Dari terminal / command propmt masuk ke folder proyek dengan perintah `cd my-blog`
- Untuk inisialisasi  project gunakan perintah `git init`
- Dan sekarang kita udah punya git repository di project my-blog kita.

5. Buat commit pertama mu:

- Jika kamu cek menggunakan perintah `git status`, kamu akan diberitahu bahwa belum ada file untuk di commit.
- Gunakan perintah `git add index.html`
- Sekarang cek lagi menggunakan `git status`, kamu akan diberitahu bahwa file `index.html` sudah di *tracked* atau berada di **staging area** yang artinya siap untuk dicommit
- Sekarang lakukan commit, ketik:

```sh
git commit -m "inisialisasi my-blog" -m "ini adalah commit pertama untuk project my-blog"
```

<div class="info">
<strong>📝 Catatan</strong>
<p>Melakukan commit akan menjadi kebiasaan kamu saat mengerjakan project yang menggunakan git.</p>
</div>

Bagus, sekarang kamu sudah memulai project pertama mu menggunakan git. Selanjutnya kamu akan diberikan beberapa tantangan agar kamu semakin familiar dengan git.


## 💪Tantangan

### Tantangan Pertama

Pada [contoh project](#contoh-project) `my-blog` diatas, **tambahkan sebuah file bernama `style.css`**. Sehingga struktur file project `my-blog` akan terlihat seperti:

```sh
myblog
-- index.html
-- style.css
```

Kemudian tulis dan simpan rule css berikut didalam file style.css: 

```css
body {
    background: black;
    color: white;
}
```

Lalu simpan perubahan mu menggunakan commit, dengan pesan dan deskripsi commitnya bebas sesukamu.

### Tantangan Kedua

**Upload Project `my-blog` kamu ke github**:

- Pertama buat sebuah repository baru di github dengan nama `Contoh-Project-Git`
- Kemudian tambahkan alamat **remote repository** pada project `my-blog`
- Lalu push project `my-blog` ke remote repository mu.

Hasil akhir pada remote repository akan terlihat seperti [repo ini](https://github.com/kodekoki/Contoh-Project-Git) dan kamu akan memiliki [2 commit](https://github.com/kodekoki/Contoh-Project-Git/commits/master) di repo itu.

### Tantangan Ketiga

**Buat pull request pertama mu**. Untuk bisa berkontribusi dengan komunitas-komunitas yang ada di github, kamu akan terbiasa melakukan pull request. Untuk pemanasan lakukan kontribusi pertama mu pada sebuah project yang ada di repo kodekoki, silahkan ikuti instruksi yang ada [pada repo ini](https://github.com/kodekoki/Latihan-Pull-Request).

<small class="referensi">
Referensi:
<div>- chris.beams.io/posts/git-commit </div>
<div>- https://guides.github.com/introduction/git-handbook/#basic-git</div>
</small>
