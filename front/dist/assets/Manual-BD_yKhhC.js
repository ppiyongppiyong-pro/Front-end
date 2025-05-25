import{r as s,j as e,u as b}from"./index-NUnUJvUx.js";import{d as n,m as k,C as F,B as S,a as w}from"./Global-BqKQICUA.js";import{l as $}from"./logo-Ck4h5-z5.js";import{B}from"./BoxType-DJL-dKYd.js";import{S as M}from"./SpeechButton-BDreSlIi.js";import{a as C}from"./index-xsH4HHeE.js";import"./index-Buu3r__g.js";const z=a=>s.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},s.createElement("g",{opacity:.5},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.64131 13.7816C11.0329 13.7816 13.7824 11.0323 13.7824 7.6409C13.7824 4.24947 11.0329 1.50018 7.64131 1.50018C4.24967 1.50018 1.50021 4.24947 1.50021 7.6409C1.50021 11.0323 4.24967 13.7816 7.64131 13.7816Z",stroke:"#E60400",strokeWidth:1.75297,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M12.3991 12.3985L16.259 16.2582",stroke:"#E60400",strokeWidth:1.75297,strokeLinecap:"round",strokeLinejoin:"round"}))),I=n(B._4radiux_Box)`
  background-color: #FF4F4D1A;
  border: 1px solid #FF4F4D1A;
  box-sizing: border-box;

  &:hover {
    background-color: #FF4F4D1A;
    border-color: #FF4F4D;
  }
`,T=n.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 5px;
  font-size: 14px;
  outline: none;
  height: ${a=>a.height||"30px"};
`,v=n.div`
  display: flex;
  align-items: center;
  cursor: default;
  height: ${a=>a.height||"30px"};
`;function D({width:a,height:c,onSearchResults:g}){const[l,i]=s.useState(""),[h,u]=s.useState(!1),[f,t]=s.useState(!1),o=async()=>{var x;if(!l.trim()){alert("검색어를 입력하세요.");return}u(!0);const r=localStorage.getItem("accessToken");console.log("요청한 텍스트:",l);try{const d=await C.get("http://52.79.245.244/api/v1/manual/search",{headers:{Authorization:`Bearer ${r}`},params:{keyword:l}});console.log("검색 결과:",d.data),g(d.data)}catch(d){console.error("검색 실패:",((x=d.response)==null?void 0:x.data)||d.message),alert("검색 결과를 불러오지 못했습니다.")}finally{u(!1)}},p=r=>{i(r)},j=r=>{t(r)},m=r=>{r.key==="Enter"&&o()};return e.jsxs(I,{width:a,height:c,children:[e.jsx(v,{height:c,children:e.jsx(z,{width:15,height:15})}),e.jsx(T,{id:"search",type:"text",value:l,onChange:r=>i(r.target.value),onKeyDown:m,height:c,disabled:h}),e.jsx(v,{height:c,children:e.jsx(M,{mode:"stt",onRecognized:p,width:15,height:15,onListeningChange:j,isListening:f})})]})}const A=n.div`
  display: flex;
  align-items: flex-start; 
  background-color: #FF4F4D05; 
  border: 1px solid #FF4F4D; 
  border-radius: 10px;
  width: 337px;
  height: 93px;  
  cursor: pointer;  
`,R=n.img`
  width: 93px;
  height: 93px;
  border-radius: 10px;
  object-fit: cover; 
  
`,L=n.div`
  display: flex;
  flex-direction: column; 
  text-align: left;
  width: 100%;
  padding: 0rem 0.5rem;
`,E=n.h3`
  font-size: 1rem;
  color: #000000;
  font-weight: bold;
  margin: 0.5rem 0rem;
`,N=n.p`
  font-size: 0.75rem;
  color: #000000;
  margin: 0;
`,W=({thumbnail:a,title:c,summary:g,emergencyName:l})=>{const i=b(),h=()=>{i(`/manualdetail/${encodeURIComponent(l)}`)};return e.jsxs(A,{onClick:h,children:[e.jsx(R,{src:a,alt:"manual-thumbnail"}),e.jsxs(L,{children:[e.jsx(E,{children:c}),e.jsx(N,{children:g})]})]})};function X(){const[a,c]=s.useState("all"),[g,l]=s.useState([]);b();const i=t=>{c(t)},h=t=>{const o=u(t);l(o)},u=t=>t.map(o=>({emergencyImage:o.emergencyImage,emergencyName:o.emergencyName,summary:o.manualSummaries||o.emergencyResponseSummary})),f=s.useCallback(async()=>{var j;const t=localStorage.getItem("accessToken"),p={all:"1. 기본",general:"1. 기본",situational:"2. 상황별",medical:"3. 의학적",traumatic:"5. 외상성"}[a];console.log("API 요청 시작"),console.log("요청 URL: http://52.79.245.244/api/v1/manual/getCategory"),console.log(`요청 헤더: Authorization: Bearer ${t}`),console.log("요청 파라미터:",{Category:p,category:p});try{const m=await C.get("http://52.79.245.244/api/v1/manual/getCategory",{headers:{Authorization:`Bearer ${t}`},params:{Category:p,category:p},paramsSerializer:x=>Object.keys(x).map(d=>`${d}=${encodeURIComponent(x[d])}`).join("&")});console.log("API 응답 성공",m.data);const r=u(m.data);l(r)}catch(m){console.error("API 요청 실패:",((j=m.response)==null?void 0:j.data)||m.message)}finally{console.log("API 요청 종료")}},[a]);return s.useEffect(()=>{f()},[f]),e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(P,{children:e.jsx("img",{className:"logo",src:$,alt:"logo"})}),e.jsxs(w,{children:[e.jsx(U,{children:e.jsx(D,{onSearchResults:h})}),e.jsxs(K,{children:[e.jsx(y,{$active:a==="all",onClick:()=>i("all"),children:"전체"}),e.jsx(y,{$active:a==="general",onClick:()=>i("general"),children:"기본"}),e.jsx(y,{$active:a==="situational",onClick:()=>i("situational"),children:"상황별"}),e.jsx(y,{$active:a==="medical",onClick:()=>i("medical"),children:"의학적"}),e.jsx(y,{$active:a==="traumatic",onClick:()=>i("traumatic"),children:"외상성"})]}),e.jsx(_,{children:g.length>0?e.jsx(G,{children:g.map((t,o)=>e.jsx(W,{thumbnail:t.emergencyImage,title:t.emergencyName,summary:t.summary,emergencyName:t.emergencyName},o))}):e.jsx("div",{children:"로딩 중..."})})]})]})})})}const P=n.header`
  position: relative;
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`,U=n.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,K=n.div`
  display: flex;
  border-bottom: 2px solid #FF4F4D;
  margin-bottom: 20px;
  justify-content: space-between;
`,y=n.div`
  padding-top: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  font-weight: ${a=>a.$active?"bold":"normal"};
  color: ${a=>a.$active?"#FF4F4D":"#000000"};
  transition: all 0.3s;
  text-align: center; 
  flex-grow: 1; 
`,_=n.div`
  margin: 20px 0px;
  font-size: 16px;
`,G=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;  
`;export{X as default};
