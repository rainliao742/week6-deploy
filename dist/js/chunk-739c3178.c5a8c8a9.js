(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739c3178"],{"057f":function(t,e,n){var r=n("c6b6"),c=n("fc6a"),o=n("241c").f,i=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?u(t):o(c(t))}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),o=n("2d00"),i=c("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),c=n("23cb"),o=n("07fa"),i=n("8418"),a=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=o(t),s=c(e,r),f=c(void 0===n?r:n,r),d=a(u(f-s,0)),l=0;s<f;s++,l++)i(d,l,t[s]);return d.length=l,d}},"6be2":function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}},c=r();e["a"]=c},"746f":function(t,e,n){var r=n("428f"),c=n("1a2d"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},7901:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c=Object(r["h"])("h1",{class:"text-center my-3 p-2"},"產品內頁",-1),o={class:"container-fluid"},i={class:"text-center py-3"},a={class:"container"},u={class:"card"},s={class:"row align-items-center"},f={class:"col-sm-6"},d=["src"],l={class:"col-sm-6"},b={class:"pe-5"},p={class:"badge bg-primary rounded-pill"},h={key:0,class:"h5"},v={key:1},g={class:"h6"},m={class:"h5"},y={class:"input-group"},O=["disabled"],j=Object(r["h"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),w=[j],S=Object(r["j"])(" 加入購物車"),x=Object(r["h"])("div",null,null,-1);function L(t,e,n,j,L,P){return Object(r["y"])(),Object(r["g"])(r["a"],null,[c,Object(r["h"])("div",o,[Object(r["h"])("h2",i,Object(r["L"])(L.product.title),1),Object(r["h"])("div",a,[Object(r["h"])("div",u,[Object(r["h"])("div",s,[Object(r["h"])("div",f,[Object(r["h"])("img",{class:"w-100",style:{height:"400px","object-fit":"cover"},src:L.product.imageUrl,alt:""},null,8,d)]),Object(r["h"])("div",l,[Object(r["h"])("div",b,[Object(r["h"])("h5",null,Object(r["L"])(L.product.title),1),Object(r["h"])("span",p,Object(r["L"])(L.product.category),1),Object(r["h"])("p",null,"商品描述："+Object(r["L"])(L.product.description),1),Object(r["h"])("p",null,"商品內容："+Object(r["L"])(L.product.content),1),L.product.price===L.product.origin_price?(Object(r["y"])(),Object(r["g"])("div",h,Object(r["L"])(L.product.price)+" 元",1)):(Object(r["y"])(),Object(r["g"])("div",v,[Object(r["h"])("del",g,"原價 "+Object(r["L"])(L.product.origin_price)+" 元",1),Object(r["h"])("div",m,"現在只要 "+Object(r["L"])(L.product.price)+" 元",1)])),Object(r["h"])("div",y,[Object(r["V"])(Object(r["h"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return L.qty=t}),min:"1"},null,512),[[r["P"],L.qty]]),Object(r["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return P.addToCart(L.product.id,L.qty)}),disabled:L.isLoadingItem===L.product.id},[Object(r["V"])(Object(r["h"])("span",null,w,512),[[r["Q"],L.isLoadingItem===L.product.id]]),S],8,O)])]),x])])])])])],64)}n("99af");var P=n("6be2"),k={data:function(){return{product:{},isLoadingItem:"",qty:1}},methods:{getProduct:function(){var t=this;console.log(this.$route);var e=this.$route.params.id;this.$http("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/product/").concat(e)).then((function(e){t.product=e.data.product})).catch((function(t){alert(t.data.message)}))},addToCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r={product_id:t,qty:n};this.isLoadingItem=t,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("rainliao","/cart"),{data:r}).then((function(t){e.isLoadingItem="",e.getProduct(),P["a"].emit("get-cart"),alert(t.data.message)})).catch((function(t){alert(t.data.message)}))}},mounted:function(){this.getProduct()}},I=n("6b0d"),$=n.n(I);const q=$()(k,[["render",L]]);e["default"]=q},8418:function(t,e,n){"use strict";var r=n("a04b"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,o(0,n)):t[i]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d039"),i=n("e8b5"),a=n("861d"),u=n("7b0b"),s=n("07fa"),f=n("8418"),d=n("65f0"),l=n("1dde"),b=n("b622"),p=n("2d00"),h=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=c.TypeError,y=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=l("concat"),j=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},w=!y||!O;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,c,o,i=u(this),a=d(i,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],j(o)){if(c=s(o),l+c>v)throw m(g);for(n=0;n<c;n++,l++)n in o&&f(a,l,o[n])}else{if(l>=v)throw m(g);f(a,l++,o)}return a.length=l,a}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d066"),i=n("2ba4"),a=n("c65b"),u=n("e330"),s=n("c430"),f=n("83ab"),d=n("4930"),l=n("d039"),b=n("1a2d"),p=n("e8b5"),h=n("1626"),v=n("861d"),g=n("3a9b"),m=n("d9b5"),y=n("825a"),O=n("7b0b"),j=n("fc6a"),w=n("a04b"),S=n("577e"),x=n("5c6c"),L=n("7c73"),P=n("df75"),k=n("241c"),I=n("057f"),$=n("7418"),q=n("06cf"),C=n("9bf2"),N=n("37e8"),E=n("d1e7"),J=n("f36a"),T=n("6eeb"),M=n("5692"),V=n("f772"),_=n("d012"),A=n("90e3"),F=n("b622"),Q=n("e538"),U=n("746f"),B=n("d44e"),D=n("69f3"),W=n("b727").forEach,z=V("hidden"),G="Symbol",H="prototype",K=F("toPrimitive"),R=D.set,X=D.getterFor(G),Y=Object[H],Z=c.Symbol,tt=Z&&Z[H],et=c.TypeError,nt=c.QObject,rt=o("JSON","stringify"),ct=q.f,ot=C.f,it=I.f,at=E.f,ut=u([].push),st=M("symbols"),ft=M("op-symbols"),dt=M("string-to-symbol-registry"),lt=M("symbol-to-string-registry"),bt=M("wks"),pt=!nt||!nt[H]||!nt[H].findChild,ht=f&&l((function(){return 7!=L(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=ct(Y,e);r&&delete Y[e],ot(t,e,n),r&&t!==Y&&ot(Y,e,r)}:ot,vt=function(t,e){var n=st[t]=L(tt);return R(n,{type:G,tag:t,description:e}),f||(n.description=e),n},gt=function(t,e,n){t===Y&&gt(ft,e,n),y(t);var r=w(e);return y(n),b(st,r)?(n.enumerable?(b(t,z)&&t[z][r]&&(t[z][r]=!1),n=L(n,{enumerable:x(0,!1)})):(b(t,z)||ot(t,z,x(1,{})),t[z][r]=!0),ht(t,r,n)):ot(t,r,n)},mt=function(t,e){y(t);var n=j(e),r=P(n).concat(St(n));return W(r,(function(e){f&&!a(Ot,n,e)||gt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?L(t):mt(L(t),e)},Ot=function(t){var e=w(t),n=a(at,this,e);return!(this===Y&&b(st,e)&&!b(ft,e))&&(!(n||!b(this,e)||!b(st,e)||b(this,z)&&this[z][e])||n)},jt=function(t,e){var n=j(t),r=w(e);if(n!==Y||!b(st,r)||b(ft,r)){var c=ct(n,r);return!c||!b(st,r)||b(n,z)&&n[z][r]||(c.enumerable=!0),c}},wt=function(t){var e=it(j(t)),n=[];return W(e,(function(t){b(st,t)||b(_,t)||ut(n,t)})),n},St=function(t){var e=t===Y,n=it(e?ft:j(t)),r=[];return W(n,(function(t){!b(st,t)||e&&!b(Y,t)||ut(r,st[t])})),r};if(d||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,e=A(t),n=function(t){this===Y&&a(n,ft,t),b(this,z)&&b(this[z],e)&&(this[z][e]=!1),ht(this,e,x(1,t))};return f&&pt&&ht(Y,e,{configurable:!0,set:n}),vt(e,t)},tt=Z[H],T(tt,"toString",(function(){return X(this).tag})),T(Z,"withoutSetter",(function(t){return vt(A(t),t)})),E.f=Ot,C.f=gt,N.f=mt,q.f=jt,k.f=I.f=wt,$.f=St,Q.f=function(t){return vt(F(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||T(Y,"propertyIsEnumerable",Ot,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),W(P(bt),(function(t){U(t)})),r({target:G,stat:!0,forced:!d},{for:function(t){var e=S(t);if(b(dt,e))return dt[e];var n=Z(e);return dt[e]=n,lt[n]=e,n},keyFor:function(t){if(!m(t))throw et(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!f},{create:yt,defineProperty:gt,defineProperties:mt,getOwnPropertyDescriptor:jt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:St}),r({target:"Object",stat:!0,forced:l((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(O(t))}}),rt){var xt=!d||l((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:xt},{stringify:function(t,e,n){var r=J(arguments),c=e;if((v(e)||void 0!==t)&&!m(t))return p(e)||(e=function(t,e){if(h(c)&&(e=a(c,this,t,e)),!m(e))return e}),r[1]=e,i(rt,null,r)}})}if(!tt[K]){var Lt=tt.valueOf;T(tt,K,(function(t){return a(Lt,this)}))}B(Z,G),_[z]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),o=n("da84"),i=n("e330"),a=n("1a2d"),u=n("1626"),s=n("3a9b"),f=n("577e"),d=n("9bf2").f,l=n("e893"),b=o.Symbol,p=b&&b.prototype;if(c&&u(b)&&(!("description"in p)||void 0!==b().description)){var h={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(h[e]=!0),e};l(v,b),v.prototype=p,p.constructor=v;var g="Symbol(test)"==String(b("test")),m=i(p.toString),y=i(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=i("".replace),w=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=y(this),e=m(t);if(a(h,t))return"";var n=g?w(e,7,-1):j(e,O,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-739c3178.c5a8c8a9.js.map