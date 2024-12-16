import{u as P,h as se,i as le,j as Y,k as te,l as ae,t as ie,m as ue,n as A,p as Q,q as re,w as _,v as l,x as ne,R as j,y as oe,z as ce,A as ve,B as he,C as de,D as me,E as ye,F as pe,G as ge,H as q,I as fe,J as He,K as Re,L as M,M as U,N as ke}from"./app-DOil7D43.js";const we=["/","/about.html","/catalog.html","/integrate/","/iot/","/mes/","/other/","/404.html"],Qe="SLIMSEARCH_QUERY_HISTORY",p=P(Qe,[]),qe=()=>{const{queryHistoryCount:t}=q,a=t>0;return{enabled:a,queryHistories:p,addQueryHistory:i=>{a&&(p.value=Array.from(new Set([i,...p.value.slice(0,t-1)])))},removeQueryHistory:i=>{p.value=[...p.value.slice(0,i),...p.value.slice(i+1)]}}},E=t=>we[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:O}=q,g=P(xe,[]),Se=()=>{const t=O>0;return{enabled:t,resultHistories:g,addResultHistory:a=>{if(t){const i={link:E(a),display:a.display};"header"in a&&(i.header=a.header),g.value=[i,...g.value.slice(0,O-1)]}},removeResultHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},Ce=t=>{const a=he(),i=Y(),x=de(),r=A(0),H=Q(()=>r.value>0),m=me([]);return ye(()=>{const{search:y,terminate:S}=pe(),f=ge(o=>{const{resultsFilter:R=n=>n,querySplitter:F,suggestionsFilter:C,...L}=a.value;o?(r.value+=1,y(o,i.value,L).then(n=>R(n,o,i.value,x.value)).then(n=>{r.value-=1,m.value=n}).catch(n=>{console.warn(n),r.value-=1,r.value||(m.value=[])})):m.value=[]},q.searchDelay-q.suggestDelay,{maxWait:5e3});_([t,i],([o])=>{f(o.join(" "))},{immediate:!0}),fe(()=>{S()})}),{isSearching:H,results:m}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:a}){const i=le(),x=Y(),r=te(ae),{enabled:H,addQueryHistory:m,queryHistories:y,removeQueryHistory:S}=qe(),{enabled:f,resultHistories:o,addResultHistory:R,removeResultHistory:F}=Se(),C=H||f,L=ie(t,"queries"),{results:n,isSearching:B}=Ce(L),u=ue({isQuery:!0,index:0}),h=A(0),d=A(0),T=Q(()=>C&&(y.value.length>0||o.value.length>0)),D=Q(()=>n.value.length>0),$=Q(()=>n.value[h.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?o.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:o.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{h.value=h.value>0?h.value-1:n.value.length-1,d.value=$.value.contents.length-1},K=()=>{h.value=h.value<n.value.length-1?h.value+1:0,d.value=0},N=()=>{d.value<$.value.contents.length-1?d.value+=1:K()},V=()=>{d.value>0?d.value-=1:J()},b=e=>e.map(s=>ke(s)?s:l(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=He[e.index]||"$content",[c,w=""]=Re(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(v=>l("div",b([c,...v,w])))}return e.display.map(s=>l("div",b(s)))},k=()=>{h.value=0,d.value=0,a("updateQuery",""),a("close")},X=()=>H?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.queryHistory),y.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:c=>{c.preventDefault(),c.stopPropagation(),S(s)}})]))])):null,Z=()=>f?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.resultHistory),o.value.map((e,s)=>l(j,{to:e.link,class:["slimsearch-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>b(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:U,onClick:c=>{c.preventDefault(),c.stopPropagation(),F(s)}})]))])):null;return re("keydown",e=>{if(t.isFocusing){if(D.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=$.value.contents[d.value];m(t.queries.join(" ")),R(s),i.push(E(s)),k()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(i.push(o.value[s].link),k())}}}}),_([h,d],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:t.queries.length?!D.value:!T.value}],id:"slimsearch-results"},t.queries.length?B.value?l(ne,{hint:r.value.searching}):D.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const w=h.value===c;return l("li",{class:["slimsearch-result-list-item",{active:w}]},[l("div",{class:"slimsearch-result-title"},e||r.value.defaultTitle),s.map((v,ee)=>{const I=w&&d.value===ee;return l(j,{to:E(v),class:["slimsearch-result-item",{active:I,"aria-selected":I}],onClick:()=>{m(t.queries.join(" ")),R(v),k()}},()=>[v.type==="text"?null:l(v.type==="title"?oe:v.type==="heading"?ce:ve,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",W(v))])])})])})):r.value.emptyResult:C?T.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{De as default};