"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7924],{2003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>A,default:()=>_,frontMatter:()=>V,metadata:()=>a,toc:()=>C});const a=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"Installation","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/docs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Tutorial - Basics","permalink":"/docs/category/tutorial---basics"}}');var r=t(4848),l=t(8453),s=t(6540),i=t(4164),c=t(5627),o=t(6347),u=t(372),d=t(604),h=t(1861),p=t(8749);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,h.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=b(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,o]=f({queryString:t,groupId:a}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,p.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),m=(()=>{const e=c??d;return g({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),h(e)}),[o,h,r]),tabValues:r}}var v=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(u(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,r.jsx)(y,{...n,...e}),(0,r.jsx)(I,{...n,...e})]})}function k(e){const n=(0,v.A)();return(0,r.jsx)(w,{...e,children:m(e.children)},String(n))}const N={tabItem:"tabItem_Ymn6"};function S(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(N.tabItem,a),hidden:t,children:n})}const V={sidebar_position:1},A="Getting Started",T={},C=[{value:"Installation",id:"installation",level:2},{value:"Step 1: Install the packages",id:"step-1-install-the-packages",level:3},{value:"Step 2: Add Reanimated&#39;s babel plugin",id:"step-2-add-reanimateds-babel-plugin",level:3},{value:"Step 3: Clear Metro bundler cache (recommended)",id:"step-3-clear-metro-bundler-cache-recommended",level:3}];function E(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.h3,{id:"step-1-install-the-packages",children:"Step 1: Install the packages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.strong,{children:"rn-nativeflow"})]}),"\n"]}),"\n",(0,r.jsxs)(k,{groupId:"select",children:[(0,r.jsx)(S,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npm install rn-nativeflow\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" npm install rn-nativeflow\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.strong,{children:"react native reanimated"})]}),"\n"]}),"\n",(0,r.jsxs)(k,{groupId:"select",children:[(0,r.jsx)(S,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npm install react-native-reanimated\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" yarn add react-native-reanimated\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install react ",(0,r.jsx)(n.strong,{children:"native gesture handler"})]}),"\n"]}),"\n",(0,r.jsxs)(k,{groupId:"select",children:[(0,r.jsx)(S,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npm install react-native-gesture-handler\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" yarn add react-native-gesture-handler\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-add-reanimateds-babel-plugin",children:"Step 2: Add Reanimated's babel plugin"}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"react-native-reanimated/plugin"})," plugin to your babel.config.js"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ... // don't add it here :)\n  ],\n  plugins: [\n    ...\n    // highlight-start\n    'react-native-reanimated/plugin',\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"step-3-clear-metro-bundler-cache-recommended",children:"Step 3: Clear Metro bundler cache (recommended)"}),"\n",(0,r.jsxs)(k,{groupId:"select",children:[(0,r.jsx)(S,{value:"expo",label:"expo",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npx expo start -c\n"})})}),(0,r.jsx)(S,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npm start -- --reset-cache\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn start --reset-cache\n"})})})]})]})}function _(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);