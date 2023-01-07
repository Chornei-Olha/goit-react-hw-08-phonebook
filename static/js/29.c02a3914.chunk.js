"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[29],{8029:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var r,a,i,o,s,d,l,c,u,m,h=t(1413),p=t(7107),x=t(7012),b=t(1134),f=t(3736),g=t(4004),Z=t(1889),v=t(4554),j=t(1614),w=t(4695),C=t(2797),y=t(9439),k=t(5985),P=t(2791),_=t(9434),A=t(4585),q=function(){var e=(0,P.useState)(""),n=(0,y.Z)(e,2),t=n[0],r=n[1],a=(0,_.v9)(A.lP.K),i=(0,_.I0)(),o=(0,P.useMemo)((function(){var e,n=t.toLowerCase().trim();return null!==(e=null===a||void 0===a?void 0:a.filter((function(e){return e.name.toLowerCase().includes(n)})))&&void 0!==e?e:[]}),[a,t]);return{filter:t,setFilter:r,contacts:a,filteredContacts:o,addContact:function(e){var n=e.name,t=n.toLowerCase();a.some((function(e){return e.name.toLowerCase()===t}))?k.Am.warn("".concat(n," is already in contacts"),{position:"top-center",autoClose:3e3}):i(A.mh.add(e))}}},F=t(184),S={pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},W={pattern:/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},z=C.Ry().shape({name:C.Z_().matches(S.pattern,{message:S.message}).required(),number:C.Z_().matches(W.pattern,{message:W.message}).required()}),B=(0,p.Z)({breakpoints:{values:{mobile:0,tablet:768,desktop:1200}}}),I={width:{tablet:320,desktop:400},height:1,border:{tablet:"1px solid rgba(0,0,0,0.3)"},borderRadius:2,m:{tablet:2,desktop:3}},L=function(e){var n,t,r,a,i=e.textBtn,o=e.handleClose,s=window.screen.width<768,d=(0,b.cI)({resolver:(0,w.X)(z)}),l=d.register,c=d.handleSubmit,u=d.reset,m=d.formState.errors,p=q().addContact;return(0,F.jsx)(x.Z,{theme:B,children:(0,F.jsx)(j.Z,{component:"div",maxWidth:"xs",sx:I,children:(0,F.jsxs)(v.Z,{component:"form",onSubmit:c((function(e){p(e),u(),s&&o()})),noValidate:!0,sx:{mt:1},children:[(0,F.jsx)(g.Z,(0,h.Z)({error:"matches"===(null===(n=m.name)||void 0===n?void 0:n.type),margin:"normal",required:!0,fullWidth:!0,type:"text",label:"Name",autoComplete:"name",autoFocus:!0,helperText:null===(t=m.name)||void 0===t?void 0:t.message},l("name",{required:"Name is required"}))),(0,F.jsx)(g.Z,(0,h.Z)({error:"matches"===(null===(r=m.number)||void 0===r?void 0:r.type),margin:"normal",required:!0,fullWidth:!0,label:"Phone number",type:"text",autoComplete:"current-number",helperText:null===(a=m.number)||void 0===a?void 0:a.message},l("number",{required:"Number is required"}))),(0,F.jsx)(Z.ZP,{container:!0,justifyContent:"center",children:(0,F.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:i})})]})})})},N=t(168),R=t(7691),M=t(6856),T=R.ZP.a(r||(r=(0,N.Z)(["\n  text-align: start;\n  font-weight: 600;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),V=R.ZP.h4(a||(a=(0,N.Z)(["\n  /* color: #1976d2; */\n"]))),$=R.ZP.p(i||(i=(0,N.Z)(["\n  color: \tseagreen;\n  font-weight: 500;\n  margin-top: 4px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    margin-left: 12px;\n  }\n"]))),E=R.ZP.button(o||(o=(0,N.Z)(["\n  color: inherit;\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n\n  &:hover,\n  &:focus {\n    color: \tseagreen;\n    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  }\n"]))),J=(R.ZP.div(s||(s=(0,N.Z)(["\n  display: flex;\n"]))),(0,R.ZP)(M.ZkW)(d||(d=(0,N.Z)(["\n  color: inherit;\n  width: 24px;\n  height: 24px;\n"])))),K=function(e){var n=e.contact,t=n.id,r=n.name,a=n.number,i=(0,_.I0)(),o=(0,_.v9)(A.lP.V);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(T,{href:"tel: ".concat(a),children:[(0,F.jsx)(V,{children:r}),(0,F.jsx)($,{children:a})]}),(0,F.jsx)(E,{type:"button",disabled:o,onClick:function(){return i(A.mh.del(t))},children:(0,F.jsx)(J,{})})]})},X=function(e){var n=e.filter,t=e.setFilter;return(0,F.jsx)(g.Z,{margin:"normal",fullWidth:!0,type:"text",label:"Search name",value:n,onChange:function(e){return t(e.target.value)},sx:{m:0,p:0,borderRadius:10}})},D=R.ZP.div(l||(l=(0,N.Z)(["\n  margin-top: 16px;\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n    margin-top: 16px;\n    width: 440px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-top: 24px;\n    width: 720px;\n  }\n"]))),G=(R.ZP.h3(c||(c=(0,N.Z)([""]))),R.ZP.ul(u||(u=(0,N.Z)(["\n  height: 80vh;\n  margin-top: 12px;\n  overflow-y: scroll;\n"])))),H=R.ZP.li(m||(m=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  padding-left: 12px;\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.05);\n\n  & + & {\n    margin-top: 8px;\n  }\n"]))),O=function(){var e=q(),n=e.filter,t=e.contacts,r=e.setFilter,a=e.filteredContacts,i=t.length>0,o=(0,_.I0)();return(0,P.useEffect)((function(){o(A.mh.fetch())}),[o]),i&&(0,F.jsxs)(D,{children:[(0,F.jsx)(X,{setFilter:r,filter:n}),(0,F.jsx)(G,{children:a.map((function(e){return(0,F.jsx)(H,{children:(0,F.jsx)(K,{contact:e})},e.id)}))})]})},Q=t(890),U=t(15),Y=(0,p.Z)({breakpoints:{values:{mobile:0,tablet:768,desktop:1200}}}),ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{mobile:300,tablet:420},bgcolor:"background.paper",border:"2px solid \tseagreen",borderRadius:2,boxShadow:24};function ne(e){var n=e.textBtn,t=(0,P.useState)(!1),r=(0,y.Z)(t,2),a=r[0],i=r[1],o=function(){return i(!1)};return(0,F.jsxs)(x.Z,{theme:Y,children:[(0,F.jsx)(f.Z,{onClick:function(){return i(!0)},variant:"outlined",size:"small",sx:{mt:2},children:n}),(0,F.jsx)(U.Z,{open:a,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{p:0,m:0},children:(0,F.jsxs)(v.Z,{sx:ee,children:[(0,F.jsx)(Q.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{textAlign:"center"},children:n}),(0,F.jsx)(L,{handleClose:o,textBtn:n})]})})]})}var te=t(3118);function re(){var e=window.screen.width<768;return(0,F.jsx)(te.or,{children:(0,F.jsx)(te.W2,{children:(0,F.jsxs)(te.lM,{children:[e?(0,F.jsx)(ne,{textBtn:"Add contact"}):(0,F.jsx)(L,{textBtn:"Add contact"}),(0,F.jsx)(O,{})]})})})}}}]);
//# sourceMappingURL=29.c02a3914.chunk.js.map