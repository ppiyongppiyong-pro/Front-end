import{r as g,j as e,u as x}from"./index-DqO9zi_Z.js";import{d as t,m as f,C as j,B as w,a as y}from"./Global-BdBnFvBl.js";import{a as h}from"./index-xsH4HHeE.js";import{l as b}from"./logo-Ck4h5-z5.js";import{b as k,m as v,a as C,l as F,c as I,d as L}from"./my_icon-BVNeDTUx.js";import{B as u}from"./BoxType-D-UrlDMl.js";const _="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6429%2015.9694V17.2959C14.6429%2017.6477%2014.503%2017.9852%2014.2543%2018.2339C14.0056%2018.4826%2013.6681%2018.6225%2013.3163%2018.6225H4.03061C3.67878%2018.6225%203.34138%2018.4826%203.0926%2018.2339C2.84384%2017.9852%202.70408%2017.6477%202.70408%2017.2959V2.70409C2.70408%202.35227%202.84384%202.01487%203.0926%201.7661C3.34138%201.51732%203.67878%201.37756%204.03061%201.37756H13.3163C13.6681%201.37756%2014.0056%201.51732%2014.2543%201.7661C14.503%202.01487%2014.6429%202.35227%2014.6429%202.70409V4.03062'%20stroke='%23E60400'%20stroke-width='1.42857'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.01019%2010H17.2959'%20stroke='%23E60400'%20stroke-width='1.42857'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.6429%207.34692L17.2959%209.99998L14.6429%2012.653'%20stroke='%23E60400'%20stroke-width='1.42857'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11.5086'%20cy='11.5086'%20r='11.5086'%20fill='%23FF4F4D'/%3e%3cg%20clip-path='url(%23clip0_443_215)'%3e%3cpath%20d='M15.2125%208.77896L12.7795%206.93115L7.79427%2013.726L10.2273%2015.5738L15.2125%208.77896Z'%20fill='white'/%3e%3cpath%20d='M6.77613%2017.2542L7.36614%2014.3115L9.7987%2016.1587L7.18668%2017.5669C6.97403%2017.6807%206.72696%2017.4931%206.7749%2017.253L6.77613%2017.2542Z'%20fill='white'/%3e%3cpath%20d='M13.1864%206.49682L13.5539%205.99657C14.0321%205.345%2014.9663%205.22369%2015.6313%205.72894C16.295%206.23294%2016.4474%207.17966%2015.9693%207.83123L15.6018%208.33147'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_443_215'%3e%3crect%20width='9.47802'%20height='12.186'%20fill='white'%20transform='translate(6.77078%205.41614)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",N=t.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;  
  height: ${o=>o.height||"auto"};
`,E=t.p`
  text-align: left;  
  margin-left: 0.5rem;
  margin-top: 0.5rem;  
  margin-bottom: 0.25rem;
  font-size: 1rem;
  width: 100%;
`,S=t(u._10radiux_Box)`
  background-color: #FF4F4D1A;
  border: 1px solid #FF4F4D;

  &:hover {
    background-color: #FF4F4D1A;  
    border-color: #FF4F4D; 
  }
`,M=t.input`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 5px;
  font-size: 14px;
  outline: none;
  height: ${o=>o.height||"30px"};  
  cursor: ${o=>o.readOnly?"not-allowed":"auto"};
