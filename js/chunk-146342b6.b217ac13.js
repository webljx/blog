(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-146342b6"],{3527:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"tang_detail"},[i("div",{staticClass:"more",on:{click:t.goHome}},[t._v("查看更多")]),i("div",{staticClass:"name"},[t._v(t._s(t.query.name))]),i("div",{staticClass:"author"},[i("span",[t._v("--- "+t._s(t.query.author))])]),i("div",{staticClass:"content"},[i("div",{domProps:{innerHTML:t._s(t.detail.content)}})]),i("div",{staticClass:"explanation"},[i("div",{staticClass:"title"},[t._v("名词解析：")]),i("div",{domProps:{innerHTML:t._s(t.detail.explanation)}})]),i("div",{staticClass:"explanation"},[i("div",{staticClass:"title"},[t._v("诗词赏析：")]),i("div",{domProps:{innerHTML:t._s(t.detail.appreciation)}})])])},n=[],s=(i("a15b"),i("ac1f"),i("466d"),i("57d2")),r={name:"tang_detail",data:function(){return{query:"",detail:""}},methods:{getData:function(){var t=this,a=this,i={detailid:this.query.detailid};this.$store.dispatch("getData/getTangshiDetail",i).then((function(i){console.log(i),t.detail=i.data,Object(s["a"])({url:a.$route.fullPath,title:a.detail.title,desc:a.detail.appreciation.match(/[\u4e00-\u9fa5]/g).join(""),imgUrl:"https://img.it610.com/image/info10/cea8417a946c47ccabbbecad8ec442cd.jpg"})}))},goHome:function(){this.$router.push({path:"/home",query:""})}},created:function(){},activated:function(){this.query=this.$route.query,this.getData()}},o=r,c=(i("5620"),i("2877")),l=Object(c["a"])(o,e,n,!1,null,"8e736050",null);a["default"]=l.exports},"466d":function(t,a,i){"use strict";var e=i("d784"),n=i("825a"),s=i("50c4"),r=i("1d80"),o=i("8aa5"),c=i("14c3");e("match",1,(function(t,a,i){return[function(a){var i=r(this),e=void 0==a?void 0:a[t];return void 0!==e?e.call(a,i):new RegExp(a)[t](String(i))},function(t){var e=i(a,t,this);if(e.done)return e.value;var r=n(t),l=String(this);if(!r.global)return c(r,l);var d=r.unicode;r.lastIndex=0;var u,v=[],h=0;while(null!==(u=c(r,l))){var f=String(u[0]);v[h]=f,""===f&&(r.lastIndex=o(l,s(r.lastIndex),d)),h++}return 0===h?null:v}]}))},5620:function(t,a,i){"use strict";var e=i("906e"),n=i.n(e);n.a},"906e":function(t,a,i){},a15b:function(t,a,i){"use strict";var e=i("23e7"),n=i("44ad"),s=i("fc6a"),r=i("a640"),o=[].join,c=n!=Object,l=r("join",",");e({target:"Array",proto:!0,forced:c||!l},{join:function(t){return o.call(s(this),void 0===t?",":t)}})}}]);
//# sourceMappingURL=chunk-146342b6.b217ac13.js.map