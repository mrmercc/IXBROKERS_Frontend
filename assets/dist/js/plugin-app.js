"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(e){var o={};function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==_typeof(t)&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,e){e(1),e(2),n.exports=e(3)},function(n,t){$(function(){var n=$("title"),t=(n.text(),$(".headtitle h1").text());$("body").hasClass("home")?$(window).on("load",function(){n.text("IXBROKERS")}):$(window).on("load",function(){n.text(t.toLocaleUpperCase()+" | IXBROKERS")}),$(window).focus(function(){$("body").hasClass("home")?n.text("IXBROKERS"):n.text(t.toLocaleUpperCase()+" | IXBROKERS")}),$(window).blur(function(){n.text("IXBROKERS")})}),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")})}),jQuery(function(r){1059<r(window).width()?r(window).on("load resize scroll",function(n){var t=r(window).scrollTop(),e=r("header.header"),o=r("section.headtitle");t>e.height()/3?(e.addClass("navscroll"),o.addClass("navscroll")):(e.removeClass("navscroll"),o.removeClass("navscroll"))}).on("load resize",function(n){}):r(window).on("load resize scroll",function(n){var t=r(window).scrollTop(),e=r("header.header");10<t?e.addClass("navscroll"):e.removeClass("navscroll")})}),$(window).on("load resize",function(n){1059<$(window).width()&&$('.dfn-menu .dfn-menu-list .dfn-menu-list-item > a[data-toggle="dropdown"]').click(function(){$(".dfn-menu").addClass("activenavbar"),$(document).click(function(n){$(n.target).hasClass("active")||$(".dfn-menu").removeClass("activenavbar")})})}),$(".dropdown-menu input, .dropdown-menu select, .dropdown-menu label").click(function(n){n.stopPropagation()}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(document).ready(function(){jQuery(window).scroll(function(){250<jQuery(this).scrollTop()?jQuery(".bottomtotopbutton").fadeIn(300):jQuery(".bottomtotopbutton").fadeOut(300)}),jQuery(".bottomtotopbutton").click(function(n){return n.preventDefault(),jQuery("html,body").animate({scrollTop:0},300),!1})}),$('.siteformui input[type="text"]').keyup(function(n){var t=$(this).val();$(this).val(t.replace(/^(.)|\s(.)/g,function(n){return n.toUpperCase()}))}),jQuery(document).ready(function(){$(".siteformuilabel .labelanimation > .selectclickjsblur").click(function(n){n.preventDefault(),$(this).hide().prev("select.autofill").prop("disabled",!1)})}),$(document).ready(function(){$(".inputphonemask").inputmask({mask:"+99{1,99}",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputgsmphonemask").inputmask({mask:"0599 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputphonemasktr").inputmask({mask:"0999 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputibanmask").inputmask({mask:"TR99 9999 9999 9999 9999 9999 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputidentitymask").inputmask({mask:"99999999999",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatemask").inputmask({mask:"99/99/9999",placeholder:"MM/DD/YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatedottedmask").inputmask({mask:"99.99.9999",placeholder:"MM.DD.YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputonlytextmask").inputmask({mask:"AAA",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})})},function(n,t){jQuery(function(n){1059<n(window).width()&&(AOS.init(),window.addEventListener("load",AOS.refresh))})},function(n,t){$(window).on("load",function(n){var t={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"UnknownBrowser",this.OS=this.searchString(this.dataOS)||"UnknownOS"},searchString:function(n){for(var t=0;t<n.length;t++){var e=n[t].string,o=n[t].prop;if(this.versionSearchString=n[t].versionSearch||n[t].identity,e){if(-1!=e.indexOf(n[t].subString))return n[t].identity}else if(o)return n[t].identity}},searchVersion:function(n){var t=n.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(n.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};t.init(),"Chrome"===t.browser?$("html").addClass(t.OS+" Chrome Chrome"+t.version):"Firefox"===t.browser?$("html").addClass(t.OS+" Firefox Firefox"+t.version):"MS Edge"===t.browser?($("html").addClass(t.OS+" Edge Edge"+t.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">')):"Explorer"===t.browser&&($("html").addClass(t.OS+" IExplorer IExplorer"+t.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">'))})}]);
//# sourceMappingURL=plugin-app.js.map
