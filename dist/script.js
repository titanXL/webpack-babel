!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=1)}([function(n,r,t){var e=t(3);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(5)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){n.exports=t(2)},function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e);function i(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}window.onload=function(n){new s};var s=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.node=null,this.submitBtn=null,this.mask=null,this.closeBtn=null,this.documentBody=document.querySelector("body"),this.isModalOpen=!1,this.initGlobalListeners(),this.destroyModal=this.destroyModal.bind(this)}return function(n,r,t){r&&i(n.prototype,r),t&&i(n,t)}(n,[{key:"initGlobalListeners",value:function(){var n=this;document.addEventListener("keydown",function(r){r.ctrlKey&&r.altKey&&"KeyE"===r.code&&n.toggleModal(),27==r.keyCode&&n.node&&n.destroyModal()})}},{key:"createModal",value:function(){this.node=document.createElement("div"),this.isModalOpen=!0,this.node.classList="".concat(o.a.modal),this.node.innerHTML=this.createModalContent(),this.mask=document.createElement("div"),this.mask.classList="".concat(o.a["modal-mask"]),this.bindEventHandlers(),this.appendToDom(),this.showModal(),this.focusInput()}},{key:"showModal",value:function(){var n=this;setTimeout(function(){n.node.classList+=" ".concat(o.a["modal-visible"]),n.mask.classList+=" ".concat(o.a["mask-visible"])},1)}},{key:"focusInput",value:function(){var n=this;setTimeout(function(){n.node.querySelector("textarea.".concat(o.a["user-feedback"])).focus()},100)}},{key:"createModalContent",value:function(){return'<div class="'.concat(o.a.content,'"> \n                <span class="').concat(o.a["modal-close"],'"></span>\n                <h3>Leave your feedback</h3> \n                <div class="').concat(o.a["user-feedback-container"],'"> \n                  <textarea id="bla" class="').concat(o.a["user-feedback"],'" rows="10">\n                  </textarea>                \n                </div>\n                <div class="').concat(o.a["submit-container"],'">\n                  <button class="').concat(o.a["submit-button"],'">Submit</button> \n                </div>\n            </div>')}},{key:"bindEventHandlers",value:function(){this.submitBtn=this.node.querySelector("button.".concat(o.a["submit-button"])),this.closeBtn=this.node.querySelector("span.".concat(o.a["modal-close"])),this.submitBtn.addEventListener("click",this.destroyModal),this.closeBtn.addEventListener("click",this.destroyModal),this.mask.addEventListener("click",this.destroyModal)}},{key:"appendToDom",value:function(){this.documentBody.appendChild(this.mask),this.documentBody.appendChild(this.node)}},{key:"removeFromDom",value:function(){this.documentBody.removeChild(this.mask),this.documentBody.removeChild(this.node)}},{key:"destroyModal",value:function(){var n=this;this.node.classList="".concat(o.a.modal),this.mask.classList="".concat(o.a["modal-mask"]),setTimeout(function(){n.removeFromDom(),n.submitBtn.removeEventListener("click",n.destroyModal),n.mask.removeEventListener("click",n.destroyModal),n.closeBtn.removeEventListener("click",n.destroyModal),n.node=null,n.submitBtn=null,n.mask=null,n.closeBtn=null,n.isModalOpen=!1},300)}},{key:"toggleModal",value:function(){this.isModalOpen?this.destroyModal():this.createModal()}}]),n}()},function(n,r,t){(r=n.exports=t(4)(!0)).push([n.i,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.style__modal__3bAABX-Umi6382LtgHL6Y9 {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 50%;\r\n  max-width: 630px;\r\n  min-width: 320px;\r\n  height: auto;\r\n  z-index: 99999;\r\n  -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  -moz-transform: translateX(-50%) translateY(-50%);\r\n  -ms-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n  visibility: hidden;\r\n}\r\n\r\n.style__modal__3bAABX-Umi6382LtgHL6Y9.style__modal-visible__2Q3hQm-ci0Z3kUZKSdl2uF {\r\n  visibility: visible;\r\n}\r\n\r\n.style__modal-close__1edibxhtOJGKQVfPct7UHJ {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 4px;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n}\r\n\r\n.style__modal-close__1edibxhtOJGKQVfPct7UHJ::before,\r\n.style__modal-close__1edibxhtOJGKQVfPct7UHJ::after {\r\n  content: "";\r\n  display: block;\r\n  width: 16px;\r\n  height: 2px;\r\n  background: #fff;\r\n  top: 9px;\r\n  left: 2px;\r\n  position: absolute;\r\n}\r\n\r\n.style__modal-close__1edibxhtOJGKQVfPct7UHJ::before {\r\n  -webkit-transform: rotate(45deg);\r\n  -moz-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.style__modal-close__1edibxhtOJGKQVfPct7UHJ::after {\r\n  -webkit-transform: rotate(-45deg);\r\n  -moz-transform: rotate(-45deg);\r\n  -ms-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.style__modal-mask__1ivhdPClbQdkCOm5UmM9Q1 {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.08);\r\n  -webkit-transform: scale(0.3);\r\n  -moz-transform: scale(0.3);\r\n  -ms-transform: scale(0.3);\r\n  transform: scale(0.3);\r\n  visibility: hidden;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\n.style__mask-visible__2NT2kyxB2tT5vZ0Bo1OTgx {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  visibility: visible;\r\n}\r\n\r\n.style__content__1jQYlqHWls1PIqs9VM1plm {\r\n  color: #fff;\r\n  background: #af1685;\r\n  position: relative;\r\n  border-radius: 6px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  font-size: 1em;\r\n  z-index: 999;\r\n  -webkit-transform: scale(0.7);\r\n  -moz-transform: scale(0.7);\r\n  -ms-transform: scale(0.7);\r\n  transform: scale(0.7);\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.style__modal-visible__2Q3hQm-ci0Z3kUZKSdl2uF .style__content__1jQYlqHWls1PIqs9VM1plm {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0.4em;\r\n  text-align: center;\r\n  font-size: 2.4em;\r\n  font-weight: 300;\r\n  opacity: 0.8;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px 3px 0 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n.style__user-feedback-container__2R4dMjF0nyHj5sdKsKLwf4 {\r\n  padding: 1em 1em 0;\r\n}\r\n\r\n.style__user-feedback__21s945hMGwTYsAfqv4Ot13 {\r\n  width: 100%;\r\n  resize: none;\r\n  vertical-align: top;\r\n  border-radius: 6px;\r\n  padding: 1em;\r\n  outline: none;\r\n  color: #000;\r\n}\r\n\r\n.style__submit-container__3CZP7kczNTHtKSMWPCnprw {\r\n  padding: 1em;\r\n  text-align: center;\r\n}\r\n\r\n.style__submit-button__2dx1fqfypvM73n3mDB3-JS {\r\n  color: #ffffff;\r\n  background-color: #1d4f91;\r\n  border-color: #1d4f91;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-weight: 500;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  outline: 0;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  padding: 13px 50px;\r\n  font-size: 1em;\r\n  line-height: 1.5;\r\n  border-radius: 6px;\r\n  letter-spacing: 0.6px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -moz-transition: all 0.2s ease-in-out;\r\n  -ms-transition: all 0.2s ease-in-out;\r\n  -o-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n.style__submit-button__2dx1fqfypvM73n3mDB3-JS:before {\r\n  content: "";\r\n  position: absolute;\r\n  background-color: #276bc4;\r\n  bottom: 0;\r\n  left: 0;\r\n  top: 0;\r\n  right: 100%;\r\n  z-index: -1;\r\n  -webkit-transition: right 0.14s ease-in;\r\n  -moz-transition: right 0.14s ease-in;\r\n  -ms-transition: right 0.14s ease-in;\r\n  -o-transition: right 0.14s ease-in;\r\n  transition: right 0.14s ease-in;\r\n}\r\n\r\n.style__submit-button__2dx1fqfypvM73n3mDB3-JS:hover {\r\n  color: #ffffff;\r\n  border-color: #276bc4;\r\n  outline: none;\r\n}\r\n\r\n.style__submit-button__2dx1fqfypvM73n3mDB3-JS:hover::before {\r\n  right: 0;\r\n}\r\n',"",{version:3,sources:["C:/Temp/feedback-tool/webpack-babel/src/style.css"],names:[],mappings:"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",file:"style.css",sourcesContent:['* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 50%;\r\n  max-width: 630px;\r\n  min-width: 320px;\r\n  height: auto;\r\n  z-index: 99999;\r\n  -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  -moz-transform: translateX(-50%) translateY(-50%);\r\n  -ms-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n  visibility: hidden;\r\n}\r\n\r\n.modal.modal-visible {\r\n  visibility: visible;\r\n}\r\n\r\n.modal-close {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 4px;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n}\r\n\r\n.modal-close::before,\r\n.modal-close::after {\r\n  content: "";\r\n  display: block;\r\n  width: 16px;\r\n  height: 2px;\r\n  background: #fff;\r\n  top: 9px;\r\n  left: 2px;\r\n  position: absolute;\r\n}\r\n\r\n.modal-close::before {\r\n  -webkit-transform: rotate(45deg);\r\n  -moz-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.modal-close::after {\r\n  -webkit-transform: rotate(-45deg);\r\n  -moz-transform: rotate(-45deg);\r\n  -ms-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.modal-mask {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.08);\r\n  -webkit-transform: scale(0.3);\r\n  -moz-transform: scale(0.3);\r\n  -ms-transform: scale(0.3);\r\n  transform: scale(0.3);\r\n  visibility: hidden;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\n.mask-visible {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  visibility: visible;\r\n}\r\n\r\n.content {\r\n  color: #fff;\r\n  background: #af1685;\r\n  position: relative;\r\n  border-radius: 6px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);\r\n  font-size: 1em;\r\n  z-index: 999;\r\n  -webkit-transform: scale(0.7);\r\n  -moz-transform: scale(0.7);\r\n  -ms-transform: scale(0.7);\r\n  transform: scale(0.7);\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.modal-visible .content {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0.4em;\r\n  text-align: center;\r\n  font-size: 2.4em;\r\n  font-weight: 300;\r\n  opacity: 0.8;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px 3px 0 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n.user-feedback-container {\r\n  padding: 1em 1em 0;\r\n}\r\n\r\n.user-feedback {\r\n  width: 100%;\r\n  resize: none;\r\n  vertical-align: top;\r\n  border-radius: 6px;\r\n  padding: 1em;\r\n  outline: none;\r\n  color: #000;\r\n}\r\n\r\n.submit-container {\r\n  padding: 1em;\r\n  text-align: center;\r\n}\r\n\r\n.submit-button {\r\n  color: #ffffff;\r\n  background-color: #1d4f91;\r\n  border-color: #1d4f91;\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-weight: 500;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  outline: 0;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  padding: 13px 50px;\r\n  font-size: 1em;\r\n  line-height: 1.5;\r\n  border-radius: 6px;\r\n  letter-spacing: 0.6px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -moz-transition: all 0.2s ease-in-out;\r\n  -ms-transition: all 0.2s ease-in-out;\r\n  -o-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n.submit-button:before {\r\n  content: "";\r\n  position: absolute;\r\n  background-color: #276bc4;\r\n  bottom: 0;\r\n  left: 0;\r\n  top: 0;\r\n  right: 100%;\r\n  z-index: -1;\r\n  -webkit-transition: right 0.14s ease-in;\r\n  -moz-transition: right 0.14s ease-in;\r\n  -ms-transition: right 0.14s ease-in;\r\n  -o-transition: right 0.14s ease-in;\r\n  transition: right 0.14s ease-in;\r\n}\r\n\r\n.submit-button:hover {\r\n  color: #ffffff;\r\n  border-color: #276bc4;\r\n  outline: none;\r\n}\r\n\r\n.submit-button:hover::before {\r\n  right: 0;\r\n}\r\n'],sourceRoot:""}]),r.locals={modal:"style__modal__3bAABX-Umi6382LtgHL6Y9","modal-visible":"style__modal-visible__2Q3hQm-ci0Z3kUZKSdl2uF","modal-close":"style__modal-close__1edibxhtOJGKQVfPct7UHJ","modal-mask":"style__modal-mask__1ivhdPClbQdkCOm5UmM9Q1","mask-visible":"style__mask-visible__2NT2kyxB2tT5vZ0Bo1OTgx",content:"style__content__1jQYlqHWls1PIqs9VM1plm","user-feedback-container":"style__user-feedback-container__2R4dMjF0nyHj5sdKsKLwf4","user-feedback":"style__user-feedback__21s945hMGwTYsAfqv4Ot13","submit-container":"style__submit-container__3CZP7kczNTHtKSMWPCnprw","submit-button":"style__submit-button__2dx1fqfypvM73n3mDB3-JS"}},function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(e),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&e[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),r.push(s))}},r}},function(n,r,t){var e={},o=function(n){var r;return function(){return void 0===r&&(r=n.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var r={};return function(n,t){if("function"==typeof n)return n();if(void 0===r[n]){var e=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}}(),s=null,a=0,l=[],A=t(6);function c(n,r){for(var t=0;t<n.length;t++){var o=n[t],i=e[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(b(o.parts[s],r))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(b(o.parts[s],r));e[o.id]={id:o.id,refs:1,parts:a}}}}function d(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};e[s]?e[s].parts.push(a):t.push(e[s]={id:s,parts:[a]})}return t}function f(n,r){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=l[l.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),l.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertAt.before,t);t.insertBefore(r,o)}}function u(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=l.indexOf(n);r>=0&&l.splice(r,1)}function m(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return t.nc}();e&&(n.attrs.nonce=e)}return p(r,n.attrs),f(n,r),r}function p(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function b(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var l=a++;t=s||(s=m(r)),e=C.bind(null,t,l,!1),o=C.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",p(r,n.attrs),f(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=A(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([e],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,r),o=function(){u(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){u(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=d(n,r);return c(t,r),function(n){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=e[s.id]).refs--,o.push(a)}n&&c(d(n,r),r);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete e[a.id]}}}};var B=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}();function C(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=B(r,o);else{var i=document.createTextNode(o),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(i,s[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);