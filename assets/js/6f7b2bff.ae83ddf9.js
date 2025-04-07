"use strict";(self.webpackChunk_nexara_nativeflow_docs=self.webpackChunk_nexara_nativeflow_docs||[]).push([[412],{114:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/switch-light-4c4f2857a24ff2bea202fa19d317577f.jpeg"},3258:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/switch-dark-3880d7af1c977102738135b2970b7d67.jpeg"},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var s=n(6540);const c={},r=s.createContext(c);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:t},e.children)}},9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"components/switch","title":"Switch","description":"&nbsp;","source":"@site/docs/components/switch.md","sourceDirName":"components","slug":"/components/switch","permalink":"/docs/components/switch","draft":false,"unlisted":false,"editUrl":"https://github.com/Yash-dott/nexara-nativeflow-docs/edit/main/docs/docs/components/switch.md","tags":[],"version":"current","frontMatter":{"title":"Switch","sidebar_label":"Switch *\u26a0\ufe0f\ud83e\uddea"},"sidebar":"tutorialSidebar","previous":{"title":"Progress *\u26a0\ufe0f\ud83e\uddea","permalink":"/docs/components/progress"},"next":{"title":"test","permalink":"/docs/components/test"}}');var c=n(4848),r=n(8453);const d={title:"Switch",sidebar_label:"Switch *\u26a0\ufe0f\ud83e\uddea"},i=void 0,o={},l=[{value:"\xa0",id:"",level:3},{value:"\xa0",id:"-1",level:3},{value:"Implementation code",id:"implementation-code",level:2},{value:"Props",id:"props",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:"",children:"\xa0"}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsxs)(t.p,{children:["\u26a0\ufe0f ",(0,c.jsx)(t.strong,{children:"Experimental Component"})]}),"\n",(0,c.jsx)(t.p,{children:"This component is still being evaluated and may change in future releases."}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"-1",children:"\xa0"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Switch"})," components render a pre-styled switch that can easily be re-style by using props."]}),"\n",(0,c.jsx)("img",{src:n(114).A,alt:"Example banner",style:{height:200}}),"\n",(0,c.jsx)("img",{src:n(3258).A,alt:"Example banner",style:{height:200}}),"\n",(0,c.jsx)(t.h2,{id:"implementation-code",children:"Implementation code"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-jsx",children:"import { Switch } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n  return (\r\n    <Switch\r\n        checked={true}\r\n        size={0.8}\r\n        color='#000000'\r\n        onChange={(e) => console.log(e)}\r\n    />\r\n  );\r\n}\r\nexport default Component;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Prop"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Default"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"checked"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"boolean"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"true"})}),(0,c.jsxs)(t.td,{children:["Indicates whether the switch is on (",(0,c.jsx)(t.code,{children:"true"}),") or off (",(0,c.jsx)(t.code,{children:"false"}),")."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"color"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"string"})}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"Sets the color of the switch thumb."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"disabled"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"boolean"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"false"})}),(0,c.jsxs)(t.td,{children:["Disables the switch if set to ",(0,c.jsx)(t.code,{children:"true"}),"."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"size"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"number"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"0.8"})}),(0,c.jsx)(t.td,{children:"Scales the size of the switch using a multiplier."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"activeTrackColor"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"string"})}),(0,c.jsx)(t.td,{}),(0,c.jsxs)(t.td,{children:["Color of the track when the switch is ",(0,c.jsx)(t.code,{children:"checked"}),"."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"inactiveTrackColor"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"string"})}),(0,c.jsx)(t.td,{}),(0,c.jsxs)(t.td,{children:["Color of the track when the switch is not ",(0,c.jsx)(t.code,{children:"checked"}),"."]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"onChange"})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"function"})}),(0,c.jsx)(t.td,{}),(0,c.jsx)(t.td,{children:"Callback function that is fired when the switch value changes."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}}}]);