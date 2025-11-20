(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,14139,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}){let n=r?40*r:e,s=i?40*i:t,l=n&&s?`viewBox='0 0 ${n} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},23769,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},72600,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(60982);let i=e.r(14139),a=e.r(23769),o=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:r=!1,priority:l=!1,preload:c=!1,loading:d,className:m,quality:u,width:p,height:g,fill:h=!1,style:f,overrideSrc:b,onLoad:x,onLoadingComplete:y,placeholder:v="empty",blurDataURL:j,fetchPriority:w,decoding:_="async",layout:C,objectFit:S,objectPosition:P,lazyBoundary:k,lazyRoot:A,...I},N){var O;let E,R,z,{imgConf:M,showAltText:D,blurComplete:T,defaultLoader:L}=N,G=M||a.imageConfigDefault;if("allSizes"in G)E=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),r=G.qualities?.sort((e,t)=>e-t);E={...G,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=I.loader||L;delete I.loader,delete I.srcSet;let $="__next_img_default"in B;if($){if("custom"===E.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(f={...f,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let F="",V=s(p),H=s(g);if((O=e)&&"object"==typeof O&&(n(O)||void 0!==O.src)){let t=n(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(R=t.blurWidth,z=t.blurHeight,j=j||t.blurDataURL,F=t.src,!h)if(V||H){if(V&&!H){let e=V/t.width;H=Math.round(t.height*e)}else if(!V&&H){let e=H/t.height;V=Math.round(t.width*e)}}else V=t.width,H=t.height}let U=!l&&!c&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,U=!1),E.unoptimized&&(r=!0),$&&!E.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let W=s(u),q=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:P}:{},D?{}:{color:"transparent"},f),K=T||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:V,heightInt:H,blurWidth:R,blurHeight:z,blurDataURL:j||"",objectFit:q.objectFit})}")`:`url("${v}")`,X=o.includes(q.objectFit)?"fill"===q.objectFit?"100% 100%":"cover":q.objectFit,J=K?{backgroundSize:X,backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Q=function({config:e,src:t,unoptimized:r,width:i,quality:a,sizes:o,loader:n}){if(r)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=r.exec(i);)a.push(parseInt(e[2]));if(a.length){let r=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),c=s.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:s.map((r,i)=>`${n({config:e,src:t,quality:a,width:r})} ${"w"===l?r:i+1}${l}`).join(", "),src:n({config:e,src:t,quality:a,width:s[c]})}}({config:E,src:e,unoptimized:r,width:V,quality:W,sizes:t,loader:B}),Y=U?"lazy":d;return{props:{...I,loading:Y,fetchPriority:w,width:V,height:H,decoding:_,className:m,style:{...q,...J},sizes:Q.sizes,srcSet:Q.srcSet,src:b||Q.src},meta:{unoptimized:r,preload:c||l,placeholder:v,fill:h}}}},58347,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(38659),a="undefined"==typeof window,o=a?()=>{}:i.useLayoutEffect,n=a?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},88885,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return h},defaultHead:function(){return m}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=e.r(95463),n=e.r(11309),s=e.r(73955),l=n._(e.r(38659)),c=o._(e.r(58347)),d=e.r(30022);function m(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(60982);let p=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,i,a;return e.reduce(u,[]).reverse().concat(m().reverse()).filter((t=new Set,r=new Set,i=new Set,a={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?o=!1:i.add(r);else{let t=e.props[r],i=a[r]||new Set;("name"!==r||!n)&&i.has(t)?o=!1:(i.add(t),a[r]=i)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},67719,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=e.r(95463)._(e.r(38659)),a=e.r(23769),o=i.default.createContext(a.imageConfigDefault)},84052,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(95463)._(e.r(38659)).default.createContext(null)},85902,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},99850,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let i=e.r(85902);function a({config:e,src:t,width:r,quality:a}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,i.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/_next/static/media/"),""}`}a.__next_img_default=!0;let o=a},83965,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(95463),a=e.r(11309),o=e.r(73955),n=a._(e.r(38659)),s=i._(e.r(15540)),l=i._(e.r(88885)),c=e.r(72600),d=e.r(23769),m=e.r(67719);e.r(60982);let u=e.r(84052),p=i._(e.r(99850)),g=e.r(44454),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,r,i,a,o,n){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,n.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:a,decoding:s,className:l,style:c,fetchPriority:d,placeholder:m,loading:u,unoptimized:p,fill:h,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:j,sizesInput:w,onLoad:_,onError:C,...S},P)=>{let k=(0,n.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&f(e,m,x,y,v,p,w))},[e,m,x,y,v,C,p,w]),A=(0,g.useMergedRef)(P,k);return(0,o.jsx)("img",{...S,...b(d),loading:u,width:a,height:i,decoding:s,"data-nimg":h?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:A,onLoad:e=>{f(e.currentTarget,m,x,y,v,p,w)},onError:e=>{j(!0),"empty"!==m&&v(!0),C&&C(e)}})});function y({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(u.RouterContext),i=(0,n.useContext)(m.ImageConfigContext),a=(0,n.useMemo)(()=>{let e=h||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:a,localPatterns:"undefined"==typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,n.useRef)(s);(0,n.useEffect)(()=>{g.current=s},[s]);let f=(0,n.useRef)(l);(0,n.useEffect)(()=>{f.current=l},[l]);let[b,v]=(0,n.useState)(!1),[j,w]=(0,n.useState)(!1),{props:_,meta:C}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:b,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{..._,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:f,setBlurComplete:v,setShowAltText:w,sizesInput:e.sizes,ref:t}),C.preload?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54396,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return d},getImageProps:function(){return c}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=e.r(95463),n=e.r(72600),s=e.r(83965),l=o._(e.r(99850));function c(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},94528,(e,t,r)=>{t.exports=e.r(54396)},17339,e=>{"use strict";var t=e.i(73955),r=e.i(94528);e.s(["default",0,()=>{let e=`
        :root {
          --primary-color: #2563eb;
          --secondary-color: #1e40af;
          --dark-bg: #0f172a;
          --darker-bg: #020617;
          --card-bg: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
        }

        .tech-ai-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--darker-bg);
          color: var(--text-primary);
          line-height: 1.6;
        }

        .tech-ai-page .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
          padding: 6rem 2rem 4rem;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-color) 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-card {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-color);
          display: block;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Featured Projects */
        .featured-section {
          padding: 4rem 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          text-align: center;
        }

        .featured-project {
          background: var(--card-bg);
          border: 1px solid #334155;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 0;
        }

        .project-image {
          background: var(--dark-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 3rem;
        }

        .project-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-category {
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          background: var(--dark-bg);
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .project-highlights {
          margin-bottom: 1.5rem;
        }

        .project-highlights h4 {
          color: var(--primary-color);
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }

        .project-highlights ul {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          color: var(--text-secondary);
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .project-highlights li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: 700;
        }

        .btn-primary {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: background 0.3s;
        }

        .btn-primary:hover {
          background: var(--secondary-color);
        }

        /* Projects Grid */
        .projects-grid-section {
          padding: 4rem 2rem;
          background: var(--dark-bg);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid #334155;
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .card-image {
          background: var(--dark-bg);
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .card-tech {
          color: var(--text-secondary);
          font-size: 0.75rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .card-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .btn-small {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          text-align: center;
        }

        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .cta-text {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
          padding: 1rem 2rem;
          background: white;
          color: var(--primary-color);
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 700;
        }

        .btn-cta-secondary {
          padding: 1rem 2rem;
          background: transparent;
          color: white;
          text-decoration: none;
          border-radius: 0.5rem;
          border: 2px solid white;
          font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .featured-project {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:e}}),(0,t.jsxs)("div",{className:"tech-ai-page",children:[(0,t.jsx)("section",{className:"hero-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h1",{className:"hero-title",children:"Building AI-Powered Tools & Infrastructure"}),(0,t.jsx)("p",{className:"hero-subtitle",children:"From video production to AI engineering—I build systems that automate creative and technical workflows."}),(0,t.jsxs)("div",{className:"stats-grid",children:[(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("span",{className:"stat-number",children:"8+"}),(0,t.jsx)("span",{className:"stat-label",children:"AI Systems Integrated"})]}),(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("span",{className:"stat-number",children:"671B"}),(0,t.jsx)("span",{className:"stat-label",children:"Model Parameters"})]}),(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("span",{className:"stat-number",children:"60-80%"}),(0,t.jsx)("span",{className:"stat-label",children:"Token Reduction"})]}),(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("span",{className:"stat-number",children:"$0"}),(0,t.jsx)("span",{className:"stat-label",children:"Monthly AI Costs"})]})]})]})}),(0,t.jsx)("section",{className:"featured-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"section-title",children:"Featured Projects"}),[{title:"Multi-Model AI Development Environment",category:"AI Infrastructure • Local LLMs • MCP Architecture",img:"https://placehold.co/800x600/0f172a/2563eb?text=Multi-Model+AI+Environment",alt:"AI Development Environment",badges:["Ollama","Serena MCP","VS Code","Qwen3-Coder 30B","DeepSeek-V3"],description:"Complete local AI infrastructure with semantic code understanding. Configured 6 local AI models (38GB+) running entirely on Apple Silicon M3 Pro, achieving 60-80% token reduction on large codebases through Serena integration.",highlights:["Zero-cost inference—all processing runs locally with no API fees","Unified MCP architecture working across 5 different AI assistants simultaneously","Semantic code operations (find by meaning, not text matching)","IDE-quality tooling for LLMs with call graphs and reference tracking"]},{title:"Open SWE - Autonomous GitHub Agent",category:"Autonomous Agents • GitHub Integration • LangGraph",img:"https://placehold.co/800x600/0f172a/2563eb?text=Open+SWE+Agent",alt:"Open SWE",badges:["LangGraph","Ollama","GitHub Apps API","Python"],description:"Self-operating AI agent that monitors GitHub issues and implements fixes autonomously. Built with custom Ollama models for local processing and webhook system for real-time GitHub event handling.",highlights:["Fully autonomous code contributions without human intervention","Integrated with qwen3:8b and deepseek-r1:8b for local processing","Web dashboard for task monitoring and agent control","100% open-source stack with no cloud AI dependencies"]},{title:"Gemini CLI UI - Enterprise ChatGPT Alternative",category:"Web Development • AI Interface • Full-Stack",img:"https://placehold.co/800x600/0f172a/2563eb?text=Gemini+CLI+UI",alt:"Gemini CLI",badges:["Node.js","React","Express","Gemini API","WebSockets"],description:"Self-hosted web interface for Google's Gemini AI with registration, authentication, and multi-user support. Network-accessible deployment with secure tool management system.",highlights:["Real-time streaming responses via WebSockets","Admin dashboard for tool configuration","Auto-discovery of Gemini CLI projects","ChatGPT-like experience, fully self-hosted and customizable"]}].map(e=>(0,t.jsxs)("div",{className:"featured-project",children:[(0,t.jsx)("div",{className:"project-image",children:(0,t.jsx)(r.default,{src:e.img,alt:e.alt,width:800,height:600})}),(0,t.jsxs)("div",{className:"project-content",children:[(0,t.jsx)("h3",{className:"project-title",children:e.title}),(0,t.jsx)("p",{className:"project-category",children:e.category}),(0,t.jsx)("div",{className:"tech-badges",children:e.badges.map(e=>(0,t.jsx)("span",{className:"tech-badge",children:e},e))}),(0,t.jsx)("p",{className:"project-description",children:e.description}),(0,t.jsxs)("div",{className:"project-highlights",children:[(0,t.jsx)("h4",{children:"Key Achievements:"}),(0,t.jsx)("ul",{children:e.highlights.map(e=>(0,t.jsx)("li",{children:e},e))})]}),(0,t.jsx)("a",{href:"https://github.com/motacola",className:"btn-primary",children:"View on GitHub"})]})]},e.title))]})}),(0,t.jsx)("section",{className:"projects-grid-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"section-title",children:"All Technical Projects"}),(0,t.jsx)("div",{className:"projects-grid",children:[{title:"Crush + DeepSeek R1 Integration",tech:"VS Code Extensions • AI Assistant",description:"Built 5 custom VS Code tasks with keyboard shortcuts for one-click AI assistance. Project context awareness using LSP.",img:"https://placehold.co/350x200/1e293b/10b981?text=Crush+VS+Code",alt:"Crush",link:"https://github.com/motacola",CTA:"View Details"},{title:"Spec-Driven Development System",tech:"Development Tools • CLI",description:"Configured SpecKit with 8 AI provider integrations. 5-stage development lifecycle from specification to implementation.",img:"https://placehold.co/350x200/1e293b/10b981?text=SpecKit",alt:"SpecKit",link:"https://github.com/motacola",CTA:"View Details"},{title:"Open Agent Builder + Ollama",tech:"No-Code Platform • AI Agents",description:"Forked and modified for Ollama compatibility. Visual workflow builder for AI agent creation with local model support.",img:"https://placehold.co/350x200/1e293b/10b981?text=Open+Agent+Builder",alt:"Open Agent",link:"https://github.com/motacola",CTA:"View Details"},{title:"Chrome DevTools MCP Server",tech:"Browser Automation • Debugging",description:"Browser automation via AI. Built MCP server bridge enabling JavaScript execution and DOM inspection through AI commands.",img:"https://placehold.co/350x200/1e293b/10b981?text=Chrome+DevTools",alt:"Chrome",link:"https://github.com/motacola",CTA:"View Details"},{title:"HomeFix AR - Repair Assistant",tech:"Augmented Reality • Web AR",description:"Augmented reality web app for household appliance repairs with step-by-step guided assistance.",img:"https://placehold.co/350x200/1e293b/10b981?text=HomeFix+AR",alt:"HomeFix",link:"https://github.com/motacola/homefix-ar",CTA:"View on GitHub"},{title:"Lime Now Plus - Local Discovery",tech:"Web Application • JavaScript",description:"Don&apos;t just visit. Lime like a local. Location-based discovery application.",img:"https://placehold.co/350x200/1e293b/10b981?text=Lime+Now+Plus",alt:"Lime",link:"https://github.com/motacola/lime-now-plus",CTA:"View on GitHub"}].map(e=>(0,t.jsxs)("div",{className:"project-card",children:[(0,t.jsx)("div",{className:"card-image",children:(0,t.jsx)(r.default,{src:e.img,alt:e.alt,width:350,height:200})}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("h3",{className:"card-title",children:e.title}),(0,t.jsx)("p",{className:"card-tech",children:e.tech}),(0,t.jsx)("p",{className:"card-description",children:e.description}),(0,t.jsx)("a",{href:e.link,className:"btn-small",children:e.CTA})]})]},e.title))})]})}),(0,t.jsx)("section",{className:"cta-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"cta-title",children:"Let’s Build Something"}),(0,t.jsx)("p",{className:"cta-text",children:"Looking for someone who can deploy local LLMs, build custom AI tools, and integrate AI into existing workflows?"}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("a",{href:"/contact",className:"btn-cta-primary",children:"Get in Touch"}),(0,t.jsx)("a",{href:"https://github.com/motacola",className:"btn-cta-secondary",children:"View GitHub"})]})]})})]})]})}])}]);