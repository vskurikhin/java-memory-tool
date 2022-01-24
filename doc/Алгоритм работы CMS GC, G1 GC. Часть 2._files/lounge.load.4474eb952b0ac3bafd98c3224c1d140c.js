/*
 * This file was last modified at 2022.01.24 22:44 by Victor N. Skurikhin.
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to <http://unlicense.org>
 * lounge.load.4474eb952b0ac3bafd98c3224c1d140c.js
 * $Id$
 */

!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.7ab903feba7624935283ca4c7d8c7203.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.7c7aaa8ce2bba81bd9c9b1c1b9107738.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.67f9fd26b5922562ba93be9d9b520b54.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.d53d00706a584180a3368c8e414318a7.js",a.body.appendChild(c)}();