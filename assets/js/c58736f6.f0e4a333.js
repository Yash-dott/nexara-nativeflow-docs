"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[2143],{404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"components/dialog","title":"Dialog","description":"Classic variant","source":"@site/docs/components/dialog.md","sourceDirName":"components","slug":"/components/dialog","permalink":"/docs/components/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/dialog.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Check Box","permalink":"/docs/components/check-box"},"next":{"title":"Divider","permalink":"/docs/components/divider"}}');var s=t(4848),i=t(8453);const l={},d="Dialog",o={},c=[{value:"Implementation code",id:"implementation-code",level:2},{value:"Props",id:"props",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dialog",children:"Dialog"})}),"\n",(0,s.jsx)(n.p,{children:"Classic variant"}),"\n",(0,s.jsx)("img",{src:t(2790).A,alt:"Example banner",style:{height:200}}),"\n",(0,s.jsx)(n.p,{children:"Default variant"}),"\n",(0,s.jsx)("img",{src:t(6719).A,alt:"Example banner",style:{height:300}}),"\n",(0,s.jsx)(n.h2,{id:"implementation-code",children:"Implementation code"}),"\n",(0,s.jsx)(n.p,{children:"Wrap your app.js code with PortalProvider component to use dialog."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { PortalProvider, NativeProvider } from 'rn-nativeflow';\r\nimport Component from './path';\r\n\r\nconst App = () => {\r\n    return (\r\n        <NativeProvider>\r\n            <PortalProvider>\r\n                <Component/>\r\n            </PortalProvider>\r\n        </NativeProvider>\r\n    )\r\n}\r\nexport default App;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Classic variant"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from 'rn-nativeflow';\r\n\r\nconst Component = () => {\r\n  return (\r\n        <Dialog isVisible={true} size='lg' variant='classic' onClose={() => {}}>\r\n            <DialogHead title='Invite your team' />\r\n            <DialogBody>\r\n                <DialogDescription>\r\n                    Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.\r\n                </DialogDescription>\r\n            </DialogBody>\r\n            <DialogFoot>\r\n                <Button\r\n                    variant='outlined'\r\n                    title='Cancel'\r\n                    titleColor='#000'\r\n                    paddingV={10}\r\n                    paddingH={13}\r\n                />\r\n                <Button\r\n                    variant='contained'\r\n                    title='Explore'\r\n                    bg='#000'\r\n                    titleColor='#fff'\r\n                    paddingV={10}\r\n                    paddingH={13}\r\n                />\r\n            </DialogFoot>\r\n        </Dialog>\r\n    );\r\n}\r\nexport default Component;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default variant"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from 'rn-nativeflow';\r\n\r\nconst Component = () => {\r\n  return (\r\n        <Dialog isVisible={true} onClose={() => {}} >\r\n            <DialogHead title='Contact US' />\r\n            <DialogBody >\r\n                <UserInput\r\n                    cursorColor='#000'\r\n                    textColor='#000'\r\n                    label='Password'\r\n                    variant='outlined'\r\n                />\r\n                <UserInput\r\n                    cursorColor='#000'\r\n                    textColor='#000'\r\n                    label='Password'\r\n                    variant='outlined'\r\n                />\r\n            </DialogBody>\r\n            <DialogFoot>\r\n                <Button\r\n                    variant='outlined'\r\n                    title='Cancel'\r\n                    titleColor='#000'\r\n                    paddingV={10}\r\n                    paddingH={13}\r\n                />\r\n                <Button\r\n                    variant='contained'\r\n                    title='Save'\r\n                    bg='#000'\r\n                    titleColor='#fff'\r\n                    paddingV={10}\r\n                    paddingH={13}\r\n                />\r\n            </DialogFoot>\r\n        </Dialog>\r\n    );\r\n}\r\nexport default Component;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dialog Props"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"variant"})}),(0,s.jsx)(n.td,{children:"classic, default"}),(0,s.jsx)(n.td,{children:"classic"}),(0,s.jsx)(n.td,{children:"It sets the variant of the dialog"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"isVisible"})}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"It sets the visibility of the dialog"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"size"})}),(0,s.jsx)(n.td,{children:"xs, sm, md, lg, full"}),(0,s.jsx)(n.td,{children:"lg"}),(0,s.jsx)(n.td,{children:"It sets the horizontal size of the dialog"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fullScreen"})}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["Dialog cover full screen when fullScreen sets to ",(0,s.jsx)(n.code,{children:"true"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"backdropColor"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"It sets the backdrop color of the dialog"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"animationDuration"})}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"800"}),(0,s.jsx)(n.td,{children:"It change the duration of closing and opening animation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onClose"})}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"It fires when user click on backdrop or try to close the dialog"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dialog Head Props"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"title"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"It sets the title of the dialog"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"containerStyle"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog Head container"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"textStyle"})}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog Head title"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dialog Body Props"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"scrollEnable"})}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"It scroll the content when it overflows from the parent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"containerStyle"})}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog body container"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dialog Description Props"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fs"})}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{children:"It sets the font size of the description or text"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"containerStyle"})}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog description container"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"textStyle"})}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog description text"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Dialog Foot Props"})}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"containerStyle"})}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Helps to change the styles of the dialog foot container"})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2790:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Dialog-classic-debcfb811437f2eeeb1e9d8f00f2f34f.jpeg"},6719:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Dialog-default-622fc0168253eaafb099ddad4a2c37b3.jpeg"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);