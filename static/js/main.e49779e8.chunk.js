(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=n(11),l=n(1),u=n(2),h=n(5),d=n(3),m=n(6),b=n(9),s=n(4),p=n(10),g=n.n(p),x=(n(20),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={width:"",height:"",background:""},n.handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=Object(b.a)({},n.state,{id:g()()});n.props.addBoxProperty(t),n.setState({width:"",height:"",background:""})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"width"},"Width"),r.a.createElement("input",{type:"text",name:"width",id:"width",value:this.state.width,onChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"height"},"Height"),r.a.createElement("input",{type:"text",name:"height",id:"height",value:this.state.height,onChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"background"},"Background"),r.a.createElement("input",{type:"text",name:"background",id:"background",value:this.state.background,onChange:this.handleChange,required:!0})),r.a.createElement("button",null,"Add Box"))}}]),t}(a.Component)),v=(n(21),function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{style:{width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),background:"".concat(e.bg),margin:"20px",boxShadow:"2px 1.75px 3px rgba(0,0,0,0.4)"}}),r.a.createElement("button",{onClick:e.removeBox},"Remove Box"))}),f=(n(22),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={boxProperty:[]},n.addBoxProperty=function(e){n.setState({boxProperty:[].concat(Object(c.a)(n.state.boxProperty),[e])})},n.removeBox=function(e){n.setState({boxProperty:n.state.boxProperty.filter(function(t){return t.id!==e})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.boxProperty.map(function(t){return r.a.createElement(v,{key:t.id,width:t.width,height:t.height,bg:t.background,removeBox:function(){return e.removeBox(t.id)}})});return r.a.createElement("div",{className:"boxList"},r.a.createElement("header",null,r.a.createElement("h2",null,"Color Box Generator")),r.a.createElement(x,{addBoxProperty:this.addBoxProperty}),r.a.createElement("div",{className:"box_container"},t))}}]),t}(a.Component)),E=(n(23),function(){return r.a.createElement("div",null,r.a.createElement(f,null))});i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e49779e8.chunk.js.map