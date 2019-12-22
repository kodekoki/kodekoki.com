---
title: Css Reset Versi Meyer
date: 2019-12-23
modifiedDate: 2019-12-23
author: Dwiki Arlan
featured: false
published: true
image: ../cover.jpg
description: Hilangkan Styling CSS Bawaan Dari Browser
category:
- styling
tags:
- css
- reset

---

CSS Reset versi [meyer](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/) ini cukup popular, kamu dapat menggunakannya untuk me reset styling CSS bawaan browser dan fokus pada rule CSS project mu.

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	font-family: inherit;
	vertical-align: baseline;
}
/* remember to define focus styles! */
:focus {
	outline: 0;
}
body {
	line-height: 1;
	color: black;
	background: white;
}
ol, ul {
	list-style: none;
}
/* tables still need 'cellspacing="0"' in the markup */
table {
	border-collapse: separate;
	border-spacing: 0;
}
caption, th, td {
	text-align: left;
	font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
}
blockquote, q {
	quotes: "" "";
}
```

Dan Berikut untuk CSS yang sudah di _minified_ nya:

```css
a,abbr,acronym,address,applet,big,blockquote,body,caption,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,ul,var{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline}:focus{outline:0}body{line-height:1;color:#000;background:#fff}ol,ul{list-style:none}table{border-collapse:separate;border-spacing:0}caption,td,th{text-align:left;font-weight:400}blockquote:after,blockquote:before,q:after,q:before{content:""}blockquote,q{quotes:"" ""}
```
