(this["webpackJsonpmerger-arb-react"]=this["webpackJsonpmerger-arb-react"]||[]).push([[0],{32:function(e,n,t){},33:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(9),c=t.n(r),s=(t(32),t(24)),l=t(20),o=t(21),b=t(12),j=t(27),m=t(25),u=(t.p,t(33),t(26)),h=t(6),p=t(42),d=t(44),g=t(43),O=t(5);var x=function(e){Object(j.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).afterSubmission=function(e){var n,t,i,r,c;e.preventDefault(),n=a.state.price,t=a.state.initial_margin,i=a.state.maintenance_margin,r=a.state.type,c=function(e){var n=e.marginCallPrice;n&&a.setState((function(e){return{price_history:[n].concat(Object(s.a)(e.price_history))}}))},fetch("https://merger-arb.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation { \n        marginCallPrice(\n          price: ".concat(n," \n          initial_margin: ").concat(t," \n          maintenance_margin: ").concat(i," \n          type: ").concat(r,"\n        ) \n        {\n          id \n          price \n          initial_margin \n          maintenance_margin \n          type \n          margin_call_price \n        } \n      }")})}).then((function(e){return e.json()})).then((function(e){return c(e.data)})).catch(console.error)},a.state={price:0,initial_margin:0,maintenance_margin:0,type:"LONG",price_history:[]},a.afterSubmission=a.afterSubmission.bind(Object(b.a)(a)),a}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(p.a,{fluid:!0,children:[Object(O.jsxs)(h.a,{className:"mb-3",onSubmit:this.afterSubmission,children:[Object(O.jsxs)(h.a.Group,{className:"mb-3",children:[Object(O.jsx)(h.a.Label,{children:"Price:"}),Object(O.jsx)(h.a.Control,{type:"number",step:"any",placeholder:"Amount in dollars",onChange:function(n){e.setState({price:n.target.value})}}),Object(O.jsx)(h.a.Text,{children:"Please enter a non-negative value."})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3",children:[Object(O.jsx)(h.a.Label,{children:"Initial Margin:"}),Object(O.jsx)(h.a.Control,{type:"number",step:"any",placeholder:"Decimal value between 0 and 1",onChange:function(n){e.setState({initial_margin:n.target.value})}}),Object(O.jsx)(h.a.Text,{children:'e.g. "0.5" implies a initial margin of 50%'})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3",children:[Object(O.jsx)(h.a.Label,{children:"Maintenance Margin:"}),Object(O.jsx)(h.a.Control,{type:"number",step:"any",placeholder:"Decimal value between 0 and 1",onChange:function(n){e.setState({maintenance_margin:n.target.value})}}),Object(O.jsx)(h.a.Text,{children:"Note: Maintenance margin cannot be higher than initial margin."})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3",children:[Object(O.jsx)(h.a.Label,{children:"Type:"}),Object(O.jsxs)(h.a.Control,{as:"select",onChange:function(n){e.setState({type:n.target.value})},children:[Object(O.jsx)("option",{value:"LONG",children:"Long"}),Object(O.jsx)("option",{value:"SHORT",children:"Short"})]})]}),Object(O.jsx)(h.a.Group,{className:"mb-6",children:Object(O.jsx)(u.a,{variant:"primary",type:"submit",children:"Submit"})})]}),Object(O.jsx)(d.a,{className:"mb-3",children:this.state.price_history.map((function(e){return Object(O.jsxs)(d.a.Item,{id:e.id,children:["Margin Call Price: $",e.margin_call_price.toFixed(2)]})}))})]})}}]),t}(i.a.Component);var f=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(g.a,{bg:"dark",variant:"dark",children:Object(O.jsx)(p.a,{children:Object(O.jsx)(g.a.Brand,{children:"Merger-Arb"})})}),Object(O.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))};t(38);c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.534a7b2a.chunk.js.map