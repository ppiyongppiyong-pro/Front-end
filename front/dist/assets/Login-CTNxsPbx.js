import{u as x,r as a,j as e}from"./index-NUnUJvUx.js";import{m as f,B as j,a as y,d as t,C as k}from"./Global-BqKQICUA.js";import{B as p}from"./BoxType-DJL-dKYd.js";import{I as l}from"./Input-Bs-dKeWE.js";import{l as F}from"./logo-Ck4h5-z5.js";import{a as b}from"./index-xsH4HHeE.js";const C="a5bf039b62d2837be3d07e455d8bda52",w="http://localhost:5173/auth/login/kakao",v=`https://kauth.kakao.com/oauth/authorize?client_id=${C}&redirect_uri=${w}&response_type=code`;function G(){const s=x(),[r,d]=a.useState(""),[n,g]=a.useState(""),[i,c]=a.useState(""),m=()=>{window.location.href=v},h=()=>{s("/signup")},u=async()=>{if(!r||!n){c("아이디와 비밀번호를 입력해주세요.");return}try{const o=await b.post("http://43.202.23.69:8080/auth/login/form",{email:r,password:n},{headers:{"Content-Type":"application/json"}});localStorage.setItem("email",r),localStorage.setItem("password",n),localStorage.setItem("accessToken",o.data.data.accessToken),s("/MapPage")}catch(o){c("로그인 실패. 아이디 또는 비밀번호를 확인해주세요."),console.error("로그인 오류:",o)}};return e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(B,{children:e.jsxs(j,{children:[e.jsxs(S,{children:[e.jsx("img",{className:"logo",src:F,alt:"logo"}),e.jsxs(E,{children:[e.jsx(z,{children:"안녕하세요."}),e.jsxs(I,{children:["응급상황 대처 가이드 서비스,",e.jsx("br",{}),"삐용삐용입니다."]})]})]}),e.jsxs(y,{children:[e.jsxs(_,{children:[e.jsx(l,{id:"login-email",width:"310px",height:"41px",placeholder:"아이디",value:r,onChange:o=>d(o.target.value)}),e.jsx(l,{id:"login-password",width:"310px",height:"41px",placeholder:"비밀번호",type:"password",value:n,onChange:o=>g(o.target.value)})]}),i&&e.jsx(M,{children:i}),e.jsx(T,{onClick:h,children:"회원가입"}),e.jsx(D,{children:e.jsx(L,{onClick:u,children:"로그인"})}),e.jsx(W,{onClick:m,children:"카카오 로그인"})]})]})})})}const B=t(k)`
  background: linear-gradient(179.98deg, #FFFFFF 20.02%, rgba(255, 243, 243, 0.671667) 73.6%, rgba(253, 226, 225, 0.51) 99.98%) !important; 
`,S=t.header`
  margin-top: 3rem;
  .logo {
    position: absolute;
    margin-top: 4rem;
    margin-left: -10.8rem;
    transform: scale(1.3);
    transform-origin: top left;
  }
`,E=t.div`
  margin-top: 8rem;
  margin-left: 1rem;
  position: absolute;
  text-align: left;
`,z=t.h1`
  font-size: 1.25rem;
`,I=t.h2`
  font-size: 1rem;
  font-weight: lighter;
`,_=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 19rem;
  gap: 1rem;  
`,M=t.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
`,T=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 0.875rem;
  cursor: pointer; 

  &:hover {
    color: #0000004D; 
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`,D=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;  
`,L=t(p._10radiux_Box)`  
  background-color: #FF4F4DCC;
  border: 1px solid #FF4F4DCC;
  font-size: 1rem;
  width: 310px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FF4F4D80;
  }
`,W=t(p._10radiux_Box)`  
  margin-top: 1rem;
  background-color: #F9E000;
  border: 1px solid #F9E000;
  font-size: 1rem;
  width: 310px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B1C1C;
  cursor: pointer;

  &:hover {
    background-color: #F9E00080;
  }
`;export{G as default};
