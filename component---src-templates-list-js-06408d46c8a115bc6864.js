(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(157),c=a.n(l),o=a(55),m=a(161),u=function(e){var t=e.posts;return s.a.createElement("section",{className:"post-list"},t.map(function(e){var t=e.node;return s.a.createElement("div",{key:t.fields.slug,className:"post box"},s.a.createElement("h2",{className:"subtitle is-3 is-marginless"},t.frontmatter.title),s.a.createElement("p",{class:"is-size-6 has-text-grey-light"},t.frontmatter.date),s.a.createElement("p",null,s.a.createElement("em",{class:"has-text-grey"},t.excerpt)),s.a.createElement(o.Link,{to:t.fields.slug},"Read More »"))}))};a.d(t,"pageQuery",function(){return p});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=e.excerpt,n=this.props.pageContext.children;return s.a.createElement(m.a,{location:this.props.location,title:t},s.a.createElement(c.a,{htmlAttribute:{lang:"en"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+t}),s.a.createElement("section",{className:"section page-content"},s.a.createElement("div",{class:"container article-header has-text-centered"},s.a.createElement("h1",{class:"title is-1"},e.frontmatter.title),s.a.createElement("hr",null)),s.a.createElement("main",{className:"container content-container"},s.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",null),s.a.createElement(u,{posts:n}))))},t}(s.a.Component),p=(t.default=d,"3617246214")},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Van's Blog",footer:'Built with <a href="https://forestry.io" target="_blank">Forestry.io</a>'}}}}},159:function(e){e.exports={data:{allMainMenuJson:{edges:[{node:{id:"49154e18-7783-556a-a57f-cf8e204f0991",type:"internal",url:"/",title:"Home"}},{node:{id:"3021c627-f8a5-579c-b0fd-da20e75ff322",type:"internal",url:"/posts",title:"Blog"}}]}}}},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAASAAAAEgAE8EBb4AAAAB3RJTUUH4gwTFzQvGZZ+AgAABGRJREFUWMPtls9vVFUUxz9nZtpOf1AiEA3hh4IlaSkU6WvBiujCGHfuXKi0RZp5byiwYGn8AdHEpQukdt4bVJgi8U8w/kiMCAmlb4DWtiaotCQGfzVYQ8swnZnjYu6Q6fQH4gYXvav37rvvfD/nnHvPufCAhyz20W52+xFagb8931l+P4btFm8C1RUgVzzffmKhdYEHHYH/N4BAuXksP9z2fuV8a5ztsUP3K7pv10fLHCv2+qIAdot7VIVt5jU8la6+UgrhtMTOa0CORazY5/cjHkplhhV5z7Fi3rwA0ebeoyhHSqY3TaWrBwsQB3YcX6kqTflIyQuOFfviXuKHdh6rDaUyI8A6M1UfmGfnH8lJ4MgCNuqm0tVDtuVW9fQfnAhkc1uAKQBFnndaYl8tJn4nUz4CrCX/w3nXjz4zC8Bpjb2NcNS8KnDTPEwr8qeZfxwYtC23KnZ5/1geQqcBVOW5iOV9Pccpy11+J1MxCrLGROycl3R2zaoDdqv7FjneKYiLapci+wt1IBUMbwxnUz8Aq8yan4Amz3emDzZ9sCFdVv49UJU3qmdVZBtKrcJVgRpgtfl2zvWjT886BY7lvVksrir73GT0k2IvEv2dE6lguF6RPwqREHTIttyq44OHrgUD2a3AtEnHbpRa4+GmgrjCd8XiAIFoi/uGou+aoKvkdG88aZ8059AY0QrbcqsS/Z0TuVSgXpTfjdBGhKH2pkR178Xun+FOE5KHKB2Kno37zm4Ae3ffarvFPQ4gEcu7IOgOVVFFOk4kI6fzeYufhFxnkY3rQIPnO9NdjSdWBMPZUeBhA3rtdrpya99gx1RXc09dMBAcRKWyqKB86w04zwIcbutdM5UOjALLFPlSQAMRK/6NoDHPd84ARCzvlKAdc7xQGRfRzfNCKGO3M5Vb+gY7pvY0n6irkuwoEAJ+8Xxn7V3xmeAoqssMWN+cZhRp9hIi2r5IdRxTaPR8Z/qVrZ8+VFNxaxTlEZOS8bLUzJYPhw/cKm1G3a0967K54IgiNWZtIu7bnVJSA/oQ9hh/Z1C5gbBeYVrgKuQroypjKeNtKQRwPZTKNGYqy8YLAKAvogwj5MVFEvEBu3NWKbZbisWZkRxPAb8ZrzOeb28HkgAiPFZZlhpqb0pUnxl69WY6U14P/Gr+XZ8NB4dBQ8aRWpSRgrigd8XvAkSavQRaEJd0MJ1tcy9FB0qCr57vWIr0G8MbwmWp4e7GnpqTl1/7C6gHuWHCu75wDIENCNVmD33m+tHOWccwYnmnCjlXJM2MtvUOdfsL7YG4b+8ELhhvHs1UhIa6G3tqPN+ZBG0Absx/DCURT9ovz23HauggTYCd3qCTvFdT8XznSYQBk45VUq4rzfwk0ABaCnEq7tud894H4snISwgfh0LZ1vhF+/K/bavegNMqwul0oGxzz6WD40VwkyANQMp4/qPnO3sXshMCUW+Arv9ym3EHnPYFIjRpW7HbIGEx3XLpTrgEsASwBLAEsND4B1wc45Cf4zM4AAAAAElFTkSuQmCC"},161:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),s=a(1),l=a.n(s),c=a(157),o=a.n(c),m=a(55),u=a(7),d=a.n(u),p=a(159),A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarOpen:!1},t.toggleNavState=function(){t.setState({navbarOpen:!t.state.navbarOpen})},t}return d()(t,e),t.prototype.render=function(){return i.a.createElement("nav",{className:"navbar is-primary main-navigation",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(m.Link,{className:"navbar-item has-text-weight-semibold",to:"/"},this.props.siteTitle),i.a.createElement("span",{onClick:this.toggleNavState,role:"button",className:this.state.navbarOpen?"navbar-burger burger is-active":"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"mainMenu"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"mainMenu",className:this.state.navbarOpen?"navbar-menu is-active":"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(m.StaticQuery,{query:"3498285522",render:function(e){return e.allMainMenuJson.edges.map(function(e){return"internal"===e.node.type?i.a.createElement(m.Link,{key:e.node.id,to:e.node.url,className:"navbar-item"},e.node.title):i.a.createElement("a",{key:e.node.id,className:"navbar-item",target:"_blank",rel:"noopener noreferrer",href:e.node.url},e.node.title)})},data:p}))))},t}(r.Component),g=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"site-header"},i.a.createElement("section",{className:"navigation"},i.a.createElement(A,{siteTitle:t})))};g.propTypes={siteTitle:l.a.string},g.defaultProps={siteTitle:""};var f=g,v=function(e){var t=e.content;return i.a.createElement("footer",{className:"section site-footer"},i.a.createElement("div",{className:"container has-text-centered",dangerouslySetInnerHTML:{__html:t}}))},h=(a(162),a(160)),E=a.n(h),b=function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"1728262030",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+E.a}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),t,i.a.createElement(v,{content:e.site.siteMetadata.footer}))},data:n})};b.propTypes={children:l.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-templates-list-js-06408d46c8a115bc6864.js.map