`,T=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${o=>o.height||"30px"};
`;function l({id:o,width:n,height:i,label:p,value:a=""}){const[r,m]=g.useState(!1),c=()=>{m(s=>!s)};return e.jsxs(N,{height:i,children:[e.jsx(E,{children:p}),e.jsxs(S,{width:n,height:i,children:[e.jsx(M,{id:o,type:"text",placeholder:"",height:i,readOnly:!r,value:a}),e.jsx(T,{onClick:c,height:i,children:e.jsx(B,{style:{width:15,height:15}})})]})]})}function Q(){const o=x(),[n,i]=g.useState({email:"",username:"",phoneNumber:"",gender:"",parentPhoneNumber:"",address:"",residentNo:""});g.useEffect(()=>{const a=localStorage.getItem("accessToken");if(!a){console.log("로그인이 필요합니다."),o("/");return}h.get("https://api.ppiyongppiyong.co.kr/api/v1/mypage/getProfile",{headers:{Authorization:`Bearer ${a}`}}).then(r=>{r&&r.data?i(r.data):console.error("서버에서 데이터를 정상적으로 불러오지 못했습니다.")}).catch(r=>{console.error("마이페이지 오류:",r),i({})})},[o]);const p=async()=>{var c;const a=localStorage.getItem("accessToken"),r=localStorage.getItem("email"),m=localStorage.getItem("password");if(!a){console.error("로그인 상태가 아닙니다."),o("/");return}try{(await h.post("https://api.ppiyongppiyong.co.kr/api/auth/logout",{email:r,password:m},{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}})).data==="로그아웃 되었습니다."?(localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("email"),localStorage.removeItem("password"),console.log("로그아웃 성공!"),o("/")):console.error("로그아웃 실패: 서버에서 올바른 응답을 받지 못했습니다.")}catch(s){console.error("로그아웃 실패:",((c=s.response)==null?void 0:c.data)||s.message),alert("로그아웃을 실패했습니다. 다시 시도해주세요.")}};return e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsxs(P,{children:[e.jsx("img",{className:"logo",src:b,alt:"logo"}),e.jsxs(z,{children:[e.jsx(A,{children:n.username}),e.jsx($,{onClick:p,children:e.jsx("img",{className:"logout",src:_,alt:"logout"})})]})]}),e.jsxs(y,{children:[e.jsxs(D,{children:[e.jsx(l,{id:"email",width:"310px",height:"35px",label:"아이디",value:n.email}),e.jsx(l,{id:"phoneNumber",width:"310px",height:"35px",label:"전화번호",value:n.phoneNumber}),e.jsx(l,{id:"parentPhoneNumber",width:"310px",height:"35px",label:"보호자 전화번호",value:n.parentPhoneNumber}),e.jsx(l,{id:"address",width:"310px",height:"35px",label:"주소",value:n.address}),e.jsx(l,{id:"residentNo",width:"310px",height:"35px",label:"주민등록번호",value:n.residentNo})]}),e.jsx(W,{children:e.jsx(H,{children:"회원탈퇴"})})]})]}),e.jsxs(V,{children:[e.jsx(O,{children:e.jsx("img",{src:k,width:"100%",alt:"footer_bar"})}),e.jsx(d,{src:v,alt:"map_icon",style:{marginLeft:"-10rem"},onClick:()=>o("/MapPage")}),e.jsx(d,{src:C,alt:"manual_icon",style:{marginLeft:"-6rem"},onClick:()=>o("/Manual")}),e.jsx(U,{src:F,alt:"logo_icon"}),e.jsx(d,{src:I,alt:"chat_icon",style:{marginLeft:"3.7rem"},onClick:()=>o("/Chat")}),e.jsx(d,{src:L,alt:"my_icon",style:{marginLeft:"8rem",marginTop:"-3.5rem"},onClick:()=>o("/Mypage")})]})]})})}const $=t.button`
  background: none;
  border: none;
  cursor: pointer;
`,P=t.header`
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`,z=t.div`
  margin-top: 4rem;
  margin-left: 0.5rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`,A=t.h1`
  font-size: 1.25rem;
`,D=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  gap: 3rem;
  width: 100%;
`,W=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  gap: 1rem;
`,H=t(u._10radiux_Box)`
  background-color: #FFFFFF;
  border: 1px solid #E60400;
  font-size: 1rem;
  width: 310px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E60400;
  cursor: pointer;

  &:hover {
    background-color: #E60400;
    border-color: #E60400;
    color: #ffffff;
  }
`,V=t.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border: none;
  margin: 0;
`,O=t.div``,U=t.img`
  position: absolute;
  width: 4rem;
  margin-left: -1.9rem;
  margin-top: -4.35rem;
`,d=t.img`
  position: absolute;
  margin-top: -3.7rem;
`;export{Q as default};
