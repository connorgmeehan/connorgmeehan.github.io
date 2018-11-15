(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);a(48);var n=a(0),r=a.n(n),l=a(228),o=a(229),i=a(230),c=a(146),m=a(7),s=a.n(m),d=(a(26),a(78),a(49),a(226),a(76),a(77),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.width,a=e.height,n=e.data,l=t/(n[0].data.length+2),o=n[0].data.map(function(e){return 0});n.forEach(function(e){e.data.forEach(function(e,t){o[t]+=e})});var i=Math.max.apply(Math,o),c=new Array(4);c.fill(0);var m={yMin:.001,yMax:1.2*i,xMin:0,xMax:t},s=function(e,t,a,n,r){return(e-t)*(r-n)/(a-t)+n},d=t,p=a,u=function(e){return function(t,a,n){var r=e(n[a-1],n[a-2],t),l=e(t,n[a-1],n[a+1],!0),o=(n.length,"");return"C "+r[0]+","+r[1]+" "+l[0]+","+l[1]+" "+t[0]+","+t[1]+o}}(function(e,t){return function(a,n,r,l){var o=e(n||a,r||a),i=o.angle+(l?Math.PI:0),c=o.length*t;return[a[0]+Math.cos(i)*c,a[1]+Math.sin(i)*c]}}(function(e,t){var a=t[0]-e[0],n=t[1]-e[1];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}},.15));return r.a.createElement("svg",{width:t,height:a},r.a.createElement("g",{className:"graph-path-legend"},["","Backend","Frontend","Design Thinking","User Research",""].map(function(e,t){return""!==e?r.a.createElement("g",{key:"graph-legend-"+t},r.a.createElement("line",{x1:l*t,y1:0,x2:l*t,y2:a-30}),r.a.createElement("text",{className:"graph-path-legend-element",x:l*t,y:a-10},e)):r.a.createElement(r.a.Fragment,null," ")})),n.map(function(e,o){var i=function(e,t,a,n){return e.map(function(e){return[s(e[0],n.xMin,n.xMax,0,t),s(e[1],n.yMin,n.yMax,0,a)]})}([[0,0],[0,0],[1*l,c[0]],[2*l,c[1]],[3*l,c[2]],[4*l,c[3]],[5*l-2,0],[6*l,-.01],[7*l,-.02],[6*l,-.01],[5*l-2,0],[4*l,c[3]+e.data[3]],[3*l,c[2]+e.data[2]],[2*l,c[1]+e.data[1]],[1*l,c[0]+e.data[0]],[0,0],[0,0]],d,p,m);e.data.forEach(function(e,t){c[t]+=e});var h=e.data.reduce(function(e,t,a){return e+t*a*l}),f=e.data.map(function(e,t){return e*l*t});h=f.indexOf(Math.max.apply(Math,f))/(f.length+1)*t,console.log(h);var g=e.data.indexOf(Math.max.apply(Math,e.data));console.log("Text index: "+g+" pos "+h);var E=e.slug.replace(/\\/g,"");return r.a.createElement("g",{key:"graph-path-"+o,className:"graph-path"},r.a.createElement("path",{d:function(e,t,a){return e.reduce(function(e,a,n,r){return 0===n?"M "+r[r.length-1][0]+",0 L "+a[0]+",0 L "+a[0]+","+a[1]:e+" "+t(a,n,r)},"")}(i,u),fill:"rgb("+255/n.length*o+")",href:"#"+E}),r.a.createElement("text",{x:h,y:(c[g]-e.data[g]/2)*a,className:"graph-path-text"},e.title))}))},t}(n.Component)),p={height:"600px",backgroundColor:"white",profileGraph:{float:"left",position:"absolute"},profileMe:{marginTop:"200px"}},u=[{slug:"koalajoey",title:"Joey & Koala",data:[0,.1,.4,.5]},{slug:"presence",title:"Presence",data:[.05,.45,.25,0]},{slug:"examplework",title:"Gamma Flow",data:[.1,.35,.25,.05]}],h=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var a=t.prototype;return a.render=function(){return r.a.createElement(o.a,{className:"profile",style:p,id:"profile"},r.a.createElement(i.a,{md:6,smHidden:!0,xsHidden:!0},r.a.createElement("div",{className:"profile-graph",style:p.profileGraph},r.a.createElement(d,{width:1200,height:500,data:u}))),r.a.createElement(i.a,{md:4,mdOffset:8,style:p.profileMe,className:"profile-me"},r.a.createElement("h2",null,"Hello, I am Connor"),r.a.createElement("p",{className:"emphasize"},"Design Computing student, trying to be a creative technologist, who wants  to build stuff that people find cool and then one day die."),r.a.createElement("p",{className:"emphasize"},r.a.createElement("a",{href:"mailto:connorgmeehan23@gmail.com"},"contactez-moi: connorgmeehan23@gmail.com"))))},a.componentDidMount=function(){},t}(n.Component),f=a(145),g={cardWork:{marginTop:"75px",borderRadius:"3px",image:{height:"400px",display:"flex",alignItems:"center",justifyContent:"center"},date:{opacity:"0.8"},description:{marginTop:0}}},E=function(e){var t,a=e.slug,n=e.frontmatter,l=a.replace(/\//g,"");return console.log("Frontmatter video: "+n.video+" or "+n.image),n.video?t=r.a.createElement("video",{src:""+n.video,autoPlay:!0,muted:!0,loop:!0,width:"100%"}):n.image&&(t=r.a.createElement("img",{src:""+n.image})),r.a.createElement(i.a,{style:g.cardWork,md:6},r.a.createElement(f.Link,{to:a,className:"post-preview"},r.a.createElement(o.a,{id:l},r.a.createElement(i.a,{md:12},r.a.createElement("div",{className:"of-cover no-overflow",style:g.cardWork.image},t)),r.a.createElement(i.a,{md:12},r.a.createElement("div",{className:"post-list"},r.a.createElement("h2",null,n.title),r.a.createElement("p",{style:g.cardWork.date},n.date),r.a.createElement("p",{style:g.cardWork.description,className:"emphasize"},n.shortdescription))))))};a.d(t,"listQuery",function(){return v});var y={works:{marginTop:"50px",title:{textAlign:"center",fontSize:"4em"}}},v=(t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(c.a,null,r.a.createElement(h,{style:y.profile}),r.a.createElement(l.a,{style:y.works,id:"works"},r.a.createElement(o.a,null,r.a.createElement("h2",{style:y.works.title},"Works")),r.a.createElement(o.a,null,r.a.createElement(i.a,{md:10,mdOffset:1},t.edges.map(function(e,t){var a=e.node;return r.a.createElement(E,{key:t,frontmatter:a.frontmatter,slug:a.fields.slug})})))))},"437604863")},226:function(e,t,a){var n=a(6);n(n.P,"Array",{fill:a(227)}),a(50)("fill")},227:function(e,t,a){"use strict";var n=a(28),r=a(75),l=a(27);e.exports=function(e){for(var t=n(this),a=l(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,m=void 0===c?a:r(c,a);m>i;)t[i++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-index-js-61b9381be69490378809.js.map