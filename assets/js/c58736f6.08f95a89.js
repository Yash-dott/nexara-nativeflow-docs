"use strict";(self.webpackChunk_nexara_nativeflow_docs=self.webpackChunk_nexara_nativeflow_docs||[]).push([[143],{404:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"components/dialog","title":"Dialog","description":"Classic variant","source":"@site/docs/components/dialog.md","sourceDirName":"components","slug":"/components/dialog","permalink":"/docs/components/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/Yash-dott/nexara-nativeflow-docs/edit/main/docs/docs/components/dialog.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Check Box","permalink":"/docs/components/check-box"},"next":{"title":"Divider","permalink":"/docs/components/divider"}}');var d=r(4848),i=r(8453);const l={},s="Dialog",o={},c=[{value:"Implementation code",id:"implementation-code",level:2},{value:"Classic variant",id:"classic-variant",level:3},{value:"Default variant",id:"default-variant",level:3},{value:"Props",id:"props",level:2},{value:"Dialog Props",id:"dialog-props",level:3},{value:"Dialog Ref Methods",id:"dialog-ref-methods",level:3},{value:"Dialog Head Props",id:"dialog-head-props",level:3},{value:"Dialog Body Props",id:"dialog-body-props",level:3},{value:"Dialog Description Props",id:"dialog-description-props",level:3},{value:"Dialog Foot Props",id:"dialog-foot-props",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"dialog",children:"Dialog"})}),"\n",(0,d.jsx)(n.p,{children:"Classic variant"}),"\n",(0,d.jsx)("img",{src:r(2790).A,alt:"Example banner",style:{height:200}}),"\n",(0,d.jsx)(n.p,{children:"Default variant"}),"\n",(0,d.jsx)("img",{src:r(6719).A,alt:"Example banner",style:{height:300}}),"\n",(0,d.jsx)(n.h2,{id:"implementation-code",children:"Implementation code"}),"\n",(0,d.jsx)(n.p,{children:"Wrap your app.js code with PortalProvider component to use dialog."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"import { PortalProvider, NativeProvider } from '@nexara/nativeflow';\r\nimport Component from './path';\r\n\r\nconst App = () => {\r\n    return (\r\n        <NativeProvider>\r\n            <PortalProvider>\r\n                <Component/>\r\n            </PortalProvider>\r\n        </NativeProvider>\r\n    )\r\n}\r\nexport default App;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"classic-variant",children:"Classic variant"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n\r\n    const dialogRef = useRef<DialogRefProps>(null);\r\n\r\n    return (\r\n        <Button\r\n            title='Cancel'\r\n            onPress={()=> dialogRef.current.open()}\r\n        />\r\n        <Dialog ref={dialogRef} size='lg' variant='classic' onClose={() => {}}>\r\n            <DialogHead title='Invite your team' />\r\n            <DialogBody>\r\n                <DialogDescription>\r\n                    Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.\r\n                </DialogDescription>\r\n            </DialogBody>\r\n            <DialogFoot>\r\n                <Button\r\n                    variant='outlined'\r\n                    title='Cancel'\r\n                    titleColor='#000'\r\n                    paddingV={12}\r\n                    paddingH={14}\r\n                />\r\n                <Button\r\n                    variant='contained'\r\n                    title='Explore'\r\n                    bg='#000'\r\n                    titleColor='#fff'\r\n                    paddingV={12}\r\n                    paddingH={14}\r\n                />\r\n            </DialogFoot>\r\n        </Dialog>\r\n    );\r\n}\r\nexport default Component;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"default-variant",children:"Default variant"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from '@nexara/nativeflow';\r\n\r\nconst Component = () => {\r\n    \r\n    const dialogRef = useRef<DialogRefProps>(null);\r\n\r\n    return (\r\n        <Button\r\n            title='Cancel'\r\n            onPress={()=> dialogRef.current.open()}\r\n        />\r\n        <Dialog ref={dialogRef} onClose={() => {}} >\r\n            <DialogHead title='Contact US' />\r\n            <DialogBody >\r\n                <UserInput\r\n                    cursorColor='#000'\r\n                    textColor='#000'\r\n                    label='Password'\r\n                    variant='outlined'\r\n                />\r\n                <UserInput\r\n                    cursorColor='#000'\r\n                    textColor='#000'\r\n                    label='Password'\r\n                    variant='outlined'\r\n                />\r\n            </DialogBody>\r\n            <DialogFoot>\r\n                <Button\r\n                    variant='outlined'\r\n                    title='Cancel'\r\n                    titleColor='#000'\r\n                    paddingV={12}\r\n                    paddingH={14}\r\n                />\r\n                <Button\r\n                    variant='contained'\r\n                    title='Save'\r\n                    bg='#000'\r\n                    titleColor='#fff'\r\n                    paddingV={10}\r\n                    paddingH={13}\r\n                />\r\n            </DialogFoot>\r\n        </Dialog>\r\n    );\r\n}\r\nexport default Component;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-props",children:"Dialog Props"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"variant"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"default"}),", ",(0,d.jsx)(n.code,{children:"classic"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"default"})}),(0,d.jsx)(n.td,{children:"It sets the variant of the dialog"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"size"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"xs"}),", ",(0,d.jsx)(n.code,{children:"sm"}),", ",(0,d.jsx)(n.code,{children:"md"}),", ",(0,d.jsx)(n.code,{children:"lg"}),", ",(0,d.jsx)(n.code,{children:"full"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"lg"})}),(0,d.jsx)(n.td,{children:"It sets the horizontal size of the dialog"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"fullScreen"})}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsxs)(n.td,{children:["Dialog covers full screen when ",(0,d.jsx)(n.code,{children:"fullScreen"})," is set to ",(0,d.jsx)(n.code,{children:"true"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"backdropColor"})}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"'rgba(0, 0, 0, 0.5)'"}),(0,d.jsx)(n.td,{children:"It sets the backdrop color of the dialog"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onClose"})}),(0,d.jsx)(n.td,{children:"function"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"It fires when the user clicks on the backdrop or tries to close the dialog."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"containerStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ViewStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog container"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ref"})}),(0,d.jsx)(n.td,{children:"ref"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Used to programmatically control the dialog"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-ref-methods",children:"Dialog Ref Methods"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Method"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"open()"})}),(0,d.jsx)(n.td,{children:"Opens the dialog programmatically"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"close()"})}),(0,d.jsx)(n.td,{children:"Closes the dialog programmatically"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-head-props",children:"Dialog Head Props"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"title"})}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"It sets the title of the dialog"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"textVariant"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"h1"}),",",(0,d.jsx)(n.code,{children:"h2"}),",",(0,d.jsx)(n.code,{children:"h3"}),",",(0,d.jsx)(n.code,{children:"h4"}),",",(0,d.jsx)(n.code,{children:"h5"}),",",(0,d.jsx)(n.code,{children:"h6"}),",",(0,d.jsx)(n.code,{children:"h7"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"h4"})}),(0,d.jsx)(n.td,{children:"Determines the text variant applied to the title"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"fs"})}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Sets the font size of the title"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"textStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TextStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog Head title"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"containerStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ViewStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog Head container"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-body-props",children:"Dialog Body Props"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"scrollEnable"})}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{children:"Enables scrolling when content overflows from the parent"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"containerStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ViewStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the Dialog Body container"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-description-props",children:"Dialog Description Props"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"fs"})}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Sets the font size of the description text"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"textVariant"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"h1"}),",",(0,d.jsx)(n.code,{children:"h2"}),",",(0,d.jsx)(n.code,{children:"h3"}),",",(0,d.jsx)(n.code,{children:"h4"}),",",(0,d.jsx)(n.code,{children:"h5"}),",",(0,d.jsx)(n.code,{children:"h6"}),",",(0,d.jsx)(n.code,{children:"h7"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"h5"})}),(0,d.jsx)(n.td,{children:"Determines the text variant applied to the description"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"containerStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ViewStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog description container"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"textStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TextStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog description text"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.h3,{id:"dialog-foot-props",children:"Dialog Foot Props"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"containerStyle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ViewStyle"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Helps to change the styles of the dialog foot container"})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},2790:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Dialog-classic-debcfb811437f2eeeb1e9d8f00f2f34f.jpeg"},6719:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Dialog-default-622fc0168253eaafb099ddad4a2c37b3.jpeg"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(6540);const d={},i=t.createContext(d);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);