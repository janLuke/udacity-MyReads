(this["webpackJsonpmy-reads"]=this["webpackJsonpmy-reads"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/app-logo.bfc5d976.svg"},40:function(e,t,a){e.exports=a(68)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=a(20),i=a(16),s=a(25),u=a(10),m=a(22),d=a.n(m),f=a(26),h=a(13),p=a(18),v=a(21),E=a(19),b=a(15),y=a(3),g=a(2),k=a.n(g),N=a(9),O=a(23),j=(a(46),"https://reactnd-books-api.udacity.com"),C=localStorage.token;C||(C=localStorage.token=Math.random().toString(36).substr(-8));var S={Accept:"application/json",Authorization:C},B=function(e){return fetch("".concat(j,"/search"),{method:"POST",headers:Object(u.a)(Object(u.a)({},S),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},D=a(35),I=a(11),w=a(5),R=Object.freeze({READ:"read",READING:"currentlyReading",WANT_TO_READ:"wantToRead",NONE:"none"}),T=function e(t){var a=t.id,n=t.displayName,r=t.icon,o=t.color,l=t.shortDisplayName,c=t.className;Object(h.a)(this,e),this.id=a,this.displayName=n,this.shortDisplayName=l||n,this.icon=r,this.color=o,this.slug=c||this.displayName.toLowerCase().split(" ").join("-")},x=Object.freeze(function(){var e=Object.freeze(new T({id:R.READING,displayName:"Currently reading",shortDisplayName:"Reading",icon:w.c,color:"var(--color-shelf-reading)"})),t=Object.freeze(new T({id:R.WANT_TO_READ,displayName:"Want to read",shortDisplayName:"Wanted",icon:w.d,color:"var(--color-shelf-want-to-read)"})),a=Object.freeze(new T({id:R.READ,displayName:"Read",icon:w.b,color:"var(--color-shelf-read)"})),n=Object.freeze([e,t,a]),r=Object.values(R),o=Object.freeze(Object.fromEntries(n.map((function(e){return[e.id,e]}))));return{READING:e,WANT_TO_READ:t,READ:a,ids:r,inDisplayOrder:n,byID:o}}()),M=Object.freeze(["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"]),P=a(32),A=(a(52),Object.keys),L=Object.values,F=Object.entries;function Q(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n={},r=Object(i.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n[o[a]]=o}}catch(l){r.e(l)}finally{r.f()}return n}function z(e,t){var a=Object.assign({},t);return delete a[e],a}function H(e,t){return e.length<=t?e:e.substr(0,t-3)+"..."}function W(e){var t=e.leading,a=e.title,n=e.onClick;return r.a.createElement("div",{className:"MenuItem",onClick:n},r.a.createElement("div",{className:"MenuItem-leading"},t),r.a.createElement("div",{className:"MenuItem-title"},a))}function _(e){var t=e.children;return r.a.createElement("h3",{className:"MenuTitle",onClick:function(e){return e.stopPropagation()}},t)}function G(e){var t=e.className;return r.a.createElement("div",{className:k()("Divider",t)})}function U(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:k()("Menu",a)},t)}function q(e){var t=e.renderMenu,a=e.children,n=e.closeOnMenuClick,o=e.className,l=e.popupClassName,i=r.a.useState(!1),s=Object(c.a)(i,2),u=s[0],m=s[1],d=r.a.useRef(null),f=function(){return m(!1)};!function(e,t){r.a.useEffect((function(){function a(a){e.current&&!e.current.contains(a.target)&&t()}return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t])}(d,f);var h=n?f:null;return r.a.createElement("div",{ref:d,className:k()("MenuTrigger",o)},r.a.createElement("div",{onClick:function(){return m(!u)}},a),u&&r.a.createElement("div",{className:k()("MenuTrigger-popup",l),onClick:h},t()))}q.defaultProps={closeOnMenuClick:!0};a(53);var J=a(17),K=(a(54),r.a.memo((function(e){var t=e.color,a=e.raised,n=e.className,o=e.style,l=e.children,c=e.onClick,i=Object(J.a)(e,["color","raised","className","style","children","onClick"]);return r.a.createElement("button",Object.assign({},i,{className:k()("Button",t,n,{raised:a}),style:o,onClick:c}),l)})));function Y(e){var t=e.icon,a=e.raised,n=e.size,o=e.color,l=e.className,c=e.onClick,i=Object(J.a)(e,["icon","raised","size","color","className","onClick"]);return r.a.createElement(K,Object.assign({color:o,raised:a,className:k()("IconButton",l),style:{width:n,height:n},onClick:c},i),r.a.createElement(I.a,{icon:t,fixedWidth:!0}))}function V(e){var t=e.props;return r.a.createElement(Y,Object.assign({icon:w.a},t))}function X(e){var t=e.shelf,a=t.icon,n=t.color;return r.a.createElement(I.a,{icon:a,color:n,fixedWidth:!0})}function Z(e){var t=e.book,a=Object(n.useContext)(Te).updateBookShelf,o=x.inDisplayOrder.filter((function(e){return e.id!==t.shelf})).map((function(e){return r.a.createElement(W,{key:e.id,leading:r.a.createElement(X,{shelf:e}),title:e.displayName,onClick:function(){return a(t,e.id)}})}));return r.a.createElement(U,null,r.a.createElement(_,null,t.shelf?"Move to":"Add to"),o,t.shelf&&r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(W,{key:"remove",leading:r.a.createElement(I.a,{icon:w.i,color:"red",fixedWidth:!0}),title:"Remove",onClick:function(){return a(t,R.NONE)}})))}function $(e){var t=e.book;return r.a.createElement(q,{className:"BookActionMenuTrigger",renderMenu:function(){return r.a.createElement(Z,{book:t})}},r.a.createElement(Y,{raised:!0,color:"secondary",icon:w.e}))}K.defaultProps={raised:!1};var ee=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderRibbon",value:function(e){var t=x.byID[e];return r.a.createElement("div",{className:k()("Book-ribbon",t.slug)},r.a.createElement("span",null,t.shortDisplayName))}},{key:"render",value:function(){var e=this.props,t=e.book,a=e.showShelfRibbon,n=t.imageLinks?r.a.createElement("img",{src:t.imageLinks.thumbnail,alt:'Cover of "'.concat(t.title,'"')}):r.a.createElement("div",{className:"Book-cover-placeholder"},"Cover not available"),o=H(t.title,75),l="authors"in t?t.authors.join(", "):null,c=l?H(l,50):null;return r.a.createElement("div",{className:"Book"},r.a.createElement("div",{className:"Book-top"},r.a.createElement("div",{className:"Book-cover"},n,t.shelf&&a&&this.renderRibbon(t.shelf)),r.a.createElement($,{book:t})),r.a.createElement("div",{className:"Book-title",title:t.title.length>75?t.title:null},o),l&&r.a.createElement("div",{className:"Book-authors",title:l.length>50?l:null},c))}}]),a}(r.a.PureComponent);ee.defaultProps={showShelfRibbon:!1};var te=ee,ae=(a(55),{onAppear:function(e){e.classList.add("book-appear"),setTimeout((function(){e.style.opacity=1,e.classList.remove("book-appear")}),300)},onExit:function(e,t,a){e.classList.add("book-exit"),setTimeout(a,300)}}),ne=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.hideEnteringElements,n=t.animateEnteringElements,r=t.animateExitingElements,o=t.animateFlippedElements,e.next=3,Promise.all([a(),r()]);case 3:o(),n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function re(e){var t=e.books,a=e.showShelfRibbon;return r.a.createElement(P.b,{flipKey:t,handleEnterUpdateDelete:ne},r.a.createElement("ol",{className:"BookGrid"},t.map((function(e){return r.a.createElement(P.a,Object.assign({key:e.id,flipId:e.id},ae),r.a.createElement("li",{className:"BookGrid-item"},r.a.createElement(te,{book:e,showShelfRibbon:a})))}))))}re.defaultProps={showShelfRibbon:!1};var oe=re;a(56);var le=function(e){var t=e.type,a=e.illustration,n=e.title,o=e.text;return r.a.createElement("div",{className:k()("PageInfo",t)},a&&r.a.createElement("div",{className:"PageInfo-illustration"},a),r.a.createElement("div",{className:"PageInfo-content"},n&&r.a.createElement("h2",{className:"PageInfo-title"},n),o&&r.a.createElement("p",{className:"PageInfo-text"},o)))},ce=a(36),ie=a.n(ce);a(57);function se(e){var t=e.position,a=e.className,n=e.children;return r.a.createElement("header",{className:k()("Header",t,a)},n)}function ue(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:k()("HeaderLayout",t)},a)}se.defaultProps={position:"fixed"},se.Logo=function(){return r.a.createElement("img",{src:ie.a,className:"Header-logo",alt:"MyReads logo"})};a(58);var me=a(37),de=a.n(me);function fe(e){var t=e.loading,a=e.children;return t?r.a.createElement("div",{className:"PageLoader"},r.a.createElement(de.a,{type:"bars",color:"var(--color-primary)"})):r.a.createElement(r.a.Fragment,null,"function"===typeof a?a():a)}function he(){var e=Object(n.useContext)(Re),t=e.theme,a=e.setTheme,o="light"===t?"dark":"light";return r.a.createElement(Y,{title:"Toggle light/dark theme",icon:"light"!==t?w.h:w.f,onClick:function(){return a(o)}})}a(59),a(60);var pe=function(e){var t=e.header,a=e.renderBody,n=e.floatingActionButton,o=e.loading,l=e.error;return r.a.createElement("div",{className:"Scaffold"},t,r.a.createElement("main",{className:"Scaffold-body"},r.a.createElement(fe,{loading:o},l?function(){return function(e){var t;return console.log(e.name,e.message),t="TypeError"===e.name&&e.message.startsWith("NetworkError")?{illustration:r.a.createElement(N.e,{primarycolor:"var(--color-error)"}),title:"Network Error",text:"Error when attempting to fetch data from the server"}:{illustration:r.a.createElement(N.f,{primarycolor:"var(--color-error)"}),title:"Ops! Something went wrong!",text:"Error when attempting to fetch data from the server"},r.a.createElement(le,Object.assign({type:"error"},t))}(l)}:a)),n&&r.a.createElement("div",{className:"Scaffold-fab"},n))};function ve(e){var t=e.onTermChipClick;return r.a.createElement("div",{className:"Search-content"},r.a.createElement("div",{className:"SearchHelp"},r.a.createElement("div",{className:"SearchHelp-illustration"},r.a.createElement(N.d,{primarycolor:"var(--color-primary)"})),r.a.createElement("p",{className:"SearchHelp-text"},r.a.createElement("strong",null,"Note:")," the backend API uses a fixed set of cached search results and is limited to the following search terms (including prefixes of them). Any other query will return no results."),r.a.createElement("ul",{className:"SearchHelp-term-list"},M.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("span",{className:"search-term-chip",onClick:function(){return t(e)}},e))})))))}function Ee(e){var t=e.value,a=e.placeholder,o=e.autoFocus,l=e.onChange,i=e.onClear,s=Object(n.useState)(o),u=Object(c.a)(s,2),m=u[0],d=u[1],f=Object(n.useRef)(null);return r.a.createElement("div",{className:k()("SearchField",{onFocus:m})},r.a.createElement("div",{className:"SearchField-icon"},r.a.createElement(I.a,{icon:w.g})),r.a.createElement("input",{ref:f,type:"text",autoFocus:o,placeholder:a,value:t,onChange:function(e){return l(e.target.value)},onFocus:function(){return d(!0)},onBlur:function(){return d(!1)}}),r.a.createElement("button",{className:k()("SearchField-clear",{hidden:!t}),onMouseDown:function(e){return e.preventDefault()},onClick:function(e){d(!0),f.current.focus(),i&&i()}},"\xd7"))}function be(e){return e.trim()}Ee.defaultProps={autoFocus:!1};var ye=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,inputQuery:"",resultsQuery:"",results:[],error:null},e.onInputQueryChange=function(t){e.setState({inputQuery:t}),e.fetchResultsDebounced(t)},e.fetchResults=function(t){var a=be(t);a!==e.state.resultsQuery?a?(e.setState({loading:!0}),B(a).then((function(t){return e.receiveResults(t,a)})).catch((function(t){return e.setState({loading:!1,error:t})}))):e.setState({results:[],resultsQuery:"",loading:!1}):e.state.loading&&e.setState({loading:!1})},e.receiveResults=function(t,a){if(be(e.state.inputQuery)!==a)console.log('Ignoring results for outdated query "%s"',a);else if("error"in t)if(t.error.includes("empty query"))e.setState({results:[],resultsQuery:a,loading:!1});else{var n=Error(t.error);console.error(n),e.setState({loading:!1,error:n})}else e.setState({results:t,resultsQuery:a,loading:!1})},e.fetchResultsDebounced=Object(D.debounce)(e.fetchResults,a.DEBOUNCE_TIME),e.setQuery=function(t){e.setState({inputQuery:t}),e.fetchResults(t)},e.onClearInput=function(){console.log("Clear input"),e.onInputQueryChange("")},e}return Object(p.a)(a,[{key:"renderResults",value:function(){var e=this.state,t=e.results,a=e.resultsQuery,n=this.props.booksByID,o=t.map((function(e){return e.id in n?n[e.id]:e}));return 0===t.length?r.a.createElement(le,{illustration:r.a.createElement(N.b,{primarycolor:"var(--color-primary)"}),title:"No books found",text:"Couldn't find any book for \"".concat(a,'"')}):r.a.createElement("div",{className:"Search-content"},r.a.createElement(oe,{books:o,showShelfRibbon:!0}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.inputQuery,n=t.resultsQuery,o=t.loading,l=t.error;return r.a.createElement(pe,{loading:o||this.props.loading,error:l||this.props.error,header:r.a.createElement(se,{position:"fixed",className:"Search-header"},r.a.createElement(ue,null,r.a.createElement(b.Link,{to:"/"},r.a.createElement(V,null)),r.a.createElement(Ee,{placeholder:"Search books...",autoFocus:!0,value:a,onChange:this.onInputQueryChange,onClear:this.onClearInput}),r.a.createElement(he,null))),renderBody:function(){return n?e.renderResults():r.a.createElement(ve,{onTermChipClick:e.setQuery})}})}}]),a}(r.a.Component);ye.DEBOUNCE_TIME=500;var ge=ye,ke=a(39);a(63);function Ne(e,t){return e.title<t.title?-1:e.title>t.title?1:e.publishedDate<t.publishedDate?-1:e.publishedDate>t.publishedDate?1:0}var Oe=function(e){var t=e.title,a=e.books,n=e.icon,o=e.color,l=Object(J.a)(e,["title","books","icon","color"]);return r.a.createElement("div",Object.assign({className:"Bookshelf"},l),r.a.createElement("h2",{className:"Bookshelf-title"},n&&r.a.createElement(I.a,{icon:n,color:o,className:"Bookshelf-icon"}),t),r.a.createElement("div",{className:"Bookshelf-content"},a.length>0?function(e){var t=e.sort(Ne);return r.a.createElement(oe,{books:t})}(a):r.a.createElement("div",{className:"Bookshelf-empty"},r.a.createElement("div",{className:"illustration"},r.a.createElement(N.a,{primarycolor:"var(--color-secondary)"})),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"content-title"},"This shelf is empty"),r.a.createElement("p",{className:"content-text"},"Click the search icon on the top-right of the page to find and add new books!")))))};a(64);function je(e){var t=e.children,a=e.className;return r.a.createElement("nav",null,r.a.createElement("ol",{className:k()("Nav",a)},t))}je.Item=function(e){var t=e.children,a=e.className,n=Object(J.a)(e,["children","className"]);return r.a.createElement("li",Object.assign({className:k()("NavItem",a)},n),t)};var Ce=je;a(65);function Se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-100;window.scrollTo({top:e.offsetTop+t,behavior:"smooth"})}function Be(){return r.a.createElement(se,null,r.a.createElement(ue,null,r.a.createElement("div",{className:"Library-logo-wrapper"},r.a.createElement(se.Logo,null)),r.a.createElement(Ce,{className:"Library-nav"},x.inDisplayOrder.map((function(e){return r.a.createElement(Ce.Item,{key:e.id},r.a.createElement(ke.HashLink,{to:"#".concat(e.slug),scroll:Se},e.shortDisplayName))}))),r.a.createElement("div",{className:"Library-action-items"},r.a.createElement(b.Link,{to:"/search"},r.a.createElement(Y,{icon:w.g,title:"Search books"})),r.a.createElement(he,null))))}var De=r.a.memo((function(e){var t=e.booksByID,a=function(e){var t,a=Object.fromEntries(x.ids.map((function(e){return[e,[]]}))),n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a[r.shelf].push(r)}}catch(o){n.e(o)}finally{n.f()}return a}(L(t));return r.a.createElement("div",{className:"Library-content"},x.inDisplayOrder.map((function(e){return r.a.createElement(Oe,{id:e.slug,key:e.id,icon:e.icon,color:e.color,title:e.displayName,books:a[e.id]})})))})),Ie=r.a.memo((function(e){var t=e.booksByID,a=e.loading,n=e.error;return r.a.createElement(pe,{loading:a,error:n,header:r.a.createElement(Be,null),renderBody:function(){return r.a.createElement(De,{booksByID:t})}})}));Ie.defaultProps={loading:!1,error:null};var we=Ie,Re=(a(66),r.a.createContext({theme:"light",setTheme:function(e){return null}})),Te=r.a.createContext({updateBookShelf:function(e,t){return null}}),xe=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).setTheme=function(e){localStorage.theme=e,n.themeContext={theme:e,setTheme:n.setTheme},n.setState({theme:e})},n.fetchBooks=function(){return console.log("Fetching books"),n.setState({loading:!0,error:null}),fetch("".concat(j,"/books"),{headers:S}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(e){n.setState({booksByID:Q(e),loading:!1,error:null})})).catch((function(e){n.setState({loading:!1,error:e})}))},n.updateBookShelf=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log('Moving book "%s" to shelf %s',t.title,a),r=n.updateBookShelfLocally(t,a),e.prev=2,e.next=5,l=t.id,c=a,fetch("".concat(j,"/books/").concat(l),{method:"PUT",headers:Object(u.a)(Object(u.a)({},S),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:c})}).then((function(e){return e.json()}));case 5:"error"in(o=e.sent)?(O.b.error('Your last operation was rejected by the server. Details: "'.concat(o.error,'"')),r()):(console.log("Book updated server-side!"),n.handleEventualStateInconsistency(o)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),O.b.error('Your last operation did not succeed. Error details: "'.concat(e.t0.message,'"')),r();case 14:case"end":return e.stop()}var l,c}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),n.updateBookShelfLocally=function(e,t){var a=n.state.booksByID,r=e.id in a?a[e.id].shelf:R.NONE;return n.setState((function(a){if(r===t)return null;if(t===R.NONE)return{booksByID:z(e.id,a.booksByID)};var n=Object(u.a)(Object(u.a)({},e),{},{shelf:t});return{booksByID:Object(u.a)(Object(u.a)({},a.booksByID),{},Object(s.a)({},e.id,n))}}),(function(){console.log("Optimistic update completed:",{book:e.title,from:r,to:t})})),function(){return n.updateBookShelfLocally(e,r)}},n.handleEventualStateInconsistency=function(e){console.log("Checking state consistency..."),function(e,t){var a=L(t).map((function(e){return e.length})).reduce((function(e,t){return e+t})),n=A(e).length;if(n!==a)return console.log("Inconsistent number of books (local / server): ",n,a),!1;var r,o=Object(i.a)(F(t));try{for(o.s();!(r=o.n()).done;){var l,s=Object(c.a)(r.value,2),u=s[0],m=s[1],d=Object(i.a)(m);try{for(d.s();!(l=d.n()).done;){var f=l.value;if(!e[f]||e[f].shelf!==u)return!1}}catch(h){d.e(h)}finally{d.f()}}}catch(h){o.e(h)}finally{o.f()}return!0}(n.state.booksByID,e)||(O.b.info("This page was refreshed because it was detected to be out of sync with the cloud. This happens when you use MyReads from multiple devices or tabs.",{autoClose:1e4,position:"bottom-right"}),n.fetchBooks())},n.state={theme:localStorage.theme||"light",booksByID:{},loading:!1,error:null},n.libraryContext={updateBookShelf:n.updateBookShelf},n.themeContext={theme:n.state.theme,setTheme:n.setTheme},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"render",value:function(){var e=this.state,t=e.booksByID,a=e.loading,n=e.error,o=e.theme;return r.a.createElement(b.HashRouter,{basename:"/"},r.a.createElement("div",{className:k()("theme",o)},r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null),r.a.createElement(Te.Provider,{value:this.libraryContext},r.a.createElement(Re.Provider,{value:this.themeContext},r.a.createElement(y.g,null,r.a.createElement(y.d,{exact:!0,path:"/"},r.a.createElement(we,{booksByID:t,loading:a,error:n})),r.a.createElement(y.d,{exact:!0,path:"/search"},r.a.createElement(ge,{booksByID:t,loading:a,error:n})),r.a.createElement(y.d,{path:"*"},r.a.createElement(Me,null))))))))}}]),a}(r.a.Component);function Me(){return r.a.createElement(le,{illustration:r.a.createElement(N.c,{primarycolor:"var(--color-primary)",accentcolor:"#444"}),title:"Page not found",text:"The URL you typed is not valid."})}a(67);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.20ff2abd.chunk.js.map