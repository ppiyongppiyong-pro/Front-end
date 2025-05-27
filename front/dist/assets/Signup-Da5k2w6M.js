import{u as N,r as x,j as e}from"./index-DqO9zi_Z.js";import{m as b,B as f,a as w,d as a,C as y}from"./Global-BdBnFvBl.js";import{a as C}from"./index-xsH4HHeE.js";import{B as v}from"./BoxType-D-UrlDMl.js";import{I as p}from"./Input-DZ8YPMmX.js";import{l as F}from"./logo-Ck4h5-z5.js";function H(){const m=N(),[t,g]=x.useState({email:"",password:"",username:"",phoneNumber:"",gender:"male",parentPhoneNumber:"",address:"",residentNo:""}),[o,l]=x.useState({email:"",password:"",phoneNumber:"",parentPhoneNumber:"",residentNo:""}),s={email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,phone:/^010-\d{4}-\d{4}$/,residentNo:/^\d{6}-\d{7}$/},u=(c,n)=>{switch(c){case"email":l(r=>({...r,email:s.email.test(n)?"":"유효한 이메일을 입력해주세요."}));break;case"password":l(r=>({...r,password:s.password.test(n)?"":"비밀번호는 8자 이상, 영문+숫자 조합이어야 합니다."}));break;case"phoneNumber":l(r=>({...r,phoneNumber:s.phone.test(n)?"":"010-0000-0000 형식으로 입력해주세요."}));break;case"parentPhoneNumber":l(r=>({...r,parentPhoneNumber:s.phone.test(n)?"":"010-0000-0000 형식으로 입력해주세요."}));break;case"residentNo":l(r=>({...r,residentNo:s.residentNo.test(n)?"":"000000-0000000 형식으로 입력해주세요."}));break}},i=c=>{const{id:n,value:r}=c.target;g({...t,[n]:r}),u(n,r)},j=async()=>{var n;const c={email:s.email.test(t.email)?"":"유효한 이메일을 입력해주세요.",password:s.password.test(t.password)?"":"비밀번호는 8자 이상, 영문+숫자 조합이어야 합니다.",phoneNumber:s.phone.test(t.phoneNumber)?"":"010-0000-0000 형식으로 입력해주세요.",parentPhoneNumber:s.phone.test(t.parentPhoneNumber)?"":"010-0000-0000 형식으로 입력해주세요.",residentNo:s.residentNo.test(t.residentNo)?"":"000000-0000000 형식으로 입력해주세요."};if(l(c),Object.values(c).some(r=>r!=="")){alert("입력값을 확인해주세요.");return}try{const r=await C.post("https://api.ppiyongppiyong.co.kr/auth/signup",t,{headers:{"Content-Type":"application/json"}});console.log("회원가입 성공:",r.data),alert("회원가입이 완료되었습니다."),m("/")}catch(r){console.error("회원가입 실패:",((n=r.response)==null?void 0:n.data)||r.message),alert("회원가입에 실패했습니다. 다시 시도해주세요.")}};return e.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(P,{children:e.jsxs(f,{children:[e.jsxs(k,{children:[e.jsx("img",{className:"logo",src:F,alt:"logo"}),e.jsx(z,{children:e.jsx(B,{children:"회원가입"})})]}),e.jsxs(w,{children:[e.jsxs(S,{children:[e.jsx(d,{children:"아이디"}),e.jsx(p,{id:"email",width:"310px",height:"41px",placeholder:"이메일을 아이디로 입력해주세요.",value:t.email,onChange:i}),o.email&&e.jsx(h,{children:o.email}),e.jsx(d,{children:"비밀번호"}),e.jsx(p,{id:"password",width:"310px",height:"41px",placeholder:"영문+숫자 8자 이상으로 설정해주세요.",type:"password",value:t.password,onChange:i}),o.password&&e.jsx(h,{children:o.password}),e.jsx(d,{children:"전화번호"}),e.jsx(p,{id:"phoneNumber",width:"310px",height:"41px",placeholder:"010-0000-0000",value:t.phoneNumber,onChange:i}),o.phoneNumber&&e.jsx(h,{children:o.phoneNumber}),e.jsx(d,{children:"보호자 전화번호"}),e.jsx(p,{id:"parentPhoneNumber",width:"310px",height:"41px",placeholder:"010-0000-0000",value:t.parentPhoneNumber,onChange:i}),o.parentPhoneNumber&&e.jsx(h,{children:o.parentPhoneNumber}),e.jsx(d,{children:"주소"}),e.jsx(p,{id:"address",width:"310px",height:"41px",placeholder:"거주지를 한글로 입력해주세요.",value:t.address,onChange:i}),e.jsx(d,{children:"주민등록번호"}),e.jsx(p,{id:"residentNo",width:"310px",height:"41px",placeholder:"000000-0000000",value:t.residentNo,onChange:i}),o.residentNo&&e.jsx(h,{children:o.residentNo}),e.jsx(d,{children:"닉네임"}),e.jsx(p,{id:"username",width:"310px",height:"41px",placeholder:"닉네임을 한글로 입력해주세요.",value:t.username,onChange:i})]}),e.jsx(A,{children:e.jsx(D,{onClick:j,children:"회원가입"})}),e.jsx(E,{onClick:()=>m("/"),children:"로그인"})]})]})})})}const P=a(y)`
    background: linear-gradient(179.98deg, #FFFFFF 20.02%, rgba(255, 243, 243, 0.671667) 73.6%, rgba(253, 226, 225, 0.51) 99.98%) !important; 
`,k=a.header`
  position: relative;
  .logo {
    position: absolute;
    margin-top: 1.3rem;
    margin-left: -10.8rem;
  }
`,z=a.div`
    margin-top: 5rem;
    margin-left: 1rem;
    position: absolute;
    text-align: left;
`,B=a.h1`
    font-size: 1.25rem;
`,S=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    margin-top: 8rem;
    width: 100%;  
`,d=a.p`
    text-align: left;  
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    width: 100%;
`,A=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;  
`,D=a(v._10radiux_Box)`  
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
`,E=a.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    font-size: 0.875rem;
    cursor: pointer; 

    &:hover {
        color: #0000004D; 
    }
`,h=a.p`
    color: red;
    font-size: 0.875rem;
    text-align: center;
`;export{H as default};
