---
title: Cara Submit Form HTML Dengan Button Yang Berada Diluar Form
date: 2021-03-01
modifiedDate: 2021-03-01
author: Dwiki Arlan
featured: false
published: true
image: ../cover.jpg
description: Ternyata button ngga harus selalu berada di dalam form
category:
  - html
tags:
  - html5
  - form
---

Kita bisa menempatkan sebuah tombol atau button diluar form, untuk men-trigger `onsubmit` event pada sebuah form. Syaratnya form harus di beri sebuah id, contohnya `<form id="form-contact" ...` kemudian pada button submit kita tinggal refer dengan memberi properti form pada button seperti `<button form="form-contact" ...`

Contoh lengkapnya seperti dibawah ini:

```html
<div>
  <form id="form-contact">
    <label for="name">Nama:</label>
    <input type="text" name="name"></input>
    <label for="email">Email:</label>
    <input type="email" name="email"></input>
  </form>

  <!-- element lain bisa ada disini -->

  <button type="submit" form="form-contact">Submit</button>
</div>
```
