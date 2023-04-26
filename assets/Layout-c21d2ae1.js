import{N as r,L as i,u as s,j as e,r as a,O as c}from"./index-b935306f.js";import{n as t}from"./emotion-styled.browser.esm-6f8152a7.js";const l=t.nav`
  font-size: 40px;
  padding: 20px;
  display: flex;
  gap: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`,o=t(r)`
  font-weight: 700;
  color: white;

  &.active {
    text-decoration: revert;
    color: #5cd3a8;
  }
`,d=t.img`
  width: 100px;
  height: auto;
`,x=t(i)`
  display: flex;
  color: white;
  justify-content: center;
  gap: 20px;
  margin-right: 50px;
`,g=t.p`
  font-weight: 700;
`,h=t.div`
  display: flex;
  width: 100%;
  height: 100px;
  
  
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  justify-content: center;
  align-items: center;
`,p=t.a`
  font-size: 24px;
  color: white;
  font-weight: 700;
`,m=()=>{const n=s();return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsxs(l,{children:[e.jsxs(x,{to:"/",children:[e.jsx(d,{src:"src/images/logo.png",alt:"Logo"}),e.jsx(g,{children:"Tweets Life"})]}),e.jsx(o,{to:"/",children:"Home"}),e.jsx(o,{to:"/tweets",state:{frome:n},children:"Tweets"})]})}),e.jsx("main",{children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(c,{})})}),e.jsx("footer",{children:e.jsx(h,{children:e.jsx(p,{href:"https://github.com/AlexeyVorobyov95/test",target:"blank",rel:"noreferrer noopener nofollow",children:"© Alexey Vorobyov - All rights reserved, 2023"})})})]})};export{m as default};
