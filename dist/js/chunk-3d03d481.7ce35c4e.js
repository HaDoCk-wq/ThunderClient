(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d03d481"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),c=n("2d00"),o=i("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),c=n("1d80"),o=n("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(c(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"315a":function(t,e,n){"use strict";n("b69c")},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),o=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4c2e":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=Object(r["G"])("data-v-04ccbd3a");Object(r["u"])("data-v-04ccbd3a");var c={class:"h-100",style:{overflow:"auto"}},o=Object(r["i"])("br",null,null,-1),a={class:"p-3 pb-0 sticky-top sticky-topbar"},s={class:"d-flex"},u=Object(r["i"])("div",{class:"flex-fill top-bar"},null,-1),f={class:"p-3"};Object(r["s"])();var l=i((function(t,e,n,i,l,d){var b=Object(r["y"])("FriendsRequest"),h=Object(r["y"])("SearchFriends");return Object(r["r"])(),Object(r["f"])("div",c,[o,Object(r["i"])("div",a,[Object(r["i"])("div",s,[Object(r["i"])("button",{class:["request"==l.selected?"selected":"","button-nav"],onClick:e[1]||(e[1]=function(t){return l.selected="request"})}," Friend request ",2),Object(r["i"])("button",{class:["search"==l.selected?"selected":"","button-nav"],onClick:e[2]||(e[2]=function(t){return l.selected="search"})}," Search ",2),u])]),Object(r["i"])("div",f,["request"==l.selected?(Object(r["r"])(),Object(r["f"])(b,{key:0})):Object(r["g"])("",!0),"search"==l.selected?(Object(r["r"])(),Object(r["f"])(h,{key:1})):Object(r["g"])("",!0)])])})),d=(n("b0c0"),Object(r["G"])("data-v-3acdb7c6"));Object(r["u"])("data-v-3acdb7c6");var b={class:"row"},h={class:"user-card p-2 d-flex flex-wrap"},v={class:"user-name"},p={class:"text-muted"},g=Object(r["i"])("div",{class:"flex-fill"},null,-1),O={class:"pt-4 d-flex"},y=Object(r["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[Object(r["i"])("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"})],-1),j=Object(r["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-check2",viewBox:"0 0 16 16"},[Object(r["i"])("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})],-1),m={key:0};Object(r["s"])();var w=d((function(t,e,n,i,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["i"])("div",b,[Object(r["i"])(r["c"],{name:"slide-fade"},{default:d((function(){return[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.friendRequests,(function(e,n){return Object(r["r"])(),Object(r["f"])("div",{key:n,class:"mb-2 p-1 col-xl-6 col-lg-12"},[Object(r["i"])("div",h,[Object(r["i"])("img",{src:t.$store.getters["api"]+"/profiles/"+e.from.image,alt:"",height:"90",width:"90",class:"rounded-circle me-4"},null,8,["src"]),Object(r["i"])("div",null,[Object(r["i"])("strong",v,Object(r["A"])(e.from.name),1),Object(r["i"])("div",null,Object(r["A"])(e.from.desc),1),Object(r["i"])("div",p,Object(r["A"])(e.from._id),1)]),g,Object(r["i"])("div",O,[Object(r["i"])("button",{class:"btn btn-danger p-0 boto-selection me-2",onClick:function(t){return o.deleteFriendRequest(e._id,n)}},[y],8,["onClick"]),Object(r["i"])("button",{class:"btn btn-success p-0 boto-selection me-4",onClick:function(t){return o.acceptFriendRequest(e._id,n)}},[j],8,["onClick"])])])])})),128))]})),_:1})]),Object(r["i"])(r["b"],{name:"fade"},{default:d((function(){return[0==c.friendRequests.length&&c.dataLoaded?(Object(r["r"])(),Object(r["f"])("h2",m," You dont have any friend request ")):Object(r["g"])("",!0)]})),_:1})])})),x=(n("a434"),{data:function(){return{friendRequests:[],dataLoaded:!1}},methods:{deleteFriendRequest:function(t,e){this.friendRequests.splice(e,1),this.axios.post(this.$store.getters["api"]+"/FriendRequest/refuse",{request:t},{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(t){console.log(t)})).catch((function(t){console.error(t)})).then((function(){}))},acceptFriendRequest:function(t,e){this.friendRequests.splice(e,1),this.axios.post(this.$store.getters["api"]+"/FriendRequest/accept",{request:t},{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(t){console.log(t)})).catch((function(t){console.error(t)})).then((function(){}))}},mounted:function(){var t=this;this.axios.get(this.$store.getters["api"]+"/FriendRequest/",{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(e){t.friendRequests=e.data.FriendRequest})).catch((function(t){console.error(t)})).then((function(){t.dataLoaded=!0}))}});n("913b");x.render=w,x.__scopeId="data-v-3acdb7c6";var S=x,A=Object(r["G"])("data-v-7996bc49");Object(r["u"])("data-v-7996bc49");var k=Object(r["i"])("h3",null,"Search",-1),q={class:"d-flex"},R=Object(r["i"])("br",null,null,-1),F={class:"row"},_={class:"user-card p-2 d-flex flex-wrap"},C={class:"user-name"},$={class:"text-muted"},E=Object(r["i"])("div",{class:"flex-fill"},null,-1),L={class:"pt-4"},P={key:1,class:"btn btn-primary w-100",disabled:""};Object(r["s"])();var B=A((function(t,e,n,i,c,o){return Object(r["r"])(),Object(r["f"])("div",null,[k,Object(r["i"])("div",q,[Object(r["E"])(Object(r["i"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.filterString=t}),type:"text",class:"input-mesage flex-fill me-2",placeholder:"Username"},null,512),[[r["C"],c.filterString]])]),R,Object(r["i"])("div",F,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.filteredList,(function(e,n){return Object(r["r"])(),Object(r["f"])("div",{key:n,class:"mb-2 p-1 col-xl-6 col-lg-12"},[Object(r["i"])("div",_,[Object(r["i"])("img",{src:t.$store.getters["api"]+"/profiles/"+e.image,alt:"",height:"90",width:"90",class:"rounded-circle me-4"},null,8,["src"]),Object(r["i"])("div",null,[Object(r["i"])("strong",C,Object(r["A"])(e.name),1),Object(r["i"])("div",null,Object(r["A"])(e.desc),1),Object(r["i"])("div",$,Object(r["A"])(e._id),1)]),E,Object(r["i"])("div",L,[e.petitionSended?(Object(r["r"])(),Object(r["f"])("button",P," Petition sended ")):(Object(r["r"])(),Object(r["f"])("button",{key:0,onClick:function(t){o.sendFriendRequest(e._id),e.petitionSended=!0},class:"btn btn-primary"}," Send friend request ",8,["onClick"]))])])])})),128))])])}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("a630");function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t,e){if(t){if("string"===typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function M(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=z(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){a=!0,c=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(a)throw c}}}}n("caad"),n("2532");var T={data:function(){return{filterString:"",users:[]}},methods:{sendFriendRequest:function(t){console.log(t),this.axios.post(this.$store.getters["api"]+"/FriendRequest/send",{idUser:t},{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(t){console.log(t)})).catch((function(t){console.error(t)})).then((function(){}))}},computed:{filteredList:function(){if(""==this.filterString)return this.users;var t,e=[],n=M(this.users);try{for(n.s();!(t=n.n()).done;){var r=t.value;(r.name.includes(this.filterString)||r._id.includes(this.filterString))&&e.push(r)}}catch(i){n.e(i)}finally{n.f()}return e}},mounted:function(){var t=this;this.axios.get(this.$store.getters["api"]+"/user/all",{headers:{Authorization:"Bearer ".concat(window.localStorage.token)}}).then((function(e){t.users=e.data.users})).catch((function(t){console.error(t)})).then((function(){}))}};n("315a");T.render=B,T.__scopeId="data-v-7996bc49";var N=T,J={components:{FriendsRequest:S,SearchFriends:N},data:function(){return{selected:"request"}},mounted:function(){this.$store.commit("navigateTo","friends"),this.$store.commit("setNavbar",!1)}};n("9c8c");J.render=l,J.__scopeId="data-v-04ccbd3a";e["default"]=J},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),c=n("9bdd"),o=n("e95a"),a=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,l,d,b,h=i(t),v="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,O=void 0!==g,y=u(h),j=0;if(O&&(g=r(g,p>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=a(h.length),n=new v(e);e>j;j++)b=O?g(h[j],j):h[j],s(n,j,b);else for(l=y.call(h),d=l.next,n=new v;!(f=d.call(l)).done;j++)b=O?c(l,g,[f.value,j],!0):f.value,s(n,j,b);return n.length=j,n}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),c=n("b622"),o=c("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,c(0,n)):t[o]=n}},"84c1":function(t,e,n){},"913b":function(t,e,n){"use strict";n("b40c")},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,c){try{return c?e(r(n)[0],n[1]):e(n)}catch(o){throw i(t),o}}},"9c8c":function(t,e,n){"use strict";n("84c1")},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),c=n("a691"),o=n("50c4"),a=n("7b0b"),s=n("65f0"),u=n("8418"),f=n("1dde"),l=f("splice"),d=Math.max,b=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var n,r,f,l,p,g,O=a(this),y=o(O.length),j=i(t,y),m=arguments.length;if(0===m?n=r=0:1===m?(n=0,r=y-j):(n=m-2,r=b(d(c(e),0),y-j)),y+n-r>h)throw TypeError(v);for(f=s(O,r),l=0;l<r;l++)p=j+l,p in O&&u(f,l,O[p]);if(f.length=r,n<r){for(l=j;l<y-r;l++)p=l+r,g=l+n,p in O?O[g]=O[p]:delete O[g];for(l=y;l>y-r+n;l--)delete O[l-1]}else if(n>r)for(l=y-r;l>j;l--)p=l+r-1,g=l+n-1,p in O?O[g]=O[p]:delete O[g];for(l=0;l<n;l++)O[l+j]=arguments[l+2];return O.length=y-r+n,f}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),o=n("c430"),a=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),h=n("825a"),v=n("7b0b"),p=n("fc6a"),g=n("c04e"),O=n("5c6c"),y=n("7c73"),j=n("df75"),m=n("241c"),w=n("057f"),x=n("7418"),S=n("06cf"),A=n("9bf2"),k=n("d1e7"),q=n("9112"),R=n("6eeb"),F=n("5692"),_=n("f772"),C=n("d012"),$=n("90e3"),E=n("b622"),L=n("e538"),P=n("746f"),B=n("d44e"),I=n("69f3"),z=n("b727").forEach,M=_("hidden"),T="Symbol",N="prototype",J=E("toPrimitive"),U=I.set,G=I.getterFor(T),D=Object[N],Q=i.Symbol,V=c("JSON","stringify"),W=S.f,Y=A.f,H=w.f,K=k.f,X=F("symbols"),Z=F("op-symbols"),tt=F("string-to-symbol-registry"),et=F("symbol-to-string-registry"),nt=F("wks"),rt=i.QObject,it=!rt||!rt[N]||!rt[N].findChild,ct=a&&f((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(D,e);r&&delete D[e],Y(t,e,n),r&&t!==D&&Y(D,e,r)}:Y,ot=function(t,e){var n=X[t]=y(Q[N]);return U(n,{type:T,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,n){t===D&&st(Z,e,n),h(t);var r=g(e,!0);return h(n),l(X,r)?(n.enumerable?(l(t,M)&&t[M][r]&&(t[M][r]=!1),n=y(n,{enumerable:O(0,!1)})):(l(t,M)||Y(t,M,O(1,{})),t[M][r]=!0),ct(t,r,n)):Y(t,r,n)},ut=function(t,e){h(t);var n=p(e),r=j(n).concat(ht(n));return z(r,(function(e){a&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=g(t,!0),n=K.call(this,e);return!(this===D&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,M)&&this[M][e])||n)},dt=function(t,e){var n=p(t),r=g(e,!0);if(n!==D||!l(X,r)||l(Z,r)){var i=W(n,r);return!i||!l(X,r)||l(n,M)&&n[M][r]||(i.enumerable=!0),i}},bt=function(t){var e=H(p(t)),n=[];return z(e,(function(t){l(X,t)||l(C,t)||n.push(t)})),n},ht=function(t){var e=t===D,n=H(e?Z:p(t)),r=[];return z(n,(function(t){!l(X,t)||e&&!l(D,t)||r.push(X[t])})),r};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===D&&n.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),ct(this,e,O(1,t))};return a&&it&&ct(D,e,{configurable:!0,set:n}),ot(e,t)},R(Q[N],"toString",(function(){return G(this).tag})),R(Q,"withoutSetter",(function(t){return ot($(t),t)})),k.f=lt,A.f=st,S.f=dt,m.f=w.f=bt,x.f=ht,L.f=function(t){return ot(E(t),t)},a&&(Y(Q[N],"description",{configurable:!0,get:function(){return G(this).description}}),o||R(D,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),z(j(nt),(function(t){P(t)})),r({target:T,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),V){var vt=!s||f((function(){var t=Q();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,V.apply(null,i)}})}Q[N][J]||q(Q[N],J,Q[N].valueOf),B(Q,T),C[M]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),c=n("1c7e"),o=!c((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,c=Function.prototype,o=c.toString,a=/^\s*function ([^ (]*)/,s="name";r&&!(s in c)&&i(c,s,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},b40c:function(t,e,n){},b69c:function(t,e,n){},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),c=n("7b0b"),o=n("50c4"),a=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(h,v,p,g){for(var O,y,j=c(h),m=i(j),w=r(v,p,3),x=o(m.length),S=0,A=g||a,k=e?A(h,x):n||d?A(h,0):void 0;x>S;S++)if((b||S in m)&&(O=m[S],y=w(O,S,j),t))if(e)k[S]=y;else if(y)switch(t){case 3:return!0;case 5:return O;case 6:return S;case 2:s.call(k,O)}else switch(t){case 4:return!1;case 7:s.call(k,O)}return l?-1:u||f?f:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,c=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),c=n("da84"),o=n("5135"),a=n("861d"),s=n("9bf2").f,u=n("e893"),f=c.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var b=d.prototype=f.prototype;b.constructor=d;var h=b.toString,v="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(o(l,t))return"";var n=v?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),o=n("23cb"),a=n("50c4"),s=n("fc6a"),u=n("8418"),f=n("b622"),l=n("1dde"),d=l("slice"),b=f("species"),h=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,f,l=s(this),d=a(l.length),p=o(t,d),g=o(void 0===e?d:e,d);if(c(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(l,p,g);for(r=new(void 0===n?Array:n)(v(g-p,0)),f=0;p<g;p++,f++)p in l&&u(r,f,l[p]);return r.length=f,r}})}}]);
//# sourceMappingURL=chunk-3d03d481.7ce35c4e.js.map