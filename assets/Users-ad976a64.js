import{r as f,j as t}from"./index-b935306f.js";import{c as k,g as I}from"./Tweets-59819960.js";import{n as l}from"./emotion-styled.browser.esm-6f8152a7.js";var n={},F={get exports(){return n},set exports(e){n=e}},j="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$=j,R=$;function y(){}function v(){}v.resetWarningCache=y;var O=function(){function e(d,x,g,u,r,p){if(p!==R){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function o(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:v,resetWarningCache:y};return s.PropTypes=s,s};F.exports=O();const _="/test/assets/card-img-9d60240d.png",P="/test/assets/card-img@2x-3a94a49d.png",m="/test/assets/goit-4c0f5340.svg",C=l.div`
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`,E=l.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  overflow: hidden;
  background: #5736a3;
  border-radius: 50%;
`,b=l.p`
  color: #ebd8ff;
  font-family: 'MontserratMedium';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  :nth-of-type(1) {
  margin-top: 26px;
  margin-bottom: 16px;
  }
  :nth-of-type(2) {
  margin-bottom: 26px;
  }
`,U=l.div`
  position: relative;
  width: 380px;
  height: 282px;
  padding-top: 178px;
  background-image: ${`url(${m})`}, ${`url(${_})`},
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px, 100%;
  background-position: top 20px left 20px, top 28px left 36px, 100%;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${m})`},
      ${`url(${P})`},
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }
  ::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`,w=l.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background-color: ${e=>e.status?"#5cd3a8":"#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'MontserratSemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus-visible {
    background-color: #5cd3a8;
  }
`,V=({userCard:e})=>{const[o,s]=f.useState(e),{user:d,tweets:x,followers:g,avatar:u,id:r}=o,[p,c]=f.useState(window.localStorage.getItem(`toglId:${r}`)?JSON.parse(window.localStorage.getItem(`toglId:${r}`)):{id:r,status:!1}),{status:a}=p;f.useEffect(()=>{window.localStorage.setItem(`toglId:${r}`,JSON.stringify(p))},[p]);const h=async()=>{c(i=>({id:r,status:!a}));let T={user:d,tweets:x,followers:(i=>{if(a){if(a)return i-=1}else return i+=1})(g),avatar:u,id:r};await k(r,T),await I(r).then(i=>{s(()=>i)})};return t.jsx(t.Fragment,{children:t.jsxs(U,{children:[t.jsx(C,{children:t.jsx(E,{children:t.jsx("img",{src:u,alt:d})})}),t.jsxs(b,{children:[x.toLocaleString("en-US")," Tweets"]}),t.jsxs(b,{children:[g.toLocaleString("en-US")," Followers"]}),a?t.jsx(w,{type:"button",status:a,onClick:h,children:"Followes"}):t.jsx(w,{type:"button",status:a,onClick:h,children:"Follow"})]})})};V.propTypes={userCard:n.shape({user:n.string,tweets:n.number,followers:n.number,avatar:n.string,id:n.string}).isRequired};export{V as default};
