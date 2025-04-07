"use strict";(self.webpackChunk_nexara_nativeflow_docs=self.webpackChunk_nexara_nativeflow_docs||[]).push([[487],{3288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"components/StyledComponents/styled-view","title":"StyledView","description":"StyledView component render a view that can easily be re-style by using props.","source":"@site/docs/components/StyledComponents/styled-view.md","sourceDirName":"components/StyledComponents","slug":"/components/StyledComponents/styled-view","permalink":"/docs/components/StyledComponents/styled-view","draft":false,"unlisted":false,"editUrl":"https://github.com/Yash-dott/nexara-nativeflow-docs/edit/main/docs/docs/components/StyledComponents/styled-view.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Stack.V","permalink":"/docs/components/Stack/v-stack"},"next":{"title":"StyledText","permalink":"/docs/components/StyledComponents/styles-text"}}');var s=n(4848),r=n(8453);const i={},c="StyledView",o={},l=[{value:"Implementation code",id:"implementation-code",level:2},{value:"Props",id:"props",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"styledview",children:"StyledView"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"StyledView"})," component render a view that can easily be re-style by using props."]}),"\n",(0,s.jsx)(t.h2,{id:"implementation-code",children:"Implementation code"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { StyledView, Stack } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n  return (\r\n    <StyledView f={1} themeBg>\r\n        <StyledView h={100} w={100} bg='red'></StyledView>\r\n    </StyledView>\r\n  );\r\n}\r\nexport default Component;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"f"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Sets the ",(0,s.jsx)(t.code,{children:"flex"})," value of the view."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"align"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Applies ",(0,s.jsx)(t.code,{children:"alignItems"})," style to the view."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"justify"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Applies ",(0,s.jsx)(t.code,{children:"justifyContent"})," style to the view."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fWrap"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Applies ",(0,s.jsx)(t.code,{children:"flexWrap"})," to control wrapping behavior."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bg"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Sets the background color of the view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themeBg"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{children:["If ",(0,s.jsx)(t.code,{children:"true"}),", uses the theme's secondary color as the background."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"h"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Sets the height of the view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"w"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Sets the width of the view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"style"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Additional custom styles applied to the view."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var d=n(6540);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);