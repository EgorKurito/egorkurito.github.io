(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});var n=a(158),r=a(9),i=(a(0),a(163)),o=a(161),c=Object(n.a)("div",{target:"e1v73u8h0"})({name:"hu0znc",styles:"margin:0 auto;max-width:860px;padding:1.45rem 1.0875rem;"}),s=Object(n.a)("h1",{target:"e1v73u8h1"})({name:"1q2z4uj",styles:"display:inline;border-radius:1em 0 1em 0;"}),l=Object(n.a)("h3",{target:"e1v73u8h2"})({name:"yg8mco",styles:"margin-top:10px;color:#606060;font-size:1.1rem;"}),u=Object(n.a)("div",{target:"e1v73u8h3"})({name:"1rcp9ax",styles:'a{text-decoration:none;position:relative;}a::after{content:"";position:absolute;z-index:-1;top:70%;left:-0.1px;right:-0.1px;bottom:0;transition:top 0.1s ease-in-out;background-color:rgba(255,250,150,0.8);}a:hover::after{top:0;}'});e.default=function(t){var e=t.data.markdownRemark;return Object(r.b)(i.a,null,Object(r.b)(o.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),Object(r.b)(c,null,Object(r.b)(s,null,e.frontmatter.title),Object(r.b)(l,null,e.frontmatter.date),Object(r.b)(u,{dangerouslySetInnerHTML:{__html:e.html}})))};var d="4264190148"},156:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(9),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(36),l=a.n(s);a.d(e,"a",function(){return l.a});a(157);var u=i.a.createContext({}),d=function(t){return Object(n.b)(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(t,e,a){var n;t.exports=(n=a(160))&&n.default||n},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Egor Kurito"}}}}},160:function(t,e,a){"use strict";a.r(e);a(58);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(59),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},161:function(t,e,a){"use strict";var n=a(9),r=a(162),i=(a(0),a(4)),o=a.n(i),c=a(164),s=a.n(c);function l(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,c=t.title,l=r.data.site,u=e||l.siteMetadata.description;return Object(n.b)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Egor Kurito",description:"Just do it!",author:"@egorkurito"}}}}},163:function(t,e,a){"use strict";var n=a(158),r=a(9),i=a(159),o=a(0),c=a.n(o),s=a(4),l=a.n(s),u=a(156),d=Object(n.a)("div",{target:"e2i1wbd0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),b=Object(n.a)(u.a,{target:"e2i1wbd1"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),p=Object(n.a)(b,{target:"e2i1wbd2"})({name:"qbubgm",styles:"margin-left:0;"}),m=Object(n.a)("header",{target:"e2i1wbd3"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"}),g=function(t){var e=t.siteTitle;return Object(r.b)(m,null,Object(r.b)(d,null,Object(r.b)("p",null,Object(r.b)(p,{to:"/"},e),Object(r.b)(b,{to:"/blog"},"Blog"),Object(r.b)(b,{to:"/about"},"About"))))};g.propTypes={siteTitle:l.a.string},g.defaultProps={siteTitle:""};var f=g,y=(a(149),Object(n.a)("div",{target:"e1ehxxwc0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),j=Object(n.a)("footer",{target:"e1ehxxwc1"})({name:"1l4w6pd",styles:"display:flex;justify-content:center;"}),h=function(t){var e=t.children;return Object(r.b)(u.b,{query:"755544856",render:function(t){return Object(r.b)(c.a.Fragment,null,Object(r.b)(f,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(y,null,Object(r.b)("main",null,e),Object(r.b)(j,null,"© ",(new Date).getFullYear(),", Egor Kurito"," ")))},data:i})};h.propTypes={children:l.a.node.isRequired};e.a=h}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-983cc228da3cca56d0b5.js.map