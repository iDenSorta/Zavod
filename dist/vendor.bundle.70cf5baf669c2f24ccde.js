(()=>{var e={472:()=>{const e={version:"1.6.0",draggingtimer:null,init(e=document.body){for(const t of e.querySelectorAll(".swiffy-slider"))this.initSlider(t)},initSlider(e){e.classList.contains("slider-nav-mousedrag")&&e.addEventListener("mousedown",(t=>this.handleMouseDrag(t,e)),{passive:!0})},handleMouseDrag(e,t){if(e.srcElement.classList.contains("slider-nav")||e.srcElement.parentElement.classList.contains("slider-indicators"))return;const s=t.querySelector(".slider-container");t.classList.contains("dragging")&&clearTimeout(this.draggingtimer),s.style.cursor="grabbing",t.classList.add("dragging");const i=s.scrollLeft,r=e.clientX,n=s.children[0].offsetWidth+parseInt(window.getComputedStyle(s).columnGap),l=n*(s.children.length-1),o=s.scrollLeft;let a=o;const d=e=>{const t=e.clientX-r,d=i-1.8*t;d>0&&d<=l&&(s.scrollLeft=d,t<0?a=l<=o?o:s.scrollLeft+(n+1.8*t):o>0&&(a=s.scrollLeft-(n-1.8*t)))};s.addEventListener("mousemove",d,{passive:!0}),document.addEventListener("mouseup",(()=>{s.removeEventListener("mousemove",d),s.style.cursor=null,a<0&&(a=0),s.scroll({left:a,behavior:"smooth"}),this.draggingtimer=setTimeout((()=>{t.classList.remove("dragging")}),550)}),{once:!0,passive:!0})}};window.swiffyslider.extensions=e,document.currentScript.hasAttribute("data-noinit")||window.addEventListener("load",(()=>{swiffyslider.extensions.init()}))},675:()=>{const e={version:"1.6.0",init(e=document.body){for(let t of e.querySelectorAll(".swiffy-slider"))this.initSlider(t)},initSlider(e){for(let t of e.querySelectorAll(".slider-nav")){let s=t.classList.contains("slider-nav-next");t.addEventListener("click",(()=>this.slide(e,s)),{passive:!0})}for(let t of e.querySelectorAll(".slider-indicators"))t.addEventListener("click",(()=>this.slideToByIndicator())),this.onSlideEnd(e,(()=>this.handleIndicators(e)),60);if(e.classList.contains("slider-nav-autoplay")){const t=e.getAttribute("data-slider-nav-autoplay-interval")?e.getAttribute("data-slider-nav-autoplay-interval"):2500;this.autoPlay(e,t,e.classList.contains("slider-nav-autopause"))}if(["slider-nav-autohide","slider-nav-animation"].some((t=>e.classList.contains(t)))){const t=e.getAttribute("data-slider-nav-animation-threshold")?e.getAttribute("data-slider-nav-animation-threshold"):.3;this.setVisibleSlides(e,t)}},setVisibleSlides(e,t=.3){let s=new IntersectionObserver((t=>{t.forEach((e=>{e.isIntersecting?e.target.classList.add("slide-visible"):e.target.classList.remove("slide-visible")})),e.querySelector(".slider-container>*:first-child").classList.contains("slide-visible")?e.classList.add("slider-item-first-visible"):e.classList.remove("slider-item-first-visible"),e.querySelector(".slider-container>*:last-child").classList.contains("slide-visible")?e.classList.add("slider-item-last-visible"):e.classList.remove("slider-item-last-visible")}),{root:e.querySelector(".slider-container"),threshold:t});for(let t of e.querySelectorAll(".slider-container>*"))s.observe(t)},slide(e,t=!0){const s=e.querySelector(".slider-container"),i=e.classList.contains("slider-nav-page"),r=e.classList.contains("slider-nav-noloop"),n=e.classList.contains("slider-nav-nodelay"),l=s.children,o=parseInt(window.getComputedStyle(s).columnGap),a=l[0].offsetWidth+o;let d=t?s.scrollLeft+a:s.scrollLeft-a;i&&(d=t?s.scrollLeft+s.offsetWidth:s.scrollLeft-s.offsetWidth),s.scrollLeft<1&&!t&&!r&&(d=s.scrollWidth-s.offsetWidth),s.scrollLeft>=s.scrollWidth-s.offsetWidth&&t&&!r&&(d=0),s.scroll({left:d,behavior:n?"auto":"smooth"})},slideToByIndicator(){const e=window.event.target,t=Array.from(e.parentElement.children).indexOf(e),s=e.parentElement.children.length,i=e.closest(".swiffy-slider"),r=i.querySelector(".slider-container").children.length/s*t;this.slideTo(i,r)},slideTo(e,t){const s=e.querySelector(".slider-container"),i=parseInt(window.getComputedStyle(s).columnGap),r=s.children[0].offsetWidth+i,n=e.classList.contains("slider-nav-nodelay");s.scroll({left:r*t,behavior:n?"auto":"smooth"})},onSlideEnd(e,t,s=125){let i;e.querySelector(".slider-container").addEventListener("scroll",(function(){window.clearTimeout(i),i=setTimeout(t,s)}),{capture:!1,passive:!0})},autoPlay(e,t,s){t=t<750?750:t;let i=setInterval((()=>this.slide(e)),t);const r=()=>this.autoPlay(e,t,s);return s&&(["mouseover","touchstart"].forEach((function(t){e.addEventListener(t,(function(){window.clearTimeout(i)}),{once:!0,passive:!0})})),["mouseout","touchend"].forEach((function(t){e.addEventListener(t,(function(){r()}),{once:!0,passive:!0})}))),i},handleIndicators(e){if(!e)return;const t=e.querySelector(".slider-container"),s=t.scrollWidth-t.offsetWidth,i=t.scrollLeft/s;for(let t of e.querySelectorAll(".slider-indicators")){let e=t.children,s=Math.abs(Math.round((e.length-1)*i));for(let t of e)t.classList.remove("active");e[s].classList.add("active")}}};window.swiffyslider=e,document.currentScript.hasAttribute("data-noinit")||(document.currentScript.hasAttribute("defer")?e.init():document.onreadystatechange=()=>{"interactive"===document.readyState&&e.init()})}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(675),s(472)})()})();