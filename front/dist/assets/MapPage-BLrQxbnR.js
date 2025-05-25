var le=Object.defineProperty;var ce=(o,e,t)=>e in o?le(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var q=(o,e,t)=>ce(o,typeof e!="symbol"?e+"":e,t);import{r as d,R as J,j as n,c as de,u as me}from"./index-NUnUJvUx.js";import{m as pe,C as ge,B as ue,a as he,d as F}from"./Global-BqKQICUA.js";import{l as fe}from"./logo-Ck4h5-z5.js";import{b as ke,m as xe,a as ve,l as ye,c as we,d as be}from"./my_icon-BVNeDTUx.js";import{a as Ce}from"./index-xsH4HHeE.js";const Me="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202C7.589%202%204.00001%205.589%204.00001%209.995C3.97101%2016.44%2011.696%2021.784%2012%2022C12%2022%2020.029%2016.44%2020%2010C20%205.589%2016.411%202%2012%202ZM12%2014C9.79%2014%208.00001%2012.21%208.00001%2010C8.00001%207.79%209.79%206%2012%206C14.21%206%2016%207.79%2016%2010C16%2012.21%2014.21%2014%2012%2014Z'%20fill='%23FF29B7'/%3e%3c/svg%3e",Ie="/assets/hp_mark-C26xkaZw.svg",G=typeof window<"u"&&typeof document<"u"?d.useLayoutEffect:d.useEffect,x=(o,e,t)=>{G(()=>{if(!o||!t)return;const a=function(){for(var m=arguments.length,k=new Array(m),r=0;r<m;r++)k[r]=arguments[r];return k===void 0?t(o):t(o,...k)};return kakao.maps.event.addListener(o,e,a),()=>{kakao.maps.event.removeListener(o,e,a)}},[o,e,t])},te="__react-kakao-maps-sdk__";let V=function(o){return o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE",o}({});const Ee=`${te}_Loader`,p=class p{constructor(e){q(this,"callbacks",[]);q(this,"done",!1);q(this,"loading",!1);q(this,"errors",[]);let{appkey:t,id:a=Ee,libraries:m=[],nonce:k,retries:r=3,url:M="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=a,this.appkey=t,this.libraries=m,this.nonce=k,this.retries=r,this.url=M,p.instance&&!p.equalOptions(this.options,p.instance.options)&&!p.equalOptions(this.options,p.instance.options))switch(p.instance.status){case V.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(p.instance.options,null,2)}`);default:p.instance.reset(),p.instance=this;break}return p.instance||(p.instance=this),p.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),p.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return p.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(a=>{a?t(a):e(window.kakao)})})}get status(){return this.onEvent?V.FAILURE:this.done?V.SUCCESS:this.loading?V.LOADING:V.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],p.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{p.instance.done=!0,p.instance.loading=!1,p.instance.callbacks.forEach(e=>{e(p.instance.onEvent)}),p.instance.callbacks=[],p.loadEventCallback.forEach(e=>{e(p.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let a=0;a<e.libraries.length;++a)if(e.libraries[a]!==t.libraries[a])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};q(p,"loadEventCallback",new Set);let X=p;const h=function(o,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),m=2;m<t;m++)a[m-2]=arguments[m];G(()=>{!o||a.every(k=>typeof k>"u")||o[e].call(o,...a)},[o,e,...a])},ae=J.createContext(void 0),Se=J.forwardRef(function(e,t){let{id:a,as:m,children:k,center:r,isPanto:M=!1,padding:N=32,disableDoubleClick:c,disableDoubleClickZoom:g,draggable:v,zoomable:S,keyboardShortcuts:f,level:L,maxLevel:D,minLevel:U,mapTypeId:I,projectionId:z,scrollwheel:P,tileAnimation:B,onBoundsChanged:R,onCenterChanged:$,onClick:i,onDoubleClick:l,onDrag:u,onDragEnd:y,onDragStart:w,onIdle:b,onMaptypeidChanged:j,onMouseMove:C,onRightClick:Z,onTileLoaded:O,onZoomChanged:T,onZoomStart:H,onCreate:K,...ne}=e;const oe=m||"div",[Y,se]=d.useState(!1),[s,re]=d.useState(),W=d.useRef(null);return G(()=>{const E=X.addLoadEventLisnter(A=>se(!A));return()=>{X.removeLoadEventLisnter(E)}},[]),G(()=>{if(!Y)return;const E=W.current;if(!E)return;const A="lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Coords(r.x,r.y),ie=new kakao.maps.Map(E,{center:A,disableDoubleClick:c,disableDoubleClickZoom:g,draggable:v,keyboardShortcuts:f,level:L,mapTypeId:typeof I=="string"?kakao.maps.MapTypeId[I]:I,projectionId:z,scrollwheel:P,tileAnimation:B});return re(ie),()=>{E.innerHTML=""}},[Y,c,g,B]),d.useImperativeHandle(t,()=>s,[s]),G(()=>{!s||!K||K(s)},[s,K]),G(()=>{if(!s)return;let E=s.getCenter();E instanceof kakao.maps.Coords&&(E=E.toLatLng());const A="lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Coords(r.x,r.y);A instanceof kakao.maps.LatLng&&A.equals(E)||A instanceof kakao.maps.Coords&&A.toLatLng().equals(E)||(M?s.panTo(A,N):s.setCenter(A))},[s,r.lat,r.lng,r.x,r.y]),h(s,"setDraggable",v),h(s,"setZoomable",S),h(s,"setKeyboardShortcuts",f),h(s,"setLevel",L),h(s,"setMapTypeId",Y?typeof I=="string"?kakao.maps.MapTypeId[I]:I:void 0),h(s,"setProjectionId",z),h(s,"setMinLevel",D),h(s,"setMaxLevel",U),x(s,"bounds_changed",R),x(s,"center_changed",$),x(s,"click",i),x(s,"dblclick",l),x(s,"drag",u),x(s,"dragstart",w),x(s,"dragend",y),x(s,"idle",b),x(s,"maptypeid_changed",j),x(s,"mousemove",C),x(s,"rightclick",Z),x(s,"tilesloaded",O),x(s,"zoom_changed",T),x(s,"zoom_start",H),n.jsxs(n.Fragment,{children:[n.jsx(oe,{id:a||`${te}_Map`,...ne,ref:W}),s&&n.jsx(ae.Provider,{value:s,children:k})]})}),Le=o=>{const e=d.useContext(ae);if(!e)throw new Error(`${o+" Component"} must exist inside Map Component!`);return e},je=J.forwardRef(function(e,t){let{map:a,position:m,marker:k,children:r,altitude:M,disableAutoPan:N,range:c,removable:g,zIndex:v,onCreate:S}=e;const f=d.useMemo(()=>{const D=document.createElement("div");return D.style.display="none",new kakao.maps.InfoWindow({altitude:M,disableAutoPan:N,range:c,removable:g,zIndex:v,content:D,position:m})},[N,g]),L=d.useMemo(()=>f.getContent(),[f]);return d.useImperativeHandle(t,()=>f,[f]),d.useLayoutEffect(()=>(f.open(a,k),()=>{f.close()}),[a,k]),d.useLayoutEffect(()=>{S&&S(f)},[f,S]),h(f,"setPosition",m),h(f,"setAltitude",M),h(f,"setRange",c),h(f,"setZIndex",v),de.createPortal(r,L.parentElement??L)}),Ae=J.createContext(void 0),Fe=J.forwardRef(function(e,t){let{map:a,position:m,children:k,altitude:r,clickable:M,draggable:N,image:c,infoWindowOptions:g,onCreate:v,onClick:S,onDragEnd:f,onDragStart:L,onMouseOut:D,onMouseOver:U,opacity:I,range:z,title:P,zIndex:B}=e;const R=d.useContext(Ae),$=d.useMemo(()=>{var l,u,y,w,b,j,C,Z,O,T,H,K;return c&&new kakao.maps.MarkerImage(c.src,new kakao.maps.Size(c.size.width,c.size.height),{alt:(l=c.options)==null?void 0:l.alt,coords:(u=c.options)==null?void 0:u.coords,offset:((y=c.options)==null?void 0:y.offset)&&new kakao.maps.Point((w=c.options)==null?void 0:w.offset.x,(b=c.options)==null?void 0:b.offset.y),shape:(j=c.options)==null?void 0:j.shape,spriteOrigin:((C=c.options)==null?void 0:C.spriteOrigin)&&new kakao.maps.Point((Z=c.options)==null?void 0:Z.spriteOrigin.x,(O=c.options)==null?void 0:O.spriteOrigin.y),spriteSize:((T=c.options)==null?void 0:T.spriteSize)&&new kakao.maps.Size((H=c.options)==null?void 0:H.spriteSize.width,(K=c.options)==null?void 0:K.spriteSize.height)})},[JSON.stringify(c)]),i=d.useMemo(()=>new kakao.maps.Marker({altitude:r,clickable:M,draggable:N,image:$,opacity:I,range:z,title:P,zIndex:B,position:m}),[]);return d.useImperativeHandle(t,()=>i,[i]),d.useLayoutEffect(()=>R?(R.addMarker(i,!0),()=>R.removeMarker(i,!0)):(i.setMap(a),()=>i.setMap(null)),[a,R,i]),d.useLayoutEffect(()=>{v&&v(i)},[i,v]),h(i,"setPosition",m),h(i,"setImage",$),h(i,"setAltitude",r),h(i,"setClickable",M),h(i,"setDraggable",N),h(i,"setOpacity",I),h(i,"setRange",z),h(i,"setRange",z),h(i,"setTitle",P),h(i,"setTitle",P),h(i,"setZIndex",B),x(i,"click",S),x(i,"dragstart",L),x(i,"dragend",f),x(i,"mouseout",D),x(i,"mouseover",U),k?n.jsx(je,{position:m,map:a,marker:i,altitude:g==null?void 0:g.altitude,disableAutoPan:g==null?void 0:g.disableAutoPan,range:g==null?void 0:g.range,removable:g==null?void 0:g.removable,zIndex:g==null?void 0:g.zIndex,children:k}):null}),_=J.forwardRef(function(e,t){let{position:a,...m}=e;const k=Le("MapMarker"),r=d.useMemo(()=>"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):new kakao.maps.Coords(a.x,a.y).toLatLng(),[a.lat,a.lng,a.x,a.y]);return n.jsx(Fe,{map:k,position:r,...m,ref:t})}),Ne=({isOpen:o,children:e})=>o?n.jsx("div",{className:"modal-overlay",children:e}):null,ee=({isOpen:o,hospital:e,onClose:t})=>{if(!o||!e)return null;const a=e.phone||"전화번호 없음";return n.jsx(Ne,{isOpen:o,onClose:t,children:n.jsxs("div",{style:{marginTop:"40rem"},children:[n.jsx("a",{href:e.phone?`tel:${e.phone}`:"#",style:{display:"block",textDecoration:"none",pointerEvents:e.phone?"auto":"none"},children:n.jsx("div",{style:{width:"20rem",height:"4rem",background:"#474747",borderRadius:"10px",color:e.phone?"#6985FF":"#999999",fontSize:"23px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",marginBottom:"1rem"},children:a})}),n.jsx("div",{style:{width:"20rem",height:"4rem",background:"#474747",borderRadius:"10px",color:"#FF5B59",fontSize:"23px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},onClick:t,children:"취소"})]})})};function Ve(){const[o,e]=d.useState([]);d.useEffect(()=>{(async()=>{var j;const u=localStorage.getItem("lat"),y=localStorage.getItem("lng"),w=localStorage.getItem("categoryName"),b=localStorage.getItem("accessToken");if(console.log("y:",u),console.log("x:",y),console.log("categoryName:",w),console.log("accessToken:",b),!b){alert("로그인이 필요합니다. 다시 로그인해주세요.");return}try{const C=await Ce.get("http://43.202.23.69:8080/api/v1/hospitals/hospital",{headers:{Authorization:`Bearer ${b}`},params:{x:y,y:u,categoryName:w}});e(C.data.hospitals||[])}catch(C){console.error("API 요청 실패:",((j=C.response)==null?void 0:j.data)||C.message)}})()},[]);const t=me(),[a,m]=d.useState({center:{lat:37.524877465547,lng:127.10788678005},address:"",errMsg:null,isLoading:!0}),[k,r]=d.useState(!1),M=()=>{r(l=>!l)},N=(l,u)=>{new window.kakao.maps.services.Geocoder().coord2Address(u,l,(w,b)=>{var j,C,Z,O;if(b===window.kakao.maps.services.Status.OK){const T=((C=(j=w[0])==null?void 0:j.road_address)==null?void 0:C.address_name)||((O=(Z=w[0])==null?void 0:Z.address)==null?void 0:O.address_name);m(H=>({...H,address:T||"주소 정보를 가져올 수 없어요."}))}else m(T=>({...T,address:"주소 정보를 가져올 수 없어요."}))})};d.useEffect(()=>{const l=setInterval(()=>{window.kakao&&window.kakao.maps?(clearInterval(l),navigator.geolocation?navigator.geolocation.getCurrentPosition(u=>{const{latitude:y,longitude:w}=u.coords;localStorage.setItem("lat",y),localStorage.setItem("lng",w),m(b=>({...b,center:{lat:y,lng:w},isLoading:!1})),N(y,w)},u=>{m(y=>({...y,errMsg:u.message,isLoading:!1}))}):m(u=>({...u,errMsg:"현재 위치를 알 수 없어요..",isLoading:!1}))):console.log("카카오맵 스크립트가 아직 로드되지 않았어요. 계속 대기 중...")},100);return()=>clearInterval(l)},[]);const[c,g]=d.useState(null),[v,S]=d.useState(null),f=l=>{S(o[l]),g(l)},L=()=>{g(null),S(null)},D=()=>t("/Mypage"),U=()=>t("/Manual"),I=()=>t("/MapPage"),z=()=>t("/Chat"),P=[{name:"내과"},{name:"외과"},{name:"정형외과"},{name:"산부인과"},{name:"피부과"},{name:"이비인후과"},{name:"치과"},{name:"신경외과"},{name:"소아과"},{name:"안과"},{name:"비뇨기과"},{name:"정신건강의학과"},{name:"가정의학과"},{name:"수의학과"}],B=localStorage.getItem("categoryName")||"진료과 선택",[R,$]=d.useState(B),i=l=>{const u=l.target.value;$(u),localStorage.setItem("categoryName",u),window.location.reload()};return n.jsx(pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs(ge,{children:[n.jsxs(ue,{children:[n.jsx(De,{children:n.jsx("img",{className:"logo",src:fe,alt:"logo"})}),n.jsxs(he,{children:[n.jsxs(Pe,{children:[n.jsxs(Se,{center:a.center,style:{width:"100%",height:"100%"},level:3,children:[!a.isLoading&&n.jsx(_,{position:a.center,image:{src:Me,size:{width:30,height:30},options:{offset:{x:20,y:40}}},onClick:M,children:k&&n.jsx("div",{style:{padding:"5px",color:"#000",whiteSpace:"nowrap",textAlign:"left"},children:a.errMsg||a.address})}),o.map((l,u)=>n.jsx(_,{position:{lat:l.y,lng:l.x},image:{src:Ie,size:{width:30,height:30},options:{offset:{x:15,y:30}}},onClick:()=>f(u),children:n.jsx("div",{style:{padding:"5px",color:"#000",whiteSpace:"nowrap",textAlign:"left"},children:l.placeName})},u))]}),c!==null&&v&&n.jsx(ee,{isOpen:c!==null,hospital:v,onClose:L})]}),n.jsx(Be,{children:n.jsxs("select",{className:"department",onChange:i,value:R,children:[n.jsx("option",{value:"진료과 선택",children:"진료과 선택"}),P.map(l=>n.jsx("option",{value:l.name,children:l.name},l.name))]})}),n.jsxs(Ze,{children:[n.jsx("p",{className:"title",children:"현위치"}),n.jsx("p",{className:"content",children:a.address})]}),n.jsx(Oe,{children:o.map((l,u)=>n.jsxs(Ue,{onClick:()=>f(u),style:{cursor:"pointer"},children:[n.jsx("p",{className:"hospital_name",children:l.placeName}),n.jsx("p",{className:"hospital_address",children:l.roadAddressName})]},u))}),c!==null&&v&&n.jsx(ee,{isOpen:c!==null,hospital:v,onClose:L})]})]}),n.jsxs(ze,{children:[n.jsx(Re,{children:n.jsx("img",{src:ke,width:"100%",alt:"footer_bar"})}),n.jsx(Q,{src:xe,alt:"map_icon",style:{marginLeft:"-10rem"},onClick:I}),n.jsx(Q,{src:ve,alt:"manual_icon",style:{marginLeft:"-6rem"},onClick:U}),n.jsx(Te,{src:ye,alt:"logo_icon"}),n.jsx(Q,{src:we,alt:"chat_icon",style:{marginLeft:"3.7rem"},onClick:z}),n.jsx(Q,{src:be,alt:"my_icon",style:{marginLeft:"8rem",marginTop:"-3.5rem"},onClick:D})]})]})})}const De=F.header`
    .logo {
        position: absolute;
        margin-top: 1.3rem;
        margin-left: -10.8rem;
    }
`,ze=F.div`
    position: absolute;
    left: 0rem;
    bottom: 0;
    border: none;
    margin: 0;
`,Re=F.div``,Te=F.img`
    position: absolute;
    width: 4rem;
    margin-left: -1.9rem;
    margin-top: -4.35rem;
`,Q=F.img`
    position: absolute;
    margin-top: -3.7rem;
`,Pe=F.div`
    width: 22rem;
    height: 17rem;
    margin-top: 5.5rem;
    border-radius: 8px; 
    overflow: hidden; 
`,Be=F.div`
    margin-top: 1rem;

    .department {
        height: 1.8rem;
        width: 9rem;
        border: 1px solid #FF4F4D;
        background-color: white;
        border-radius: 10px;   
        padding-left : 5px;
        margin-left: 11.5rem;
        outline: none;
    }

`,Ze=F.div`
    position: relative;
    margin: auto;
    top: 1rem;
    width: 21rem;
    height: 4.5rem;
    border: 1px solid #FF4F4D;
    background-color: #fff6f6;
    border-radius: 10px;

    .title {
        margin-left: -16rem;
        margin-top: 0.7rem;
        color: #FF4F4D;
        font-weight: bold;
    }
    .content {
        text-align: left;
        margin-top: -0.4rem;
        margin-left: 1.2rem;
        font-size: 16px;
    }
`,Oe=F.div`
    margin-top: 2rem;
    margin-bottom: 5.5rem;
    margin-left: 0.44rem;
`,Ue=F.div`
  margin-bottom: 1.1rem;
  position: relative;
  width: 21rem;
  height: 4.5rem;
  border: 1px solid #FF4F4D;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .hospital_name {
    text-align: left;
    margin-left: 1rem;
    margin-top: 0.8rem;
    color: #FF4F4D;
    font-weight: bold;
    font-size: 17.5px;
  }

  .hospital_address {
    text-align: left;
    font-size: 15px;
    margin-top: -0.7rem;
    margin-left: 1rem;
  }
`;export{Ve as default};
