(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(61)},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(25),r=n.n(c),l=n(12),i=n(2),s=n(3),d=n(5),u=n(4),p=n(6),h=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header-container"},o.a.createElement("h1",{className:"header-title"},"Simple Todo App"))}}]),t}(o.a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,c=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChange(a)}}),o.a.createElement("span",{className:n?"completed":null},c),o.a.createElement("button",{className:"btn-style",onClick:function(){return e.props.deleteTodo(a)}}," X "))}}]),t}(o.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("ul",null,this.props.todos.map(function(t){return o.a.createElement(m,{key:t.id,todo:t,handleChange:e.props.handleChange,deleteTodo:e.props.deleteTodo})}))))}}]),t}(o.a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.onInputChange=function(e){n.setState({title:e.target.value})},n.addTodo=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"div-form-container"},o.a.createElement("form",{className:"form-container",onSubmit:this.addTodo},o.a.createElement("input",{type:"text",placeholder:"Add Todo...",className:"input-text",value:this.state.title,onChange:this.onInputChange}),o.a.createElement("input",{type:"submit",value:"Add",className:"input-submit"})))}}]),t}(o.a.Component),j=(n(34),n(9)),O=n.n(j),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.handleCheckboxChange=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.deleteTodo=function(e){O.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){var t={title:e,completed:!1};O.a.post("https://jsonplaceholder.typicode.com/todos",t).then(function(e){console.log(e.data),n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodo:this.addTodo}),o.a.createElement(f,{todos:this.state.todos,handleChange:this.handleCheckboxChange,deleteTodo:this.deleteTodo}))}}]),t}(o.a.Component);n(59);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(v,null))}},[[26,2,1]]]);
//# sourceMappingURL=main.eccf72dd.chunk.js.map