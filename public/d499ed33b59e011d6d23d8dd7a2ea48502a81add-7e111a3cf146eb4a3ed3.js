(self.webpackChunkdhanesh_and_company=self.webpackChunkdhanesh_and_company||[]).push([[14],{4333:function(e,t,a){"use strict";var r=a(4994);t.A=void 0;var i,n=r(a(2475)),s=r(a(6221)),d=r(a(4893)),o=r(a(4634)),l=r(a(6540)),u=r(a(5556)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),b=function(e){var t=f(e),a=g(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,S=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,h=(0,d.default)(e,c);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},h,{onLoad:s,onError:u,ref:t,loading:f,draggable:p,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,x=g||m;if(!x)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+y+"ms":"none"},d),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&P,d,c),j={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:S},W=this.state.isHydrated?h(x):x[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:j,imageVariants:x,generateSources:I}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:j,imageVariants:x,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(x),l.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:x}))}}));if(m){var A=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete A.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&P)}),W.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:j,imageVariants:x,generateSources:I}),W.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:j,imageVariants:x,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(x),l.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:x}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:H,sizes:N,fixed:P(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:P(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=C;t.A=T},2401:function(e,t,a){"use strict";a.d(t,{A:function(){return s}});var r=a(3942),i=(a(6540),a(7437));const n=e=>{let{children:t,className:a,color:r}=e;const n=r?"bg-light":"";return(0,i.Y)("section",{className:["container-fluid",n,a].join(" ")},(0,i.Y)("div",{className:"container h-100 py-5"},t))};var s=(0,r.A)(n,{target:"e1ok8pv40"})("");n.defaultProps={children:"",className:"",color:""}},8700:function(e,t,a){"use strict";a.d(t,{A:function(){return d}});var r=a(3942),i=a(6540),n=a(7437);const s=e=>{let{className:t,paragraphs:a,children:r,bs:s,small:d}=e;return(0,n.Y)(i.Fragment,null,Array.isArray(a)?a.map((e=>(0,n.Y)("p",{className:[t,s].join(" ")},e," ",r))):(0,n.Y)("p",{className:[t,s].join(" ")},a," ",r))};var d=(0,r.A)(s,{target:"e1nokf390"})("font-size:",(e=>e.small?"1rem":"1.25rem"),";");s.defaultProps={}},4893:function(e){e.exports=function(e,t){if(null==e)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;a[r]=e[r]}return a},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=d499ed33b59e011d6d23d8dd7a2ea48502a81add-7e111a3cf146eb4a3ed3.js.map