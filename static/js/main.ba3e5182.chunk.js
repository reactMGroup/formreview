(this.webpackJsonpformreview=this.webpackJsonpformreview||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(14),n(15),n(1)),l=n(2),s=n(5),u=n(4),p=n(3),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("p",null,"Success"),r.a.createElement("input",{onClick:function(){return e.props.processNext("form")},type:"button",value:"Done"}))}}]),n}(n(0).Component),d=n(6),f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).whenClicked=a.whenClicked.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"whenClicked",value:function(e){this.props.whenClicked(!e,this.props.fieldID)}},{key:"render",value:function(){var e=this;return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onInput:function(t){return e.whenClicked(t.target.checked)},checked:this.props.value}),this.props.caption)}}]),n}(a.Component);f.defaultProps={caption:"define caption",value:!0,whenClicked:function(e){console.log("New value ".concat(e))}};var m=f,v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("select",{value:this.props.value,onInput:function(t){return e.props.fieldChanged(t.target.value,e.props.fieldID)},id:this.props.fieldID},r.a.createElement("option",{hidden:!0,disabled:!0,value:!0}," -- select an option -- "),this.props.options.map((function(e){return r.a.createElement("option",{key:e},e)})))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("label",{htmlFor:this.props.fieldID},this.props.placeholder,r.a.createElement("input",{value:this.props.value,onInput:function(t){return e.props.fieldChanged(t.target.value,e.props.fieldID)},id:this.props.fieldID,type:"text",placeholder:this.props.placeholder}))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("label",{htmlFor:this.props.fieldID},this.props.label,r.a.createElement("textarea",{value:this.props.value,onInput:function(t){return e.props.fieldChanged(t.target.value,e.props.fieldID)},id:this.props.fieldID,name:this.props.fieldID,rows:"4",cols:"50"}))}}]),n}(a.Component),j="txtName",E="trmsacnd",g=["Developer","Designer","Product"],C=function(e,t){var n=localStorage.getItem(e);return n||(void 0!==t?t:"")},k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a,r;return Object(o.a)(this,n),(r=t.call(this,e)).state=(a={},Object(d.a)(a,j,C(j)),Object(d.a)(a,"txtSurName",C("txtSurName")),Object(d.a)(a,"occupation",C("occupation")),Object(d.a)(a,"freetext",C("freetext")),Object(d.a)(a,E,"true"===C(E,"false")),Object(d.a)(a,"salesAgree","true"===C("salesAgree","true")),a),r.fieldChanged=r.fieldChanged.bind(Object(s.a)(r)),r.submitForm=r.submitForm.bind(Object(s.a)(r)),r}return Object(l.a)(n,[{key:"fieldChanged",value:function(e,t){console.log("new value ".concat(e)),localStorage.setItem([t],e),this.setState(Object(d.a)({},t,e),this.showStateiInConsole())}},{key:"submitForm",value:function(e){e.preventDefault();var t=["Name ".concat(this.state[j]," ").concat(this.state.txtSurName),"Occupation ".concat(this.state.occupation),"Free text ".concat(this.state.freetext),"Agree to Terms and Conditions ".concat(this.state[E]),"Get subscription ".concat(this.state.salesAgree)];this.props.setPreview(t),this.props.processNext("preview")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement(b,{fieldChanged:this.fieldChanged,fieldID:j,placeholder:"Name",value:this.state[j]}),r.a.createElement(b,{fieldChanged:this.fieldChanged,fieldID:"txtSurName",placeholder:"Surname",value:this.state.txtSurName}),r.a.createElement("br",null),r.a.createElement(v,{fieldChanged:this.fieldChanged,fieldID:"occupation",options:g,value:this.state.occupation}),r.a.createElement("br",null),r.a.createElement(O,{fieldChanged:this.fieldChanged,label:"Free text",fieldID:"freetext",value:this.state.freetext}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m,{whenClicked:this.fieldChanged,fieldID:E,value:this.state[E],caption:"I agree to terms and conditons."}),r.a.createElement("br",null),r.a.createElement(m,{whenClicked:this.fieldChanged,fieldID:"salesAgree",value:this.state.salesAgree,caption:"I want to receive sales materials."}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Next"}))}},{key:"showStateiInConsole",value:function(){var e=this;Object.keys(this.state).forEach((function(t){return console.log("".concat(t,": ").concat(e.state[t]))}))}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.data),r.a.createElement("section",null,r.a.createElement("ul",null,this.props.data.map((function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement("input",{onClick:function(){return e.props.processNext("form")},type:"button",value:"Back to the From"}),r.a.createElement("input",{onClick:function(){return e.props.processNext("end")},type:"button",value:"Submit"}))}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).next=e.next.bind(Object(s.a)(e)),e.setPreviewState=e.setPreviewState.bind(Object(s.a)(e)),e.state={current:"form",previewState:[]},e.stateMachine={form:function(){return r.a.createElement(k,{processNext:e.next,setPreview:e.setPreviewState})},preview:function(){return r.a.createElement(w,{processNext:e.next,data:e.state.previewState})},end:function(){return r.a.createElement(h,{processNext:e.next})}},e}return Object(l.a)(n,[{key:"next",value:function(e){this.setState({current:e})}},{key:"setPreviewState",value:function(e){this.setState({previewState:e})}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h3",null,"Survey"),this.stateMachine[this.state.current]())}}]),n}(a.Component);var y=function(){return r.a.createElement("section",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ba3e5182.chunk.js.map