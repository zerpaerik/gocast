import{a as ot}from"./chunk-WCBSUTTC.js";import{a as at}from"./chunk-5YCAR6ZG.js";import{a as nt}from"./chunk-XZRHDCBB.js";import"./chunk-HX3ESI56.js";import{b as rt}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import{A as Ie,C as it,c as Je,g as Ze,h as Ye,n as Xe,r as et,t as tt}from"./chunk-LWEV5N6L.js";import{k as $e,o as Te}from"./chunk-6SH7557L.js";import{Ba as ue,Bc as We,Ca as ce,Cc as He,Dc as Qe,Eb as Ke,Hc as p,Ic as X,Jc as De,Ma as Se,Na as Ee,Pc as Ge,Qb as ne,Qd as xe,Rd as we,Vb as G,ce as ke,hc as c,ic as d,jc as ie,nc as Ce,q as Ve,qa as be,ra as de,tc as he,vc as ae,yb as D,zb as Y}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import{f as ft,h as mt}from"./chunk-BI7C37SH.js";var lt=ft((Le,ze)=>{"use strict";((n,S)=>{typeof define=="function"&&define.amd?define([],S):typeof ze=="object"&&typeof Le<"u"?ze.exports=S():n.Papa=S()})(Le,function n(){var S=typeof self<"u"?self:typeof window<"u"?window:S!==void 0?S:{},r,a=!S.document&&!!S.postMessage,x=S.IS_PAPA_WORKER||!1,V={},je=0,u={};function ee(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var i=Fe(t);i.chunkSize=parseInt(i.chunkSize),t.step||t.chunk||(i.chunkSize=null),this._handle=new Ne(i),(this._handle.streamer=this)._config=i}.call(this,e),this.parseChunk=function(t,i){var s=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<s){let m=this._config.newline;m||(o=this._config.quoteChar||'"',m=this._handle.guessLineEndings(t,o)),t=[...t.split(m).slice(s)].join(m)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&(o=this._config.beforeFirstChunk(t))!==void 0&&(t=o),this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+t,o=(this._partialLine="",this._handle.parse(s,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(t=o.meta.cursor,s=(this._finished||(this._partialLine=s.substring(t-this._baseIndex),this._baseIndex=t),o&&o.data&&(this._rowCount+=o.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),x)S.postMessage({results:o,workerId:u.WORKER_ID,finished:s});else if(k(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=o=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!s||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),s||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(t){k(this._config.error)?this._config.error(t):x&&this._config.error&&S.postMessage({workerId:u.WORKER_ID,error:t,finished:!1})}}function _e(e){var t;(e=e||{}).chunkSize||(e.chunkSize=u.RemoteChunkSize),ee.call(this,e),this._nextChunk=a?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),a||(t.onload=re(this._chunkLoaded,this),t.onerror=re(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!a),this._config.downloadRequestHeaders){var i,s=this._config.downloadRequestHeaders;for(i in s)t.setRequestHeader(i,s[i])}var o;this._config.chunkSize&&(o=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+o));try{t.send(this._config.downloadRequestBody)}catch(m){this._chunkError(m.message)}a&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(i=>(i=i.getResponseHeader("Content-Range"))!==null?parseInt(i.substring(i.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(i){i=t.statusText||i,this._sendError(new Error(i))}}function ve(e){(e=e||{}).chunkSize||(e.chunkSize=u.LocalChunkSize),ee.call(this,e);var t,i,s=typeof FileReader<"u";this.stream=function(o){this._input=o,i=o.slice||o.webkitSlice||o.mozSlice,s?((t=new FileReader).onload=re(this._chunkLoaded,this),t.onerror=re(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var o=this._input,m=(this._config.chunkSize&&(m=Math.min(this._start+this._config.chunkSize,this._input.size),o=i.call(o,this._start,m)),t.readAsText(o,this._config.encoding));s||this._chunkLoaded({target:{result:m}})},this._chunkLoaded=function(o){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(o.target.result)},this._chunkError=function(){this._sendError(t.error)}}function pe(e){var t;ee.call(this,e=e||{}),this.stream=function(i){return t=i,this._nextChunk()},this._nextChunk=function(){var i,s;if(!this._finished)return i=this._config.chunkSize,t=i?(s=t.substring(0,i),t.substring(i)):(s=t,""),this._finished=!t,this.parseChunk(s)}}function ye(e){ee.call(this,e=e||{});var t=[],i=!0,s=!1;this.pause=function(){ee.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){ee.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(o){this._input=o,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=re(function(o){try{t.push(typeof o=="string"?o:o.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(m){this._streamError(m)}},this),this._streamError=re(function(o){this._streamCleanUp(),this._sendError(o)},this),this._streamEnd=re(function(){this._streamCleanUp(),s=!0,this._streamData("")},this),this._streamCleanUp=re(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Ne(e){var t,i,s,o,m=Math.pow(2,53),L=-m,W=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,H=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,v=this,F=0,h=0,P=!1,f=!1,y=[],l={data:[],errors:[],meta:{}};function z(b){return e.skipEmptyLines==="greedy"?b.join("").trim()==="":b.length===1&&b[0].length===0}function T(){if(l&&s&&(Q("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),s=!1),e.skipEmptyLines&&(l.data=l.data.filter(function(I){return!z(I)})),U()){let I=function(j,R){k(e.transformHeader)&&(j=e.transformHeader(j,R)),y.push(j)};var g=I;if(l)if(Array.isArray(l.data[0])){for(var b=0;U()&&b<l.data.length;b++)l.data[b].forEach(I);l.data.splice(0,1)}else l.data.forEach(I)}function E(I,j){for(var R=e.header?{}:[],w=0;w<I.length;w++){var _=w,q=I[w],q=((C,A)=>(M=>(e.dynamicTypingFunction&&e.dynamicTyping[M]===void 0&&(e.dynamicTyping[M]=e.dynamicTypingFunction(M)),(e.dynamicTyping[M]||e.dynamicTyping)===!0))(C)?A==="true"||A==="TRUE"||A!=="false"&&A!=="FALSE"&&((M=>{if(W.test(M)&&(M=parseFloat(M),L<M&&M<m))return 1})(A)?parseFloat(A):H.test(A)?new Date(A):A===""?null:A):A)(_=e.header?w>=y.length?"__parsed_extra":y[w]:_,q=e.transform?e.transform(q,_):q);_==="__parsed_extra"?(R[_]=R[_]||[],R[_].push(q)):R[_]=q}return e.header&&(w>y.length?Q("FieldMismatch","TooManyFields","Too many fields: expected "+y.length+" fields but parsed "+w,h+j):w<y.length&&Q("FieldMismatch","TooFewFields","Too few fields: expected "+y.length+" fields but parsed "+w,h+j)),R}var O;l&&(e.header||e.dynamicTyping||e.transform)&&(O=1,!l.data.length||Array.isArray(l.data[0])?(l.data=l.data.map(E),O=l.data.length):l.data=E(l.data,0),e.header&&l.meta&&(l.meta.fields=y),h+=O)}function U(){return e.header&&y.length===0}function Q(b,E,O,g){b={type:b,code:E,message:O},g!==void 0&&(b.row=g),l.errors.push(b)}k(e.step)&&(o=e.step,e.step=function(b){l=b,U()?T():(T(),l.data.length!==0&&(F+=b.data.length,e.preview&&F>e.preview?i.abort():(l.data=l.data[0],o(l,v))))}),this.parse=function(b,E,O){var g=e.quoteChar||'"',g=(e.newline||(e.newline=this.guessLineEndings(b,g)),s=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(b),l.meta.delimiter=e.delimiter):((g=((I,j,R,w,_)=>{var q,C,A,M;_=_||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var se=0;se<_.length;se++){for(var $,me=_[se],B=0,J=0,N=0,K=(A=void 0,new Ae({comments:w,delimiter:me,newline:j,preview:10}).parse(I)),te=0;te<K.data.length;te++)R&&z(K.data[te])?N++:($=K.data[te].length,J+=$,A===void 0?A=$:0<$&&(B+=Math.abs($-A),A=$));0<K.data.length&&(J/=K.data.length-N),(C===void 0||B<=C)&&(M===void 0||M<J)&&1.99<J&&(C=B,q=me,M=J)}return{successful:!!(e.delimiter=q),bestDelimiter:q}})(b,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=g.bestDelimiter:(s=!0,e.delimiter=u.DefaultDelimiter),l.meta.delimiter=e.delimiter),Fe(e));return e.preview&&e.header&&g.preview++,t=b,i=new Ae(g),l=i.parse(t,E,O),T(),P?{meta:{paused:!0}}:l||{meta:{paused:!1}}},this.paused=function(){return P},this.pause=function(){P=!0,i.abort(),t=k(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){v.streamer._halted?(P=!1,v.streamer.parseChunk(t,!0)):setTimeout(v.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,i.abort(),l.meta.aborted=!0,k(e.complete)&&e.complete(l),t=""},this.guessLineEndings=function(I,g){I=I.substring(0,1048576);var g=new RegExp(fe(g)+"([^]*?)"+fe(g),"gm"),O=(I=I.replace(g,"")).split("\r"),g=I.split(`
`),I=1<g.length&&g[0].length<O[0].length;if(O.length===1||I)return`
`;for(var j=0,R=0;R<O.length;R++)O[R][0]===`
`&&j++;return j>=O.length/2?`\r
`:"\r"}}function fe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ae(e){var t=(e=e||{}).delimiter,i=e.newline,s=e.comments,o=e.step,m=e.preview,L=e.fastMode,W=null,H=!1,v=e.quoteChar==null?'"':e.quoteChar,F=v;if(e.escapeChar!==void 0&&(F=e.escapeChar),(typeof t!="string"||-1<u.BAD_DELIMITERS.indexOf(t))&&(t=","),s===t)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<u.BAD_DELIMITERS.indexOf(s))&&(s=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var h=0,P=!1;this.parse=function(f,y,l){if(typeof f!="string")throw new Error("Input must be a string");var z=f.length,T=t.length,U=i.length,Q=s.length,b=k(o),E=[],O=[],g=[],I=h=0;if(!f)return B();if(L||L!==!1&&f.indexOf(v)===-1){for(var j=f.split(i),R=0;R<j.length;R++){if(g=j[R],h+=g.length,R!==j.length-1)h+=i.length;else if(l)return B();if(!s||g.substring(0,Q)!==s){if(b){if(E=[],M(g.split(t)),J(),P)return B()}else M(g.split(t));if(m&&m<=R)return E=E.slice(0,m),B(!0)}}return B()}for(var w=f.indexOf(t,h),_=f.indexOf(i,h),q=new RegExp(fe(F)+fe(v),"g"),C=f.indexOf(v,h);;)if(f[h]===v)for(C=h,h++;;){if((C=f.indexOf(v,C+1))===-1)return l||O.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:h}),$();if(C===z-1)return $(f.substring(h,C).replace(q,v));if(v===F&&f[C+1]===F)C++;else if(v===F||C===0||f[C-1]!==F){w!==-1&&w<C+1&&(w=f.indexOf(t,C+1));var A=se((_=_!==-1&&_<C+1?f.indexOf(i,C+1):_)===-1?w:Math.min(w,_));if(f.substr(C+1+A,T)===t){g.push(f.substring(h,C).replace(q,v)),f[h=C+1+A+T]!==v&&(C=f.indexOf(v,h)),w=f.indexOf(t,h),_=f.indexOf(i,h);break}if(A=se(_),f.substring(C+1+A,C+1+A+U)===i){if(g.push(f.substring(h,C).replace(q,v)),me(C+1+A+U),w=f.indexOf(t,h),C=f.indexOf(v,h),b&&(J(),P))return B();if(m&&E.length>=m)return B(!0);break}O.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:h}),C++}}else if(s&&g.length===0&&f.substring(h,h+Q)===s){if(_===-1)return B();h=_+U,_=f.indexOf(i,h),w=f.indexOf(t,h)}else if(w!==-1&&(w<_||_===-1))g.push(f.substring(h,w)),h=w+T,w=f.indexOf(t,h);else{if(_===-1)break;if(g.push(f.substring(h,_)),me(_+U),b&&(J(),P))return B();if(m&&E.length>=m)return B(!0)}return $();function M(N){E.push(N),I=h}function se(N){var K=0;return K=N!==-1&&(N=f.substring(C+1,N))&&N.trim()===""?N.length:K}function $(N){return l||(N===void 0&&(N=f.substring(h)),g.push(N),h=z,M(g),b&&J()),B()}function me(N){h=N,M(g),g=[],_=f.indexOf(i,h)}function B(N){if(e.header&&!y&&E.length&&!H){var K=E[0],te={},Oe=new Set(K);let qe=!1;for(let le=0;le<K.length;le++){let Z=K[le];if(te[Z=k(e.transformHeader)?e.transformHeader(Z,le):Z]){let ge,Be=te[Z];for(;ge=Z+"_"+Be,Be++,Oe.has(ge););Oe.add(ge),K[le]=ge,te[Z]++,qe=!0,(W=W===null?{}:W)[ge]=Z}else te[Z]=1,K[le]=Z;Oe.add(Z)}qe&&console.warn("Duplicate headers found and renamed."),H=!0}return{data:E,errors:O,meta:{delimiter:t,linebreak:i,aborted:P,truncated:!!N,cursor:I+(y||0),renamedHeaders:W}}}function J(){o(B()),E=[],O=[]}},this.abort=function(){P=!0},this.getCharIndex=function(){return h}}function pt(e){var t=e.data,i=V[t.workerId],s=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){s=!0,Ue(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Pe,resume:Pe};if(k(i.userStep)){for(var m=0;m<t.results.data.length&&(i.userStep({data:t.results.data[m],errors:t.results.errors,meta:t.results.meta},o),!s);m++);delete t.results}else k(i.userChunk)&&(i.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!s&&Ue(t.workerId,t.results)}function Ue(e,t){var i=V[e];k(i.userComplete)&&i.userComplete(t),i.terminate(),delete V[e]}function Pe(){throw new Error("Not implemented.")}function Fe(e){if(typeof e!="object"||e===null)return e;var t,i=Array.isArray(e)?[]:{};for(t in e)i[t]=Fe(e[t]);return i}function re(e,t){return function(){e.apply(t,arguments)}}function k(e){return typeof e=="function"}return u.parse=function(e,t){var i=(t=t||{}).dynamicTyping||!1;if(k(i)&&(t.dynamicTypingFunction=i,i={}),t.dynamicTyping=i,t.transform=!!k(t.transform)&&t.transform,!t.worker||!u.WORKERS_SUPPORTED)return i=null,u.NODE_STREAM_INPUT,typeof e=="string"?(e=(s=>s.charCodeAt(0)!==65279?s:s.slice(1))(e),i=new(t.download?_e:pe)(t)):e.readable===!0&&k(e.read)&&k(e.on)?i=new ye(t):(S.File&&e instanceof File||e instanceof Object)&&(i=new ve(t)),i.stream(e);(i=(()=>{var s;return!!u.WORKERS_SUPPORTED&&(s=(()=>{var o=S.URL||S.webkitURL||null,m=n.toString();return u.BLOB_URL||(u.BLOB_URL=o.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",m,")();"],{type:"text/javascript"})))})(),(s=new S.Worker(s)).onmessage=pt,s.id=je++,V[s.id]=s)})()).userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=k(t.step),t.chunk=k(t.chunk),t.complete=k(t.complete),t.error=k(t.error),delete t.worker,i.postMessage({input:e,config:t,workerId:i.id})},u.unparse=function(e,t){var i=!1,s=!0,o=",",m=`\r
`,L='"',W=L+L,H=!1,v=null,F=!1,h=((()=>{if(typeof t=="object"){if(typeof t.delimiter!="string"||u.BAD_DELIMITERS.filter(function(y){return t.delimiter.indexOf(y)!==-1}).length||(o=t.delimiter),typeof t.quotes!="boolean"&&typeof t.quotes!="function"&&!Array.isArray(t.quotes)||(i=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(H=t.skipEmptyLines),typeof t.newline=="string"&&(m=t.newline),typeof t.quoteChar=="string"&&(L=t.quoteChar),typeof t.header=="boolean"&&(s=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");v=t.columns}t.escapeChar!==void 0&&(W=t.escapeChar+L),t.escapeFormulae instanceof RegExp?F=t.escapeFormulae:typeof t.escapeFormulae=="boolean"&&t.escapeFormulae&&(F=/^[=+\-@\t\r].*$/)}})(),new RegExp(fe(L),"g"));if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return P(null,e,H);if(typeof e[0]=="object")return P(v||Object.keys(e[0]),e,H)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||v),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),P(e.fields||[],e.data||[],H);throw new Error("Unable to serialize unrecognized input");function P(y,l,z){var T="",U=(typeof y=="string"&&(y=JSON.parse(y)),typeof l=="string"&&(l=JSON.parse(l)),Array.isArray(y)&&0<y.length),Q=!Array.isArray(l[0]);if(U&&s){for(var b=0;b<y.length;b++)0<b&&(T+=o),T+=f(y[b],b);0<l.length&&(T+=m)}for(var E=0;E<l.length;E++){var O=(U?y:l[E]).length,g=!1,I=U?Object.keys(l[E]).length===0:l[E].length===0;if(z&&!U&&(g=z==="greedy"?l[E].join("").trim()==="":l[E].length===1&&l[E][0].length===0),z==="greedy"&&U){for(var j=[],R=0;R<O;R++){var w=Q?y[R]:R;j.push(l[E][w])}g=j.join("").trim()===""}if(!g){for(var _=0;_<O;_++){0<_&&!I&&(T+=o);var q=U&&Q?y[_]:_;T+=f(l[E][q],_)}E<l.length-1&&(!z||0<O&&!I)&&(T+=m)}}return T}function f(y,l){var z,T;return y==null?"":y.constructor===Date?JSON.stringify(y).slice(1,25):(T=!1,F&&typeof y=="string"&&F.test(y)&&(y="'"+y,T=!0),z=y.toString().replace(h,W),(T=T||i===!0||typeof i=="function"&&i(y,l)||Array.isArray(i)&&i[l]||((U,Q)=>{for(var b=0;b<Q.length;b++)if(-1<U.indexOf(Q[b]))return!0;return!1})(z,u.BAD_DELIMITERS)||-1<z.indexOf(o)||z.charAt(0)===" "||z.charAt(z.length-1)===" ")?L+z+L:z)}},u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!a&&!!S.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=Ae,u.ParserHandle=Ne,u.NetworkStreamer=_e,u.FileStreamer=ve,u.StringStreamer=pe,u.ReadableStreamStreamer=ye,S.jQuery&&((r=S.jQuery).fn.parse=function(e){var t=e.config||{},i=[];return this.each(function(m){if(!(r(this).prop("tagName").toUpperCase()==="INPUT"&&r(this).attr("type").toLowerCase()==="file"&&S.FileReader)||!this.files||this.files.length===0)return!0;for(var L=0;L<this.files.length;L++)i.push({file:this.files[L],inputElem:this,instanceConfig:r.extend({},t)})}),s(),this;function s(){if(i.length===0)k(e.complete)&&e.complete();else{var m,L,W,H,v=i[0];if(k(e.before)){var F=e.before(v.file,v.inputElem);if(typeof F=="object"){if(F.action==="abort")return m="AbortError",L=v.file,W=v.inputElem,H=F.reason,void(k(e.error)&&e.error({name:m},L,W,H));if(F.action==="skip")return void o();typeof F.config=="object"&&(v.instanceConfig=r.extend(v.instanceConfig,F.config))}else if(F==="skip")return void o()}var h=v.instanceConfig.complete;v.instanceConfig.complete=function(P){k(h)&&h(P,v.file,v.inputElem),o()},u.parse(v.file,v.instanceConfig)}}function o(){i.splice(0,1),s()}}),x&&(S.onmessage=function(e){e=e.data,u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string"?S.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0}):(S.File&&e.input instanceof File||e.input instanceof Object)&&(e=u.parse(e.input,e.config))&&S.postMessage({workerId:u.WORKER_ID,results:e,finished:!0})}),(_e.prototype=Object.create(ee.prototype)).constructor=_e,(ve.prototype=Object.create(ee.prototype)).constructor=ve,(pe.prototype=Object.create(pe.prototype)).constructor=pe,(ye.prototype=Object.create(ee.prototype)).constructor=ye,u})});var Re=(()=>{class n{asegurados=[{id:1,nombre:"Juan P\xE9rez",cedula:"V12345678",poliza:"POL001",estado:"Activo"},{id:2,nombre:"Mar\xEDa Gonz\xE1lez",cedula:"V87654321",poliza:"POL002",estado:"Activo"},{id:3,nombre:"Carlos Rodr\xEDguez",cedula:"V23456789",poliza:"POL003",estado:"Inactivo"},{id:4,nombre:"Ana L\xF3pez",cedula:"V34567890",poliza:"POL004",estado:"Activo"}];buscarAsegurado(r,a){let x=this.asegurados.filter(V=>V.cedula.toLowerCase().includes(r.toLowerCase())&&V.poliza.toLowerCase().includes(a.toLowerCase()));return Ve(x)}static \u0275fac=function(a){return new(a||n)};static \u0275prov=be({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yt(n,S){if(n&1&&(c(0,"div",14)(1,"p"),p(2),d()()),n&2){let r=ae();D(2),De(" ",r.mensajeBusqueda," ")}}function bt(n,S){if(n&1&&(c(0,"tr")(1,"td"),p(2),d(),c(3,"td"),p(4),d(),c(5,"td"),p(6),d(),c(7,"td"),p(8),d(),c(9,"td")(10,"span"),p(11),d()()()),n&2){let r=S.$implicit;D(2),X(r.id),D(2),X(r.nombre),D(2),X(r.cedula),D(2),X(r.poliza),D(3),De(" ",r.estado," ")}}function St(n,S){if(n&1&&(c(0,"div",15)(1,"table",16)(2,"thead")(3,"tr")(4,"th"),p(5,"ID"),d(),c(6,"th"),p(7,"Nombre"),d(),c(8,"th"),p(9,"C\xE9dula"),d(),c(10,"th"),p(11,"P\xF3liza"),d(),c(12,"th"),p(13,"Estado"),d()()(),c(14,"tbody"),ne(15,bt,12,5,"tr",17),d()()()),n&2){let r=ae();D(15),G("ngForOf",r.resultados)}}var st=(()=>{class n{searchService;fb;searchForm;resultados=[];mensajeBusqueda="";constructor(r,a){this.searchService=r,this.fb=a,this.searchForm=this.fb.group({cedula:[""],poliza:[""]})}buscar(){if(this.searchForm.valid){let{cedula:r,poliza:a}=this.searchForm.value;this.searchService.buscarAsegurado(r,a).subscribe(x=>{this.resultados=x,this.mensajeBusqueda=x.length>0?`Se encontraron ${x.length} resultado(s)`:"No se encontraron resultados"})}}static \u0275fac=function(a){return new(a||n)(Y(Re),Y(Ie))};static \u0275cmp=ue({type:n,selectors:[["app-search-asegurados"]],decls:22,vars:4,consts:[[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-5"],[1,"form-group"],["type","text","formControlName","cedula","placeholder","Ingrese la c\xE9dula",1,"form-control"],["type","text","formControlName","poliza","placeholder","Ingrese el n\xFAmero de p\xF3liza",1,"form-control"],[1,"col-md-2"],["type","submit",1,"btn","btn-primary","mt-4",3,"disabled"],["class","mt-4",4,"ngIf"],["class","table-responsive mt-3",4,"ngIf"],[1,"mt-4"],[1,"table-responsive","mt-3"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"]],template:function(a,x){a&1&&(c(0,"div",0)(1,"div",1)(2,"h4",2),p(3,"B\xFAsqueda de Asegurados"),d()(),c(4,"div",3)(5,"form",4),he("ngSubmit",function(){return x.buscar()}),c(6,"div",5)(7,"div",6)(8,"div",7)(9,"label"),p(10,"C\xE9dula"),d(),ie(11,"input",8),d()(),c(12,"div",6)(13,"div",7)(14,"label"),p(15,"N\xFAmero de P\xF3liza"),d(),ie(16,"input",9),d()(),c(17,"div",10)(18,"button",11),p(19," Buscar "),d()()()(),ne(20,yt,3,1,"div",12)(21,St,16,1,"div",13),d()()),a&2&&(D(5),G("formGroup",x.searchForm),D(13),G("disabled",!x.searchForm.valid),D(2),G("ngIf",x.mensajeBusqueda),D(),G("ngIf",x.resultados.length>0))},dependencies:[xe,we,Xe,Je,Ze,Ye,et,tt]})}return n})();var Et=mt(lt(),1),dt=(()=>{class n{constructor(){this._papa=Et}parse(r,a){return this._papa.parse(r,a)}unparse(r,a){return this._papa.unparse(r,a)}setLocalChunkSize(r){this._papa.LocalChunkSize=r}setRemoteChunkSize(r){this._papa.RemoteChunkSize=r}setDefaultDelimiter(r){this._papa.DefaultDelimiter=r}get badDelimiters(){return this._papa.BAD_DELIMITERS}get recordSeparator(){return this._papa.RECORD_SEP}get unitSeparator(){return this._papa.UNIT_SEP}get workersSupported(){return this._papa.WORKERS_SUPPORTED}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275prov=be({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var xt=["fileInput"];function wt(n,S){if(n&1&&(c(0,"tr")(1,"td"),p(2),d(),c(3,"td"),p(4),d(),c(5,"td"),p(6),d(),c(7,"td"),p(8),d()()),n&2){let r=S.$implicit;D(2),X(r.nombre),D(2),X(r.apellido),D(2),X(r.cedula),D(2),X(r.poliza)}}function kt(n,S){if(n&1){let r=Ce();c(0,"button",18),he("click",function(){Se(r);let x=ae(2);return Ee(x.guardarDatos())}),p(1," Guardar Datos "),d()}}function It(n,S){if(n&1){let r=Ce();c(0,"div",12)(1,"table",13)(2,"thead")(3,"tr")(4,"th"),p(5,"Nombre"),d(),c(6,"th"),p(7,"Apellido"),d(),c(8,"th"),p(9,"C\xE9dula"),d(),c(10,"th"),p(11,"P\xF3liza"),d()()(),c(12,"tbody"),ne(13,wt,9,4,"tr",14),d()(),c(14,"div",15)(15,"button",16),he("click",function(){Se(r);let x=ae();return Ee(x.limpiarDatos())}),p(16," Limpiar "),d(),ne(17,kt,2,0,"button",17),d()()}if(n&2){let r=ae();D(13),G("ngForOf",r.asegurados),D(4),G("ngIf",r.dataCargada)}}var ut=(()=>{class n{papa;fileInput;asegurados=[];archivoSeleccionado=null;dataCargada=!1;constructor(r){this.papa=r}onFileSelected(r){let a=r.target.files;a.length>0&&(this.archivoSeleccionado=a[0],this.procesarArchivo())}procesarArchivo(){this.archivoSeleccionado&&this.papa.parse(this.archivoSeleccionado,{complete:r=>{this.asegurados=r.data.filter(a=>a.length>=4).map(a=>({nombre:a[0]?.trim()||"",apellido:a[1]?.trim()||"",cedula:a[2]?.trim()||"",poliza:a[3]?.trim()||""})).filter(a=>a.nombre&&a.apellido&&a.cedula&&a.poliza),this.dataCargada=this.asegurados.length>0},header:!1,skipEmptyLines:!0})}guardarDatos(){this.asegurados.length!==0&&console.log("Datos a guardar:",this.asegurados)}limpiarDatos(){this.asegurados=[],this.dataCargada=!1,this.archivoSeleccionado=null,this.fileInput&&(this.fileInput.nativeElement.value="")}static \u0275fac=function(a){return new(a||n)(Y(dt))};static \u0275cmp=ue({type:n,selectors:[["app-upload-asegurados"]],viewQuery:function(a,x){if(a&1&&We(xt,5),a&2){let V;He(V=Qe())&&(x.fileInput=V.first)}},decls:15,vars:1,consts:[["fileInput",""],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row","mb-4"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["type","file","accept",".csv",1,"form-control",3,"change"],[1,"form-text","text-muted"],["class","table-responsive",4,"ngIf"],[1,"table-responsive"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],[1,"btn","btn-secondary","me-2",3,"click"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"btn","btn-primary",3,"click"]],template:function(a,x){if(a&1){let V=Ce();c(0,"div",1)(1,"div",2)(2,"h4",3),p(3,"Carga Masiva de Asegurados"),d()(),c(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"label",8),p(9,"Seleccionar archivo CSV"),d(),c(10,"input",9,0),he("change",function(u){return Se(V),Ee(x.onFileSelected(u))}),d(),c(12,"small",10),p(13," El archivo debe contener las columnas: Nombre, Apellido, C\xE9dula, P\xF3liza "),d()()()(),ne(14,It,18,2,"div",11),d()()}a&2&&(D(14),G("ngIf",x.asegurados.length>0))},dependencies:[xe,we],encapsulation:2})}return n})();var ct=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=ce({type:n});static \u0275inj=de({providers:[Re],imports:[ke,it]})}return n})();var ht=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=ce({type:n});static \u0275inj=de({imports:[ke]})}return n})();var Me=(()=>{class n{router;formBuilder;renderer;toastr;prismCode=ot;constructor(r,a,x,V){this.router=r,this.formBuilder=a,this.renderer=x,this.toastr=V}ngOnInit(){}newFunForm;error="";get form(){return this.newFunForm.controls}Submit(){console.log("llego al formulario"),console.log(this.newFunForm),this.router.navigate(["/apps/gestion/funcionalidades"]),this.toastr.success("Registro exitoso","GoCast Admin",{timeOut:3e3,positionClass:"toast-top-right"})}static \u0275fac=function(a){return new(a||n)(Y($e),Y(Ie),Y(Ke),Y(nt))};static \u0275cmp=ue({type:n,selectors:[["new-asegurado"]],standalone:!0,features:[Ge],decls:39,vars:2,consts:[[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[1,"row","g-3"],[1,"col-md-3"],["for","validationDefault01",1,"form-label"],["type","text","id","validationDefault01","required","","formControlName","name",1,"form-control"],["type","number","id","validationDefault01","required","","formControlName","name",1,"form-control"],["aria-label",".form-select-lg example",1,"form-select","form-select-lg"],["selected",""],["value","1"],["value","2"],["value","3"],[1,"col-12"],[1,""],["href","/apps/asegurados/search-asegurados",1,"btn","btn-primary","btn-wave"]],template:function(a,x){a&1&&(c(0,"div",0)(1,"div",1)(2,"app-showcode-card",2)(3,"form",3)(4,"div",4)(5,"label",5),p(6,"Nombres"),d(),ie(7,"input",6),d(),c(8,"div",4)(9,"label",5),p(10,"Apellidos"),d(),ie(11,"input",6),d(),c(12,"div",4)(13,"label",5),p(14,"C\xE9dula"),d(),ie(15,"input",7),d(),c(16,"div",4)(17,"label",5),p(18,"Compa\xF1ia de seguros"),d(),c(19,"select",8)(20,"option",9),p(21,"Seleccione"),d(),c(22,"option",10),p(23,"Seguros Caracas"),d(),c(24,"option",11),p(25,"Seguros Oce\xE1nica"),d(),c(26,"option",12),p(27,"Seguros T\xE1chira"),d()()(),c(28,"div",4)(29,"label",5),p(30,"N\xFAmero de p\xF3liza"),d(),ie(31,"input",7),d(),ie(32,"br")(33,"br")(34,"br"),c(35,"div",13)(36,"div",14)(37,"a",15),p(38,"Enviar"),d()()()()()()()),a&2&&(D(2),G("title"," Crear Asegurado")("prism",x.prismCode.validationTS1))},dependencies:[rt,at]})}return n})();var Rt=[{path:"apps/asegurados",children:[{path:"search-asegurados",component:st},{path:"upload-asegurados",component:ut},{path:"new-asegurado",component:Me}]}],Xt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=ce({type:n});static \u0275inj=de({imports:[Te.forChild(Rt),ct,ht,Me,Te]})}return n})();export{Rt as admin,Xt as aseguradosRoutingModule};
