!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r=n(1),o=r.getCoefficients,c=r.createHtmlExpression,i=r.createSingleExpression,u=document.querySelector(".result"),a=document.querySelector("input"),l=document.querySelector("input + input");document.querySelector("button").addEventListener("click",(function(e){return function(e,t,n){e.preventDefault();var r={},a=[];try{if(!t.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)||!n.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)||""===t||""===n)throw new Error("Not valid expression");var l=t.replace(/ /gi,"").split("+"),s=n.replace(/ /gi,"").split("+"),f=o(l),d=o(s);if(f.includes[void 0]||d.includes[void 0])throw new Error("Not valid expression");f.forEach((function(e){Object.keys(r).includes(e[1])?r[e[1]]=r[e[1]]+e[0]:r[e[1]]=e[0]})),d.forEach((function(e){Object.keys(r).includes(e[1])?r[e[1]]=r[e[1]]+e[0]:r[e[1]]=e[0]}));for(var p=Object.keys(r).sort((function(e,t){return t-e})),x=0;x<p.length;x++)0!==r[p[x]]&&(x+1!==p.length?a.push("".concat(i(r[p[x]],p[x])," + ")):a.push("".concat(i(r[p[x]],p[x]))))}catch(e){alert("".concat(e,", try Ax^a, ex. -2x^-3")),console.log(e)}return u.innerHTML=c(a.join("")),a.join("")}(e,a.value,l.value)}))},function(e,t){t.getCoefficients=function(e){return e.map((function(e){if(e.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)){var t,n,r=e.includes("x"),o=e.match(/x\^(-)?(\d)+$/m);return t=r?e.slice(0,e.indexOf("x")):e,o&&r?n=e.slice(e.indexOf("x")+2,e.length):r&&!o?n=1:r||(n=0),isNaN(parseFloat(t))&&(t+="1"),[parseFloat(t),n.toString()]}}))},t.createHtmlExpression=function(e){if(!e.includes("^")&&e.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)){return(e=e.split("+")).map((function(t,n){var r=(t=t.trim()).includes("x")?t.indexOf("x"):-1,o=e.length;return-1!==r&&r+1!==t.length?"".concat(0===n?"":" ").concat(t.slice(0,r+1),"<sup>").concat(t.slice(r+1,t.length),"</sup>").concat(n===o-1?"":" +"):"".concat(0===n?"":" ").concat(t).concat(n===o-1?"":" +")})).join("")}},t.createSingleExpression=function(e,t){if(void 0!==e&&void 0!==t){var n="";switch(e=-1===(e=1===e?"":e)?"-":e,t){case"0":n=e;break;case"1":n=e+"x";break;default:n=e+"x"+t}return n}}}]);