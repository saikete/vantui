(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"276":function(e,t,n){"use strict";n.d(t,"a",(function(){return Page}));var c=n(275),r=n(274),s=n(26),i=(n(25),n(277),n(38));function Page(e){var t=e.title,n=e.children;return Object(i.jsxs)(r.l,{"className":"demo-page","children":[Object(i.jsxs)(r.l,{"className":"demo-nav","children":[Object(i.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(i.jsxs)(r.l,{"className":"demo-nav__title","children":[t," "]})]}),n]})}},"277":function(e,t,n){},"278":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(3),r=n.n(c),s=n(6),i=n.n(s),a=n(15),d=n.n(a),l=n(16),j=n.n(l),h=n(274),o=n(25),x=(n(279),n(38)),u=function(e){d()(Index,e);var t=j()(Index);function Index(){return r()(this,Index),t.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(x.jsxs)(h.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(x.jsx)(h.l,{"className":"demo-block__title","children":n}),c?Object(x.jsx)(h.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(o.Component)},"279":function(e,t,n){},"281":function(e,t,n){var c=n(17),r=n(14),s=n(70),i=r("species");e.exports=function(e){return s>=51||!c((function(){var t=[];return(t.constructor={})[i]=function(){return{"foo":1}},1!==t[e](Boolean).foo}))}},"283":function(e,t,n){"use strict";var c=n(33),r=n(292).map;c({"target":"Array","proto":!0,"forced":!n(281)("map")},{"map":function map(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"685":function(e,t,n){},"737":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(3),r=n.n(c),s=n(6),i=n.n(s),a=n(21),d=n.n(a),l=n(15),j=n.n(l),h=n(16),o=n.n(h),x=n(8),u=n.n(x),b=(n(283),n(274)),O=n(25),p=n(275),f=n(276),m=n(278),g=(n(685),n(38)),v=function(e){j()(Index,e);var t=o()(Index);function Index(){var e;return r()(this,Index),e=t.call(this),u()(d()(e),"state",{"fits":["contain","cover","fill","none","scale-down","widthFix","heightFix"],"src":"https://img.yzcdn.cn/vant/cat.jpeg"}),e}return i()(Index,[{"key":"render","value":function render(){var e=this.state,t=e.src,n=e.fits;return Object(g.jsx)(f.a,{"title":"Image 图片","children":Object(g.jsxs)(g.Fragment,{"children":[Object(g.jsx)(m.a,{"title":"基础用法","padding":!0,"children":Object(g.jsx)(p.Q,{"children":Object(g.jsx)(p.C,{"width":"100","height":"100","src":t})})}),Object(g.jsx)(m.a,{"title":"填充模式","padding":!0,"children":Object(g.jsx)(p.Q,{"gutter":"20","children":n.map((function(e){return Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"fit":e,"width":"100%","height":"27vw","src":t}),Object(g.jsx)(b.l,{"className":"text","children":e})]},e.fit)}))})}),Object(g.jsx)(m.a,{"title":"圆形图片","padding":!0,"children":Object(g.jsx)(p.Q,{"gutter":"20","children":n.map((function(e){return Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"round":!0,"fit":e,"width":"100%","height":"27vw","src":t}),Object(g.jsx)(b.l,{"className":"text","children":e})]},e.fit)}))})}),Object(g.jsx)(m.a,{"title":"加载中提示","padding":!0,"children":Object(g.jsxs)(p.Q,{"gutter":"20","children":[Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"width":"100%","height":"27vw"}),Object(g.jsx)(b.l,{"className":"text","children":"默认提示"})]}),Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"width":"100%","height":"27vw","renderLoading":Object(g.jsx)(g.Fragment,{"children":Object(g.jsx)(p.F,{"type":"spinner","size":"20","vertical":!0})})}),Object(g.jsx)(b.l,{"className":"text","children":"自定义提示"})]})]})}),Object(g.jsx)(m.a,{"title":"加载失败提示","padding":!0,"children":Object(g.jsxs)(p.Q,{"gutter":"20","children":[Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"width":"100%","height":"27vw","src":"x"}),Object(g.jsx)(b.l,{"className":"text","children":"默认提示"})]}),Object(g.jsxs)(p.k,{"span":"8","children":[Object(g.jsx)(p.C,{"width":"100%","height":"27vw","src":"x","renderError":Object(g.jsx)(g.Fragment,{"children":Object(g.jsx)(b.i,{"children":"加载失败"})})}),Object(g.jsx)(b.l,{"className":"text","children":"自定义提示"})]})]})})]})})}}]),Index}(O.Component)}}]);