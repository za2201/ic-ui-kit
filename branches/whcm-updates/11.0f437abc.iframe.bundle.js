(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./dist/esm/helpers-e090fe7e.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hexToRgb})),__webpack_require__.d(__webpack_exports__,"b",(function(){return rgbStrToObj})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getSlot})),__webpack_require__.d(__webpack_exports__,"d",(function(){return DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isEmptyString})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getThemeFromContext})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getInputHelperTextID})),__webpack_require__.d(__webpack_exports__,"h",(function(){return getInputValidationTextID})),__webpack_require__.d(__webpack_exports__,"i",(function(){return IC_DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"j",(function(){return onComponentRequiredPropUndefined})),__webpack_require__.d(__webpack_exports__,"k",(function(){return addFormResetListener})),__webpack_require__.d(__webpack_exports__,"l",(function(){return checkResizeObserver})),__webpack_require__.d(__webpack_exports__,"m",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"n",(function(){return removeHiddenInput})),__webpack_require__.d(__webpack_exports__,"o",(function(){return getInputDescribedByText})),__webpack_require__.d(__webpack_exports__,"p",(function(){return getCurrentDeviceSize})),__webpack_require__.d(__webpack_exports__,"q",(function(){return hasValidationStatus})),__webpack_require__.d(__webpack_exports__,"r",(function(){return isSlotUsed})),__webpack_require__.d(__webpack_exports__,"s",(function(){return getThemeForegroundColor})),__webpack_require__.d(__webpack_exports__,"t",(function(){return hasClassificationBanner})),__webpack_require__.d(__webpack_exports__,"u",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"v",(function(){return IC_INHERITED_ARIA})),__webpack_require__.d(__webpack_exports__,"w",(function(){return getNavItemParentDetails})),__webpack_require__.d(__webpack_exports__,"x",(function(){return onComponentPropUndefinedChange})),__webpack_require__.d(__webpack_exports__,"y",(function(){return getParentElementType})),__webpack_require__.d(__webpack_exports__,"z",(function(){return getSlotContent})),__webpack_require__.d(__webpack_exports__,"A",(function(){return removeFormResetListener})),__webpack_require__.d(__webpack_exports__,"B",(function(){return slotHasContent})),__webpack_require__.d(__webpack_exports__,"C",(function(){return handleHiddenFormButtonClick})),__webpack_require__.d(__webpack_exports__,"D",(function(){return getFilteredMenuOptions})),__webpack_require__.d(__webpack_exports__,"E",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"F",(function(){return getLabelFromValue})),__webpack_require__.d(__webpack_exports__,"G",(function(){return isMobileOrTablet})),__webpack_require__.d(__webpack_exports__,"H",(function(){return getCssProperty})),__webpack_require__.d(__webpack_exports__,"I",(function(){return elementOverflowsX}));__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./dist/esm/types-dd515332.js"),IC_INHERITED_ARIA=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]},inheritAttributes=function inheritAttributes(element){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){element.hasAttribute(attr)&&(null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr))})),attributeObject},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.ic-input");null===input&&((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},removeHiddenInput=function removeHiddenInput(container){var input=container.querySelector("input.ic-input");null==input||input.remove()},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},getInputHelperTextID=function getInputHelperTextID(id){return id+"-helper-text"},getInputValidationTextID=function getInputValidationTextID(id){return id+"-validation-text"},getInputDescribedByText=function getInputDescribedByText(inputId,helperText,validationText){return((helperText?getInputHelperTextID(inputId):"")+" "+(validationText?getInputValidationTextID(inputId):"")).trim()},getThemeFromContext=function getThemeFromContext(el){var _a,themeFromEvent=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,blockColorParent=el.parentElement.closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){var parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark)?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light:themeFromEvent}return _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default},isMobileOrTablet=function isMobileOrTablet(){var isMobileOrTablet=!1;return"maxTouchPoints"in navigator&&(isMobileOrTablet=navigator.maxTouchPoints>0),isMobileOrTablet},handleHiddenFormButtonClick=function handleHiddenFormButtonClick(form,button){var hiddenFormButton=document.createElement("button");hiddenFormButton.setAttribute("type",button.type),hiddenFormButton.style.display="none",form.appendChild(hiddenFormButton),hiddenFormButton.click(),hiddenFormButton.remove()},isEmptyString=function isEmptyString(value){return 0===value.trim().length},getLabelFromValue=function getLabelFromValue(value,options){var _a,ungroupedOptions=[];if(options.length>0)return options.map((function(option){option.children?option.children.map((function(option){return ungroupedOptions.push(option)})):ungroupedOptions.push(option)})),null===(_a=ungroupedOptions.find((function(option){return option.value===value})))||void 0===_a?void 0:_a.label},getFilteredMenuOptions=function getFilteredMenuOptions(options,includeDescriptions,searchString,position){return"anywhere"===position?options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().includes(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().includes(searchString.toLowerCase())):option.label.toLowerCase().includes(searchString.toLowerCase())})):options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().startsWith(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().startsWith(searchString.toLowerCase())):option.label.toLowerCase().startsWith(searchString.toLowerCase())}))},deviceSizeMatches=function deviceSizeMatches(size){return window.matchMedia("(max-width: "+size+"px)").matches},getCurrentDeviceSize=function getCurrentDeviceSize(){return deviceSizeMatches(DEVICE_SIZES.S)?DEVICE_SIZES.S:deviceSizeMatches(DEVICE_SIZES.M)?DEVICE_SIZES.M:deviceSizeMatches(DEVICE_SIZES.L)?DEVICE_SIZES.L:deviceSizeMatches(DEVICE_SIZES.XL)?DEVICE_SIZES.XL:DEVICE_SIZES.UNDEFINED},getCssProperty=function getCssProperty(cssVar){return getComputedStyle(document.documentElement).getPropertyValue(cssVar)},getThemeForegroundColor=function getThemeForegroundColor(){var themeRed=getCssProperty("--ic-theme-primary-r"),themeGreen=getCssProperty("--ic-theme-primary-g"),themeBlue=getCssProperty("--ic-theme-primary-b");return Math.round((299*parseInt(themeRed)+587*parseInt(themeGreen)+114*parseInt(themeBlue))/1e3)>128?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light},getSlot=function getSlot(element,name){return element&&element.querySelector?element.querySelector('[slot="'+name+'"]'):null},slotHasContent=function slotHasContent(element,name){return null!==getSlot(element,name)},getSlotContent=function getSlotContent(element,name){var slot=getSlot(element,name);return slot?getSlotElements(slot):null},getSlotElements=function getSlotElements(slot){var slotContent=slot.firstElementChild;if(null!==slotContent){var elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:null}return null===slot?null:[slot]},getNavItemParentDetails=function getNavItemParentDetails(el){var navType={navType:"",parent:null};switch(getParentElementType(el)){case"IC-NAVIGATION-GROUP":navType=getNavItemParentDetails(el.parentElement);break;case"IC-TOP-NAVIGATION":navType={navType:"top",parent:getParentElement(el)};break;case"IC-SIDE-NAVIGATION":navType={navType:"side",parent:getParentElement(el)};break;case"IC-PAGE-HEADER":navType={navType:"page-header",parent:null}}return navType},DEVICE_SIZES={XS:Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),S:Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),M:Number(getCssProperty("--ic-breakpoint-md").replace("px","")),L:Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),XL:Number(getCssProperty("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},hasValidationStatus=function hasValidationStatus(status,disabled){return""!==status&&!disabled},isSlotUsed=function isSlotUsed(element,slotName){return!!element.querySelector('[slot="'+slotName+'"]')},onComponentPropUndefinedChange=function onComponentPropUndefinedChange(oldValue,newValue,callback){void 0===oldValue&&newValue!==oldValue&&callback()},onComponentRequiredPropUndefined=function onComponentRequiredPropUndefined(props,component){for(var i=0;i<props.length;i++){var _props$i=props[i],prop=_props$i.prop,propName=_props$i.propName;null==prop&&console.error("No "+propName+" specified for "+component+" component - prop '"+propName+"' (web components) / '"+kebabToCamelCase(propName)+"' (react) required")}},kebabToCamelCase=function kebabToCamelCase(kebabCase){for(var individualWords=(kebabCase=kebabCase.toLowerCase()).split("-"),camelCase=individualWords[0],i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=function checkResizeObserver(callbackFn){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},hex2dec=function hex2dec(v){return parseInt(v,16)},hexToRgb=function hexToRgb(hex){var c;return 4===hex.length?(c=hex.replace("#","").split(""),{r:hex2dec(c[0]+c[0]),g:hex2dec(c[1]+c[1]),b:hex2dec(c[2]+c[2])}):{r:hex2dec(hex.slice(1,3)),g:hex2dec(hex.slice(3,5)),b:hex2dec(hex.slice(5))}},rgbStrToObj=function rgbStrToObj(rgbStr){var colorRGB={r:null,g:null,b:null},rgb=rgbStr.substring(4,rgbStr.length-1).replace(/ /g,"").split(",");return colorRGB.r=Number(rgb[0]),colorRGB.g=Number(rgb[1]),colorRGB.b=Number(rgb[2]),colorRGB},elementOverflowsX=function elementOverflowsX(element){return element.scrollWidth>element.clientWidth},getParentElementType=function getParentElementType(child){return child.parentElement.tagName},getParentElement=function getParentElement(child){return child.parentElement},hasClassificationBanner=function hasClassificationBanner(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},getForm=function getForm(el){return el.closest("FORM")},addFormResetListener=function addFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=function removeFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)}},"./dist/esm/ic-back-to-top.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ic_back_to_top",(function(){return BackToTop}));__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm/helpers-e090fe7e.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var BackToTop=function(){function BackToTop(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BackToTop),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.g)(this,hostRef),this.topObserver=null,this.setTargetElVisible=function(visible){_this.targetElVisible=visible},this.setFooterVisible=function(visible){_this.footerVisible=visible},this.targetElObserverCallback=function(entries){_this.setTargetElVisible(entries[0].isIntersecting)},this.footerObserverCallback=function(entries){_this.setFooterVisible(entries[0].isIntersecting)},this.findTargetEl=function(target){var targetElement=null;return null==target?console.log("Error: No target ID specified for back to top component - defaulting to top of page"):null===(targetElement=document.querySelector(0===target.indexOf("#")?target:"#"+target))&&console.log("Error: Back to top target element '"+target+"' not found - defaulting to top of page"),targetElement},this.createTopObserver=function(target){var objParent;if(_this.targetEl=_this.findTargetEl(target),null!==_this.topObserver){var observedEl=document.querySelector("#ic-back-to-top-target");null!==observedEl&&(_this.topObserver.unobserve(observedEl),observedEl.remove())}null===_this.targetEl?(objParent=document.body,_this.targetEl=objParent.firstElementChild,_this.isTargetElNull=!0):(objParent=_this.targetEl.parentNode,_this.isTargetElNull=!1);var objBackToTopTargetEl=document.createElement("div");objBackToTopTargetEl.setAttribute("id","ic-back-to-top-target"),objParent.insertBefore(objBackToTopTargetEl,_this.targetEl);var marginTop=getComputedStyle(_this.targetEl).marginTop;_this.topObserver=new IntersectionObserver(_this.targetElObserverCallback,{threshold:[0],rootMargin:marginTop+" 0px 0px 0px"}),_this.topObserver.observe(objBackToTopTargetEl)},this.handleClick=function(){_this.isTargetElNull?window.scrollTo(0,0):_this.targetEl.scrollIntoView()},this.target=void 0,this.bannerOffset=!1,this.targetElVisible=!0,this.footerVisible=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(BackToTop,[{key:"watchPropHandler",value:function watchPropHandler(newValue,oldValue){var _this2=this;Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_3__.x)(oldValue,newValue,(function(){_this2.createTopObserver(newValue)}))}},{key:"componentWillLoad",value:function componentWillLoad(){this.createTopObserver(this.target),document.querySelectorAll("ic-classification-banner:not([inline='true'])").length&&(this.bannerOffset=!0);var footers=document.querySelectorAll("footer");if(footers.length){var footerEl=footers[footers.length-1],threshold=this.bannerOffset?.15:0;new IntersectionObserver(this.footerObserverCallback,{threshold:[threshold]}).observe(footerEl)}}},{key:"componentDidLoad",value:function componentDidLoad(){Object(_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_3__.j)([{prop:this.target,propName:"target"}],"Back to Top")}},{key:"render",value:function render(){var _class,bannerOffset=this.bannerOffset,targetElVisible=this.targetElVisible,footerVisible=this.footerVisible;return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("button",{class:(_class={},_class["ic-back-to-top-link"]=!0,_class["offset-banner"]=bannerOffset,_class.show=!targetElVisible,_class["by-footer"]=footerVisible,_class),"aria-label":"Back to top",onClick:this.handleClick},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("span",{class:"ic-back-to-top-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" aria-hidden="true">\n    <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>\n</svg>'}),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-typography",{variant:"subtitle-small"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("span",null,"Back to top")))}},{key:"el",get:function get(){return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)}}],[{key:"watchers",get:function get(){return{target:["watchPropHandler"]}}}]),BackToTop}();BackToTop.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:absolute;right:0}button{position:fixed;right:var(--ic-space-md);bottom:var(--ic-space-md);height:40px;align-items:center;padding:var(--ic-space-xs) var(--ic-space-md) var(--ic-space-xs)\n    var(--ic-space-sm);margin:0;gap:var(--ic-space-xs);display:flex;background-color:var(--ic-architectural-white);border:1px solid var(--ic-action-default);outline-width:inherit;box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);border-radius:80px;text-decoration:none;visibility:hidden;opacity:0;transition:visibility 0s linear var(--ic-transition-duration-slow),\n    opacity var(--ic-transition-duration-slow);cursor:pointer;z-index:var(--ic-z-index-overlay)}button:hover{text-decoration:none;background-color:var(--ic-action-default-bg-hover-no-alpha);border:1px solid var(--ic-action-default-hover)}button:active{text-decoration:none;background-color:var(--ic-action-default-bg-active-no-alpha);border:1px solid var(--ic-action-default-active)}button:focus{box-shadow:var(--ic-border-focus)}.ic-back-to-top-link.show{visibility:visible;opacity:1;transition:visibility 0s linear 0s,\n    opacity var(--ic-transition-duration-slow),\n    box-shadow var(--ic-easing-transition-fast)}.ic-back-to-top-link.by-footer{position:relative;right:var(--ic-space-md);bottom:56px}.ic-back-to-top-link.offset-banner{margin-bottom:var(--ic-space-lg)}.ic-back-to-top-icon{fill:var(--ic-action-default);padding-left:var(--ic-space-xxs);padding-top:var(--ic-space-xxxs)}.ic-back-to-top-link span{color:var(--ic-action-default)}.ic-back-to-top-link:hover .ic-back-to-top-icon{fill:var(--ic-action-default-hover)}.ic-back-to-top-link:hover span{color:var(--ic-action-default-hover)}@media (forced-colors: active){.ic-back-to-top-icon{fill:white}}'},"./dist/esm/types-dd515332.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,"a",(function(){return IcThemeForegroundEnum})),__webpack_require__.d(__webpack_exports__,"b",(function(){return IcInformationStatus})),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);