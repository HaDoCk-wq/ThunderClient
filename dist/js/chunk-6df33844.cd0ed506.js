(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6df33844"],{4074:function(e,t,r){"use strict";r("676e")},"676e":function(e,t,r){},7803:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),n=Object(a["G"])("data-v-11dbfd1e");Object(a["u"])("data-v-11dbfd1e");var o={class:"center-container"},i={class:"child"},s={class:"login-container p-3 shadow"},c=Object(a["i"])("h1",null,"Register",-1),l=Object(a["i"])("br",null,null,-1),d={class:"form-floating mb-3"},u=Object(a["i"])("label",{for:"email"},"Email address",-1),b={class:"form-floating mb-3"},p=Object(a["i"])("label",{for:"name"},"Name",-1),m={class:"form-floating mb-3"},f=Object(a["i"])("label",{for:"description"},"Description",-1),j={class:"form-floating mb-3"},O=Object(a["i"])("label",{for:"password"},"Password",-1),g={class:"form-floating mb-3"},h=Object(a["i"])("label",{for:"passwordRepeat"},"Repeat password",-1),w={class:"d-flex flex-wrap"},v=Object(a["h"])("Do you have an acount?"),y=Object(a["i"])("div",{class:"flex-fill"},null,-1),x=Object(a["i"])("button",{type:"submit",class:"btn btn-primary"}," Register ",-1),R={key:0,class:"alert alert-danger d-flex mt-2",role:"alert"},k=Object(a["i"])("strong",null,"Error: ",-1),E=Object(a["i"])("div",{class:"flex-fill"},null,-1),S={key:0,class:"progress-line border-progress-line mt-2"};Object(a["s"])();var C=n((function(e,t,r,C,U,q){var V=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["f"])("div",o,[Object(a["i"])("div",i,[Object(a["i"])("div",s,[c,l,Object(a["i"])("form",{onSubmit:t[6]||(t[6]=Object(a["F"])((function(){return q.submit&&q.submit.apply(q,arguments)}),["prevent"]))},[Object(a["i"])("div",d,[Object(a["E"])(Object(a["i"])("input",{type:"email",class:"form-control input-mesage",id:"email",placeholder:"name@example.com",autofocus:"",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return U.email=e})},null,512),[[a["C"],U.email]]),u]),Object(a["i"])("div",b,[Object(a["E"])(Object(a["i"])("input",{type:"text",class:"form-control input-mesage",id:"name",placeholder:"name@example.com",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return U.name=e})},null,512),[[a["C"],U.name]]),p]),Object(a["i"])("div",m,[Object(a["E"])(Object(a["i"])("input",{type:"text",class:"form-control input-mesage",id:"description",placeholder:"name@example.com",required:"",maxlength:"23","onUpdate:modelValue":t[3]||(t[3]=function(e){return U.desc=e})},null,512),[[a["C"],U.desc]]),f]),Object(a["i"])("div",j,[Object(a["E"])(Object(a["i"])("input",{type:"password",class:"form-control input-mesage",id:"password",placeholder:"password",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return U.password=e})},null,512),[[a["C"],U.password]]),O]),Object(a["i"])("div",g,[Object(a["E"])(Object(a["i"])("input",{type:"password",class:"form-control input-mesage",id:"passwordRepeat",placeholder:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return U.passwordRepeat=e}),required:""},null,512),[[a["C"],U.passwordRepeat]]),h]),Object(a["i"])("div",w,[Object(a["i"])(V,{to:"/login"},{default:n((function(){return[v]})),_:1}),y,x])],32),Object(a["i"])(a["b"],{name:"slide-fade"},{default:n((function(){return[U.error?(Object(a["r"])(),Object(a["f"])("div",R,[Object(a["i"])("div",null,[k,Object(a["h"])(" "+Object(a["A"])(U.errorString),1)]),E,Object(a["i"])("button",{type:"button",class:"btn-close",onClick:t[7]||(t[7]=function(e){return U.error=!1})})])):Object(a["g"])("",!0)]})),_:1}),U.loading?(Object(a["r"])(),Object(a["f"])("div",S)):Object(a["g"])("",!0)])])])})),U={data:function(){return{name:"",password:"",passwordRepeat:"",email:"",desc:"",error:!1,errorString:"",loading:!1}},methods:{submit:function(){var e=this;this.loading=!0,this.axios.post(this.$store.getters["api"]+"/user/register",{name:this.name,password:this.password,email:this.email,desc:this.desc,passwordRepeat:this.passwordRepeat,image:"default.png"}).then((function(t){t.data.authorized?(window.localStorage.setItem("token",t.data.token),console.log(t.data.user),e.$store.commit("setUser",t.data.user),e.$router.push("/channels/chat")):(e.error=!0,e.errorString=t.data.errorString)})).catch((function(e){console.log(e)})).then((function(){e.loading=!1}))}}};r("4074");U.render=C,U.__scopeId="data-v-11dbfd1e";t["default"]=U},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-6df33844.cd0ed506.js.map