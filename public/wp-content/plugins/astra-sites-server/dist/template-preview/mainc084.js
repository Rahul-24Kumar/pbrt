!function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=window.wp.url},function(e,t){e.exports=window.wp.domReady},function(e,t,a){e.exports=a(3)},function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(0);const s=()=>window.location!==window.parent.location,l=e=>{const t=e.href;return!(""===t||!t.includes(window.location.origin)||t.includes("wp-admin")||t.includes(".php")||t.includes("customize"))};let i="",c="";s()?(i="starterTemplatePreviewDispatch",c="starter-templates-iframe-preview-data"):(i="showcaseCTAPreviewDispatch",c="showcase-cta-preview-data");const d=(()=>{let e="";const t=document.querySelector(".site-logo-img img");return t&&(e=t.src),e})(),m=(e,t)=>{if(!e)return"";if(e){const a=e.match(/'([^']+)'/);return a?a[1]:"inherit"===e?t:e}return t||void 0},u=e=>{switch(e.value.param){case"siteLogo":const t=document.querySelectorAll(".site-logo-img img");let a=e.value.data.url||d;if(a=e.value.data.dataUri||a,0===t.length&&""!==a){const t=document.createElement("span");t.classList.add("site-logo-img");const o=document.createElement("img");o.classList.add("custom-logo"),o.setAttribute("src",a),t.appendChild(o);const n=document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0],r=n.querySelectorAll(".ast-site-title-wrap")[0];n.insertBefore(t,r),r&&(r.style.display="none");const s=e.value.data.width||"";""!==s&&(o.style.width=s+"px",o.style.maxWidth=s+"px")}else if(""!==a){for(const[o,n]of Object.entries(t)){n.removeAttribute("srcset"),n.setAttribute("src",a);const t=e.value.data.width;""!==t&&a!==d?(n.style.width=t+"px",n.style.maxWidth=t+"px"):(n.style.width="",n.style.maxWidth="")}(()=>{const e=document.getElementById("ast-desktop-header"),t=e&&e.querySelectorAll(".ast-site-identity")[0],a=t&&t.querySelectorAll(".ast-site-title-wrap")[0];a&&(a.style.display="none")})()}break;case"colorPalette":const o=e.value.data.colors||[],n=starterTemplatesPreview.AstColorPaletteVarPrefix,r=starterTemplatesPreview.AstEleColorPaletteVarPrefix;if(0===o.length){document.querySelector("body").classList.remove("starter-templates-preview-palette");const e=document.getElementsByClassName("starter-templates-preview-palette");return void(e.length>0&&e[0].remove())}document.querySelector("body").classList.add("starter-templates-preview-palette");const s=Object.entries(o).map((e,t)=>[`--e-global-color-${r[t].replace(/-/g,"")}: ${e[1]};`,`${n}${t}: ${e[1]};`]).map(e=>e.join("")).join("");let l=document.getElementById("starter-templates-preview-palette-css");l||(l=document.createElement("style"),l.id="starter-templates-preview-palette-css",l.setAttribute("rel","stylesheet"),document.head.appendChild(l)),l.innerHTML=`.starter-templates-preview-palette{ ${s} }`;break;case"siteTypography":if(!Object.keys(e.value.data).length){const e=document.getElementById("starter-templates-typography");return void(e&&e.remove())}(e=>{if(!e)return;if(!document.getElementById("google-fonts-domain")){const e=document.createElement("link");e.id="google-fonts-domain",e.setAttribute("rel","preconnect"),e.setAttribute("href","https://fonts.gstatic.com"),document.head.appendChild(e)}let t=document.getElementById("st-previw-google-fonts-url");t||(t=document.createElement("link"),t.id="st-previw-google-fonts-url",t.setAttribute("rel","stylesheet"),document.head.appendChild(t));const a=[];let o=e["body-font-family"]||"",n=parseInt(e["body-font-weight"])||"";n&&(n=":wght@"+n),o&&(o=m(o),o=o.replace(" ","+"),a.push(`family=${o}${n}`));let r=e["headings-font-family"]||"",s=parseInt(e["headings-font-weight"])||"";s&&(s=":wght@"+s),r&&(r=m(r,o),r=r.replace(" ","+"),a.push(`family=${r}${s}`));const l=`https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;t.setAttribute("href",l)})(e.value.data),(e=>{if(!e)return;let t=document.getElementById("starter-templates-typography");t||(t=document.createElement("style"),t.id="starter-templates-typography",t.setAttribute("rel","stylesheet"),document.head.appendChild(t));let a="";a+="body, button, input, select, textarea, .ast-button, .ast-custom-button {",a+="\tfont-family: "+e["body-font-family"]+";",a+="\tfont-weight: "+e["body-font-weight"]+";",a+="\tfont-size: "+e["font-size-body"].desktop+e["font-size-body"]["desktop-unit"]+";",a+="\tline-height: "+e["body-line-height"]+";",a+="}",a+="h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {",a+="\tfont-family: "+e["headings-font-family"]+";",a+="\tline-height: "+e["headings-line-height"]+";",a+="\tfont-weight: "+e["headings-font-weight"]+";",a+="}",["h1","h2","h3","h4","h5","h6"].forEach(t=>{const o="inherit"===e["font-family-"+t]?e["headings-font-family"]:e["font-family-"+t],n="inherit"===e["font-weight-"+t]?e["headings-font-weight"]:e["font-weight-"+t];a+=`${t}, .entry-content ${t} {`,a+="\tfont-family: "+o+";",""!==e["line-height-"+t]&&(a+="\tline-height: "+e["line-height-"+t]+";"),a+="\tfont-weight: "+n+";",a+="}"}),t.innerHTML=a})(e.value.data);break;case"clearPreviewAssets":const i=document.getElementById("starter-templates-typography");i&&i.remove(),document.querySelector("body").classList.remove("starter-templates-preview-palette");const c=document.getElementsByClassName("starter-templates-preview-palette");c.length>0&&c[0].remove();break;case"completeOnboarding":localStorage.removeItem("starter-templates-iframe-preview-data")}};window.addEventListener("message",(function(e){if("object"==typeof e.data&&i===e.data.call){const t=e.data;let a=JSON.parse(localStorage.getItem(c));if(null===a&&(a={},a.data={}),a.data[t.value.param]=t.value.data,s())delete a.data.clearPreviewAssets,t.url=window.location.origin,a.url=window.location.origin;else{t.url=window.location.pathname,a.url=showcaseCTA.path;const e=(new Date).getTime();a.timestamp=e}"cleanStorage"===t.value.param?(delete a.data.cleanStorage,a.data.siteLogo=t.value.data,a.data.colorPalette={},a.data.siteTypography={},Object.keys(a.data).map(e=>u({value:{param:e,data:a.data[e]}}))):u(t),localStorage.setItem(c,JSON.stringify(a))}}),!1),n()(()=>{if(s()){const e=document.createElement("style");e.id="starter-templates-logo-css",document.getElementsByTagName("head")[0].appendChild(e),e.innerHTML=".site-logo-img img { transition: unset; }"}if(!s()){const e=Object(r.getQueryArgs)(window.location.search).customize||"";if(""===e)return;const t=Array.from(document.querySelectorAll("a"));for(let a=0;a<t.length;a++){const o=t[a];if(l(o)){const t=Object(r.addQueryArgs)(o.href,{customize:e});o.href=t}}}const e=(t=c,JSON.parse(localStorage.getItem(t)));var t;if(e){let t="";if(!s()){const a=((new Date).getTime()-e.timestamp)/1e3;t=Math.abs(a)}const a=1800;if(!s()&&(e.url!==showcaseCTA.path||t>a)){document.querySelector("body").classList.remove("showcase-cta-preview-palette");const e=document.getElementsByClassName("showcase-cta-preview-palette");e.length>0&&e[0].remove();const t=document.getElementById("showcase-cta-typography");return t&&t.remove(),void localStorage.removeItem(c)}Object.keys(e.data).map(t=>u({value:{param:t,data:e.data[t]}}))}})}]);