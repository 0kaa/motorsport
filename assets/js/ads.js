var adsQueue = window.adsQueue || []; function noAB(a) { window.adsQueue.push(a); } var activateBanner = window.activateBanner || noAB;
var todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
var script = document.createElement('script');
script.src = 'https://cdn.atmedia.hu/motorsport.hu.js?v=' + todayDate;
script.async = true;
document.head.appendChild(script);