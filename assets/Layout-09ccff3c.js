import{N as r,L as i,u as s,j as e,r as a,O as c}from"./index-037f12bb.js";import{n as t}from"./emotion-styled.browser.esm-3d9ad7d7.js";const l=t.nav`
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
`,n=t(r)`
  font-weight: 700;
  color: white;

  &.active {
    text-decoration: revert;
    color: #5cd3a8;
  }
`,d=t(i)`
  display: flex;
  color: white;
  justify-content: center;
  gap: 20px;
  margin-right: 50px;
`,x=t.p`
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
`,g=t.a`
  font-size: 24px;
  color: white;
  font-weight: 700;
`,j=()=>{const o=s();return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsxs(l,{children:[e.jsx(d,{to:"/",children:e.jsx(x,{children:"Tweets Life"})}),e.jsx(n,{to:"/",children:"Home"}),e.jsx(n,{to:"/tweets",state:{frome:o},children:"Tweets"})]})}),e.jsx("main",{children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(c,{})})}),e.jsx("footer",{children:e.jsx(h,{children:e.jsx(g,{href:"https://github.com/AlexeyVorobyov95/test",target:"blank",rel:"noreferrer noopener nofollow",children:"© Alexey Vorobyov - All rights reserved, 2023"})})})]})};export{j as default};
