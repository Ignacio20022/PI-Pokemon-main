(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports={box:"EditPokemoin_box__11AaR",form:"EditPokemoin_form__dH5Jj",form2:"EditPokemoin_form2__3eoM6",errors:"EditPokemoin_errors__efoRx",types:"EditPokemoin_types__2icCP",button:"EditPokemoin_button__TQnzr"}},13:function(e,t,n){e.exports={navbar:"Navbar_navbar__38Pm6",selector:"Navbar_selector__PmwZz",searchbar:"Navbar_searchbar__3pQqr",link:"Navbar_link__3t3s6",home:"Navbar_home__2KlD4",create:"Navbar_create__2QDX-"}},18:function(e,t,n){e.exports={sortsContainer:"home_sortsContainer__oA-M0",sorts:"home_sorts__6XfZX",pokesFrom:"home_pokesFrom__cd1g_",sadPoke:"home_sadPoke__2LcDB",home:"home_home__34Xj8",error:"home_error__U0KQP"}},21:function(e,t,n){e.exports={pagination:"Pagination_pagination__34scg",buttonPrevNext:"Pagination_buttonPrevNext__1M-4b",buttonNum:"Pagination_buttonNum__AsS-Q",buttonNumActive:"Pagination_buttonNumActive__n2anF",arePokemon:"Pagination_arePokemon__1NVpf"}},22:function(e,t,n){e.exports={box:"PokemonCard_box__22yK2",select:"PokemonCard_select__1ZDGZ",nombre:"PokemonCard_nombre__2_27Y",link:"PokemonCard_link__1qyuv",img:"PokemonCard_img__1xhXO"}},32:function(e,t,n){e.exports={details:"PokemonDetails_details__3nQBP",deleteBttn:"PokemonDetails_deleteBttn__2VR0O",editBttn:"PokemonDetails_editBttn__3AJb4"}},51:function(e,t,n){e.exports={search:"SearchBar_search__17Nmn"}},52:function(e,t,n){e.exports={loading:"Loading_loading__2uv2B"}},53:function(e,t,n){e.exports={box:"Landing_box__1fKyc"}},9:function(e,t,n){e.exports={box:"CreatePokemon_box__3fEB9",form:"CreatePokemon_form__2cxQM",form2:"CreatePokemon_form2__2xN1H",errors:"CreatePokemon_errors__2jnl9",types:"CreatePokemon_types__UkMIp",button:"CreatePokemon_button__1b4pZ"}},90:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(27),r=n.n(s),i=n(4),o=n(31),l=n(2),h=n(8),j=n(19),b=n(17),d=n.n(b),u=n(29),m=n.n(u);m.a.config();var p="GET_ALL_POKEMONS",O="GET_ALL_POKEMONS_NAMES",x="GET_POKEMON_BY_ID",g="GET_TYPES",f="CREATE_POKEMON",v="DELETE_POKEMON",k="CLEAR_DETAILS",_="FILTER_POKEMONS",y="RESET_FILTERS",N="ERROR",P="CLEAR_ERROR",w=function(){return function(){var e=Object(j.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/pokemons/names").then((function(e){t({type:O,payload:e.data})})).catch((function(e){t({type:N})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(j.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/types").then((function(e){t({type:g,payload:e.data})})).catch((function(e){t({type:N})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(e){e({type:P})}},E={pokemons:[],pokemonDetails:{},filteredPokemons:[],pokemonsNames:[],types:[],errors:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemons:t.payload});case O:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemonsNames:t.payload});case x:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemonDetails:t.payload});case g:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,types:t.payload});case f:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemons:e.pokemons.concat(t.payload)});case v:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemons:e.pokemons.filter((function(e){return e.id!==t.payload}))});case k:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,pokemonDetails:{}});case _:var n=t.payload,a=n.sortBy,c=n.API_or_DB,s=n.types,r=[];return r=e.pokemons.slice(),"API"===c&&(r=e.pokemons.filter((function(e){return e.id<2e4}))),"DB"===c&&((r=r.filter((function(e){return e.id>2e4}))).length||(r[0]="inexistent DB")),"A-Z"===a&&r.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})),"Z-A"===a&&r.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:e.name.toLowerCase()>t.name.toLowerCase()?-1:0})),"+ATTK"===a&&r.sort((function(e,t){return e.attk<t.attk?1:e.attk>t.attk?-1:0})),"-ATTK"===a&&r.sort((function(e,t){return e.attk>t.attk?1:e.attk<t.attk?-1:0})),"+HP"===a&&r.sort((function(e,t){return e.hp<t.hp?1:e.hp>t.hp?-1:0})),"-HP"===a&&r.sort((function(e,t){return e.hp>t.hp?1:e.hp<t.hp?-1:0})),"default"!==s&&"inexistent DB"!==r[0]&&((r=r.filter((function(e){return e.types.includes(s)}))).length||(r[0]="inexistent type")),Object(l.a)(Object(l.a)({},e),{},{errors:!1,filteredPokemons:r});case y:return Object(l.a)(Object(l.a)({},e),{},{errors:!1,filteredPokemons:[]});case N:return Object(l.a)(Object(l.a)({},e),{},{error:!0});case P:return Object(l.a)(Object(l.a)({},e),{},{error:!1});default:return e}},S=n(49),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.b,A=Object(o.c)(L,D(Object(o.a)(S.a))),F=(n(90),n(7)),B=n(5),M=n(20),R=n(12),I=n(18),H=n.n(I),U=n(22),K=n.n(U),Z=n(0);function G(e){var t;return Object(Z.jsx)("div",{className:K.a.box,children:Object(Z.jsx)("div",{className:K.a.select,children:Object(Z.jsxs)(F.b,{to:"/pokemons/details/".concat(e.id),className:K.a.link,children:[Object(Z.jsx)("h1",{className:K.a.nombre,children:e.name}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h3",{className:K.a.types,children:null===(t=e.types)||void 0===t?void 0:t.map((function(e){return e+" "}))}),Object(Z.jsx)("img",{id:K.a.img,src:e.img,alt:"Pokemon"})]})]})})},e.id)}var Q=n(21),X=n.n(Q);function V(e){for(var t=e.totalPosts,n=e.postsPerPage,a=e.setCurrentPage,c=e.currentPage,s=(e.setPokemonsToShow,e.maxLimit),r=e.setMaxLimit,i=e.minLimit,o=e.setMinLimit,l=e.pageLimit,h=(e.setPageLimit,[]),j=1;j<=Math.ceil(t/n);j++)h.push(j);var b=h.map((function(e,r){return e<s+1&&e>i?Object(Z.jsx)("button",{hidden:t<=n,className:e===c?X.a.buttonNumActive:X.a.buttonNum,onClick:function(){return a(e)},children:e},r):null})),d=null;h.length>s&&(d=Object(Z.jsx)("button",{className:X.a.buttonPrevNext,onClick:function(){c<h.length&&(a(s+1),c+l>s&&(r(s+l),o(i+l)))},children:"\u2026"}));var u=null;return h.length>i&&(u=Object(Z.jsx)("button",{className:X.a.buttonPrevNext,hidden:c<11,onClick:function(){c>1&&(a(i),r(s-l),o(i-l))},children:"\u2026"})),Object(Z.jsxs)("div",{className:X.a.pagination,children:[Object(Z.jsx)("button",{hidden:t<=n,className:X.a.buttonPrevNext,onClick:function(){c>1&&(a(c-1),(c-1)%l===0&&(r(s-l),o(i-l)))},children:" < "}),u,b,d,Object(Z.jsx)("button",{hidden:t<=n,className:X.a.buttonPrevNext,onClick:function(){c<h.length&&(a(c+1),c+1>s&&(r(s+l),o(i+l)))},children:" > "})]})}var Y=n(51),q=n.n(Y);function z(e){var t=e.setSearch,n=e.setCurrentPage,a=e.search,c=e.setMaxLimit,s=e.setMinLimit;return Object(Z.jsx)("form",{className:q.a.search,onSubmit:function(e){e.preventDefault()},children:Object(Z.jsx)("input",{type:"text",placeholder:"Search pokemons",onChange:function(e){e.preventDefault(),n(1),s(0),c(10),t(e.target.value)},value:a})})}var J=n(13),W=n.n(J);function $(e){var t=e.setPostsPerPage,n=e.setSearch,a=e.setCurrentPage,c=e.search,s=e.setMaxLimit,r=e.setMinLimit;e.setPageLimit;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:W.a.navbar,children:[Object(Z.jsx)(F.b,{to:"/pokemons",className:W.a.link,children:Object(Z.jsx)("span",{className:W.a.home,children:"Home"})}),Object(Z.jsxs)("div",{className:W.a.selector,children:[Object(Z.jsxs)("label",{children:["Pokemons to show ",Object(Z.jsx)("br",{}),"per page:"," "]}),Object(Z.jsxs)("select",{defaultValue:12,onChange:function(e){e.preventDefault(),a(1),r(0),s(10),t(e.target.value)},children:[Object(Z.jsx)("option",{value:1,children:"1"}),Object(Z.jsx)("option",{value:5,children:"5"}),Object(Z.jsx)("option",{value:10,children:"10"}),Object(Z.jsx)("option",{value:12,children:"12"}),Object(Z.jsx)("option",{value:30,children:"30"}),Object(Z.jsx)("option",{value:50,children:"50"})]})]}),Object(Z.jsx)("div",{className:W.a.searchbar,children:Object(Z.jsx)(z,{search:c,setSearch:n,setCurrentPage:a,setMaxLimit:s,setMinLimit:r})}),Object(Z.jsx)(F.b,{to:"/pokemons/create",className:W.a.link,children:Object(Z.jsx)("span",{className:W.a.create,children:"Create"})})]})})}var ee=n(52),te=n.n(ee),ne=n.p+"static/media/pokeball_loading.94cd27f1.gif";function ae(){return Object(Z.jsx)("div",{className:te.a.loading,children:Object(Z.jsx)("img",{src:ne,alt:"loading..."})})}function ce(){return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:W.a.navbar,children:[Object(Z.jsx)(F.b,{to:"/pokemons",className:W.a.link,children:Object(Z.jsx)("span",{className:W.a.home,children:"Home"})}),Object(Z.jsx)(F.b,{to:"/pokemons/create",className:W.a.link,children:Object(Z.jsx)("span",{className:W.a.create,children:"Create"})})]})})}function se(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(ce,{}),Object(Z.jsx)("h1",{children:"Unexpected error happened"})]})}var re=n.p+"static/media/sad_pikachu.30baaa13.png";function ie(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.pokemons})),n=Object(i.c)((function(e){return e.filteredPokemons})),c=Object(i.c)((function(e){return e.types})),s=Object(i.c)((function(e){return e.error})),r=Object(a.useState)(""),o=Object(R.a)(r,2),b=o[0],u=o[1],m=Object(a.useState)({sortBy:"default",API_or_DB:"default",types:"default"}),O=Object(R.a)(m,2),x=O[0],g=O[1],f=function(e){e.preventDefault(),g(Object(l.a)(Object(l.a)({},x),{},Object(M.a)({},e.target.name,e.target.value))),w(1),J(0),X(10)};Object(a.useEffect)((function(){e(function(e){return function(t){t({type:_,payload:e})}}(x))}),[e,x]);var v=Object(a.useState)(1),k=Object(R.a)(v,2),P=k[0],w=k[1],E=Object(a.useState)(12),L=Object(R.a)(E,2),S=L[0],D=L[1],A=Object(a.useState)(10),F=Object(R.a)(A,2),B=F[0],I=F[1],U=Object(a.useState)(10),K=Object(R.a)(U,2),Q=K[0],X=K[1],Y=Object(a.useState)(0),q=Object(R.a)(Y,2),z=q[0],J=q[1];n.length>0&&(t=n);var W=P*S,ee=W-S;if(Object(a.useEffect)((function(){e(T()),t.length||e(function(){var e=Object(j.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/pokemons").then((function(e){t({type:p,payload:e.data})})).catch((function(e){t({type:N})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c.length||e(C())}),[e,t.length,c.length]),s)return Object(Z.jsx)(se,{});if(!t.length&&""===b&&!1===s)return Object(Z.jsx)(ae,{});var te=null;b.length>0&&"inexistent DB"!==t[0]&&"inexistent type"!==t[0]&&(t=t.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())||e.name.includes(b)?e:null})));var ne=t.slice(ee,W);te=ne.length&&"inexistent DB"!==ne[0]&&"inexistent type"!==ne[0]?ne.map((function(e){return Object(Z.jsx)(G,{id:e.id,name:e.name,types:e.types,img:e.img},e.id)})):ne.length&&"inexistent DB"===ne[0]?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h1",{children:"There are no Pokemons in the Data Base "}),Object(Z.jsx)("img",{className:H.a.sadPoke,src:re,alt:"pikachu sad"})]}):ne.length&&"inexistent type"===ne[0]?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h1",{children:"No Pokemon exist with that type"}),Object(Z.jsx)("img",{className:H.a.sadPoke,src:re,alt:"pikachu sad"})]}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("h1",{children:["No pokemon has '",b,"' in their name"]}),Object(Z.jsx)("img",{className:H.a.sadPoke,src:re,alt:"pikachu sad"})]});var ce=Object(Z.jsxs)("div",{className:H.a.sortsContainer,children:[Object(Z.jsxs)("select",{name:"sortBy",value:x.sortBy,className:H.a.sorts,onChange:f,children:[Object(Z.jsx)("option",{hidden:!0,value:"default",children:"Sort by..."}),Object(Z.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(Z.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(Z.jsx)("option",{value:"+attk",children:"+attk"}),Object(Z.jsx)("option",{value:"-attk",children:"-attk"}),Object(Z.jsx)("option",{value:"+hp",children:"+hp"}),Object(Z.jsx)("option",{value:"-hp",children:"-hp"})]}),Object(Z.jsxs)("select",{name:"API_or_DB",value:x.API_or_DB,className:H.a.pokesFrom,onChange:f,children:[Object(Z.jsx)("option",{hidden:!0,value:"default",children:"Show pokemons from..."}),Object(Z.jsx)("option",{value:"API",children:"Poke API"}),Object(Z.jsx)("option",{value:"DB",children:"Data Base"})]}),Object(Z.jsxs)("select",{name:"types",value:x.types,className:H.a.sorts,onChange:f,children:[Object(Z.jsx)("option",{hidden:!0,value:"default",children:"Types..."}),c.map((function(e,t){return Object(Z.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("button",{onClick:function(t){t.preventDefault(),g({sortBy:"default",API_or_DB:"default",types:"default"}),u(""),w(1),J(0),X(10),e((function(e){e({type:y})}))},children:"Reset filters"})]});return Object(Z.jsxs)("div",{children:[Object(Z.jsx)($,{search:b,setSearch:u,setPostsPerPage:D,setCurrentPage:w,setMaxLimit:X,setMinLimit:J,setPageLimit:I}),ce,Object(Z.jsx)("h1",{className:H.a.title,children:"Pokemons"}),Object(Z.jsxs)("div",{className:H.a.home,children:[te,Object(Z.jsx)(V,{totalPosts:t.length,postsPerPage:S,setCurrentPage:w,currentPage:P,maxLimit:Q,setMaxLimit:X,minLimit:z,setMinLimit:J,pageLimit:B,setPageLimit:I})]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{})]})}var oe=n(53),le=n.n(oe);function he(){return Object(Z.jsx)("div",{className:le.a.box,children:Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h1",{children:"Pokemon API"}),Object(Z.jsx)(F.b,{to:"/pokemons",children:Object(Z.jsx)("button",{children:"Enter"})})]})})}var je=n(32),be=n.n(je);function de(e){var t=Object(B.f)().id,n=i.c((function(e){return e.pokemonDetails})),c=i.c((function(e){return e.error})),s=i.b();Object(a.useEffect)((function(){return s(T()),s(function(e){return function(){var t=Object(j.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/pokemons/details/".concat(e)).then((function(e){n({type:x,payload:e.data})})).catch((function(e){n({type:N})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),function(){s({type:k})}}),[s,t]),t=parseInt(t);var r;return c?Object(Z.jsx)(se,{}):Object.keys(n).length?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ce,{}),Object(Z.jsxs)("div",{className:be.a.details,children:[Object(Z.jsx)("h2",{children:n.id}),Object(Z.jsx)("h1",{children:n.name.toUpperCase()}),Object(Z.jsx)("img",{src:n.img,alt:"imagen pokemon"}),Object(Z.jsxs)("h4",{children:["Type(s) ",Object(Z.jsx)("br",{}),"\n"+(null===(r=n.types)||void 0===r?void 0:r.map((function(e){return e.toUpperCase()})))]}),Object(Z.jsxs)("h4",{children:["Stats ",Object(Z.jsx)("br",{}),"HP: ",n.hp>1?n.hp:"Unknown"," - ","ATTK: ",n.attk>1?n.attk:"Unknown"," - ","DEF:",n.def>1?n.def:"Unknown",Object(Z.jsx)("br",{}),"SPEED: ",n.speed>1?n.speed:"Unknown"," - ","HEIGHT:",n.height>1?n.height:"Unknown"," - ","WEIGHT: ",n.weight>1?n.weight:"Unknown"]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("button",{className:be.a.deleteBttn,hidden:n.id<2e4,onClick:function(e){s(function(e){return function(){var t=Object(j.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("/pokemons/delete/".concat(e)).catch((function(e){n({type:N})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n.id)),alert("pokemon delete succesfully")},children:"Delete Pokemon"}),Object(Z.jsx)(F.b,{to:"/pokemons/edit/".concat(n.id),children:Object(Z.jsx)("button",{className:be.a.editBttn,hidden:n.id<2e4,children:"Edit Pokemon"})})]})]}):Object(Z.jsx)(ae,{})}n(97);var ue=n(54),me=n(55),pe=n(56),Oe=n(57),xe=function(e){Object(pe.a)(n,e);var t=Object(Oe.a)(n);function n(){return Object(ue.a)(this,n),t.apply(this,arguments)}return Object(me.a)(n,[{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsx)("h1",{children:"This page doesn't exist"})})}}]),n}(a.Component),ge=n(9),fe=n.n(ge);function ve(e,t){var n={};return e.name?e.name.length<3?n.name="Name has to have 3 or more characters":e.name.length>12?n.name="Name can't be longer than 12 characters":/(^[a-zA-Z0-9. -])*$/g.test(e.name)?t.map((function(t){return t.toLowerCase()===e.name.toLowerCase().trim()?n.name="".concat(e.name," is already in use"):null})):n.name="Name contains invalid characters":n.name="Name is required",e.img&&(e.img.length>249?n.img="The URL can't be longer than 250 characters":/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/g.test(e.img)||(n.img="The url is invalid")),0===e.hp.length&&(n.hp="The health can't be empty (leave 0 if unknown)"),e.hp<0?n.hp="The health can't be negative":e.hp>1&&(e.hp>255&&(n.hp="The health can't be higher than 255"),e.hp.includes(".")&&(n.hp="Float numbers are not allowed")),0===e.attk.length&&(n.attk="The attack can't be empty (leave 0 if unknown)"),e.attk<0?n.attk="The attack can't be negative":e.attk>1&&(e.attk>255&&(n.attk="The attack can't be higher than 255"),e.attk.includes(".")&&(n.attk="Float numbers are not allowed")),0===e.def.length&&(n.def="The defense can't be empty (leave 0 if unknown)"),e.def<0?n.def="The defense can't be negative":e.def>1&&(e.def>255&&(n.def="The defense can't be higher than 255"),e.def.includes(".")&&(n.def="Float numbers are not allowed")),0===e.speed.length&&(n.speed="The speed can't be empty (leave 0 if unknown)"),e.speed<0?n.speed="The speed can't be negative":e.speed>1&&(e.speed>255&&(n.speed="The speed can't be higher than 255"),e.speed.includes(".")&&(n.speed="Float numbers are not allowed")),0===e.height.length&&(n.height="The height can't be empty (leave 0 if unknown)"),e.height<0?n.height="The height can't be negative":e.height>1&&(e.height>255&&(n.height="The height can't be higher than 255"),e.height.includes(".")&&(n.height="Float numbers are not allowed")),0===e.weight.length&&(n.weight="The weight can't be empty (leave 0 if unknown)"),e.weight<0?n.weight="The weight can't be negative":e.weight>1&&(e.weight>255&&(n.weight="The weight can't be higher than 255"),e.weight.includes(".")&&(n.weight="Float numbers are not allowed")),0===e.types.length&&(n.types="You have to choose at least one type"),n}function ke(){var e=Object(i.c)((function(e){return e.error})),t=Object(i.b)(),n=Object(i.c)((function(e){return e.types})),c=Object(i.c)((function(e){return e.pokemonsNames}));Object(a.useEffect)((function(){t(T()),n.length||t(C()),c.length||t(w())}),[t,n.length,c.length]);var s=Object(a.useState)({}),r=Object(R.a)(s,2),o=r[0],b=r[1],u=Object(a.useState)({name:"",hp:0,attk:0,def:0,speed:0,height:0,weight:0,img:"",types:[]}),m=Object(R.a)(u,2),p=m[0],O=m[1],x=function(e){var t=e.target,a=t.name,s=t.value,r=t.checked,i=t.id;"types"===a?(n[i].isChecked=r,r?O((function(e){var t=Object(l.a)(Object(l.a)({},e),{},{types:p.types.concat(s)});return b(ve(t,c)),t})):r||O((function(e){var t=Object(l.a)(Object(l.a)({},e),{},{types:p.types.filter((function(e){return e!==s}))});return b(ve(t,c)),t}))):O((function(e){var t=Object(l.a)(Object(l.a)({},e),{},Object(M.a)({},a,s));return b(ve(t,c)),t}))};return e?Object(Z.jsx)(se,{}):n.length&&c.length?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ce,{}),Object(Z.jsx)("h1",{children:"Create Pokemon"}),Object(Z.jsxs)("div",{className:fe.a.box,children:[Object(Z.jsxs)("div",{className:fe.a.form,children:[Object(Z.jsx)("h4",{children:"Name and stats"}),Object(Z.jsxs)("form",{className:fe.a.form2,onSubmit:function(e){var n;Object.keys(o).length?alert('Please, check " '.concat(Object.keys(o),' " before submiting')):(t((n=p,function(){var e=Object(j.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/pokemons/create",{data:n}).catch((function(e){t({type:N})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Pokemon created successfully"))},autoComplete:"off",spellCheck:"false",children:[Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Name: "}),Object(Z.jsx)("input",{type:"text",name:"name",value:p.name,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.name})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Health: "}),Object(Z.jsx)("input",{type:"number",name:"hp",value:p.hp,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.hp})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Attack: "}),Object(Z.jsx)("input",{type:"number",name:"attk",value:p.attk,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.attk})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Defense: "}),Object(Z.jsx)("input",{type:"number",name:"def",value:p.def,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.def})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Speed: "}),Object(Z.jsx)("input",{type:"number",name:"speed",value:p.speed,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.speed})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Height: "}),Object(Z.jsx)("input",{type:"number",name:"height",value:p.height,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.height})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"weight: "}),Object(Z.jsx)("input",{type:"number",name:"weight",value:p.weight,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.weight})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Image: (url)"}),Object(Z.jsx)("input",{type:"text",name:"img",value:p.img,onChange:x}),Object(Z.jsx)("label",{className:fe.a.errors,children:o.img})]})]}),Object(Z.jsx)("button",{className:fe.a.button,type:"submit",disabled:Object.keys(o).length||""===p.name,children:"Create Pokemon"})]})]}),Object(Z.jsxs)("div",{className:fe.a.types,children:[Object(Z.jsx)("h4",{children:"Types"}),Object(Z.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(Z.jsxs)("li",{className:fe.a.lista2,children:[Object(Z.jsx)("input",{type:"checkbox",id:t,name:"types",value:e.id,checked:e.isChecked,onChange:x,disabled:p.types.length>1&&!1===e.isChecked},t),Object(Z.jsx)("label",{htmlFor:"custom-checkbox-".concat(n.id),children:e.name}),Object(Z.jsx)("br",{})]},e.id)}))}),Object(Z.jsx)("p",{children:o.types})]})]})]}):Object(Z.jsx)(ae,{})}var _e=n(10),ye=n.n(_e);function Ne(e,t){var n={};return e.name?e.name.length<3?n.name="Name has to have 3 or more characters":e.name.length>12?n.name="Name can't be longer than 12 characters":/(^[a-zA-Z0-9. -])*$/g.test(e.name)?t.map((function(t){return t.toLowerCase()===e.name.toLowerCase().trim()?n.name="".concat(e.name," is already in use"):null})):n.name="Name contains invalid characters":n.name="Name is required",e.img&&(e.img.length>249?n.img="The URL can't be longer than 250 characters":/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/g.test(e.img)||(n.img="The url is invalid")),0===e.hp.length&&(n.hp="The health can't be empty (leave 0 if unknown)"),e.hp<0?n.hp="The health can't be negative":e.hp>1&&(e.hp>255&&(n.hp="The health can't be higher than 255"),e.hp.includes(".")&&(n.hp="Float numbers are not allowed")),0===e.attk.length&&(n.attk="The attack can't be empty (leave 0 if unknown)"),e.attk<0?n.attk="The attack can't be negative":e.attk>1&&(e.attk>255&&(n.attk="The attack can't be higher than 255"),e.attk.includes(".")&&(n.attk="Float numbers are not allowed")),0===e.def.length&&(n.def="The defense can't be empty (leave 0 if unknown)"),e.def<0?n.def="The defense can't be negative":e.def>1&&(e.def>255&&(n.def="The defense can't be higher than 255"),e.def.includes(".")&&(n.def="Float numbers are not allowed")),0===e.speed.length&&(n.speed="The speed can't be empty (leave 0 if unknown)"),e.speed<0?n.speed="The speed can't be negative":e.speed>1&&(e.speed>255&&(n.speed="The speed can't be higher than 255"),e.speed.includes(".")&&(n.speed="Float numbers are not allowed")),0===e.height.length&&(n.height="The height can't be empty (leave 0 if unknown)"),e.height<0?n.height="The height can't be negative":e.height>1&&(e.height>255&&(n.height="The height can't be higher than 255"),e.height.includes(".")&&(n.height="Float numbers are not allowed")),0===e.weight.length&&(n.weight="The weight can't be empty (leave 0 if unknown)"),e.weight<0?n.weight="The weight can't be negative":e.weight>1&&(e.weight>255&&(n.weight="The weight can't be higher than 255"),e.weight.includes(".")&&(n.weight="Float numbers are not allowed")),0===e.types.length&&(n.types="You have to choose at least one type"),n}function Pe(){var e=Object(B.f)().id,t=Object(i.c)((function(e){return e.error})),n=Object(i.b)(),c=Object(i.c)((function(e){return e.types})),s=Object(i.c)((function(e){return e.pokemonsNames}));Object(a.useEffect)((function(){n(T()),c.length||n(C()),s.length||n(w())}),[n,c.length,s.length]);var r=Object(a.useState)({}),o=Object(R.a)(r,2),b=o[0],u=o[1],m=Object(a.useState)({name:"",hp:0,attk:0,def:0,speed:0,height:0,weight:0,img:"",types:[]}),p=Object(R.a)(m,2),O=p[0],x=p[1],g=function(e){var t=e.target,n=t.name,a=t.value,r=t.checked,i=t.id;"types"===n?(c[i].isChecked=r,r?x((function(e){var t=Object(l.a)(Object(l.a)({},e),{},{types:O.types.concat(a)});return u(Ne(t,s)),t})):r||x((function(e){var t=Object(l.a)(Object(l.a)({},e),{},{types:O.types.filter((function(e){return e!==a}))});return u(Ne(t,s)),t}))):x((function(e){var t=Object(l.a)(Object(l.a)({},e),{},Object(M.a)({},n,a));return u(Ne(t,s)),t}))};return t?Object(Z.jsx)(se,{}):c.length&&s.length?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ce,{}),Object(Z.jsx)("h1",{children:"Edit pokemon"}),Object(Z.jsxs)("div",{className:ye.a.box,children:[Object(Z.jsxs)("div",{className:ye.a.form,children:[Object(Z.jsx)("h4",{children:"Name and stats"}),Object(Z.jsxs)("form",{className:ye.a.form2,onSubmit:function(t){Object.keys(b).length?alert('Please, check " '.concat(Object.keys(b),' " before submiting')):(n(function(e,t){return console.log(e),console.log(t),function(){var n=Object(j.a)(Object(h.a)().mark((function n(a){return Object(h.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.put("/pokemons/edit/".concat(e),{data:t}).catch((function(e){a({type:N})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,O)),alert("Pokemon edited successfully"))},autoComplete:"off",spellCheck:"false",children:[Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Name: "}),Object(Z.jsx)("input",{type:"text",name:"name",value:O.name,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.name})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Health: "}),Object(Z.jsx)("input",{type:"number",name:"hp",value:O.hp,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.hp})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Attack: "}),Object(Z.jsx)("input",{type:"number",name:"attk",value:O.attk,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.attk})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Defense: "}),Object(Z.jsx)("input",{type:"number",name:"def",value:O.def,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.def})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Speed: "}),Object(Z.jsx)("input",{type:"number",name:"speed",value:O.speed,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.speed})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Height: "}),Object(Z.jsx)("input",{type:"number",name:"height",value:O.height,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.height})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"weight: "}),Object(Z.jsx)("input",{type:"number",name:"weight",value:O.weight,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.weight})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("label",{children:"Image: (url)"}),Object(Z.jsx)("input",{type:"text",name:"img",value:O.img,onChange:g}),Object(Z.jsx)("label",{className:ye.a.errors,children:b.img})]})]}),Object(Z.jsx)("button",{className:ye.a.button,type:"submit",disabled:Object.keys(b).length||""===O.name,children:"Create Pokemon"})]})]}),Object(Z.jsxs)("div",{className:ye.a.types,children:[Object(Z.jsx)("h4",{children:"Types"}),Object(Z.jsx)("ul",{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(Z.jsxs)("li",{className:ye.a.lista2,children:[Object(Z.jsx)("input",{type:"checkbox",id:t,name:"types",value:e.id,checked:e.isChecked,onChange:g,disabled:O.types.length>1&&!1===e.isChecked},t),Object(Z.jsx)("label",{htmlFor:"custom-checkbox-".concat(c.id),children:e.name}),Object(Z.jsx)("br",{})]},e.id)}))}),Object(Z.jsx)("p",{children:b.types})]})]})]}):Object(Z.jsx)(ae,{})}var we=function(){return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsx)(F.a,{children:Object(Z.jsxs)(B.c,{children:[Object(Z.jsx)(B.a,{exact:!0,path:"/",children:Object(Z.jsx)(he,{})}),Object(Z.jsx)(B.a,{exact:!0,path:"/pokemons",children:Object(Z.jsx)(ie,{})}),Object(Z.jsx)(B.a,{exact:!0,path:"/pokemons/details/:id",children:Object(Z.jsx)(de,{})}),Object(Z.jsx)(B.a,{exact:!0,path:"/pokemons/create",children:Object(Z.jsx)(ke,{})}),Object(Z.jsx)(B.a,{exact:!0,path:"/pokemons/edit/:id",children:Object(Z.jsx)(Pe,{})}),Object(Z.jsx)(B.a,{exact:!0,path:"/pokemon/delete/:id",children:Object(Z.jsx)(ce,{})}),Object(Z.jsxs)(B.a,{path:"*",children:[Object(Z.jsx)(ce,{}),Object(Z.jsx)(xe,{})]})]})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};m.a.config(),d.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(Z.jsx)(c.a.StrictMode,{children:Object(Z.jsx)(i.a,{store:A,children:Object(Z.jsx)(F.a,{children:Object(Z.jsx)(we,{})})})}),document.getElementById("root")),Ce()}},[[98,1,2]]]);
//# sourceMappingURL=main.e197e245.chunk.js.map