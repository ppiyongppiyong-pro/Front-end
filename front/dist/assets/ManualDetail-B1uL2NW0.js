import{r as s,u as x,a as u,j as e}from"./index-DqO9zi_Z.js";import{m as h,C as f,B as y,a as b,d as a}from"./Global-BdBnFvBl.js";import{B as C}from"./BoxType-D-UrlDMl.js";import{S as j}from"./SpeechButton-CKG9r-Qa.js";import{b as F,m as k,a as v,l as w,c as _,d as M}from"./my_icon-BVNeDTUx.js";import{a as B}from"./index-xsH4HHeE.js";import"./index-BvQdOpvn.js";const D="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.1249%2021.1L6.69994%2012.7C6.59994%2012.6%206.52894%2012.4917%206.48694%2012.375C6.44494%2012.2584%206.42428%2012.1334%206.42494%2012C6.42494%2011.8667%206.44561%2011.7417%206.48694%2011.625C6.52828%2011.5084%206.59928%2011.4%206.69994%2011.3L15.1249%202.87502C15.3583%202.64169%2015.6499%202.52502%2015.9999%202.52502C16.3499%202.52502%2016.6499%202.65002%2016.8999%202.90002C17.1499%203.15002%2017.2749%203.44169%2017.2749%203.77502C17.2749%204.10836%2017.1499%204.40002%2016.8999%204.65002L9.54994%2012L16.8999%2019.35C17.1333%2019.5834%2017.2499%2019.871%2017.2499%2020.213C17.2499%2020.555%2017.1249%2020.8507%2016.8749%2021.1C16.6249%2021.35%2016.3333%2021.475%2015.9999%2021.475C15.6666%2021.475%2015.3749%2021.35%2015.1249%2021.1Z'%20fill='black'/%3e%3c/svg%3e";function q(){const[r,c]=s.useState({emergencyName:"",manualDetail:""}),o=x(),{emergencyName:i}=u(),m=()=>o("/Mypage"),l=()=>o("/Manual"),g=()=>o("/MapPage"),p=()=>o("/Chat");return s.useEffect(()=>{i&&(async()=>{const d=localStorage.getItem("accessToken");try{const t=await B.get(`https://api.ppiyongppiyong.co.kr/api/v1/manual/explanation?EmergencyName=심장마비&emergencyName=${encodeURIComponent(i)}`,{headers:{Authorization:`Bearer ${d}`}});c({emergencyName:t.data.emergencyName,manualDetail:t.data.manualDetail})}catch(t){console.error("API 요청 실패:",t)}})()},[i]),e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(f,{children:e.jsxs(y,{children:[e.jsxs(N,{children:[e.jsx("img",{className:"back",src:D,style:{cursor:"pointer"},alt:"back",onClick:()=>o(-1)}),e.jsxs(L,{children:[e.jsx(S,{children:r.emergencyName}),e.jsx(j,{width:28,height:28,mode:"tts",textToSpeak:r.manualDetail})]})]}),e.jsx(b,{children:e.jsx(I,{children:r.manualDetail})}),e.jsxs(E,{children:[e.jsx(T,{children:e.jsx("img",{src:F,width:"100%",alt:"footer_bar"})}),e.jsx(n,{src:k,alt:"map_icon",style:{marginLeft:"-10rem"},onClick:g}),e.jsx(n,{src:v,alt:"manual_icon",style:{marginLeft:"-6rem"},onClick:l}),e.jsx(z,{src:w,alt:"logo_icon"}),e.jsx(n,{src:_,alt:"chat_icon",style:{marginLeft:"3.7rem"},onClick:p}),e.jsx(n,{src:M,alt:"my_icon",style:{marginLeft:"8rem",marginTop:"-3.5rem"},onClick:m})]})]})})})}const N=a.header`
  .back {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
  margin-bottom: 5rem;
`,L=a.div`
  margin-top: 3rem;
  margin-left: 1rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`,S=a.h1`
  font-size: 1.75rem;
  color: #E60400;
`,I=a(C._10radiux_Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 333px; 
  height: auto;
  margin-top: 7rem;
  margin-bottom: 6rem;
  font-size: 1rem;
  gap: 3rem;
  background-color: #FFFFFF;
  color: #000000;
  white-space: pre-line;
  line-height: 1.6;
  border: 1px solid #FF4F4D;
  border-radius: 10px;
  box-sizing: border-box;

  &:hover {
    color: #000000;
    background-color: #FFFFFF;
    border-color: #FF4F4D;
  }
`,E=a.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border: none;
  margin: 0;
`,T=a.div``,z=a.img`
  position: absolute;
  width: 4rem;
  margin-left: -1.9rem;
  margin-top: -4.35rem;
`,n=a.img`
  position: absolute;
  margin-top: -3.7rem;
`;export{q as default};
