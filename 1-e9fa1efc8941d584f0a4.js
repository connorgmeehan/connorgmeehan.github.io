(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(163),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(45);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){"use strict";var a=n(175),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(176),u=n.n(c),s=n(145),m=(n(188),n(189),n(7)),d=n.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"custom-nav-shadow",id:"top"}),i.a.createElement("div",{className:"custom-nav"},i.a.createElement("div",{className:"custom-nav-brand"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("h1",null,e))),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/#top"},"me")),i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/#works"},"works")))))},t}(i.a.Component),f=n(228),h=n(229),E=n(230),y=function(e){var t=e.children;e.showProgress;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=EB+Garamond|Open+Sans:400",rel:"stylesheet"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t),i.a.createElement("div",{className:"footer"},i.a.createElement(f.a,null,i.a.createElement(h.a,null,i.a.createElement(E.a,{md:4},i.a.createElement("h6",null,"Links"),i.a.createElement(s.Link,{to:"/"},"Home")),i.a.createElement(E.a,{md:4}),i.a.createElement(E.a,{md:4})))))},data:a})};y.propTypes={children:l.a.node.isRequired};t.a=y},163:function(e,t,n){var a;e.exports=(a=n(187))&&a.default||a},175:function(e){e.exports={data:{site:{siteMetadata:{title:"connorgm.com"}}}}},187:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(70),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},189:function(e,t,n){}}]);
//# sourceMappingURL=1-e9fa1efc8941d584f0a4.js.map