/*
 * This file was last modified at 2022.01.24 22:44 by Victor N. Skurikhin.
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to <http://unlicense.org>
 * recommendations.load.8b0221d1e6088a6359fd494f934e58e6.js
 * $Id$
 */

!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/recommendations/styles/recommendations.10022a97346f1c6e3798931bbd8e4bb5.css",RTL_STYLES:"https://c.disquscdn.com/next/recommendations/styles/recommendations_rtl.9c3ccad48c24340222b5a85c20ea36b8.css","recommendations/main":"https://c.disquscdn.com/next/recommendations/recommendations.bundle.926bc472e4859a48daa346b4ba2ab4f4.js","remote/config":"https://disqus.com/next/config.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/recommendations/recommendations",paths:["recommendations/main","remote/config"].reduce(function(a,c){var d=-3;return a[c]=b[c].slice(0,d),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("recommendations",b)})},c.src="https://c.disquscdn.com/next/recommendations/common.bundle.a3659a8e961f4dff2575f07c23268b7f.js",a.body.appendChild(c)}();