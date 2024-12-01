import{bD as O,h as x,o as n,i as _,g as s,c as p,w as o,d as i,_ as v,s as $,bE as L,j as R,bF as I,by as A,bz as k,bG as C,r as U,b as e,a as t,q as r,k as b,bH as j,n as N,p as S,aQ as E}from"./entry.043f00b6.js";import{$ as z}from"./message.dc291a30.js";import{u as V}from"./vue.f36acd1f.78506e28.js";const w=""+globalThis.__publicAssetsURL("icons/logo.svg"),B={class:"flex space-x-3"},y={__name:"AuthButtons",props:{},setup(f){const a=O(),l=x(()=>a.getters.isUserAuthorized),m=()=>{I()},g=()=>{try{let d=JSON.parse(localStorage.getItem("aToken"));const c=localStorage.getItem("aUserRole");c in d&&delete d[c],localStorage.setItem("aToken",JSON.stringify(d)),localStorage.removeItem("activeLoginTabMeta"),localStorage.removeItem("activeLoginTabOG"),localStorage.removeItem("aUserRole"),localStorage.removeItem("aTokenProfile"),localStorage.removeItem("aUserData"),localStorage.removeItem("aLastVisit"),localStorage.removeItem("aPageReturned"),localStorage.removeItem("aNotifications"),localStorage.removeItem("aNotificationsAdmin"),localStorage.removeItem("aLoginAdminUnderUser")}catch(d){console.error(d),console.error("CLEAR LOCAL STORAGE ERROR")}finally{console.log("finally clear local storage")}},u=async()=>{if((await z("Вы уверены, что хотите выйти из личного кабинета?")).ok)try{if((await A.logOut()).message.success)if(await a.dispatch("setIsUserAuthorized",!1),localStorage.getItem("activeLoginTab")==="esia"){g();try{const h="https://esia.gosuslugi.ru/idp/ext/Logout?client_id=VDELO&redirect_url=https://vdelo.pro",T="https://esia-portal1.test.gosuslugi.ru/idp/ext/Logout?client_id=VDELO&redirect_url=https://dev.vdelo.pro";window.location=/^vdelo.pro$/.test(window.location.hostname)?h:T}catch(h){console.error("ERROR LOGOUT"),console.error(h),k("Произошла ошибка при выходе из системы. Попробуйте позже или обратитесь в техподдержку.")}}else g(),C("Вы успешно вышли из личного кабинета");else k("Не удалось выйти из личного кабинета")}catch(c){console.log("ERROR LOGOUT USER"),console.log(c),k("Произошла ошибка при выходе из личного кабинета")}};return(d,c)=>(n(),_("div",B,[s(l)?(n(),p(s(v),{key:0,class:"px-8 lg:px-4 2xl:px-8",onClick:m},{default:o(()=>[i(" мой кабинет ")]),_:1})):(n(),p(s(v),{key:1,class:"px-8 lg:px-4 2xl:px-8",onClick:c[0]||(c[0]=h=>s($).emit("login",s(L).LOGIN))},{default:o(()=>[i(" войти ")]),_:1})),s(l)?R("",!0):(n(),p(s(v),{key:2,class:"px-8 lg:px-4 2xl:px-8",type:"secondary",onClick:c[1]||(c[1]=h=>s($).emit("login",s(L).REGISTRATION))},{default:o(()=>[i(" начать ")]),_:1})),s(l)?(n(),p(s(v),{key:3,class:"px-8 lg:px-4 2xl:px-8",type:"secondary",onClick:u},{default:o(()=>[i(" выйти ")]),_:1})):R("",!0)]))}};const G={class:"container hidden lg:block"},D={class:"row justify-between items-center"},P=e("img",{class:"header__logo",src:w,alt:"Логотип ВДело",width:"87"},null,-1),H={class:"header__navigation"},F={class:"flex justify-between"},J={class:"header__item ml-7"},M={class:"header__item ml-7"},q={class:"header__item ml-7"},Q={class:"header__item ml-7"},Y=e("div",{class:"block sm:hidden text-white lowercase flex flex-col justify-center text-sm",style:{height:"60px"}},[e("a",{href:"http://cbr.ru/finorg/foinfo/?ogrn=1206600030647",class:"w-fit",target:"_blank"},[e("span",null,[i(" Мы в реестре "),e("span",{class:"font-bold"},"Банка России")])])],-1),K=e("div",null,null,-1),W=e("div",null,null,-1),X=e("div",null,null,-1),Z=[K,W,X],ee=e("img",{class:"header__logo w-7/12 m-auto",src:w,alt:"Логотип ВДело"},null,-1),te={class:"header__navigation"},se={class:"flex flex-col items-center space-y-4"},oe={class:"header__item"},ae={class:"header__item"},le={class:"header__item"},ie={class:"header__item"},re={class:"flex justify-center"},ne={__name:"TheHeader",setup(f){const a=U(!1),l=()=>{a.value=!a.value,a.value?(document.body.classList.add("overflow-hidden"),document.body.classList.add("lg:overflow-visible")):(document.body.classList.remove("overflow-hidden"),document.body.classList.remove("lg:overflow-visible"))};return(m,g)=>(n(),_("header",{class:b(["header w-full lg:bg-white bg-black",{"bg-black":!a.value,"bg-white":a.value}])},[e("div",G,[e("div",D,[t(r,{to:"/"},{default:o(()=>[P]),_:1}),e("nav",H,[e("ul",F,[e("li",J,[t(r,{to:"/investor"},{default:o(()=>[i(" Инвесторам ")]),_:1})]),e("li",M,[t(r,{to:"/loaner"},{default:o(()=>[i(" Заёмщикам ")]),_:1})]),e("li",q,[t(r,{to:"/partner"},{default:o(()=>[i(" Партнёрам ")]),_:1})]),e("li",Q,[t(r,{to:"/documents"},{default:o(()=>[i(" Документы ")]),_:1})])])]),e("div",null,[t(y)])])]),e("div",{class:b(["container block lg:hidden overflow-auto",{"h-screen":a.value}]),style:{"will-change":"height"}},[Y,e("div",{onClick:l,class:b(["header__burger",{header__burger_active:a.value}])},Z,2),e("div",{class:b(["flex flex-col space-y-8 m-auto w-full sm:w-96 overflow-hidden",{"h-0":!a.value}])},[t(r,{to:"/",class:"mt-16 sm:mt-32",onClick:l},{default:o(()=>[ee]),_:1}),e("nav",te,[e("ul",se,[e("li",oe,[t(r,{to:"/investor",onClick:l},{default:o(()=>[i(" Инвесторам ")]),_:1})]),e("li",ae,[t(r,{to:"/loaner",onClick:l},{default:o(()=>[i(" Заёмщикам ")]),_:1})]),e("li",le,[t(r,{to:"/partner",onClick:l},{default:o(()=>[i(" Партнёрам ")]),_:1})]),e("li",ie,[t(r,{to:"/documents",onClick:l},{default:o(()=>[i(" Документы ")]),_:1})])])]),e("div",re,[t(y,{style:{"align-items":"center"}})])],2)],2)],2))}},ce=""+globalThis.__publicAssetsURL("icons/phone.svg"),_e=""+globalThis.__publicAssetsURL("icons/mail.svg"),de=""+globalThis.__publicAssetsURL("icons/telegram.svg"),me=""+globalThis.__publicAssetsURL("icons/vk.svg"),ue=""+globalThis.__publicAssetsURL("images/footer-images/index-page.webp");const ge={class:"container pt-16 m-auto"},he={class:"row"},fe=e("div",{class:"hidden w-6/12 lg:block"},null,-1),pe={class:"w-full sm:w-1/2 lg:w-1/4 mb-16"},ve=e("img",{class:"footer__logo mb-4 2xl:mb-10 mx-auto sm:mx-0",src:w,alt:"Логотип ВДело"},null,-1),be={class:"footer__navigation"},xe={class:"flex flex-col items-center sm:items-start"},ke={class:"footer__item"},ye={class:"footer__item"},we={class:"footer__item"},$e={class:"footer__item"},Le={class:"w-full sm:w-1/2 lg:w-1/4 mb-16"},Re={class:"flex flex-col h-full justify-between items-center sm:items-start space-y-10 sm:space-y-0"},Se=S('<div class="footer__contacts -mt-4"><h3 class="footer__title mb-2">Ответим на все вопросы</h3><a class="footer__phone flex items-center justify-center sm:justify-start w-fit mx-auto sm:ml-0" href="tel:+78002016618" target="_blank"><img src="'+ce+'" alt="Иконка телефона" width="18"><span class="ml-2"> 8 800 201 66 18 </span></a><a class="footer__email flex items-center justify-center sm:justify-start w-fit mx-auto sm:ml-0" href="mailto:reception@vdelo.pro" target="_blank"><img src="'+_e+'" alt="Иконка письма" width="18"><span class="ml-2"> reception@vdelo.pro </span></a></div>',1),Te=S('<div class="footer__social flex justify-around"><a href="https://t.me/vdeloPRO" target="_blank" class="footer__telegram"><img src="'+de+'" alt="Логотип телеграмма" width="52" height="52"></a><a href="https://vk.com/vdelo.invest" target="_blank" class="footer__vk"><img src="'+me+'" alt="Логотип вконтакте" width="52" height="52"></a></div>',1),Oe={key:0},Ie=["src"],Ae=["src"],Ce={key:1},Ue=["src"],je=["src"],Ne={key:2},Ee=["src"],ze={key:3},Ve=["src"],Be=["src"],Ge={key:4},De=e("img",{class:"footer__main-image footer__main-image_index mb-8 lg:mb-20 xl:mb-8",src:ue,alt:"Рукопожатие двух мужчин"},null,-1),Pe=[De],He=e("div",{class:"bg-black h-24 z-10 relative"},null,-1),Fe={__name:"TheFooter",setup(f){const a=j(),l=x(()=>`/images/footer-images/${a.name}-page.webp`),m=x(()=>`/images/footer-images/${a.name}-background.webp`),g=x(()=>{switch(a.name){case"index":case"loaner":case"partner":case"investor":return"rgba(255, 255, 255, 0)";default:return"rgba(242, 244, 248, 1)"}});return(u,d)=>(n(),_("footer",{class:"footer",style:N({background:s(g)})},[e("div",ge,[e("div",he,[fe,e("div",pe,[e("div",null,[t(r,{to:"/"},{default:o(()=>[ve]),_:1})]),e("nav",be,[e("ul",xe,[e("li",ke,[t(r,{to:"/investor"},{default:o(()=>[i(" Инвесторам ")]),_:1})]),e("li",ye,[t(r,{to:"/loaner"},{default:o(()=>[i(" Заемщикам ")]),_:1})]),e("li",we,[t(r,{to:"/partner"},{default:o(()=>[i(" Партнёрам ")]),_:1})]),e("li",$e,[t(r,{to:"/documents"},{default:o(()=>[i(" Документы ")]),_:1})])])])]),e("div",Le,[e("div",Re,[Se,e("div",null,[t(y)]),Te])])])]),u.$nuxt.$router.currentRoute.value.name==="index"?(n(),_("div",Oe,[e("img",{class:"footer__main-image footer__main-image_index mb-8 lg:mb-20 xl:mb-8",src:s(l),alt:"Рукопожатие двух мужчин"},null,8,Ie),e("img",{class:"footer__image-background footer__image-background_index",src:s(m),alt:"Цветной фон"},null,8,Ae)])):u.$nuxt.$router.currentRoute.value.name==="loaner"?(n(),_("div",Ce,[e("img",{class:"footer__main-image footer__main-image_loaner -mb-24 lg:mb-0",src:s(l),alt:"Молодой человек с биноклем"},null,8,Ue),e("img",{class:"footer__image-background footer__image-background_loaner",src:s(m),alt:"Цветной фон"},null,8,je)])):u.$nuxt.$router.currentRoute.value.name==="investor"?(n(),_("div",Ne,[e("img",{class:"footer__main-image footer__main-image_investor mb-0 lg:mb-24",src:s(l),alt:"Черно-белая фотография молодой лучницы"},null,8,Ee)])):u.$nuxt.$router.currentRoute.value.name==="partner"?(n(),_("div",ze,[e("img",{class:"footer__main-image footer__main-image_partner -mb-20 lg:mb-8",src:s(l),alt:"Черно-белая фотография играющих детей"},null,8,Ve),e("img",{class:"footer__image-background footer__image-background_partner",src:s(m),alt:"Цветной фон"},null,8,Be)])):(n(),_("div",Ge,Pe)),He],4))}},Je={__name:"OrganizationSchema",setup(f){return V({script:[{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",name:"ООО ВДЕЛО",logo:"https://vdelo.pro/icons/logo.svg",url:"https://www.vdelo.pro",telephone:"8 800 201 66 18",email:"reception@vdelo.pro",address:{"@type":"PostalAddress",addressCountry:"Россия",addressLocality:"Нижний Тагил",streetAddress:"пр. Мира, дом 2а",postalCode:"622034"}})}]}),(l,m)=>(n(),_("div"))}},Me={style:{"padding-top":"60px"}},Ke={__name:"default",setup(f){return(a,l)=>(n(),_("div",null,[t(Je),t(ne),e("main",Me,[E(a.$slots,"default")]),t(Fe)]))}};export{Ke as default};
