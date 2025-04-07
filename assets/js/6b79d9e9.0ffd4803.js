"use strict";(self.webpackChunk_nexara_nativeflow_docs=self.webpackChunk_nexara_nativeflow_docs||[]).push([[228],{3273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>i});const c=JSON.parse('{"id":"components/check-box","title":"Check Box","description":"Check Box component render a pre-styled checkbox that can easily be re-style by using props.","source":"@site/docs/components/check-box.md","sourceDirName":"components","slug":"/components/check-box","permalink":"/docs/components/check-box","draft":false,"unlisted":false,"editUrl":"https://github.com/Yash-dott/nexara-nativeflow-docs/edit/main/docs/docs/components/check-box.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Button","permalink":"/docs/components/button"},"next":{"title":"Dialog","permalink":"/docs/components/dialog"}}');var s=n(4848),r=n(8453);const d={},o="Check Box",l={},i=[{value:"Implementation code",id:"implementation-code",level:2},{value:"Props",id:"props",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"check-box",children:"Check Box"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Check Box"})," component render a pre-styled checkbox that can easily be re-style by using props."]}),"\n",(0,s.jsx)("img",{src:n(7601).A,alt:"Example banner",style:{height:200}}),"\n",(0,s.jsx)(t.h2,{id:"implementation-code",children:"Implementation code"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Internally controlled checkbox"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { CheckBox } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n  return (\r\n    <CheckBox\r\n      text='CheckBox'\r\n      defaultValue={true}\r\n      onPress={(e)=>console.log(e)}\r\n    />\r\n  );\r\n}\r\nexport default Component;\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Externally controlled checkbox"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import {useState} from 'react';\r\nimport { CheckBox } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n\r\n  const [value, setValue] = useState(false);\r\n\r\n  return (\r\n    <CheckBox\r\n      text='CheckBox'\r\n      disableBuiltInState\r\n      isChecked={value}\r\n      onPress={(e)=>setValue(e)}\r\n    />\r\n  );\r\n}\r\nexport default Component;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"variant"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"square"}),", ",(0,s.jsx)(t.code,{children:"round"})]}),(0,s.jsx)(t.td,{children:"square"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"isChecked"})}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsxs)(t.td,{children:["It check the checkbox when ",(0,s.jsx)(t.code,{children:"isChecked=true"})," and uncheck it when ",(0,s.jsx)(t.code,{children:"isChecked=false"}),", It works when ",(0,s.jsx)(t.code,{children:"disableBuiltInState=true"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"defaultValue"})}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsxs)(t.td,{children:["It sets the default value of checkbox when ",(0,s.jsx)(t.code,{children:"disableBuiltInState=false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"activeBgColor"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"It sets the background color of checkbox when checkbox is checked"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"inActiveBgColor"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"It sets the background color of checkbox when checkbox is unchecked"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"iconColor"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"It sets the color of check icon."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"disableBuiltInState"})}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsxs)(t.td,{children:["Checkbox control the state internally when ",(0,s.jsx)(t.code,{children:"disableBuiltInState=false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"disabled"})}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"It disable the checkbox and prevent user clicks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"It sets the text on the right side of the checkbox"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"size"})}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{children:"18"}),(0,s.jsx)(t.td,{children:"It sets the size of the checkbox"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"iconSize"})}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"when iconSize is not provided to the component then It change the icon size according to the size prop otherwise it will apply iconSize to the icon"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"containerStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helps to change the styles of the checkbox main container"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"checkBoxStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helps to change the text styles of the checkbox"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"textStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TextStyle"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helps to change the text styles of the right text of checkbox"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7601:(e,t,n)=>{n.d(t,{A:()=>c});const c=n.p+"assets/images/checkbox-a06a288f2306db1167ea0f24626f21a4.jpeg"},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var c=n(6540);const s={},r=c.createContext(s);function d(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);