(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./dist/esm/helpers-8b43d0d4.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getSlot})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isEmptyString})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getThemeFromContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getInputHelperTextID})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getInputValidationTextID})),__webpack_require__.d(__webpack_exports__,"g",(function(){return IC_DEVICE_SIZES})),__webpack_require__.d(__webpack_exports__,"h",(function(){return onComponentRequiredPropUndefined})),__webpack_require__.d(__webpack_exports__,"i",(function(){return removeHiddenInput})),__webpack_require__.d(__webpack_exports__,"j",(function(){return checkResizeObserver})),__webpack_require__.d(__webpack_exports__,"k",(function(){return getInputDescribedByText})),__webpack_require__.d(__webpack_exports__,"l",(function(){return getThemeForegroundColor})),__webpack_require__.d(__webpack_exports__,"m",(function(){return hasClassificationBanner})),__webpack_require__.d(__webpack_exports__,"n",(function(){return getCurrentDeviceSize})),__webpack_require__.d(__webpack_exports__,"o",(function(){return hasValidationStatus})),__webpack_require__.d(__webpack_exports__,"p",(function(){return isSlotUsed})),__webpack_require__.d(__webpack_exports__,"q",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"r",(function(){return IC_INHERITED_ARIA})),__webpack_require__.d(__webpack_exports__,"s",(function(){return getNavItemParentDetails})),__webpack_require__.d(__webpack_exports__,"t",(function(){return getParentElementType})),__webpack_require__.d(__webpack_exports__,"u",(function(){return getSlotContent})),__webpack_require__.d(__webpack_exports__,"v",(function(){return onComponentPropUndefinedChange})),__webpack_require__.d(__webpack_exports__,"w",(function(){return handleHiddenFormButtonClick})),__webpack_require__.d(__webpack_exports__,"x",(function(){return getFilteredMenuOptions})),__webpack_require__.d(__webpack_exports__,"y",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"z",(function(){return slotHasContent})),__webpack_require__.d(__webpack_exports__,"A",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"B",(function(){return getLabelFromValue})),__webpack_require__.d(__webpack_exports__,"C",(function(){return isMobileOrTablet})),__webpack_require__.d(__webpack_exports__,"D",(function(){return getCssProperty})),__webpack_require__.d(__webpack_exports__,"E",(function(){return elementOverflowsX})),__webpack_require__.d(__webpack_exports__,"F",(function(){return hexToRgb})),__webpack_require__.d(__webpack_exports__,"G",(function(){return rgbStrToObj}));__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./dist/esm/types-dd515332.js"),IC_INHERITED_ARIA=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_DEVICE_SIZES={XS:576,S:768,M:992,L:1200,XL:99999},IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]},inheritAttributes=function inheritAttributes(element){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){element.hasAttribute(attr)&&(null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr))})),attributeObject},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.ic-input");null===input&&((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},removeHiddenInput=function removeHiddenInput(container){var input=container.querySelector("input.ic-input");null==input||input.remove()},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},getInputHelperTextID=function getInputHelperTextID(id){return id+"-helper-text"},getInputValidationTextID=function getInputValidationTextID(id){return id+"-validation-text"},getInputDescribedByText=function getInputDescribedByText(inputId,helperText,validationText){return((helperText?getInputHelperTextID(inputId):"")+" "+(validationText?getInputValidationTextID(inputId):"")).trim()},getThemeFromContext=function getThemeFromContext(el){var _a,themeFromEvent=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,blockColorParent=el.parentElement.closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){var parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark)?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light:themeFromEvent}return _types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Default},isMobileOrTablet=function isMobileOrTablet(){var isMobileOrTablet=!1;return"maxTouchPoints"in navigator&&(isMobileOrTablet=navigator.maxTouchPoints>0),isMobileOrTablet},handleHiddenFormButtonClick=function handleHiddenFormButtonClick(form,button){var hiddenFormButton=document.createElement("button");hiddenFormButton.setAttribute("type",button.type),hiddenFormButton.style.display="none",form.appendChild(hiddenFormButton),hiddenFormButton.click(),hiddenFormButton.remove()},isEmptyString=function isEmptyString(value){return 0===value.trim().length},getLabelFromValue=function getLabelFromValue(value,options){var _a,ungroupedOptions=[];if(options.length>0)return options.map((function(option){option.children?option.children.map((function(option){return ungroupedOptions.push(option)})):ungroupedOptions.push(option)})),null===(_a=ungroupedOptions.find((function(option){return option.value===value})))||void 0===_a?void 0:_a.label},getFilteredMenuOptions=function getFilteredMenuOptions(options,includeDescriptions,searchString,position){return"anywhere"===position?options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().includes(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().includes(searchString.toLowerCase())):option.label.toLowerCase().includes(searchString.toLowerCase())})):options.filter((function(option){var _a;return includeDescriptions?option.label.toLowerCase().startsWith(searchString.toLowerCase())||(null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase().startsWith(searchString.toLowerCase())):option.label.toLowerCase().startsWith(searchString.toLowerCase())}))},deviceSizeMatches=function deviceSizeMatches(size){return window.matchMedia("(max-width: "+size+"px)").matches},getCurrentDeviceSize=function getCurrentDeviceSize(){return deviceSizeMatches(DEVICE_SIZES.S)?DEVICE_SIZES.S:deviceSizeMatches(DEVICE_SIZES.M)?DEVICE_SIZES.M:deviceSizeMatches(DEVICE_SIZES.L)?DEVICE_SIZES.L:deviceSizeMatches(DEVICE_SIZES.XL)?DEVICE_SIZES.XL:DEVICE_SIZES.UNDEFINED},getCssProperty=function getCssProperty(cssVar){return getComputedStyle(document.documentElement).getPropertyValue(cssVar)},getThemeForegroundColor=function getThemeForegroundColor(){var themeRed=getCssProperty("--ic-theme-primary-r"),themeGreen=getCssProperty("--ic-theme-primary-g"),themeBlue=getCssProperty("--ic-theme-primary-b");return Math.round((299*parseInt(themeRed)+587*parseInt(themeGreen)+114*parseInt(themeBlue))/1e3)>128?_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Dark:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_22__.a.Light},getSlot=function getSlot(element,name){return element&&element.querySelector?element.querySelector('[slot="'+name+'"]'):null},slotHasContent=function slotHasContent(element,name){return null!==getSlot(element,name)},getSlotContent=function getSlotContent(element,name){var slot=getSlot(element,name);return slot?getSlotElements(slot):null},getSlotElements=function getSlotElements(slot){var slotContent=slot.firstElementChild;if(null!==slotContent){var elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:null}return null===slot?null:[slot]},getNavItemParentDetails=function getNavItemParentDetails(el){var navType={navType:"",parent:null};switch(getParentElementType(el)){case"IC-NAVIGATION-GROUP":navType=getNavItemParentDetails(el.parentElement);break;case"IC-TOP-NAVIGATION":navType={navType:"top",parent:getParentElement(el)};break;case"IC-SIDE-NAVIGATION":navType={navType:"side",parent:getParentElement(el)};break;case"IC-PAGE-HEADER":navType={navType:"page-header",parent:null}}return navType},DEVICE_SIZES={XS:Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),S:Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),M:Number(getCssProperty("--ic-breakpoint-md").replace("px","")),L:Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),XL:Number(getCssProperty("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},hasValidationStatus=function hasValidationStatus(status,disabled){return""!==status&&!disabled},isSlotUsed=function isSlotUsed(element,slotName){return!!element.querySelector('[slot="'+slotName+'"]')},onComponentPropUndefinedChange=function onComponentPropUndefinedChange(oldValue,newValue,callback){void 0===oldValue&&newValue!==oldValue&&callback()},onComponentRequiredPropUndefined=function onComponentRequiredPropUndefined(props,component){for(var i=0;i<props.length;i++){var _props$i=props[i],prop=_props$i.prop,propName=_props$i.propName;null==prop&&console.error("No "+propName+" specified for "+component+" component - prop '"+propName+"' (web components) / '"+kebabToCamelCase(propName)+"' (react) required")}},kebabToCamelCase=function kebabToCamelCase(kebabCase){for(var individualWords=(kebabCase=kebabCase.toLowerCase()).split("-"),camelCase=individualWords[0],i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=function checkResizeObserver(callbackFn){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},hex2dec=function hex2dec(v){return parseInt(v,16)},hexToRgb=function hexToRgb(hex){var c;return 4===hex.length?(c=hex.replace("#","").split(""),{r:hex2dec(c[0]+c[0]),g:hex2dec(c[1]+c[1]),b:hex2dec(c[2]+c[2])}):{r:hex2dec(hex.slice(1,3)),g:hex2dec(hex.slice(3,5)),b:hex2dec(hex.slice(5))}},rgbStrToObj=function rgbStrToObj(rgbStr){var colorRGB={r:null,g:null,b:null},rgb=rgbStr.substring(4,rgbStr.length-1).replace(/ /g,"").split(",");return colorRGB.r=Number(rgb[0]),colorRGB.g=Number(rgb[1]),colorRGB.b=Number(rgb[2]),colorRGB},elementOverflowsX=function elementOverflowsX(element){return element.scrollWidth>element.clientWidth},getParentElementType=function getParentElementType(child){return child.parentElement.tagName},getParentElement=function getParentElement(child){return child.parentElement},hasClassificationBanner=function hasClassificationBanner(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")}},"./dist/esm/ic-top-navigation.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ic_top_navigation",(function(){return TopNavigation}));__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/index-1500de1f.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm/types-dd515332.js"),_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm/helpers-8b43d0d4.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TopNavigation=function(){function TopNavigation(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TopNavigation),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.g)(this,hostRef),this.icNavigationMenuOpened=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"icNavigationMenuOpened",7),this.icNavigationMenuClosed=Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"icNavigationMenuClosed",7),this.hasAppIcon=!1,this.hasNavigation=!1,this.hasIconButtons=!1,this.hasSearchSlotContent=!1,this.searchBar=null,this.initialiseSearchBar=function(){if(_this.hasSearchSlotContent){var slot=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.a)(_this.el,"search");slot&&"IC-SEARCH-BAR"===slot.tagName?_this.searchBar=slot:slot&&"FORM"===slot.tagName&&(_this.searchBar=slot.querySelector("ic-search-bar")),null!==_this.searchBar&&(_this.searchBar.hideLabel=!0)}},this.emitTopNavResized=function(size){var event=new CustomEvent("topNavResized",{detail:{size:size}});_this.el.dispatchEvent(event)},this.menuButtonClick=function(){_this.showNavMenu(!0)},this.searchButtonMouseDownHandler=function(){_this.searchButtonClick=!0},this.searchButtonClickHandler=function(){_this.toggleSearchBar(),_this.searchButtonClick=!1},this.resizeObserver=null,this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize,currSize>_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&(_this.showNavMenu(!1),_this.mobileSearchBarVisible&&_this.toggleSearchBar()),_this.emitTopNavResized(currSize),null!==document.activeElement&&void 0!==document.activeElement&&"IC-SEARCH-BAR"===document.activeElement.tagName&&(_this.searchBar.setAttribute("hidden","true"),_this.searchBar.removeAttribute("hidden"),setTimeout((function(){_this.searchBar.setFocus()}),100)))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.n)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.el)},this.appTitle=void 0,this.href="/",this.version="",this.status="",this.contentAligned="full-width",this.inline=!1,this.menuOpen=!1,this.deviceSize=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.XL,this.mobileSearchBarVisible=!1,this.navMenuVisible=!1,this.searchValue="",this.mobileSearchHiddenOnBlur=!1,this.searchButtonClick=!1,this.foregroundColor=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.l)(),this.hasFullWidthSearchBar=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TopNavigation,[{key:"watchPropHandler",value:function watchPropHandler(newValue,oldValue){Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.v)(oldValue,newValue,this.initialiseSearchBar)}},{key:"navBarMenuCloseHandler",value:function navBarMenuCloseHandler(){this.showNavMenu(!1),this.el.shadowRoot.querySelector("#menu-button").setFocus()}},{key:"searchInputBlurHandler",value:function searchInputBlurHandler(ev){null!==ev.detail&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=ev.detail.value)}},{key:"searchValueChangeHandler",value:function searchValueChangeHandler(ev){this.searchValue=ev.detail.value}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"toggleSearchBar",value:function toggleSearchBar(){var _this2=this;this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchBarVisible?(this.mobileSearchButtonEl.updateAriaLabel("Hide search"),this.hasFullWidthSearchBar=!0,this.searchBar.fullWidth=!0,setTimeout((function(){_this2.searchBar.setFocus()}),100)):(this.mobileSearchButtonEl.updateAriaLabel("Show search"),this.hasFullWidthSearchBar=!1,this.searchBar.fullWidth=!1))}},{key:"showNavMenu",value:function showNavMenu(show){this.navMenuVisible=show,show?this.icNavigationMenuOpened.emit():this.icNavigationMenuClosed.emit()}},{key:"componentWillLoad",value:function componentWillLoad(){this.hasAppIcon=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"app-icon"),this.hasNavigation=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"navigation"),this.hasIconButtons=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"buttons"),this.hasSearchSlotContent=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"search"),this.deviceSize=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.n)(),this.initialiseSearchBar()}},{key:"componentWillRender",value:function componentWillRender(){this.hasNavigation=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"navigation"),this.hasSearchSlotContent=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"search"),this.hasIconButtons=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"buttons"),this.hasAppIcon=Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.el,"app-icon")}},{key:"componentDidLoad",value:function componentDidLoad(){Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.j)(this.runResizeObserver),Object(_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.h)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class,_class2,_this3=this,hasMenuContent=this.hasNavigation||this.hasIconButtons||""!==this.status||""!==this.version,searchButtonSize=this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.S?"default":"large",appTitleVariant="h3",hasTitle=""!==this.appTitle&&void 0!==this.appTitle;this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&(appTitleVariant="h4",this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.S&&(appTitleVariant="subtitle-small"));var mobileSearchButtonTitle=this.mobileSearchBarVisible?"Hide search":"Show search",menuSize=this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.S?"small":"default";return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.a,{class:(_class={},_class["fullwidth-searchbar"]=this.hasFullWidthSearchBar,_class[_types_dd515332_js__WEBPACK_IMPORTED_MODULE_3__.a.Dark]=this.foregroundColor===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_3__.a.Dark,_class)},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"top-navigation"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-section-container",{aligned:"full-width","full-height":!0},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("header",{role:"banner"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"top-panel-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"app-details-container"},hasTitle&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("a",{class:"title-link",href:this.href},this.hasAppIcon&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"app-icon-container","aria-hidden":"true"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"app-icon"})),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-typography",{variant:appTitleVariant},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("h1",null,this.appTitle))),""!==this.status&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"app-status"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},this.status)),""!==this.version&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"app-version"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},this.version))),(this.hasSearchSlotContent||hasMenuContent)&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"search-menu-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"search-actions-container"},this.deviceSize>_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"search"}),this.hasSearchSlotContent&&this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-button",{id:"search-toggle-button",ref:function ref(el){return _this3.mobileSearchButtonEl=el},onMouseDown:this.searchButtonMouseDownHandler,variant:"icon",size:searchButtonSize,"aria-label":mobileSearchButtonTitle,appearance:this.foregroundColor,onClick:this.searchButtonClickHandler},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"toggle-icon",slot:"icon"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),this.hasIconButtons&&this.deviceSize>_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"icon-buttons-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"buttons"})),hasMenuContent&&this.deviceSize<=_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"menu-button-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":!this.hasNavigation||this.navMenuVisible?"true":"false"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-button",{id:"menu-button",appearance:this.foregroundColor,variant:"secondary","aria-expanded":this.menuOpen?"true":"false","aria-haspopup":"true","aria-label":"Open "+(this.hasNavigation?"navigation":"app")+" menu",size:menuSize,onClick:this.menuButtonClick},"Menu",Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"icon"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),this.mobileSearchBarVisible&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"search-bar-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"search"})),this.hasNavigation&&this.deviceSize>_helpers_8b43d0d4_js__WEBPACK_IMPORTED_MODULE_4__.d.L&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"navigation-tabs"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main navigation"),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ul",{class:"navigation-item-list"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"navigation"}))))))),this.navMenuVisible&&Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ic-navigation-menu",{version:this.version,status:this.status,class:(_class2={},_class2.inline=this.inline,_class2)},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"menu-buttons-slot",slot:"buttons"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"buttons"})),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("ul",{slot:"navigation"},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"navigation"}))))}},{key:"el",get:function get(){return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)}}],[{key:"watchers",get:function get(){return{appTitle:["watchPropHandler"]}}}]),TopNavigation}();TopNavigation.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-theme-text);width:100%;position:relative}:host .top-navigation{background-color:var(--ic-theme-primary);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);margin-left:calc(-1 * var(--ic-space-xxs));transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active{color:var(--ic-theme-text)}:host .title-link:hover:not(:focus){background-color:var(--ic-theme-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-theme-active)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:none}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-keyline-lighten);padding-left:var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-keyline-darken)}.top-panel-container{display:flex;padding-top:8px;padding-bottom:8px}.navigation-tabs{margin-top:-1px}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.app-title{padding-right:var(--ic-space-lg)}:host .app-status{border-radius:80px;background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md)}:host(.dark) .app-status{background-color:var(--ic-theme-text);color:var(--ic-color-white-text)}:host .app-version{border-radius:16px;background-color:var(--ic-theme-active);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs)}.app-status-text,.app-version-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:96px}slot[name="app-icon"]::slotted(svg){fill:var(--ic-theme-text);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-theme-text)}.search-menu-container{justify-content:right;display:flex;align-items:center;flex:1 auto}.menu-button-container{margin-left:var(--ic-space-md)}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:44px}:host([content-aligned="left"]) .app-details-container{flex-basis:1}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .nav-panel-container,:host([content-aligned="center"]) .nav-panel-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container{justify-content:flex-start}:host([content-aligned="center"]) .app-details-container{justify-content:flex-end}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}:host([content-aligned="center"]) .top-navigation{display:flex;justify-content:center}:host([content-aligned="left"]) .top-navigation{display:flex}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding-left:var(--ic-space-md)}@media screen and (max-width: 992px){:host .nav-panel-container,:host .app-status,:host .app-version{display:none}:host .title-link{margin-right:var(--ic-space-xs)}.search-menu-container{max-width:160px}.search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-keyline-darken);height:64px;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container,:host([content-aligned="center"]) .app-details-container{justify-content:flex-start}}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.top-panel-container{min-height:40px}.searchbox-inline{display:none}.search-bar-container{margin-top:0;height:56px;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(svg){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .app-details-container,:host([content-aligned="center"]) .search-menu-container{justify-content:flex-start}}}'},"./dist/esm/types-dd515332.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,"a",(function(){return IcThemeForegroundEnum})),__webpack_require__.d(__webpack_exports__,"b",(function(){return IcInformationStatus})),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);