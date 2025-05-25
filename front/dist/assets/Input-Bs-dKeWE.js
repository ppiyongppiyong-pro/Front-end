import{j as u}from"./index-NUnUJvUx.js";import{d as x}from"./Global-BqKQICUA.js";const a=x.input`
  border: none;  
  border-bottom: 1px solid ${o=>o.borderColor||"#0000004D"};  
  background-color: transparent;
  width: ${o=>o.width||"333px"};
  height: ${o=>o.height||"93px"};
  font-size: 1rem;
  outline: none;
  color: ${o=>o.textColor||"#000000"}; 

  &::placeholder {
    color: ${o=>o.placeholderColor||"#0000004D"};
  }

  &:focus {
    border-bottom-color: ${o=>o.focusColor||"#FF4F4D"}; 
  }
`,m=({id:o,placeholder:r,width:t,height:e,textColor:l,placeholderColor:n,$borderColor:d,focusColor:p,value:s,onChange:i,type:c="text"})=>u.jsx(a,{id:o,width:t,height:e,textColor:l,placeholderColor:n,borderColor:d,focusColor:p,placeholder:r,value:s,onChange:i,type:c});export{m as I};
