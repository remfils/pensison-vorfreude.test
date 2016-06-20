/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(a4,au){var aO=[];
var O=aO.slice;
var ay=aO.concat;
var w=aO.push;
var bT=aO.indexOf;
var ab={};
var x=ab.toString;
var J=ab.hasOwnProperty;
var C={};
var ah="1.11.3",bH=function(e,i){return new bH.fn.init(e,i)
},D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bR=/^-ms-/,aV=/-([\da-z])/gi,N=function(e,i){return i.toUpperCase()
};
bH.fn=bH.prototype={jquery:ah,constructor:bH,selector:"",length:0,toArray:function(){return O.call(this)
},get:function(e){return e!=null?(e<0?this[e+this.length]:this[e]):O.call(this)
},pushStack:function(e){var i=bH.merge(this.constructor(),e);
i.prevObject=this;
i.context=this.context;
return i
},each:function(i,e){return bH.each(this,i,e)
},map:function(e){return this.pushStack(bH.map(this,function(b6,b5){return e.call(b6,b5,b6)
}))
},slice:function(){return this.pushStack(O.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b6){var e=this.length,b5=+b6+(b6<0?e:0);
return this.pushStack(b5>=0&&b5<e?[this[b5]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:w,sort:aO.sort,splice:aO.splice};
bH.extend=bH.fn.extend=function(){var e,ca,b5,b6,cd,cb,b9=arguments[0]||{},b8=1,b7=arguments.length,cc=false;
if(typeof b9==="boolean"){cc=b9;
b9=arguments[b8]||{};
b8++
}if(typeof b9!=="object"&&!bH.isFunction(b9)){b9={}
}if(b8===b7){b9=this;
b8--
}for(;
b8<b7;
b8++){if((cd=arguments[b8])!=null){for(b6 in cd){e=b9[b6];
b5=cd[b6];
if(b9===b5){continue
}if(cc&&b5&&(bH.isPlainObject(b5)||(ca=bH.isArray(b5)))){if(ca){ca=false;
cb=e&&bH.isArray(e)?e:[]
}else{cb=e&&bH.isPlainObject(e)?e:{}
}b9[b6]=bH.extend(cc,cb,b5)
}else{if(b5!==undefined){b9[b6]=b5
}}}}}return b9
};
bH.extend({expando:"jQuery"+(ah+Math.random()).replace(/\D/g,""),isReady:true,error:function(e){throw new Error(e)
},noop:function(){},isFunction:function(e){return bH.type(e)==="function"
},isArray:Array.isArray||function(e){return bH.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !bH.isArray(e)&&(e-parseFloat(e)+1)>=0
},isEmptyObject:function(i){var e;
for(e in i){return false
}return true
},isPlainObject:function(b6){var i;
if(!b6||bH.type(b6)!=="object"||b6.nodeType||bH.isWindow(b6)){return false
}try{if(b6.constructor&&!J.call(b6,"constructor")&&!J.call(b6.constructor.prototype,"isPrototypeOf")){return false
}}catch(b5){return false
}if(C.ownLast){for(i in b6){return J.call(b6,i)
}}for(i in b6){}return i===undefined||J.call(b6,i)
},type:function(e){if(e==null){return e+""
}return typeof e==="object"||typeof e==="function"?ab[x.call(e)]||"object":typeof e
},globalEval:function(e){if(e&&bH.trim(e)){(a4.execScript||function(i){a4["eval"].call(a4,i)
})(e)
}},camelCase:function(e){return e.replace(bR,"ms-").replace(aV,N)
},nodeName:function(i,e){return i.nodeName&&i.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b9,ca,b5){var b8,b6=0,b7=b9.length,e=ac(b9);
if(b5){if(e){for(;
b6<b7;
b6++){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}}else{if(e){for(;
b6<b7;
b6++){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}}return b9
},trim:function(e){return e==null?"":(e+"").replace(D,"")
},makeArray:function(e,b5){var i=b5||[];
if(e!=null){if(ac(Object(e))){bH.merge(i,typeof e==="string"?[e]:e)
}else{w.call(i,e)
}}return i
},inArray:function(b7,b5,b6){var e;
if(b5){if(bT){return bT.call(b5,b7,b6)
}e=b5.length;
b6=b6?b6<0?Math.max(0,e+b6):b6:0;
for(;
b6<e;
b6++){if(b6 in b5&&b5[b6]===b7){return b6
}}}return -1
},merge:function(b8,b6){var e=+b6.length,b5=0,b7=b8.length;
while(b5<e){b8[b7++]=b6[b5++]
}if(e!==e){while(b6[b5]!==undefined){b8[b7++]=b6[b5++]
}}b8.length=b7;
return b8
},grep:function(e,cb,b8){var ca,b7=[],b5=0,b6=e.length,b9=!b8;
for(;
b5<b6;
b5++){ca=!cb(e[b5],b5);
if(ca!==b9){b7.push(e[b5])
}}return b7
},map:function(b6,cb,e){var ca,b8=0,b9=b6.length,b5=ac(b6),b7=[];
if(b5){for(;
b8<b9;
b8++){ca=cb(b6[b8],b8,e);
if(ca!=null){b7.push(ca)
}}}else{for(b8 in b6){ca=cb(b6[b8],b8,e);
if(ca!=null){b7.push(ca)
}}}return ay.apply([],b7)
},guid:1,proxy:function(b7,b6){var e,b5,i;
if(typeof b6==="string"){i=b7[b6];
b6=b7;
b7=i
}if(!bH.isFunction(b7)){return undefined
}e=O.call(arguments,2);
b5=function(){return b7.apply(b6||this,e.concat(O.call(arguments)))
};
b5.guid=b7.guid=b7.guid||bH.guid++;
return b5
},now:function(){return +(new Date())
},support:C});
bH.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b5,e){ab["[object "+e+"]"]=e.toLowerCase()
});
function ac(b5){var i="length" in b5&&b5.length,e=bH.type(b5);
if(e==="function"||bH.isWindow(b5)){return false
}if(b5.nodeType===1&&i){return true
}return e==="array"||i===0||typeof i==="number"&&i>0&&(i-1) in b5
}var m=
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function(dd){var cx,dg,cm,cG,cJ,ch,cV,df,dl,cH,cW,cY,cB,cn,c7,c2,de,cd,cE,c9="sizzle"+1*new Date(),cI=dd.document,dh=0,c3=0,b8=cz(),c8=cz(),cF=cz(),cD=function(i,e){if(i===e){cW=true
}return 0
},cP=1<<31,cN=({}).hasOwnProperty,db=[],dc=db.pop,cL=db.push,b6=db.push,cl=db.slice,cc=function(dp,dn){var dm=0,e=dp.length;
for(;
dm<e;
dm++){if(dp[dm]===dn){return dm
}}return -1
},b7="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",co="[\\x20\\t\\r\\n\\f]",b5="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cK=b5.replace("w","w#"),c5="\\["+co+"*("+b5+")(?:"+co+"*([*^$|!~]?=)"+co+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cK+"))|)"+co+"*\\]",cj=":("+b5+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+c5+")*)|.*)\\)|)",ct=new RegExp(co+"+","g"),cq=new RegExp("^"+co+"+|((?:^|[^\\\\])(?:\\\\.)*)"+co+"+$","g"),cu=new RegExp("^"+co+"*,"+co+"*"),cA=new RegExp("^"+co+"*([>+~]|"+co+")"+co+"*"),cs=new RegExp("="+co+"*([^\\]'\"]*?)"+co+"*\\]","g"),cR=new RegExp(cj),cT=new RegExp("^"+cK+"$"),c1={ID:new RegExp("^#("+b5+")"),CLASS:new RegExp("^\\.("+b5+")"),TAG:new RegExp("^("+b5.replace("w","w*")+")"),ATTR:new RegExp("^"+c5),PSEUDO:new RegExp("^"+cj),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+co+"*(even|odd|(([+-]|)(\\d*)n|)"+co+"*(?:([+-]|)"+co+"*(\\d+)|))"+co+"*\\)|)","i"),bool:new RegExp("^(?:"+b7+")$","i"),needsContext:new RegExp("^"+co+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+co+"*((?:-\\d)?\\d*)"+co+"*\\)|)(?=[^-]|$)","i")},cb=/^(?:input|select|textarea|button)$/i,ck=/^h\d$/i,cO=/^[^{]+\{\s*\[native \w/,cQ=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c0=/[+~]/,cM=/'|\\/g,cr=new RegExp("\\\\([\\da-f]{1,6}"+co+"?|("+co+")|.)","ig"),c4=function(e,dn,i){var dm="0x"+dn-65536;
return dm!==dm||i?dn:dm<0?String.fromCharCode(dm+65536):String.fromCharCode(dm>>10|55296,dm&1023|56320)
},dk=function(){cY()
};
try{b6.apply((db=cl.call(cI.childNodes)),cI.childNodes);
db[cI.childNodes.length].nodeType
}catch(cC){b6={apply:db.length?function(i,e){cL.apply(i,cl.call(e))
}:function(dp,dn){var e=dp.length,dm=0;
while((dp[e++]=dn[dm++])){}dp.length=e-1
}}
}function cv(du,dm,dy,dA){var dz,dr,ds,dw,dx,dq,dp,e,dn,dv;
if((dm?dm.ownerDocument||dm:cI)!==cB){cY(dm)
}dm=dm||cB;
dy=dy||[];
dw=dm.nodeType;
if(typeof du!=="string"||!du||dw!==1&&dw!==9&&dw!==11){return dy
}if(!dA&&c7){if(dw!==11&&(dz=cQ.exec(du))){if((ds=dz[1])){if(dw===9){dr=dm.getElementById(ds);
if(dr&&dr.parentNode){if(dr.id===ds){dy.push(dr);
return dy
}}else{return dy
}}else{if(dm.ownerDocument&&(dr=dm.ownerDocument.getElementById(ds))&&cE(dm,dr)&&dr.id===ds){dy.push(dr);
return dy
}}}else{if(dz[2]){b6.apply(dy,dm.getElementsByTagName(du));
return dy
}else{if((ds=dz[3])&&dg.getElementsByClassName){b6.apply(dy,dm.getElementsByClassName(ds));
return dy
}}}}if(dg.qsa&&(!c2||!c2.test(du))){e=dp=c9;
dn=dm;
dv=dw!==1&&du;
if(dw===1&&dm.nodeName.toLowerCase()!=="object"){dq=ch(du);
if((dp=dm.getAttribute("id"))){e=dp.replace(cM,"\\$&")
}else{dm.setAttribute("id",e)
}e="[id='"+e+"'] ";
dx=dq.length;
while(dx--){dq[dx]=e+cg(dq[dx])
}dn=c0.test(du)&&cS(dm.parentNode)||dm;
dv=dq.join(",")
}if(dv){try{b6.apply(dy,dn.querySelectorAll(dv));
return dy
}catch(dt){}finally{if(!dp){dm.removeAttribute("id")
}}}}}return df(du.replace(cq,"$1"),dm,dy,dA)
}function cz(){var i=[];
function e(dm,dn){if(i.push(dm+" ")>cm.cacheLength){delete e[i.shift()]
}return(e[dm+" "]=dn)
}return e
}function ci(e){e[c9]=true;
return e
}function ce(i){var dn=cB.createElement("div");
try{return !!i(dn)
}catch(dm){return false
}finally{if(dn.parentNode){dn.parentNode.removeChild(dn)
}dn=null
}}function di(dm,dp){var e=dm.split("|"),dn=dm.length;
while(dn--){cm.attrHandle[e[dn]]=dp
}}function b9(i,e){var dn=e&&i,dm=dn&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||cP)-(~i.sourceIndex||cP);
if(dm){return dm
}if(dn){while((dn=dn.nextSibling)){if(dn===e){return -1
}}}return i?1:-1
}function cw(e){return function(dm){var i=dm.nodeName.toLowerCase();
return i==="input"&&dm.type===e
}
}function ca(e){return function(dm){var i=dm.nodeName.toLowerCase();
return(i==="input"||i==="button")&&dm.type===e
}
}function c6(e){return ci(function(i){i=+i;
return ci(function(dm,dr){var dp,dn=e([],dm.length,i),dq=dn.length;
while(dq--){if(dm[(dp=dn[dq])]){dm[dp]=!(dr[dp]=dm[dp])
}}})
})
}function cS(e){return e&&typeof e.getElementsByTagName!=="undefined"&&e
}dg=cv.support={};
cJ=cv.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;
return i?i.nodeName!=="HTML":false
};
cY=cv.setDocument=function(dm){var e,i,dn=dm?dm.ownerDocument||dm:cI;
if(dn===cB||dn.nodeType!==9||!dn.documentElement){return cB
}cB=dn;
cn=dn.documentElement;
i=dn.defaultView;
if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",dk,false)
}else{if(i.attachEvent){i.attachEvent("onunload",dk)
}}}c7=!cJ(dn);
dg.attributes=ce(function(dp){dp.className="i";
return !dp.getAttribute("className")
});
dg.getElementsByTagName=ce(function(dp){dp.appendChild(dn.createComment(""));
return !dp.getElementsByTagName("*").length
});
dg.getElementsByClassName=cO.test(dn.getElementsByClassName);
dg.getById=ce(function(dp){cn.appendChild(dp).id=c9;
return !dn.getElementsByName||!dn.getElementsByName(c9).length
});
if(dg.getById){cm.find.ID=function(dr,dq){if(typeof dq.getElementById!=="undefined"&&c7){var dp=dq.getElementById(dr);
return dp&&dp.parentNode?[dp]:[]
}};
cm.filter.ID=function(dq){var dp=dq.replace(cr,c4);
return function(dr){return dr.getAttribute("id")===dp
}
}
}else{delete cm.find.ID;
cm.filter.ID=function(dq){var dp=dq.replace(cr,c4);
return function(ds){var dr=typeof ds.getAttributeNode!=="undefined"&&ds.getAttributeNode("id");
return dr&&dr.value===dp
}
}
}cm.find.TAG=dg.getElementsByTagName?function(dp,dq){if(typeof dq.getElementsByTagName!=="undefined"){return dq.getElementsByTagName(dp)
}else{if(dg.qsa){return dq.querySelectorAll(dp)
}}}:function(dp,dt){var du,ds=[],dr=0,dq=dt.getElementsByTagName(dp);
if(dp==="*"){while((du=dq[dr++])){if(du.nodeType===1){ds.push(du)
}}return ds
}return dq
};
cm.find.CLASS=dg.getElementsByClassName&&function(dq,dp){if(c7){return dp.getElementsByClassName(dq)
}};
de=[];
c2=[];
if((dg.qsa=cO.test(dn.querySelectorAll))){ce(function(dp){cn.appendChild(dp).innerHTML="<a id='"+c9+"'></a><select id='"+c9+"-\f]' msallowcapture=''><option selected=''></option></select>";
if(dp.querySelectorAll("[msallowcapture^='']").length){c2.push("[*^$]="+co+"*(?:''|\"\")")
}if(!dp.querySelectorAll("[selected]").length){c2.push("\\["+co+"*(?:value|"+b7+")")
}if(!dp.querySelectorAll("[id~="+c9+"-]").length){c2.push("~=")
}if(!dp.querySelectorAll(":checked").length){c2.push(":checked")
}if(!dp.querySelectorAll("a#"+c9+"+*").length){c2.push(".#.+[+~]")
}});
ce(function(dq){var dp=dn.createElement("input");
dp.setAttribute("type","hidden");
dq.appendChild(dp).setAttribute("name","D");
if(dq.querySelectorAll("[name=d]").length){c2.push("name"+co+"*[*^$|!~]?=")
}if(!dq.querySelectorAll(":enabled").length){c2.push(":enabled",":disabled")
}dq.querySelectorAll("*,:x");
c2.push(",.*:")
})
}if((dg.matchesSelector=cO.test((cd=cn.matches||cn.webkitMatchesSelector||cn.mozMatchesSelector||cn.oMatchesSelector||cn.msMatchesSelector)))){ce(function(dp){dg.disconnectedMatch=cd.call(dp,"div");
cd.call(dp,"[s!='']:x");
de.push("!=",cj)
})
}c2=c2.length&&new RegExp(c2.join("|"));
de=de.length&&new RegExp(de.join("|"));
e=cO.test(cn.compareDocumentPosition);
cE=e||cO.test(cn.contains)?function(dq,dp){var ds=dq.nodeType===9?dq.documentElement:dq,dr=dp&&dp.parentNode;
return dq===dr||!!(dr&&dr.nodeType===1&&(ds.contains?ds.contains(dr):dq.compareDocumentPosition&&dq.compareDocumentPosition(dr)&16))
}:function(dq,dp){if(dp){while((dp=dp.parentNode)){if(dp===dq){return true
}}}return false
};
cD=e?function(dq,dp){if(dq===dp){cW=true;
return 0
}var dr=!dq.compareDocumentPosition-!dp.compareDocumentPosition;
if(dr){return dr
}dr=(dq.ownerDocument||dq)===(dp.ownerDocument||dp)?dq.compareDocumentPosition(dp):1;
if(dr&1||(!dg.sortDetached&&dp.compareDocumentPosition(dq)===dr)){if(dq===dn||dq.ownerDocument===cI&&cE(cI,dq)){return -1
}if(dp===dn||dp.ownerDocument===cI&&cE(cI,dp)){return 1
}return cH?(cc(cH,dq)-cc(cH,dp)):0
}return dr&4?-1:1
}:function(dq,dp){if(dq===dp){cW=true;
return 0
}var dw,dt=0,dv=dq.parentNode,ds=dp.parentNode,dr=[dq],du=[dp];
if(!dv||!ds){return dq===dn?-1:dp===dn?1:dv?-1:ds?1:cH?(cc(cH,dq)-cc(cH,dp)):0
}else{if(dv===ds){return b9(dq,dp)
}}dw=dq;
while((dw=dw.parentNode)){dr.unshift(dw)
}dw=dp;
while((dw=dw.parentNode)){du.unshift(dw)
}while(dr[dt]===du[dt]){dt++
}return dt?b9(dr[dt],du[dt]):dr[dt]===cI?-1:du[dt]===cI?1:0
};
return dn
};
cv.matches=function(i,e){return cv(i,null,null,e)
};
cv.matchesSelector=function(dm,dp){if((dm.ownerDocument||dm)!==cB){cY(dm)
}dp=dp.replace(cs,"='$1']");
if(dg.matchesSelector&&c7&&(!de||!de.test(dp))&&(!c2||!c2.test(dp))){try{var i=cd.call(dm,dp);
if(i||dg.disconnectedMatch||dm.document&&dm.document.nodeType!==11){return i
}}catch(dn){}}return cv(dp,cB,null,[dm]).length>0
};
cv.contains=function(e,i){if((e.ownerDocument||e)!==cB){cY(e)
}return cE(e,i)
};
cv.attr=function(dm,e){if((dm.ownerDocument||dm)!==cB){cY(dm)
}var i=cm.attrHandle[e.toLowerCase()],dn=i&&cN.call(cm.attrHandle,e.toLowerCase())?i(dm,e,!c7):undefined;
return dn!==undefined?dn:dg.attributes||!c7?dm.getAttribute(e):(dn=dm.getAttributeNode(e))&&dn.specified?dn.value:null
};
cv.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
cv.uniqueSort=function(dn){var dp,dq=[],e=0,dm=0;
cW=!dg.detectDuplicates;
cH=!dg.sortStable&&dn.slice(0);
dn.sort(cD);
if(cW){while((dp=dn[dm++])){if(dp===dn[dm]){e=dq.push(dm)
}}while(e--){dn.splice(dq[e],1)
}}cH=null;
return dn
};
cG=cv.getText=function(dq){var dp,dm="",dn=0,e=dq.nodeType;
if(!e){while((dp=dq[dn++])){dm+=cG(dp)
}}else{if(e===1||e===9||e===11){if(typeof dq.textContent==="string"){return dq.textContent
}else{for(dq=dq.firstChild;
dq;
dq=dq.nextSibling){dm+=cG(dq)
}}}else{if(e===3||e===4){return dq.nodeValue
}}}return dm
};
cm=cv.selectors={cacheLength:50,createPseudo:ci,match:c1,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cr,c4);
e[3]=(e[3]||e[4]||e[5]||"").replace(cr,c4);
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1].slice(0,3)==="nth"){if(!e[3]){cv.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){cv.error(e[0])
}}return e
},PSEUDO:function(i){var e,dm=!i[6]&&i[2];
if(c1.CHILD.test(i[0])){return null
}if(i[3]){i[2]=i[4]||i[5]||""
}else{if(dm&&cR.test(dm)&&(e=ch(dm,true))&&(e=dm.indexOf(")",dm.length-e)-dm.length)){i[0]=i[0].slice(0,e);
i[2]=dm.slice(0,e)
}}return i.slice(0,3)
}},filter:{TAG:function(i){var e=i.replace(cr,c4).toLowerCase();
return i==="*"?function(){return true
}:function(dm){return dm.nodeName&&dm.nodeName.toLowerCase()===e
}
},CLASS:function(e){var i=b8[e+" "];
return i||(i=new RegExp("(^|"+co+")"+e+"("+co+"|$)"))&&b8(e,function(dm){return i.test(typeof dm.className==="string"&&dm.className||typeof dm.getAttribute!=="undefined"&&dm.getAttribute("class")||"")
})
},ATTR:function(dm,i,e){return function(dp){var dn=cv.attr(dp,dm);
if(dn==null){return i==="!="
}if(!i){return true
}dn+="";
return i==="="?dn===e:i==="!="?dn!==e:i==="^="?e&&dn.indexOf(e)===0:i==="*="?e&&dn.indexOf(e)>-1:i==="$="?e&&dn.slice(-e.length)===e:i==="~="?(" "+dn.replace(ct," ")+" ").indexOf(e)>-1:i==="|="?dn===e||dn.slice(0,e.length+1)===e+"-":false
}
},CHILD:function(i,dp,dn,dq,dm){var ds=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",dr=dp==="of-type";
return dq===1&&dm===0?function(dt){return !!dt.parentNode
}:function(dz,dx,dC){var dt,dF,dA,dE,dB,dw,dy=ds!==e?"nextSibling":"previousSibling",dD=dz.parentNode,dv=dr&&dz.nodeName.toLowerCase(),du=!dC&&!dr;
if(dD){if(ds){while(dy){dA=dz;
while((dA=dA[dy])){if(dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1){return false
}}dw=dy=i==="only"&&!dw&&"nextSibling"
}return true
}dw=[e?dD.firstChild:dD.lastChild];
if(e&&du){dF=dD[c9]||(dD[c9]={});
dt=dF[i]||[];
dB=dt[0]===dh&&dt[1];
dE=dt[0]===dh&&dt[2];
dA=dB&&dD.childNodes[dB];
while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if(dA.nodeType===1&&++dE&&dA===dz){dF[i]=[dh,dB,dE];
break
}}}else{if(du&&(dt=(dz[c9]||(dz[c9]={}))[i])&&dt[0]===dh){dE=dt[1]
}else{while((dA=++dB&&dA&&dA[dy]||(dE=dB=0)||dw.pop())){if((dr?dA.nodeName.toLowerCase()===dv:dA.nodeType===1)&&++dE){if(du){(dA[c9]||(dA[c9]={}))[i]=[dh,dE]
}if(dA===dz){break
}}}}}dE-=dm;
return dE===dq||(dE%dq===0&&dE/dq>=0)
}}
},PSEUDO:function(dn,dm){var e,i=cm.pseudos[dn]||cm.setFilters[dn.toLowerCase()]||cv.error("unsupported pseudo: "+dn);
if(i[c9]){return i(dm)
}if(i.length>1){e=[dn,dn,"",dm];
return cm.setFilters.hasOwnProperty(dn.toLowerCase())?ci(function(dr,dt){var dq,dp=i(dr,dm),ds=dp.length;
while(ds--){dq=cc(dr,dp[ds]);
dr[dq]=!(dt[dq]=dp[ds])
}}):function(dp){return i(dp,0,e)
}
}return i
}},pseudos:{not:ci(function(e){var i=[],dm=[],dn=cV(e.replace(cq,"$1"));
return dn[c9]?ci(function(dq,dv,dt,dr){var du,dp=dn(dq,null,dr,[]),ds=dq.length;
while(ds--){if((du=dp[ds])){dq[ds]=!(dv[ds]=du)
}}}):function(dr,dq,dp){i[0]=dr;
dn(i,null,dp,dm);
i[0]=null;
return !dm.pop()
}
}),has:ci(function(e){return function(i){return cv(e,i).length>0
}
}),contains:ci(function(e){e=e.replace(cr,c4);
return function(i){return(i.textContent||i.innerText||cG(i)).indexOf(e)>-1
}
}),lang:ci(function(e){if(!cT.test(e||"")){cv.error("unsupported lang: "+e)
}e=e.replace(cr,c4).toLowerCase();
return function(dm){var i;
do{if((i=c7?dm.lang:dm.getAttribute("xml:lang")||dm.getAttribute("lang"))){i=i.toLowerCase();
return i===e||i.indexOf(e+"-")===0
}}while((dm=dm.parentNode)&&dm.nodeType===1);
return false
}
}),target:function(e){var i=dd.location&&dd.location.hash;
return i&&i.slice(1)===e.id
},root:function(e){return e===cn
},focus:function(e){return e===cB.activeElement&&(!cB.hasFocus||cB.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var i=e.nodeName.toLowerCase();
return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeType<6){return false
}}return true
},parent:function(e){return !cm.pseudos.empty(e)
},header:function(e){return ck.test(e.nodeName)
},input:function(e){return cb.test(e.nodeName)
},button:function(i){var e=i.nodeName.toLowerCase();
return e==="input"&&i.type==="button"||e==="button"
},text:function(i){var e;
return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")
},first:c6(function(){return[0]
}),last:c6(function(e,i){return[i-1]
}),eq:c6(function(e,dm,i){return[i<0?i+dm:i]
}),even:c6(function(e,dn){var dm=0;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),odd:c6(function(e,dn){var dm=1;
for(;
dm<dn;
dm+=2){e.push(dm)
}return e
}),lt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
--dm>=0;
){e.push(dm)
}return e
}),gt:c6(function(e,dp,dn){var dm=dn<0?dn+dp:dn;
for(;
++dm<dp;
){e.push(dm)
}return e
})}};
cm.pseudos.nth=cm.pseudos.eq;
for(cx in {radio:true,checkbox:true,file:true,password:true,image:true}){cm.pseudos[cx]=cw(cx)
}for(cx in {submit:true,reset:true}){cm.pseudos[cx]=ca(cx)
}function cU(){}cU.prototype=cm.filters=cm.pseudos;
cm.setFilters=new cU();
ch=cv.tokenize=function(dp,du){var i,dq,ds,dt,dr,dm,e,dn=c8[dp+" "];
if(dn){return du?0:dn.slice(0)
}dr=dp;
dm=[];
e=cm.preFilter;
while(dr){if(!i||(dq=cu.exec(dr))){if(dq){dr=dr.slice(dq[0].length)||dr
}dm.push((ds=[]))
}i=false;
if((dq=cA.exec(dr))){i=dq.shift();
ds.push({value:i,type:dq[0].replace(cq," ")});
dr=dr.slice(i.length)
}for(dt in cm.filter){if((dq=c1[dt].exec(dr))&&(!e[dt]||(dq=e[dt](dq)))){i=dq.shift();
ds.push({value:i,type:dt,matches:dq});
dr=dr.slice(i.length)
}}if(!i){break
}}return du?dr.length:dr?cv.error(dp):c8(dp,dm).slice(0)
};
function cg(dp){var dn=0,dm=dp.length,e="";
for(;
dn<dm;
dn++){e+=dp[dn].value
}return e
}function cp(dp,dm,dn){var e=dm.dir,dq=dn&&e==="parentNode",i=c3++;
return dm.first?function(dt,ds,dr){while((dt=dt[e])){if(dt.nodeType===1||dq){return dp(dt,ds,dr)
}}}:function(dv,dt,ds){var dw,du,dr=[dh,i];
if(ds){while((dv=dv[e])){if(dv.nodeType===1||dq){if(dp(dv,dt,ds)){return true
}}}}else{while((dv=dv[e])){if(dv.nodeType===1||dq){du=dv[c9]||(dv[c9]={});
if((dw=du[e])&&dw[0]===dh&&dw[1]===i){return(dr[2]=dw[2])
}else{du[e]=dr;
if((dr[2]=dp(dv,dt,ds))){return true
}}}}}}
}function dj(e){return e.length>1?function(dq,dp,dm){var dn=e.length;
while(dn--){if(!e[dn](dq,dp,dm)){return false
}}return true
}:e[0]
}function cy(dm,dq,dp){var dn=0,e=dq.length;
for(;
dn<e;
dn++){cv(dm,dq[dn],dp)
}return dp
}function cZ(e,dm,dn,dp,ds){var dq,dv=[],dr=0,dt=e.length,du=dm!=null;
for(;
dr<dt;
dr++){if((dq=e[dr])){if(!dn||dn(dq,dp,ds)){dv.push(dq);
if(du){dm.push(dr)
}}}}return dv
}function cf(dm,i,dp,dn,dq,e){if(dn&&!dn[c9]){dn=cf(dn)
}if(dq&&!dq[c9]){dq=cf(dq,e)
}return ci(function(dB,dy,dt,dA){var dD,dz,dv,du=[],dC=[],ds=dy.length,dr=dB||cy(i||"*",dt.nodeType?[dt]:dt,[]),dw=dm&&(dB||!i)?cZ(dr,du,dm,dt,dA):dr,dx=dp?dq||(dB?dm:ds||dn)?[]:dy:dw;
if(dp){dp(dw,dx,dt,dA)
}if(dn){dD=cZ(dx,dC);
dn(dD,[],dt,dA);
dz=dD.length;
while(dz--){if((dv=dD[dz])){dx[dC[dz]]=!(dw[dC[dz]]=dv)
}}}if(dB){if(dq||dm){if(dq){dD=[];
dz=dx.length;
while(dz--){if((dv=dx[dz])){dD.push((dw[dz]=dv))
}}dq(null,(dx=[]),dD,dA)
}dz=dx.length;
while(dz--){if((dv=dx[dz])&&(dD=dq?cc(dB,dv):du[dz])>-1){dB[dD]=!(dy[dD]=dv)
}}}}else{dx=cZ(dx===dy?dx.splice(ds,dx.length):dx);
if(dq){dq(null,dy,dx,dA)
}else{b6.apply(dy,dx)
}}})
}function da(ds){var dm,dq,dn,dr=ds.length,dv=cm.relative[ds[0].type],dw=dv||cm.relative[" "],dp=dv?1:0,dt=cp(function(i){return i===dm
},dw,true),du=cp(function(i){return cc(dm,i)>-1
},dw,true),e=[function(dz,dy,dx){var i=(!dv&&(dx||dy!==dl))||((dm=dy).nodeType?dt(dz,dy,dx):du(dz,dy,dx));
dm=null;
return i
}];
for(;
dp<dr;
dp++){if((dq=cm.relative[ds[dp].type])){e=[cp(dj(e),dq)]
}else{dq=cm.filter[ds[dp].type].apply(null,ds[dp].matches);
if(dq[c9]){dn=++dp;
for(;
dn<dr;
dn++){if(cm.relative[ds[dn].type]){break
}}return cf(dp>1&&dj(e),dp>1&&cg(ds.slice(0,dp-1).concat({value:ds[dp-2].type===" "?"*":""})).replace(cq,"$1"),dq,dp<dn&&da(ds.slice(dp,dn)),dn<dr&&da((ds=ds.slice(dn))),dn<dr&&cg(ds))
}e.push(dq)
}}return dj(e)
}function cX(dn,dm){var e=dm.length>0,dp=dn.length>0,i=function(dz,dt,dy,dx,dC){var du,dv,dA,dE=0,dw="0",dq=dz&&[],dF=[],dD=dl,ds=dz||dp&&cm.find.TAG("*",dC),dr=(dh+=dD==null?1:Math.random()||0.1),dB=ds.length;
if(dC){dl=dt!==cB&&dt
}for(;
dw!==dB&&(du=ds[dw])!=null;
dw++){if(dp&&du){dv=0;
while((dA=dn[dv++])){if(dA(du,dt,dy)){dx.push(du);
break
}}if(dC){dh=dr
}}if(e){if((du=!dA&&du)){dE--
}if(dz){dq.push(du)
}}}dE+=dw;
if(e&&dw!==dE){dv=0;
while((dA=dm[dv++])){dA(dq,dF,dt,dy)
}if(dz){if(dE>0){while(dw--){if(!(dq[dw]||dF[dw])){dF[dw]=dc.call(dx)
}}}dF=cZ(dF)
}b6.apply(dx,dF);
if(dC&&!dz&&dF.length>0&&(dE+dm.length)>1){cv.uniqueSort(dx)
}}if(dC){dh=dr;
dl=dD
}return dq
};
return e?ci(i):i
}cV=cv.compile=function(e,dn){var dp,dm=[],dr=[],dq=cF[e+" "];
if(!dq){if(!dn){dn=ch(e)
}dp=dn.length;
while(dp--){dq=da(dn[dp]);
if(dq[c9]){dm.push(dq)
}else{dr.push(dq)
}}dq=cF(e,cX(dr,dm));
dq.selector=e
}return dq
};
df=cv.select=function(dn,e,dp,ds){var dq,dv,dm,dw,dt,du=typeof dn==="function"&&dn,dr=!ds&&ch((dn=du.selector||dn));
dp=dp||[];
if(dr.length===1){dv=dr[0]=dr[0].slice(0);
if(dv.length>2&&(dm=dv[0]).type==="ID"&&dg.getById&&e.nodeType===9&&c7&&cm.relative[dv[1].type]){e=(cm.find.ID(dm.matches[0].replace(cr,c4),e)||[])[0];
if(!e){return dp
}else{if(du){e=e.parentNode
}}dn=dn.slice(dv.shift().value.length)
}dq=c1.needsContext.test(dn)?0:dv.length;
while(dq--){dm=dv[dq];
if(cm.relative[(dw=dm.type)]){break
}if((dt=cm.find[dw])){if((ds=dt(dm.matches[0].replace(cr,c4),c0.test(dv[0].type)&&cS(e.parentNode)||e))){dv.splice(dq,1);
dn=ds.length&&cg(dv);
if(!dn){b6.apply(dp,ds);
return dp
}break
}}}}(du||cV(dn,dr))(ds,e,!c7,dp,c0.test(dn)&&cS(e.parentNode)||e);
return dp
};
dg.sortStable=c9.split("").sort(cD).join("")===c9;
dg.detectDuplicates=!!cW;
cY();
dg.sortDetached=ce(function(e){return e.compareDocumentPosition(cB.createElement("div"))&1
});
if(!ce(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild.getAttribute("href")==="#"
})){di("type|href|height|width",function(i,e,dm){if(!dm){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)
}})
}if(!dg.attributes||!ce(function(e){e.innerHTML="<input/>";
e.firstChild.setAttribute("value","");
return e.firstChild.getAttribute("value")===""
})){di("value",function(i,e,dm){if(!dm&&i.nodeName.toLowerCase()==="input"){return i.defaultValue
}})
}if(!ce(function(e){return e.getAttribute("disabled")==null
})){di(b7,function(i,e,dn){var dm;
if(!dn){return i[e]===true?e.toLowerCase():(dm=i.getAttributeNode(e))&&dm.specified?dm.value:null
}})
}return cv
})(a4);
bH.find=m;
bH.expr=m.selectors;
bH.expr[":"]=bH.expr.pseudos;
bH.unique=m.uniqueSort;
bH.text=m.getText;
bH.isXMLDoc=m.isXML;
bH.contains=m.contains;
var z=bH.expr.match.needsContext;
var a=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var aK=/^.[^:#\[\.,]*$/;
function aQ(b5,e,i){if(bH.isFunction(e)){return bH.grep(b5,function(b7,b6){return !!e.call(b7,b6,b7)!==i
})
}if(e.nodeType){return bH.grep(b5,function(b6){return(b6===e)!==i
})
}if(typeof e==="string"){if(aK.test(e)){return bH.filter(e,b5,i)
}e=bH.filter(e,b5)
}return bH.grep(b5,function(b6){return(bH.inArray(b6,e)>=0)!==i
})
}bH.filter=function(b6,e,b5){var i=e[0];
if(b5){b6=":not("+b6+")"
}return e.length===1&&i.nodeType===1?bH.find.matchesSelector(i,b6)?[i]:[]:bH.find.matches(b6,bH.grep(e,function(b7){return b7.nodeType===1
}))
};
bH.fn.extend({find:function(b5){var b8,b7=[],b6=this,e=b6.length;
if(typeof b5!=="string"){return this.pushStack(bH(b5).filter(function(){for(b8=0;
b8<e;
b8++){if(bH.contains(b6[b8],this)){return true
}}}))
}for(b8=0;
b8<e;
b8++){bH.find(b5,b6[b8],b7)
}b7=this.pushStack(e>1?bH.unique(b7):b7);
b7.selector=this.selector?this.selector+" "+b5:b5;
return b7
},filter:function(e){return this.pushStack(aQ(this,e||[],false))
},not:function(e){return this.pushStack(aQ(this,e||[],true))
},is:function(e){return !!aQ(this,typeof e==="string"&&z.test(e)?bH(e):e||[],false).length
}});
var y,n=a4.document,bs=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,bU=bH.fn.init=function(e,b5){var i,b6;
if(!e){return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){i=[null,e,null]
}else{i=bs.exec(e)
}if(i&&(i[1]||!b5)){if(i[1]){b5=b5 instanceof bH?b5[0]:b5;
bH.merge(this,bH.parseHTML(i[1],b5&&b5.nodeType?b5.ownerDocument||b5:n,true));
if(a.test(i[1])&&bH.isPlainObject(b5)){for(i in b5){if(bH.isFunction(this[i])){this[i](b5[i])
}else{this.attr(i,b5[i])
}}}return this
}else{b6=n.getElementById(i[2]);
if(b6&&b6.parentNode){if(b6.id!==i[2]){return y.find(e)
}this.length=1;
this[0]=b6
}this.context=n;
this.selector=e;
return this
}}else{if(!b5||b5.jquery){return(b5||y).find(e)
}else{return this.constructor(b5).find(e)
}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}else{if(bH.isFunction(e)){return typeof y.ready!=="undefined"?y.ready(e):e(bH)
}}}if(e.selector!==undefined){this.selector=e.selector;
this.context=e.context
}return bH.makeArray(e,this)
};
bU.prototype=bH.fn;
y=bH(n);
var bu=/^(?:parents|prev(?:Until|All))/,by={children:true,contents:true,next:true,prev:true};
bH.extend({dir:function(b5,i,b7){var e=[],b6=b5[i];
while(b6&&b6.nodeType!==9&&(b7===undefined||b6.nodeType!==1||!bH(b6).is(b7))){if(b6.nodeType===1){e.push(b6)
}b6=b6[i]
}return e
},sibling:function(b5,i){var e=[];
for(;
b5;
b5=b5.nextSibling){if(b5.nodeType===1&&b5!==i){e.push(b5)
}}return e
}});
bH.fn.extend({has:function(b7){var b6,b5=bH(b7,this),e=b5.length;
return this.filter(function(){for(b6=0;
b6<e;
b6++){if(bH.contains(this,b5[b6])){return true
}}})
},closest:function(b8,b7){var b9,b6=0,b5=this.length,e=[],ca=z.test(b8)||typeof b8!=="string"?bH(b8,b7||this.context):0;
for(;
b6<b5;
b6++){for(b9=this[b6];
b9&&b9!==b7;
b9=b9.parentNode){if(b9.nodeType<11&&(ca?ca.index(b9)>-1:b9.nodeType===1&&bH.find.matchesSelector(b9,b8))){e.push(b9);
break
}}}return this.pushStack(e.length>1?bH.unique(e):e)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bH.inArray(this[0],bH(e))
}return bH.inArray(e.jquery?e[0]:e,this)
},add:function(e,i){return this.pushStack(bH.unique(bH.merge(this.get(),bH(e,i))))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
function aX(i,e){do{i=i[e]
}while(i&&i.nodeType!==1);
return i
}bH.each({parent:function(i){var e=i.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bH.dir(e,"parentNode")
},parentsUntil:function(b5,e,b6){return bH.dir(b5,"parentNode",b6)
},next:function(e){return aX(e,"nextSibling")
},prev:function(e){return aX(e,"previousSibling")
},nextAll:function(e){return bH.dir(e,"nextSibling")
},prevAll:function(e){return bH.dir(e,"previousSibling")
},nextUntil:function(b5,e,b6){return bH.dir(b5,"nextSibling",b6)
},prevUntil:function(b5,e,b6){return bH.dir(b5,"previousSibling",b6)
},siblings:function(e){return bH.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bH.sibling(e.firstChild)
},contents:function(e){return bH.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bH.merge([],e.childNodes)
}},function(e,i){bH.fn[e]=function(b7,b5){var b6=bH.map(this,i,b7);
if(e.slice(-5)!=="Until"){b5=b7
}if(b5&&typeof b5==="string"){b6=bH.filter(b5,b6)
}if(this.length>1){if(!by[e]){b6=bH.unique(b6)
}if(bu.test(e)){b6=b6.reverse()
}}return this.pushStack(b6)
}
});
var aE=(/\S+/g);
var b1={};
function ae(i){var e=b1[i]={};
bH.each(i.match(aE)||[],function(b6,b5){e[b5]=true
});
return e
}bH.Callbacks=function(cd){cd=typeof cd==="string"?(b1[cd]||ae(cd)):bH.extend({},cd);
var b7,b6,e,b8,b9,b5,ca=[],cb=!cd.once&&[],i=function(ce){b6=cd.memory&&ce;
e=true;
b9=b5||0;
b5=0;
b8=ca.length;
b7=true;
for(;
ca&&b9<b8;
b9++){if(ca[b9].apply(ce[0],ce[1])===false&&cd.stopOnFalse){b6=false;
break
}}b7=false;
if(ca){if(cb){if(cb.length){i(cb.shift())
}}else{if(b6){ca=[]
}else{cc.disable()
}}}},cc={add:function(){if(ca){var cf=ca.length;
(function ce(cg){bH.each(cg,function(ci,ch){var cj=bH.type(ch);
if(cj==="function"){if(!cd.unique||!cc.has(ch)){ca.push(ch)
}}else{if(ch&&ch.length&&cj!=="string"){ce(ch)
}}})
})(arguments);
if(b7){b8=ca.length
}else{if(b6){b5=cf;
i(b6)
}}}return this
},remove:function(){if(ca){bH.each(arguments,function(cg,ce){var cf;
while((cf=bH.inArray(ce,ca,cf))>-1){ca.splice(cf,1);
if(b7){if(cf<=b8){b8--
}if(cf<=b9){b9--
}}}})
}return this
},has:function(ce){return ce?bH.inArray(ce,ca)>-1:!!(ca&&ca.length)
},empty:function(){ca=[];
b8=0;
return this
},disable:function(){ca=cb=b6=undefined;
return this
},disabled:function(){return !ca
},lock:function(){cb=undefined;
if(!b6){cc.disable()
}return this
},locked:function(){return !cb
},fireWith:function(cf,ce){if(ca&&(!e||cb)){ce=ce||[];
ce=[cf,ce.slice?ce.slice():ce];
if(b7){cb.push(ce)
}else{i(ce)
}}return this
},fire:function(){cc.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return cc
};
bH.extend({Deferred:function(b5){var i=[["resolve","done",bH.Callbacks("once memory"),"resolved"],["reject","fail",bH.Callbacks("once memory"),"rejected"],["notify","progress",bH.Callbacks("memory")]],b6="pending",b7={state:function(){return b6
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b8=arguments;
return bH.Deferred(function(b9){bH.each(i,function(cb,ca){var cc=bH.isFunction(b8[cb])&&b8[cb];
e[ca[1]](function(){var cd=cc&&cc.apply(this,arguments);
if(cd&&bH.isFunction(cd.promise)){cd.promise().done(b9.resolve).fail(b9.reject).progress(b9.notify)
}else{b9[ca[0]+"With"](this===b7?b9.promise():this,cc?[cd]:arguments)
}})
});
b8=null
}).promise()
},promise:function(b8){return b8!=null?bH.extend(b8,b7):b7
}},e={};
b7.pipe=b7.then;
bH.each(i,function(b9,b8){var cb=b8[2],ca=b8[3];
b7[b8[1]]=cb.add;
if(ca){cb.add(function(){b6=ca
},i[b9^1][2].disable,i[2][2].lock)
}e[b8[0]]=function(){e[b8[0]+"With"](this===e?b7:this,arguments);
return this
};
e[b8[0]+"With"]=cb.fireWith
});
b7.promise(e);
if(b5){b5.call(e,e)
}return e
},when:function(b8){var b6=0,ca=O.call(arguments),e=ca.length,b5=e!==1||(b8&&bH.isFunction(b8.promise))?e:0,cd=b5===1?b8:bH.Deferred(),b7=function(cf,cg,ce){return function(i){cg[cf]=this;
ce[cf]=arguments.length>1?O.call(arguments):i;
if(ce===cc){cd.notifyWith(cg,ce)
}else{if(!(--b5)){cd.resolveWith(cg,ce)
}}}
},cc,b9,cb;
if(e>1){cc=new Array(e);
b9=new Array(e);
cb=new Array(e);
for(;
b6<e;
b6++){if(ca[b6]&&bH.isFunction(ca[b6].promise)){ca[b6].promise().done(b7(b6,cb,ca)).fail(cd.reject).progress(b7(b6,b9,cc))
}else{--b5
}}}if(!b5){cd.resolveWith(cb,ca)
}return cd.promise()
}});
var aj;
bH.fn.ready=function(e){bH.ready.promise().done(e);
return this
};
bH.extend({isReady:false,readyWait:1,holdReady:function(e){if(e){bH.readyWait++
}else{bH.ready(true)
}},ready:function(e){if(e===true?--bH.readyWait:bH.isReady){return
}if(!n.body){return setTimeout(bH.ready)
}bH.isReady=true;
if(e!==true&&--bH.readyWait>0){return
}aj.resolveWith(n,[bH]);
if(bH.fn.triggerHandler){bH(n).triggerHandler("ready");
bH(n).off("ready")
}}});
function bl(){if(n.addEventListener){n.removeEventListener("DOMContentLoaded",bY,false);
a4.removeEventListener("load",bY,false)
}else{n.detachEvent("onreadystatechange",bY);
a4.detachEvent("onload",bY)
}}function bY(){if(n.addEventListener||event.type==="load"||n.readyState==="complete"){bl();
bH.ready()
}}bH.ready.promise=function(b7){if(!aj){aj=bH.Deferred();
if(n.readyState==="complete"){setTimeout(bH.ready)
}else{if(n.addEventListener){n.addEventListener("DOMContentLoaded",bY,false);
a4.addEventListener("load",bY,false)
}else{n.attachEvent("onreadystatechange",bY);
a4.attachEvent("onload",bY);
var b6=false;
try{b6=a4.frameElement==null&&n.documentElement
}catch(b5){}if(b6&&b6.doScroll){(function i(){if(!bH.isReady){try{b6.doScroll("left")
}catch(b8){return setTimeout(i,50)
}bl();
bH.ready()
}})()
}}}}return aj.promise(b7)
};
var aB=typeof undefined;
var bg;
for(bg in bH(C)){break
}C.ownLast=bg!=="0";
C.inlineBlockNeedsLayout=false;
bH(function(){var b5,b6,e,i;
e=n.getElementsByTagName("body")[0];
if(!e||!e.style){return
}b6=n.createElement("div");
i=n.createElement("div");
i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
e.appendChild(i).appendChild(b6);
if(typeof b6.style.zoom!==aB){b6.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
C.inlineBlockNeedsLayout=b5=b6.offsetWidth===3;
if(b5){e.style.zoom=1
}}e.removeChild(i)
});
(function(){var b5=n.createElement("div");
if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b5.test
}catch(i){C.deleteExpando=false
}}b5=null
})();
bH.acceptData=function(b5){var i=bH.noData[(b5.nodeName+" ").toLowerCase()],e=+b5.nodeType||1;
return e!==1&&e!==9?false:!i||i!==true&&b5.getAttribute("classid")===i
};
var bx=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aP=/([A-Z])/g;
function bz(b6,b5,b7){if(b7===undefined&&b6.nodeType===1){var i="data-"+b5.replace(aP,"-$1").toLowerCase();
b7=b6.getAttribute(i);
if(typeof b7==="string"){try{b7=b7==="true"?true:b7==="false"?false:b7==="null"?null:+b7+""===b7?+b7:bx.test(b7)?bH.parseJSON(b7):b7
}catch(b8){}bH.data(b6,b5,b7)
}else{b7=undefined
}}return b7
}function P(i){var e;
for(e in i){if(e==="data"&&bH.isEmptyObject(i[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bb(b6,i,b8,b7){if(!bH.acceptData(b6)){return
}var ca,b9,cb=bH.expando,cc=b6.nodeType,e=cc?bH.cache:b6,b5=cc?b6[cb]:b6[cb]&&cb;
if((!b5||!e[b5]||(!b7&&!e[b5].data))&&b8===undefined&&typeof i==="string"){return
}if(!b5){if(cc){b5=b6[cb]=aO.pop()||bH.guid++
}else{b5=cb
}}if(!e[b5]){e[b5]=cc?{}:{toJSON:bH.noop}
}if(typeof i==="object"||typeof i==="function"){if(b7){e[b5]=bH.extend(e[b5],i)
}else{e[b5].data=bH.extend(e[b5].data,i)
}}b9=e[b5];
if(!b7){if(!b9.data){b9.data={}
}b9=b9.data
}if(b8!==undefined){b9[bH.camelCase(i)]=b8
}if(typeof i==="string"){ca=b9[i];
if(ca==null){ca=b9[bH.camelCase(i)]
}}else{ca=b9
}return ca
}function aa(b8,b6,e){if(!bH.acceptData(b8)){return
}var ca,b7,b9=b8.nodeType,b5=b9?bH.cache:b8,cb=b9?b8[bH.expando]:bH.expando;
if(!b5[cb]){return
}if(b6){ca=e?b5[cb]:b5[cb].data;
if(ca){if(!bH.isArray(b6)){if(b6 in ca){b6=[b6]
}else{b6=bH.camelCase(b6);
if(b6 in ca){b6=[b6]
}else{b6=b6.split(" ")
}}}else{b6=b6.concat(bH.map(b6,bH.camelCase))
}b7=b6.length;
while(b7--){delete ca[b6[b7]]
}if(e?!P(ca):!bH.isEmptyObject(ca)){return
}}}if(!e){delete b5[cb].data;
if(!P(b5[cb])){return
}}if(b9){bH.cleanData([b8],true)
}else{if(C.deleteExpando||b5!=b5.window){delete b5[cb]
}else{b5[cb]=null
}}}bH.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?bH.cache[e[bH.expando]]:e[bH.expando];
return !!e&&!P(e)
},data:function(i,e,b5){return bb(i,e,b5)
},removeData:function(i,e){return aa(i,e)
},_data:function(i,e,b5){return bb(i,e,b5,true)
},_removeData:function(i,e){return aa(i,e,true)
}});
bH.fn.extend({data:function(b7,ca){var b6,b5,b9,b8=this[0],e=b8&&b8.attributes;
if(b7===undefined){if(this.length){b9=bH.data(b8);
if(b8.nodeType===1&&!bH._data(b8,"parsedAttrs")){b6=e.length;
while(b6--){if(e[b6]){b5=e[b6].name;
if(b5.indexOf("data-")===0){b5=bH.camelCase(b5.slice(5));
bz(b8,b5,b9[b5])
}}}bH._data(b8,"parsedAttrs",true)
}}return b9
}if(typeof b7==="object"){return this.each(function(){bH.data(this,b7)
})
}return arguments.length>1?this.each(function(){bH.data(this,b7,ca)
}):b8?bz(b8,b7,bH.data(b8,b7)):undefined
},removeData:function(e){return this.each(function(){bH.removeData(this,e)
})
}});
bH.extend({queue:function(b5,i,b6){var e;
if(b5){i=(i||"fx")+"queue";
e=bH._data(b5,i);
if(b6){if(!e||bH.isArray(b6)){e=bH._data(b5,i,bH.makeArray(b6))
}else{e.push(b6)
}}return e||[]
}},dequeue:function(b8,b7){b7=b7||"fx";
var i=bH.queue(b8,b7),b9=i.length,b6=i.shift(),e=bH._queueHooks(b8,b7),b5=function(){bH.dequeue(b8,b7)
};
if(b6==="inprogress"){b6=i.shift();
b9--
}if(b6){if(b7==="fx"){i.unshift("inprogress")
}delete e.stop;
b6.call(b8,b5,e)
}if(!b9&&e){e.empty.fire()
}},_queueHooks:function(b5,i){var e=i+"queueHooks";
return bH._data(b5,e)||bH._data(b5,e,{empty:bH.Callbacks("once memory").add(function(){bH._removeData(b5,i+"queue");
bH._removeData(b5,e)
})})
}});
bH.fn.extend({queue:function(e,i){var b5=2;
if(typeof e!=="string"){i=e;
e="fx";
b5--
}if(arguments.length<b5){return bH.queue(this[0],e)
}return i===undefined?this:this.each(function(){var b6=bH.queue(this,e,i);
bH._queueHooks(this,e);
if(e==="fx"&&b6[0]!=="inprogress"){bH.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bH.dequeue(this,e)
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b6,ca){var b5,b7=1,cb=bH.Deferred(),b9=this,e=this.length,b8=function(){if(!(--b7)){cb.resolveWith(b9,[b9])
}};
if(typeof b6!=="string"){ca=b6;
b6=undefined
}b6=b6||"fx";
while(e--){b5=bH._data(b9[e],b6+"queueHooks");
if(b5&&b5.empty){b7++;
b5.empty.add(b8)
}}b8();
return cb.promise(ca)
}});
var aD=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var bS=["Top","Right","Bottom","Left"];
var R=function(i,e){i=e||i;
return bH.css(i,"display")==="none"||!bH.contains(i.ownerDocument,i)
};
var aA=bH.access=function(e,b9,cb,ca,b7,cd,cc){var b6=0,b5=e.length,b8=cb==null;
if(bH.type(cb)==="object"){b7=true;
for(b6 in cb){bH.access(e,b9,b6,cb[b6],true,cd,cc)
}}else{if(ca!==undefined){b7=true;
if(!bH.isFunction(ca)){cc=true
}if(b8){if(cc){b9.call(e,ca);
b9=null
}else{b8=b9;
b9=function(ce,i,cf){return b8.call(bH(ce),cf)
}
}}if(b9){for(;
b6<b5;
b6++){b9(e[b6],cb,cc?ca:ca.call(e[b6],b6,b9(e[b6],cb)))
}}}}return b7?e:b8?b9.call(e):b5?b9(e[0],cb):cd
};
var aL=(/^(?:checkbox|radio)$/i);
(function(){var i=n.createElement("input"),b7=n.createElement("div"),b5=n.createDocumentFragment();
b7.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
C.leadingWhitespace=b7.firstChild.nodeType===3;
C.tbody=!b7.getElementsByTagName("tbody").length;
C.htmlSerialize=!!b7.getElementsByTagName("link").length;
C.html5Clone=n.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
i.type="checkbox";
i.checked=true;
b5.appendChild(i);
C.appendChecked=i.checked;
b7.innerHTML="<textarea>x</textarea>";
C.noCloneChecked=!!b7.cloneNode(true).lastChild.defaultValue;
b5.appendChild(b7);
b7.innerHTML="<input type='radio' checked='checked' name='t'/>";
C.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;
C.noCloneEvent=true;
if(b7.attachEvent){b7.attachEvent("onclick",function(){C.noCloneEvent=false
});
b7.cloneNode(true).click()
}if(C.deleteExpando==null){C.deleteExpando=true;
try{delete b7.test
}catch(b6){C.deleteExpando=false
}}})();
(function(){var b5,e,b6=n.createElement("div");
for(b5 in {submit:true,change:true,focusin:true}){e="on"+b5;
if(!(C[b5+"Bubbles"]=e in a4)){b6.setAttribute(e,"t");
C[b5+"Bubbles"]=b6.attributes[e].expando===false
}}b6=null
})();
var bF=/^(?:input|select|textarea)$/i,a5=/^key/,bL=/^(?:mouse|pointer|contextmenu)|click/,bB=/^(?:focusinfocus|focusoutblur)$/,bw=/^([^.]*)(?:\.(.+)|)$/;
function T(){return true
}function Y(){return false
}function al(){try{return n.activeElement
}catch(e){}}bH.event={global:{},add:function(b7,cc,ch,b9,b8){var ca,ci,cj,b5,ce,cb,cg,b6,cf,e,i,cd=bH._data(b7);
if(!cd){return
}if(ch.handler){b5=ch;
ch=b5.handler;
b8=b5.selector
}if(!ch.guid){ch.guid=bH.guid++
}if(!(ci=cd.events)){ci=cd.events={}
}if(!(cb=cd.handle)){cb=cd.handle=function(ck){return typeof bH!==aB&&(!ck||bH.event.triggered!==ck.type)?bH.event.dispatch.apply(cb.elem,arguments):undefined
};
cb.elem=b7
}cc=(cc||"").match(aE)||[""];
cj=cc.length;
while(cj--){ca=bw.exec(cc[cj])||[];
cf=i=ca[1];
e=(ca[2]||"").split(".").sort();
if(!cf){continue
}ce=bH.event.special[cf]||{};
cf=(b8?ce.delegateType:ce.bindType)||cf;
ce=bH.event.special[cf]||{};
cg=bH.extend({type:cf,origType:i,data:b9,handler:ch,guid:ch.guid,selector:b8,needsContext:b8&&bH.expr.match.needsContext.test(b8),namespace:e.join(".")},b5);
if(!(b6=ci[cf])){b6=ci[cf]=[];
b6.delegateCount=0;
if(!ce.setup||ce.setup.call(b7,b9,e,cb)===false){if(b7.addEventListener){b7.addEventListener(cf,cb,false)
}else{if(b7.attachEvent){b7.attachEvent("on"+cf,cb)
}}}}if(ce.add){ce.add.call(b7,cg);
if(!cg.handler.guid){cg.handler.guid=ch.guid
}}if(b8){b6.splice(b6.delegateCount++,0,cg)
}else{b6.push(cg)
}bH.event.global[cf]=true
}b7=null
},remove:function(b6,cc,cj,b7,cb){var b9,cg,ca,b8,ci,ch,ce,b5,cf,e,i,cd=bH.hasData(b6)&&bH._data(b6);
if(!cd||!(ch=cd.events)){return
}cc=(cc||"").match(aE)||[""];
ci=cc.length;
while(ci--){ca=bw.exec(cc[ci])||[];
cf=i=ca[1];
e=(ca[2]||"").split(".").sort();
if(!cf){for(cf in ch){bH.event.remove(b6,cf+cc[ci],cj,b7,true)
}continue
}ce=bH.event.special[cf]||{};
cf=(b7?ce.delegateType:ce.bindType)||cf;
b5=ch[cf]||[];
ca=ca[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");
b8=b9=b5.length;
while(b9--){cg=b5[b9];
if((cb||i===cg.origType)&&(!cj||cj.guid===cg.guid)&&(!ca||ca.test(cg.namespace))&&(!b7||b7===cg.selector||b7==="**"&&cg.selector)){b5.splice(b9,1);
if(cg.selector){b5.delegateCount--
}if(ce.remove){ce.remove.call(b6,cg)
}}}if(b8&&!b5.length){if(!ce.teardown||ce.teardown.call(b6,e,cd.handle)===false){bH.removeEvent(b6,cf,cd.handle)
}delete ch[cf]
}}if(bH.isEmptyObject(ch)){delete cd.handle;
bH._removeData(b6,"events")
}},trigger:function(b5,cc,b8,cj){var cd,b7,ch,ci,cf,cb,ca,b9=[b8||n],cg=J.call(b5,"type")?b5.type:b5,b6=J.call(b5,"namespace")?b5.namespace.split("."):[];
ch=cb=b8=b8||n;
if(b8.nodeType===3||b8.nodeType===8){return
}if(bB.test(cg+bH.event.triggered)){return
}if(cg.indexOf(".")>=0){b6=cg.split(".");
cg=b6.shift();
b6.sort()
}b7=cg.indexOf(":")<0&&"on"+cg;
b5=b5[bH.expando]?b5:new bH.Event(cg,typeof b5==="object"&&b5);
b5.isTrigger=cj?2:3;
b5.namespace=b6.join(".");
b5.namespace_re=b5.namespace?new RegExp("(^|\\.)"+b6.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b5.result=undefined;
if(!b5.target){b5.target=b8
}cc=cc==null?[b5]:bH.makeArray(cc,[b5]);
cf=bH.event.special[cg]||{};
if(!cj&&cf.trigger&&cf.trigger.apply(b8,cc)===false){return
}if(!cj&&!cf.noBubble&&!bH.isWindow(b8)){ci=cf.delegateType||cg;
if(!bB.test(ci+cg)){ch=ch.parentNode
}for(;
ch;
ch=ch.parentNode){b9.push(ch);
cb=ch
}if(cb===(b8.ownerDocument||n)){b9.push(cb.defaultView||cb.parentWindow||a4)
}}ca=0;
while((ch=b9[ca++])&&!b5.isPropagationStopped()){b5.type=ca>1?ci:cf.bindType||cg;
cd=(bH._data(ch,"events")||{})[b5.type]&&bH._data(ch,"handle");
if(cd){cd.apply(ch,cc)
}cd=b7&&ch[b7];
if(cd&&cd.apply&&bH.acceptData(ch)){b5.result=cd.apply(ch,cc);
if(b5.result===false){b5.preventDefault()
}}}b5.type=cg;
if(!cj&&!b5.isDefaultPrevented()){if((!cf._default||cf._default.apply(b9.pop(),cc)===false)&&bH.acceptData(b8)){if(b7&&b8[cg]&&!bH.isWindow(b8)){cb=b8[b7];
if(cb){b8[b7]=null
}bH.event.triggered=cg;
try{b8[cg]()
}catch(ce){}bH.event.triggered=undefined;
if(cb){b8[b7]=cb
}}}}return b5.result
},dispatch:function(e){e=bH.event.fix(e);
var b8,b9,cd,b5,b7,cc=[],cb=O.call(arguments),b6=(bH._data(this,"events")||{})[e.type]||[],ca=bH.event.special[e.type]||{};
cb[0]=e;
e.delegateTarget=this;
if(ca.preDispatch&&ca.preDispatch.call(this,e)===false){return
}cc=bH.event.handlers.call(this,e,b6);
b8=0;
while((b5=cc[b8++])&&!e.isPropagationStopped()){e.currentTarget=b5.elem;
b7=0;
while((cd=b5.handlers[b7++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(cd.namespace)){e.handleObj=cd;
e.data=cd.data;
b9=((bH.event.special[cd.origType]||{}).handle||cd.handler).apply(b5.elem,cb);
if(b9!==undefined){if((e.result=b9)===false){e.preventDefault();
e.stopPropagation()
}}}}}if(ca.postDispatch){ca.postDispatch.call(this,e)
}return e.result
},handlers:function(e,b6){var b5,cb,b9,b8,ca=[],b7=b6.delegateCount,cc=e.target;
if(b7&&cc.nodeType&&(!e.button||e.type!=="click")){for(;
cc!=this;
cc=cc.parentNode||this){if(cc.nodeType===1&&(cc.disabled!==true||e.type!=="click")){b9=[];
for(b8=0;
b8<b7;
b8++){cb=b6[b8];
b5=cb.selector+" ";
if(b9[b5]===undefined){b9[b5]=cb.needsContext?bH(b5,this).index(cc)>=0:bH.find(b5,this,null,[cc]).length
}if(b9[b5]){b9.push(cb)
}}if(b9.length){ca.push({elem:cc,handlers:b9})
}}}}if(b7<b6.length){ca.push({elem:this,handlers:b6.slice(b7)})
}return ca
},fix:function(b7){if(b7[bH.expando]){return b7
}var b5,ca,b9,b6=b7.type,e=b7,b8=this.fixHooks[b6];
if(!b8){this.fixHooks[b6]=b8=bL.test(b6)?this.mouseHooks:a5.test(b6)?this.keyHooks:{}
}b9=b8.props?this.props.concat(b8.props):this.props;
b7=new bH.Event(e);
b5=b9.length;
while(b5--){ca=b9[b5];
b7[ca]=e[ca]
}if(!b7.target){b7.target=e.srcElement||n
}if(b7.target.nodeType===3){b7.target=b7.target.parentNode
}b7.metaKey=!!b7.metaKey;
return b8.filter?b8.filter(b7,e):b7
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(i,e){if(i.which==null){i.which=e.charCode!=null?e.charCode:e.keyCode
}return i
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b6,b5){var e,b7,b8,i=b5.button,b9=b5.fromElement;
if(b6.pageX==null&&b5.clientX!=null){b7=b6.target.ownerDocument||n;
b8=b7.documentElement;
e=b7.body;
b6.pageX=b5.clientX+(b8&&b8.scrollLeft||e&&e.scrollLeft||0)-(b8&&b8.clientLeft||e&&e.clientLeft||0);
b6.pageY=b5.clientY+(b8&&b8.scrollTop||e&&e.scrollTop||0)-(b8&&b8.clientTop||e&&e.clientTop||0)
}if(!b6.relatedTarget&&b9){b6.relatedTarget=b9===b6.target?b5.toElement:b9
}if(!b6.which&&i!==undefined){b6.which=(i&1?1:(i&2?3:(i&4?2:0)))
}return b6
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==al()&&this.focus){try{this.focus();
return false
}catch(i){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===al()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bH.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(e){return bH.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){if(e.result!==undefined&&e.originalEvent){e.originalEvent.returnValue=e.result
}}}},simulate:function(b5,b7,b6,i){var b8=bH.extend(new bH.Event(),b6,{type:b5,isSimulated:true,originalEvent:{}});
if(i){bH.event.trigger(b8,null,b7)
}else{bH.event.dispatch.call(b7,b8)
}if(b8.isDefaultPrevented()){b6.preventDefault()
}}};
bH.removeEvent=n.removeEventListener?function(i,e,b5){if(i.removeEventListener){i.removeEventListener(e,b5,false)
}}:function(b5,i,b6){var e="on"+i;
if(b5.detachEvent){if(typeof b5[e]===aB){b5[e]=null
}b5.detachEvent(e,b6)
}};
bH.Event=function(i,e){if(!(this instanceof bH.Event)){return new bH.Event(i,e)
}if(i&&i.type){this.originalEvent=i;
this.type=i.type;
this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===undefined&&i.returnValue===false?T:Y
}else{this.type=i
}if(e){bH.extend(this,e)
}this.timeStamp=i&&i.timeStamp||bH.now();
this[bH.expando]=true
};
bH.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var i=this.originalEvent;
this.isDefaultPrevented=T;
if(!i){return
}if(i.preventDefault){i.preventDefault()
}else{i.returnValue=false
}},stopPropagation:function(){var i=this.originalEvent;
this.isPropagationStopped=T;
if(!i){return
}if(i.stopPropagation){i.stopPropagation()
}i.cancelBubble=true
},stopImmediatePropagation:function(){var i=this.originalEvent;
this.isImmediatePropagationStopped=T;
if(i&&i.stopImmediatePropagation){i.stopImmediatePropagation()
}this.stopPropagation()
}};
bH.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,e){bH.event.special[i]={delegateType:e,bindType:e,handle:function(b7){var b5,b9=this,b8=b7.relatedTarget,b6=b7.handleObj;
if(!b8||(b8!==b9&&!bH.contains(b9,b8))){b7.type=b6.origType;
b5=b6.handler.apply(this,arguments);
b7.type=e
}return b5
}}
});
if(!C.submitBubbles){bH.event.special.submit={setup:function(){if(bH.nodeName(this,"form")){return false
}bH.event.add(this,"click._submit keypress._submit",function(b6){var b5=b6.target,i=bH.nodeName(b5,"input")||bH.nodeName(b5,"button")?b5.form:undefined;
if(i&&!bH._data(i,"submitBubbles")){bH.event.add(i,"submit._submit",function(e){e._submit_bubble=true
});
bH._data(i,"submitBubbles",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bH.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bH.nodeName(this,"form")){return false
}bH.event.remove(this,"._submit")
}}
}if(!C.changeBubbles){bH.event.special.change={setup:function(){if(bF.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bH.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bH.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bH.event.simulate("change",this,e,true)
})
}return false
}bH.event.add(this,"beforeactivate._change",function(b5){var i=b5.target;
if(bF.test(i.nodeName)&&!bH._data(i,"changeBubbles")){bH.event.add(i,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bH.event.simulate("change",this.parentNode,e,true)
}});
bH._data(i,"changeBubbles",true)
}})
},handle:function(i){var e=i.target;
if(this!==e||i.isSimulated||i.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return i.handleObj.handler.apply(this,arguments)
}},teardown:function(){bH.event.remove(this,"._change");
return !bF.test(this.nodeName)
}}
}if(!C.focusinBubbles){bH.each({focus:"focusin",blur:"focusout"},function(b5,e){var i=function(b6){bH.event.simulate(e,b6.target,bH.event.fix(b6),true)
};
bH.event.special[e]={setup:function(){var b7=this.ownerDocument||this,b6=bH._data(b7,e);
if(!b6){b7.addEventListener(b5,i,true)
}bH._data(b7,e,(b6||0)+1)
},teardown:function(){var b7=this.ownerDocument||this,b6=bH._data(b7,e)-1;
if(!b6){b7.removeEventListener(b5,i,true);
bH._removeData(b7,e)
}else{bH._data(b7,e,b6)
}}}
})
}bH.fn.extend({on:function(b5,e,b8,b7,i){var b6,b9;
if(typeof b5==="object"){if(typeof e!=="string"){b8=b8||e;
e=undefined
}for(b6 in b5){this.on(b6,e,b8,b5[b6],i)
}return this
}if(b8==null&&b7==null){b7=e;
b8=e=undefined
}else{if(b7==null){if(typeof e==="string"){b7=b8;
b8=undefined
}else{b7=b8;
b8=e;
e=undefined
}}}if(b7===false){b7=Y
}else{if(!b7){return this
}}if(i===1){b9=b7;
b7=function(ca){bH().off(ca);
return b9.apply(this,arguments)
};
b7.guid=b9.guid||(b9.guid=bH.guid++)
}return this.each(function(){bH.event.add(this,b5,b7,b8,e)
})
},one:function(i,e,b6,b5){return this.on(i,e,b6,b5,1)
},off:function(b5,e,b7){var i,b6;
if(b5&&b5.preventDefault&&b5.handleObj){i=b5.handleObj;
bH(b5.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);
return this
}if(typeof b5==="object"){for(b6 in b5){this.off(b6,e,b5[b6])
}return this
}if(e===false||typeof e==="function"){b7=e;
e=undefined
}if(b7===false){b7=Y
}return this.each(function(){bH.event.remove(this,b5,b7,e)
})
},trigger:function(e,i){return this.each(function(){bH.event.trigger(e,i,this)
})
},triggerHandler:function(e,b5){var i=this[0];
if(i){return bH.event.trigger(e,b5,i,true)
}}});
function A(e){var b5=d.split("|"),i=e.createDocumentFragment();
if(i.createElement){while(b5.length){i.createElement(b5.pop())
}}return i
}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aC=/ jQuery\d+="(?:null|\d+)"/g,L=new RegExp("<(?:"+d+")[\\s/>]","i"),b4=/^\s+/,aG=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,o=/<([\w:]+)/,bZ=/<tbody/i,K=/<|&#?\w+;/,am=/<(?:script|style|link)/i,bV=/checked\s*(?:[^=]|=\s*.checked.)/i,bA=/^$|\/(?:java|ecma)script/i,aq=/^true\/(.*)/,aN=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,V={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:C.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aS=A(n),k=aS.appendChild(n.createElement("div"));
V.optgroup=V.option;
V.tbody=V.tfoot=V.colgroup=V.caption=V.thead;
V.th=V.td;
function l(b7,e){var b5,b8,b6=0,b9=typeof b7.getElementsByTagName!==aB?b7.getElementsByTagName(e||"*"):typeof b7.querySelectorAll!==aB?b7.querySelectorAll(e||"*"):undefined;
if(!b9){for(b9=[],b5=b7.childNodes||b7;
(b8=b5[b6])!=null;
b6++){if(!e||bH.nodeName(b8,e)){b9.push(b8)
}else{bH.merge(b9,l(b8,e))
}}}return e===undefined||e&&bH.nodeName(b7,e)?bH.merge([b7],b9):b9
}function bX(e){if(aL.test(e.type)){e.defaultChecked=e.checked
}}function a2(i,e){return bH.nodeName(i,"table")&&bH.nodeName(e.nodeType!==11?e:e.firstChild,"tr")?i.getElementsByTagName("tbody")[0]||i.appendChild(i.ownerDocument.createElement("tbody")):i
}function t(e){e.type=(bH.find.attr(e,"type")!==null)+"/"+e.type;
return e
}function be(i){var e=aq.exec(i.type);
if(e){i.type=e[1]
}else{i.removeAttribute("type")
}return i
}function bt(e,b6){var b7,b5=0;
for(;
(b7=e[b5])!=null;
b5++){bH._data(b7,"globalEval",!b6||bH._data(b6[b5],"globalEval"))
}}function ar(cb,b5){if(b5.nodeType!==1||!bH.hasData(cb)){return
}var b8,b7,e,ca=bH._data(cb),b9=bH._data(b5,ca),b6=ca.events;
if(b6){delete b9.handle;
b9.events={};
for(b8 in b6){for(b7=0,e=b6[b8].length;
b7<e;
b7++){bH.event.add(b5,b8,b6[b8][b7])
}}}if(b9.data){b9.data=bH.extend({},b9.data)
}}function S(b7,i){var b8,b6,b5;
if(i.nodeType!==1){return
}b8=i.nodeName.toLowerCase();
if(!C.noCloneEvent&&i[bH.expando]){b5=bH._data(i);
for(b6 in b5.events){bH.removeEvent(i,b6,b5.handle)
}i.removeAttribute(bH.expando)
}if(b8==="script"&&i.text!==b7.text){t(i).text=b7.text;
be(i)
}else{if(b8==="object"){if(i.parentNode){i.outerHTML=b7.outerHTML
}if(C.html5Clone&&(b7.innerHTML&&!bH.trim(i.innerHTML))){i.innerHTML=b7.innerHTML
}}else{if(b8==="input"&&aL.test(b7.type)){i.defaultChecked=i.checked=b7.checked;
if(i.value!==b7.value){i.value=b7.value
}}else{if(b8==="option"){i.defaultSelected=i.selected=b7.defaultSelected
}else{if(b8==="input"||b8==="textarea"){i.defaultValue=b7.defaultValue
}}}}}}bH.extend({clone:function(b5,b7,e){var b9,b6,cc,b8,ca,cb=bH.contains(b5.ownerDocument,b5);
if(C.html5Clone||bH.isXMLDoc(b5)||!L.test("<"+b5.nodeName+">")){cc=b5.cloneNode(true)
}else{k.innerHTML=b5.outerHTML;
k.removeChild(cc=k.firstChild)
}if((!C.noCloneEvent||!C.noCloneChecked)&&(b5.nodeType===1||b5.nodeType===11)&&!bH.isXMLDoc(b5)){b9=l(cc);
ca=l(b5);
for(b8=0;
(b6=ca[b8])!=null;
++b8){if(b9[b8]){S(b6,b9[b8])
}}}if(b7){if(e){ca=ca||l(b5);
b9=b9||l(cc);
for(b8=0;
(b6=ca[b8])!=null;
b8++){ar(b6,b9[b8])
}}else{ar(b5,cc)
}}b9=l(cc,"script");
if(b9.length>0){bt(b9,!cb&&l(b5,"script"))
}b9=ca=b6=null;
return cc
},buildFragment:function(b5,b7,cc,ch){var cd,b9,cb,cg,ci,cf,b6,ca=b5.length,b8=A(b7),e=[],ce=0;
for(;
ce<ca;
ce++){b9=b5[ce];
if(b9||b9===0){if(bH.type(b9)==="object"){bH.merge(e,b9.nodeType?[b9]:b9)
}else{if(!K.test(b9)){e.push(b7.createTextNode(b9))
}else{cg=cg||b8.appendChild(b7.createElement("div"));
ci=(o.exec(b9)||["",""])[1].toLowerCase();
b6=V[ci]||V._default;
cg.innerHTML=b6[1]+b9.replace(aG,"<$1></$2>")+b6[2];
cd=b6[0];
while(cd--){cg=cg.lastChild
}if(!C.leadingWhitespace&&b4.test(b9)){e.push(b7.createTextNode(b4.exec(b9)[0]))
}if(!C.tbody){b9=ci==="table"&&!bZ.test(b9)?cg.firstChild:b6[1]==="<table>"&&!bZ.test(b9)?cg:0;
cd=b9&&b9.childNodes.length;
while(cd--){if(bH.nodeName((cf=b9.childNodes[cd]),"tbody")&&!cf.childNodes.length){b9.removeChild(cf)
}}}bH.merge(e,cg.childNodes);
cg.textContent="";
while(cg.firstChild){cg.removeChild(cg.firstChild)
}cg=b8.lastChild
}}}}if(cg){b8.removeChild(cg)
}if(!C.appendChecked){bH.grep(l(e,"input"),bX)
}ce=0;
while((b9=e[ce++])){if(ch&&bH.inArray(b9,ch)!==-1){continue
}cb=bH.contains(b9.ownerDocument,b9);
cg=l(b8.appendChild(b9),"script");
if(cb){bt(cg)
}if(cc){cd=0;
while((b9=cg[cd++])){if(bA.test(b9.type||"")){cc.push(b9)
}}}}cg=null;
return b8
},cleanData:function(b5,cd){var b7,cc,b6,b8,b9=0,ce=bH.expando,e=bH.cache,ca=C.deleteExpando,cb=bH.event.special;
for(;
(b7=b5[b9])!=null;
b9++){if(cd||bH.acceptData(b7)){b6=b7[ce];
b8=b6&&e[b6];
if(b8){if(b8.events){for(cc in b8.events){if(cb[cc]){bH.event.remove(b7,cc)
}else{bH.removeEvent(b7,cc,b8.handle)
}}}if(e[b6]){delete e[b6];
if(ca){delete b7[ce]
}else{if(typeof b7.removeAttribute!==aB){b7.removeAttribute(ce)
}else{b7[ce]=null
}}aO.push(b6)
}}}}}});
bH.fn.extend({text:function(e){return aA(this,function(i){return i===undefined?bH.text(this):this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(i))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a2(this,e);
i.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=a2(this,e);
i.insertBefore(e,i.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})
},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})
},remove:function(e,b8){var b7,b5=e?bH.filter(e,this):this,b6=0;
for(;
(b7=b5[b6])!=null;
b6++){if(!b8&&b7.nodeType===1){bH.cleanData(l(b7))
}if(b7.parentNode){if(b8&&bH.contains(b7.ownerDocument,b7)){bt(l(b7,"script"))
}b7.parentNode.removeChild(b7)
}}return this
},empty:function(){var b5,e=0;
for(;
(b5=this[e])!=null;
e++){if(b5.nodeType===1){bH.cleanData(l(b5,false))
}while(b5.firstChild){b5.removeChild(b5.firstChild)
}if(b5.options&&bH.nodeName(b5,"select")){b5.options.length=0
}}return this
},clone:function(i,e){i=i==null?false:i;
e=e==null?i:e;
return this.map(function(){return bH.clone(this,i,e)
})
},html:function(e){return aA(this,function(b8){var b7=this[0]||{},b6=0,b5=this.length;
if(b8===undefined){return b7.nodeType===1?b7.innerHTML.replace(aC,""):undefined
}if(typeof b8==="string"&&!am.test(b8)&&(C.htmlSerialize||!L.test(b8))&&(C.leadingWhitespace||!b4.test(b8))&&!V[(o.exec(b8)||["",""])[1].toLowerCase()]){b8=b8.replace(aG,"<$1></$2>");
try{for(;
b6<b5;
b6++){b7=this[b6]||{};
if(b7.nodeType===1){bH.cleanData(l(b7,false));
b7.innerHTML=b8
}}b7=0
}catch(b9){}}if(b7){this.empty().append(b8)
}},null,e,arguments.length)
},replaceWith:function(){var e=arguments[0];
this.domManip(arguments,function(i){e=this.parentNode;
bH.cleanData(l(this));
if(e){e.replaceChild(i,this)
}});
return e&&(e.length||e.nodeType)?this:this.remove()
},detach:function(e){return this.remove(e,true)
},domManip:function(cc,ch){cc=ay.apply([],cc);
var ca,b6,e,b8,cf,cb,b9=0,b7=this.length,ce=this,cg=b7-1,cd=cc[0],b5=bH.isFunction(cd);
if(b5||(b7>1&&typeof cd==="string"&&!C.checkClone&&bV.test(cd))){return this.each(function(ci){var i=ce.eq(ci);
if(b5){cc[0]=cd.call(this,ci,i.html())
}i.domManip(cc,ch)
})
}if(b7){cb=bH.buildFragment(cc,this[0].ownerDocument,false,this);
ca=cb.firstChild;
if(cb.childNodes.length===1){cb=ca
}if(ca){b8=bH.map(l(cb,"script"),t);
e=b8.length;
for(;
b9<b7;
b9++){b6=cb;
if(b9!==cg){b6=bH.clone(b6,true,true);
if(e){bH.merge(b8,l(b6,"script"))
}}ch.call(this[b9],b6,b9)
}if(e){cf=b8[b8.length-1].ownerDocument;
bH.map(b8,be);
for(b9=0;
b9<e;
b9++){b6=b8[b9];
if(bA.test(b6.type||"")&&!bH._data(b6,"globalEval")&&bH.contains(cf,b6)){if(b6.src){if(bH._evalUrl){bH._evalUrl(b6.src)
}}else{bH.globalEval((b6.text||b6.textContent||b6.innerHTML||"").replace(aN,""))
}}}}cb=ca=null
}}return this
}});
bH.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){bH.fn[e]=function(b5){var b6,b8=0,b7=[],ca=bH(b5),b9=ca.length-1;
for(;
b8<=b9;
b8++){b6=b8===b9?this:this.clone(true);
bH(ca[b8])[i](b6);
w.apply(b7,b6.get())
}return this.pushStack(b7)
}
});
var aH,bk={};
function a3(e,b7){var i,b5=bH(b7.createElement(e)).appendTo(b7.body),b6=a4.getDefaultComputedStyle&&(i=a4.getDefaultComputedStyle(b5[0]))?i.display:bH.css(b5[0],"display");
b5.detach();
return b6
}function aZ(b5){var i=n,e=bk[b5];
if(!e){e=a3(b5,i);
if(e==="none"||!e){aH=(aH||bH("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
i=(aH[0].contentWindow||aH[0].contentDocument).document;
i.write();
i.close();
e=a3(b5,i);
aH.detach()
}bk[b5]=e
}return e
}(function(){var e;
C.shrinkWrapBlocks=function(){if(e!=null){return e
}e=false;
var b6,i,b5;
i=n.getElementsByTagName("body")[0];
if(!i||!i.style){return
}b6=n.createElement("div");
b5=n.createElement("div");
b5.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
i.appendChild(b5).appendChild(b6);
if(typeof b6.style.zoom!==aB){b6.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
b6.appendChild(n.createElement("div")).style.width="5px";
e=b6.offsetWidth!==3
}i.removeChild(b5);
return e
}
})();
var aY=(/^margin/);
var X=new RegExp("^("+aD+")(?!px)[a-z%]+$","i");
var bp,F,bn=/^(top|right|bottom|left)$/;
if(a4.getComputedStyle){bp=function(e){if(e.ownerDocument.defaultView.opener){return e.ownerDocument.defaultView.getComputedStyle(e,null)
}return a4.getComputedStyle(e,null)
};
F=function(ca,i,b9){var b7,b6,b8,e,b5=ca.style;
b9=b9||bp(ca);
e=b9?b9.getPropertyValue(i)||b9[i]:undefined;
if(b9){if(e===""&&!bH.contains(ca.ownerDocument,ca)){e=bH.style(ca,i)
}if(X.test(e)&&aY.test(i)){b7=b5.width;
b6=b5.minWidth;
b8=b5.maxWidth;
b5.minWidth=b5.maxWidth=b5.width=e;
e=b9.width;
b5.width=b7;
b5.minWidth=b6;
b5.maxWidth=b8
}}return e===undefined?e:e+""
}
}else{if(n.documentElement.currentStyle){bp=function(e){return e.currentStyle
};
F=function(b9,b6,b8){var ca,i,e,b5,b7=b9.style;
b8=b8||bp(b9);
b5=b8?b8[b6]:undefined;
if(b5==null&&b7&&b7[b6]){b5=b7[b6]
}if(X.test(b5)&&!bn.test(b6)){ca=b7.left;
i=b9.runtimeStyle;
e=i&&i.left;
if(e){i.left=b9.currentStyle.left
}b7.left=b6==="fontSize"?"1em":b5;
b5=b7.pixelLeft+"px";
b7.left=ca;
if(e){i.left=e
}}return b5===undefined?b5:b5+""||"auto"
}
}}function a6(e,i){return{get:function(){var b5=e();
if(b5==null){return
}if(b5){delete this.get;
return
}return(this.get=i).apply(this,arguments)
}}
}(function(){var ca,b8,b6,b9,b5,b7,i;
ca=n.createElement("div");
ca.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
b6=ca.getElementsByTagName("a")[0];
b8=b6&&b6.style;
if(!b8){return
}b8.cssText="float:left;opacity:.5";
C.opacity=b8.opacity==="0.5";
C.cssFloat=!!b8.cssFloat;
ca.style.backgroundClip="content-box";
ca.cloneNode(true).style.backgroundClip="";
C.clearCloneStyle=ca.style.backgroundClip==="content-box";
C.boxSizing=b8.boxSizing===""||b8.MozBoxSizing===""||b8.WebkitBoxSizing==="";
bH.extend(C,{reliableHiddenOffsets:function(){if(b7==null){e()
}return b7
},boxSizingReliable:function(){if(b5==null){e()
}return b5
},pixelPosition:function(){if(b9==null){e()
}return b9
},reliableMarginRight:function(){if(i==null){e()
}return i
}});
function e(){var ce,cb,cc,cd;
cb=n.getElementsByTagName("body")[0];
if(!cb||!cb.style){return
}ce=n.createElement("div");
cc=n.createElement("div");
cc.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cb.appendChild(cc).appendChild(ce);
ce.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
b9=b5=false;
i=true;
if(a4.getComputedStyle){b9=(a4.getComputedStyle(ce,null)||{}).top!=="1%";
b5=(a4.getComputedStyle(ce,null)||{width:"4px"}).width==="4px";
cd=ce.appendChild(n.createElement("div"));
cd.style.cssText=ce.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
cd.style.marginRight=cd.style.width="0";
ce.style.width="1px";
i=!parseFloat((a4.getComputedStyle(cd,null)||{}).marginRight);
ce.removeChild(cd)
}ce.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cd=ce.getElementsByTagName("td");
cd[0].style.cssText="margin:0;border:0;padding:0;display:none";
b7=cd[0].offsetHeight===0;
if(b7){cd[0].style.display="";
cd[1].style.display="none";
b7=cd[0].offsetHeight===0
}cb.removeChild(cc)
}})();
bH.swap=function(b8,b7,b9,b6){var b5,i,e={};
for(i in b7){e[i]=b8.style[i];
b8.style[i]=b7[i]
}b5=b9.apply(b8,b6||[]);
for(i in b7){b8.style[i]=e[i]
}return b5
};
var bi=/alpha\([^)]*\)/i,aT=/opacity\s*=\s*([^)]*)/,G=/^(none|table(?!-c[ea]).+)/,ba=new RegExp("^("+aD+")(.*)$","i"),U=new RegExp("^([+-])=("+aD+")","i"),bd={position:"absolute",visibility:"hidden",display:"block"},bC={letterSpacing:"0",fontWeight:"400"},av=["Webkit","O","Moz","ms"];
function c(b7,b5){if(b5 in b7){return b5
}var b8=b5.charAt(0).toUpperCase()+b5.slice(1),e=b5,b6=av.length;
while(b6--){b5=av[b6]+b8;
if(b5 in b7){return b5
}}return e
}function r(b9,e){var ca,b7,b8,i=[],b5=0,b6=b9.length;
for(;
b5<b6;
b5++){b7=b9[b5];
if(!b7.style){continue
}i[b5]=bH._data(b7,"olddisplay");
ca=b7.style.display;
if(e){if(!i[b5]&&ca==="none"){b7.style.display=""
}if(b7.style.display===""&&R(b7)){i[b5]=bH._data(b7,"olddisplay",aZ(b7.nodeName))
}}else{b8=R(b7);
if(ca&&ca!=="none"||!b8){bH._data(b7,"olddisplay",b8?ca:bH.css(b7,"display"))
}}}for(b5=0;
b5<b6;
b5++){b7=b9[b5];
if(!b7.style){continue
}if(!e||b7.style.display==="none"||b7.style.display===""){b7.style.display=e?i[b5]||"":"none"
}}return b9
}function aM(e,b5,b6){var i=ba.exec(b5);
return i?Math.max(0,i[1]-(b6||0))+(i[2]||"px"):b5
}function aw(b8,b5,e,ca,b7){var b6=e===(ca?"border":"content")?4:b5==="width"?1:0,b9=0;
for(;
b6<4;
b6+=2){if(e==="margin"){b9+=bH.css(b8,e+bS[b6],true,b7)
}if(ca){if(e==="content"){b9-=bH.css(b8,"padding"+bS[b6],true,b7)
}if(e!=="margin"){b9-=bH.css(b8,"border"+bS[b6]+"Width",true,b7)
}}else{b9+=bH.css(b8,"padding"+bS[b6],true,b7);
if(e!=="padding"){b9+=bH.css(b8,"border"+bS[b6]+"Width",true,b7)
}}}return b9
}function u(b7,i,e){var b6=true,b8=i==="width"?b7.offsetWidth:b7.offsetHeight,b5=bp(b7),b9=C.boxSizing&&bH.css(b7,"boxSizing",false,b5)==="border-box";
if(b8<=0||b8==null){b8=F(b7,i,b5);
if(b8<0||b8==null){b8=b7.style[i]
}if(X.test(b8)){return b8
}b6=b9&&(C.boxSizingReliable()||b8===b7.style[i]);
b8=parseFloat(b8)||0
}return(b8+aw(b7,i,e||(b9?"border":"content"),b6,b5))+"px"
}bH.extend({cssHooks:{opacity:{get:function(b5,i){if(i){var e=F(b5,"opacity");
return e===""?"1":e
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":C.cssFloat?"cssFloat":"styleFloat"},style:function(b6,b5,cc,b7){if(!b6||b6.nodeType===3||b6.nodeType===8||!b6.style){return
}var ca,cb,cd,b8=bH.camelCase(b5),i=b6.style;
b5=bH.cssProps[b8]||(bH.cssProps[b8]=c(i,b8));
cd=bH.cssHooks[b5]||bH.cssHooks[b8];
if(cc!==undefined){cb=typeof cc;
if(cb==="string"&&(ca=U.exec(cc))){cc=(ca[1]+1)*ca[2]+parseFloat(bH.css(b6,b5));
cb="number"
}if(cc==null||cc!==cc){return
}if(cb==="number"&&!bH.cssNumber[b8]){cc+="px"
}if(!C.clearCloneStyle&&cc===""&&b5.indexOf("background")===0){i[b5]="inherit"
}if(!cd||!("set" in cd)||(cc=cd.set(b6,cc,b7))!==undefined){try{i[b5]=cc
}catch(b9){}}}else{if(cd&&"get" in cd&&(ca=cd.get(b6,false,b7))!==undefined){return ca
}return i[b5]
}},css:function(b9,b7,i,b8){var b6,ca,e,b5=bH.camelCase(b7);
b7=bH.cssProps[b5]||(bH.cssProps[b5]=c(b9.style,b5));
e=bH.cssHooks[b7]||bH.cssHooks[b5];
if(e&&"get" in e){ca=e.get(b9,true,i)
}if(ca===undefined){ca=F(b9,b7,b8)
}if(ca==="normal"&&b7 in bC){ca=bC[b7]
}if(i===""||i){b6=parseFloat(ca);
return i===true||bH.isNumeric(b6)?b6||0:ca
}return ca
}});
bH.each(["height","width"],function(b5,e){bH.cssHooks[e]={get:function(b7,b6,i){if(b6){return G.test(bH.css(b7,"display"))&&b7.offsetWidth===0?bH.swap(b7,bd,function(){return u(b7,e,i)
}):u(b7,e,i)
}},set:function(b7,b8,i){var b6=i&&bp(b7);
return aM(b7,b8,i?aw(b7,e,i,C.boxSizing&&bH.css(b7,"boxSizing",false,b6)==="border-box",b6):0)
}}
});
if(!C.opacity){bH.cssHooks.opacity={get:function(i,e){return aT.test((e&&i.currentStyle?i.currentStyle.filter:i.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b7,b8){var b6=b7.style,i=b7.currentStyle,e=bH.isNumeric(b8)?"alpha(opacity="+b8*100+")":"",b5=i&&i.filter||b6.filter||"";
b6.zoom=1;
if((b8>=1||b8==="")&&bH.trim(b5.replace(bi,""))===""&&b6.removeAttribute){b6.removeAttribute("filter");
if(b8===""||i&&!i.filter){return
}}b6.filter=bi.test(b5)?b5.replace(bi,e):b5+" "+e
}}
}bH.cssHooks.marginRight=a6(C.reliableMarginRight,function(i,e){if(e){return bH.swap(i,{display:"inline-block"},F,[i,"marginRight"])
}});
bH.each({margin:"",padding:"",border:"Width"},function(e,i){bH.cssHooks[e+i]={expand:function(b7){var b6=0,b5={},b8=typeof b7==="string"?b7.split(" "):[b7];
for(;
b6<4;
b6++){b5[e+bS[b6]+i]=b8[b6]||b8[b6-2]||b8[0]
}return b5
}};
if(!aY.test(e)){bH.cssHooks[e+i].set=aM
}});
bH.fn.extend({css:function(e,i){return aA(this,function(b9,b6,ca){var b8,b5,cb={},b7=0;
if(bH.isArray(b6)){b8=bp(b9);
b5=b6.length;
for(;
b7<b5;
b7++){cb[b6[b7]]=bH.css(b9,b6[b7],false,b8)
}return cb
}return ca!==undefined?bH.style(b9,b6,ca):bH.css(b9,b6)
},e,i,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()
}return this.each(function(){if(R(this)){bH(this).show()
}else{bH(this).hide()
}})
}});
function I(b5,i,b7,e,b6){return new I.prototype.init(b5,i,b7,e,b6)
}bH.Tween=I;
I.prototype={constructor:I,init:function(b6,i,b8,e,b7,b5){this.elem=b6;
this.prop=b8;
this.easing=b7||"swing";
this.options=i;
this.start=this.now=this.cur();
this.end=e;
this.unit=b5||(bH.cssNumber[b8]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b5){var i,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=i=bH.easing[this.easing](b5,this.options.duration*b5,0,1,this.options.duration)
}else{this.pos=i=b5
}this.now=(this.end-this.start)*i+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(i){var e;
if(i.elem[i.prop]!=null&&(!i.elem.style||i.elem.style[i.prop]==null)){return i.elem[i.prop]
}e=bH.css(i.elem,i.prop,"");
return !e||e==="auto"?0:e
},set:function(e){if(bH.fx.step[e.prop]){bH.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bH.cssProps[e.prop]]!=null||bH.cssHooks[e.prop])){bH.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bH.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bH.fx=I.prototype.init;
bH.fx.step={};
var M,ad,bQ=/^(?:toggle|show|hide)$/,bI=new RegExp("^(?:([+-])=|)("+aD+")([a-z%]*)$","i"),bO=/queueHooks$/,aF=[h],a1={"*":[function(e,b9){var cb=this.createTween(e,b9),b7=cb.cur(),b6=bI.exec(b9),ca=b6&&b6[3]||(bH.cssNumber[e]?"":"px"),i=(bH.cssNumber[e]||ca!=="px"&&+b7)&&bI.exec(bH.css(cb.elem,e)),b5=1,b8=20;
if(i&&i[3]!==ca){ca=ca||i[3];
b6=b6||[];
i=+b7||1;
do{b5=b5||".5";
i=i/b5;
bH.style(cb.elem,e,i+ca)
}while(b5!==(b5=cb.cur()/b7)&&b5!==1&&--b8)
}if(b6){i=cb.start=+i||+b7||0;
cb.unit=ca;
cb.end=b6[1]?i+(b6[1]+1)*b6[2]:+b6[2]
}return cb
}]};
function bm(){setTimeout(function(){M=undefined
});
return(M=bH.now())
}function bG(b6,b8){var b7,e={height:b6},b5=0;
b8=b8?1:0;
for(;
b5<4;
b5+=2-b8){b7=bS[b5];
e["margin"+b7]=e["padding"+b7]=b6
}if(b8){e.opacity=e.width=b6
}return e
}function bc(b7,b9,b6){var i,b8=(a1[b9]||[]).concat(a1["*"]),e=0,b5=b8.length;
for(;
e<b5;
e++){if((i=b8[e].call(b6,b9,b7))){return i
}}}function h(b6,cb,e){var b5,ce,b8,ch,ci,cf,ca,cd,b7=this,cc={},i=b6.style,b9=b6.nodeType&&R(b6),cg=bH._data(b6,"fxshow");
if(!e.queue){ci=bH._queueHooks(b6,"fx");
if(ci.unqueued==null){ci.unqueued=0;
cf=ci.empty.fire;
ci.empty.fire=function(){if(!ci.unqueued){cf()
}}
}ci.unqueued++;
b7.always(function(){b7.always(function(){ci.unqueued--;
if(!bH.queue(b6,"fx").length){ci.empty.fire()
}})
})
}if(b6.nodeType===1&&("height" in cb||"width" in cb)){e.overflow=[i.overflow,i.overflowX,i.overflowY];
ca=bH.css(b6,"display");
cd=ca==="none"?bH._data(b6,"olddisplay")||aZ(b6.nodeName):ca;
if(cd==="inline"&&bH.css(b6,"float")==="none"){if(!C.inlineBlockNeedsLayout||aZ(b6.nodeName)==="inline"){i.display="inline-block"
}else{i.zoom=1
}}}if(e.overflow){i.overflow="hidden";
if(!C.shrinkWrapBlocks()){b7.always(function(){i.overflow=e.overflow[0];
i.overflowX=e.overflow[1];
i.overflowY=e.overflow[2]
})
}}for(b5 in cb){ce=cb[b5];
if(bQ.exec(ce)){delete cb[b5];
b8=b8||ce==="toggle";
if(ce===(b9?"hide":"show")){if(ce==="show"&&cg&&cg[b5]!==undefined){b9=true
}else{continue
}}cc[b5]=cg&&cg[b5]||bH.style(b6,b5)
}else{ca=undefined
}}if(!bH.isEmptyObject(cc)){if(cg){if("hidden" in cg){b9=cg.hidden
}}else{cg=bH._data(b6,"fxshow",{})
}if(b8){cg.hidden=!b9
}if(b9){bH(b6).show()
}else{b7.done(function(){bH(b6).hide()
})
}b7.done(function(){var cj;
bH._removeData(b6,"fxshow");
for(cj in cc){bH.style(b6,cj,cc[cj])
}});
for(b5 in cc){ch=bc(b9?cg[b5]:0,b5,b7);
if(!(b5 in cg)){cg[b5]=ch.start;
if(b9){ch.end=ch.start;
ch.start=b5==="width"||b5==="height"?1:0
}}}}else{if((ca==="none"?aZ(b6.nodeName):ca)==="inline"){i.display=ca
}}}function an(b6,b8){var b5,i,b9,b7,e;
for(b5 in b6){i=bH.camelCase(b5);
b9=b8[i];
b7=b6[b5];
if(bH.isArray(b7)){b9=b7[1];
b7=b6[b5]=b7[0]
}if(b5!==i){b6[i]=b7;
delete b6[b5]
}e=bH.cssHooks[i];
if(e&&"expand" in e){b7=e.expand(b7);
delete b6[i];
for(b5 in b7){if(!(b5 in b6)){b6[b5]=b7[b5];
b8[b5]=b9
}}}else{b8[i]=b9
}}}function f(b5,b9,cc){var cd,e,b8=0,i=aF.length,cb=bH.Deferred().always(function(){delete b7.elem
}),b7=function(){if(e){return false
}var cj=M||bm(),cg=Math.max(0,b6.startTime+b6.duration-cj),ce=cg/b6.duration||0,ci=1-ce,cf=0,ch=b6.tweens.length;
for(;
cf<ch;
cf++){b6.tweens[cf].run(ci)
}cb.notifyWith(b5,[b6,ci,cg]);
if(ci<1&&ch){return cg
}else{cb.resolveWith(b5,[b6]);
return false
}},b6=cb.promise({elem:b5,props:bH.extend({},b9),opts:bH.extend(true,{specialEasing:{}},cc),originalProperties:b9,originalOptions:cc,startTime:M||bm(),duration:cc.duration,tweens:[],createTween:function(cg,ce){var cf=bH.Tween(b5,b6.opts,cg,ce,b6.opts.specialEasing[cg]||b6.opts.easing);
b6.tweens.push(cf);
return cf
},stop:function(cf){var ce=0,cg=cf?b6.tweens.length:0;
if(e){return this
}e=true;
for(;
ce<cg;
ce++){b6.tweens[ce].run(1)
}if(cf){cb.resolveWith(b5,[b6,cf])
}else{cb.rejectWith(b5,[b6,cf])
}return this
}}),ca=b6.props;
an(ca,b6.opts.specialEasing);
for(;
b8<i;
b8++){cd=aF[b8].call(b6,b5,ca,b6.opts);
if(cd){return cd
}}bH.map(ca,bc,b6);
if(bH.isFunction(b6.opts.start)){b6.opts.start.call(b5,b6)
}bH.fx.timer(bH.extend(b7,{elem:b5,anim:b6,queue:b6.opts.queue}));
return b6.progress(b6.opts.progress).done(b6.opts.done,b6.opts.complete).fail(b6.opts.fail).always(b6.opts.always)
}bH.Animation=bH.extend(f,{tweener:function(i,b7){if(bH.isFunction(i)){b7=i;
i=["*"]
}else{i=i.split(" ")
}var b6,e=0,b5=i.length;
for(;
e<b5;
e++){b6=i[e];
a1[b6]=a1[b6]||[];
a1[b6].unshift(b7)
}},prefilter:function(i,e){if(e){aF.unshift(i)
}else{aF.push(i)
}}});
bH.speed=function(b5,b6,i){var e=b5&&typeof b5==="object"?bH.extend({},b5):{complete:i||!i&&b6||bH.isFunction(b5)&&b5,duration:b5,easing:i&&b6||b6&&!bH.isFunction(b6)&&b6};
e.duration=bH.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bH.fx.speeds?bH.fx.speeds[e.duration]:bH.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bH.isFunction(e.old)){e.old.call(this)
}if(e.queue){bH.dequeue(this,e.queue)
}};
return e
};
bH.fn.extend({fadeTo:function(e,b6,b5,i){return this.filter(R).css("opacity",0).show().end().animate({opacity:b6},e,b5,i)
},animate:function(b9,b6,b8,b7){var b5=bH.isEmptyObject(b9),e=bH.speed(b6,b8,b7),i=function(){var ca=f(this,bH.extend({},b9),e);
if(b5||bH._data(this,"finish")){ca.stop(true)
}};
i.finish=i;
return b5||e.queue===false?this.each(i):this.queue(e.queue,i)
},stop:function(b5,i,e){var b6=function(b7){var b8=b7.stop;
delete b7.stop;
b8(e)
};
if(typeof b5!=="string"){e=i;
i=b5;
b5=undefined
}if(i&&b5!==false){this.queue(b5||"fx",[])
}return this.each(function(){var ca=true,b7=b5!=null&&b5+"queueHooks",b9=bH.timers,b8=bH._data(this);
if(b7){if(b8[b7]&&b8[b7].stop){b6(b8[b7])
}}else{for(b7 in b8){if(b8[b7]&&b8[b7].stop&&bO.test(b7)){b6(b8[b7])
}}}for(b7=b9.length;
b7--;
){if(b9[b7].elem===this&&(b5==null||b9[b7].queue===b5)){b9[b7].anim.stop(e);
ca=false;
b9.splice(b7,1)
}}if(ca||!e){bH.dequeue(this,b5)
}})
},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b6,b9=bH._data(this),b5=b9[e+"queue"],i=b9[e+"queueHooks"],b8=bH.timers,b7=b5?b5.length:0;
b9.finish=true;
bH.queue(this,e,[]);
if(i&&i.stop){i.stop.call(this,true)
}for(b6=b8.length;
b6--;
){if(b8[b6].elem===this&&b8[b6].queue===e){b8[b6].anim.stop(true);
b8.splice(b6,1)
}}for(b6=0;
b6<b7;
b6++){if(b5[b6]&&b5[b6].finish){b5[b6].finish.call(this)
}}delete b9.finish
})
}});
bH.each(["toggle","show","hide"],function(b5,e){var b6=bH.fn[e];
bH.fn[e]=function(i,b8,b7){return i==null||typeof i==="boolean"?b6.apply(this,arguments):this.animate(bG(e,true),i,b8,b7)
}
});
bH.each({slideDown:bG("show"),slideUp:bG("hide"),slideToggle:bG("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){bH.fn[e]=function(b5,b7,b6){return this.animate(i,b5,b7,b6)
}
});
bH.timers=[];
bH.fx.tick=function(){var b6,b5=bH.timers,e=0;
M=bH.now();
for(;
e<b5.length;
e++){b6=b5[e];
if(!b6()&&b5[e]===b6){b5.splice(e--,1)
}}if(!b5.length){bH.fx.stop()
}M=undefined
};
bH.fx.timer=function(e){bH.timers.push(e);
if(e()){bH.fx.start()
}else{bH.timers.pop()
}};
bH.fx.interval=13;
bH.fx.start=function(){if(!ad){ad=setInterval(bH.fx.tick,bH.fx.interval)
}};
bH.fx.stop=function(){clearInterval(ad);
ad=null
};
bH.fx.speeds={slow:600,fast:200,_default:400};
bH.fn.delay=function(i,e){i=bH.fx?bH.fx.speeds[i]||i:i;
e=e||"fx";
return this.queue(e,function(b6,b5){var b7=setTimeout(b6,i);
b5.stop=function(){clearTimeout(b7)
}
})
};
(function(){var b5,b7,e,i,b6;
b7=n.createElement("div");
b7.setAttribute("className","t");
b7.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
i=b7.getElementsByTagName("a")[0];
e=n.createElement("select");
b6=e.appendChild(n.createElement("option"));
b5=b7.getElementsByTagName("input")[0];
i.style.cssText="top:1px";
C.getSetAttribute=b7.className!=="t";
C.style=/top/.test(i.getAttribute("style"));
C.hrefNormalized=i.getAttribute("href")==="/a";
C.checkOn=!!b5.value;
C.optSelected=b6.selected;
C.enctype=!!n.createElement("form").enctype;
e.disabled=true;
C.optDisabled=!b6.disabled;
b5=n.createElement("input");
b5.setAttribute("value","");
C.input=b5.getAttribute("value")==="";
b5.value="t";
b5.setAttribute("type","radio");
C.radioValue=b5.value==="t"
})();
var ak=/\r/g;
bH.fn.extend({val:function(b6){var e,i,b7,b5=this[0];
if(!arguments.length){if(b5){e=bH.valHooks[b5.type]||bH.valHooks[b5.nodeName.toLowerCase()];
if(e&&"get" in e&&(i=e.get(b5,"value"))!==undefined){return i
}i=b5.value;
return typeof i==="string"?i.replace(ak,""):i==null?"":i
}return
}b7=bH.isFunction(b6);
return this.each(function(b8){var b9;
if(this.nodeType!==1){return
}if(b7){b9=b6.call(this,b8,bH(this).val())
}else{b9=b6
}if(b9==null){b9=""
}else{if(typeof b9==="number"){b9+=""
}else{if(bH.isArray(b9)){b9=bH.map(b9,function(ca){return ca==null?"":ca+""
})
}}}e=bH.valHooks[this.type]||bH.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b9,"value")===undefined){this.value=b9
}})
}});
bH.extend({valHooks:{option:{get:function(e){var i=bH.find.attr(e,"value");
return i!=null?i:bH.trim(bH.text(e))
}},select:{get:function(e){var ca,b6,cc=e.options,b8=e.selectedIndex,b7=e.type==="select-one"||b8<0,cb=b7?null:[],b9=b7?b8+1:cc.length,b5=b8<0?b9:b7?b8:0;
for(;
b5<b9;
b5++){b6=cc[b5];
if((b6.selected||b5===b8)&&(C.optDisabled?!b6.disabled:b6.getAttribute("disabled")===null)&&(!b6.parentNode.disabled||!bH.nodeName(b6.parentNode,"optgroup"))){ca=bH(b6).val();
if(b7){return ca
}cb.push(ca)
}}return cb
},set:function(b9,ca){var cb,b8,b6=b9.options,e=bH.makeArray(ca),b7=b6.length;
while(b7--){b8=b6[b7];
if(bH.inArray(bH.valHooks.option.get(b8),e)>=0){try{b8.selected=cb=true
}catch(b5){b8.scrollHeight
}}else{b8.selected=false
}}if(!cb){b9.selectedIndex=-1
}return b6
}}}});
bH.each(["radio","checkbox"],function(){bH.valHooks[this]={set:function(e,i){if(bH.isArray(i)){return(e.checked=bH.inArray(bH(e).val(),i)>=0)
}}};
if(!C.checkOn){bH.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value
}
}});
var a9,b2,bN=bH.expr.attrHandle,ap=/^(?:checked|selected)$/i,bM=C.getSetAttribute,bE=C.input;
bH.fn.extend({attr:function(e,i){return aA(this,bH.attr,e,i,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bH.removeAttr(this,e)
})
}});
bH.extend({attr:function(b7,b6,b8){var e,b5,i=b7.nodeType;
if(!b7||i===3||i===8||i===2){return
}if(typeof b7.getAttribute===aB){return bH.prop(b7,b6,b8)
}if(i!==1||!bH.isXMLDoc(b7)){b6=b6.toLowerCase();
e=bH.attrHooks[b6]||(bH.expr.match.bool.test(b6)?b2:a9)
}if(b8!==undefined){if(b8===null){bH.removeAttr(b7,b6)
}else{if(e&&"set" in e&&(b5=e.set(b7,b8,b6))!==undefined){return b5
}else{b7.setAttribute(b6,b8+"");
return b8
}}}else{if(e&&"get" in e&&(b5=e.get(b7,b6))!==null){return b5
}else{b5=bH.find.attr(b7,b6);
return b5==null?undefined:b5
}}},removeAttr:function(b6,b8){var e,b7,b5=0,b9=b8&&b8.match(aE);
if(b9&&b6.nodeType===1){while((e=b9[b5++])){b7=bH.propFix[e]||e;
if(bH.expr.match.bool.test(e)){if(bE&&bM||!ap.test(e)){b6[b7]=false
}else{b6[bH.camelCase("default-"+e)]=b6[b7]=false
}}else{bH.attr(b6,e,"")
}b6.removeAttribute(bM?e:b7)
}}},attrHooks:{type:{set:function(e,i){if(!C.radioValue&&i==="radio"&&bH.nodeName(e,"input")){var b5=e.value;
e.setAttribute("type",i);
if(b5){e.value=b5
}return i
}}}}});
b2={set:function(i,b5,e){if(b5===false){bH.removeAttr(i,e)
}else{if(bE&&bM||!ap.test(e)){i.setAttribute(!bM&&bH.propFix[e]||e,e)
}else{i[bH.camelCase("default-"+e)]=i[e]=true
}}return e
}};
bH.each(bH.expr.match.bool.source.match(/\w+/g),function(b6,b5){var e=bN[b5]||bH.find.attr;
bN[b5]=bE&&bM||!ap.test(b5)?function(b8,b7,ca){var i,b9;
if(!ca){b9=bN[b7];
bN[b7]=i;
i=e(b8,b7,ca)!=null?b7.toLowerCase():null;
bN[b7]=b9
}return i
}:function(b7,i,b8){if(!b8){return b7[bH.camelCase("default-"+i)]?i.toLowerCase():null
}}
});
if(!bE||!bM){bH.attrHooks.value={set:function(i,b5,e){if(bH.nodeName(i,"input")){i.defaultValue=b5
}else{return a9&&a9.set(i,b5,e)
}}}
}if(!bM){a9={set:function(b5,b6,i){var e=b5.getAttributeNode(i);
if(!e){b5.setAttributeNode((e=b5.ownerDocument.createAttribute(i)))
}e.value=b6+="";
if(i==="value"||b6===b5.getAttribute(i)){return b6
}}};
bN.id=bN.name=bN.coords=function(b5,i,b6){var e;
if(!b6){return(e=b5.getAttributeNode(i))&&e.value!==""?e.value:null
}};
bH.valHooks.button={get:function(b5,i){var e=b5.getAttributeNode(i);
if(e&&e.specified){return e.value
}},set:a9.set};
bH.attrHooks.contenteditable={set:function(i,b5,e){a9.set(i,b5===""?false:b5,e)
}};
bH.each(["width","height"],function(b5,e){bH.attrHooks[e]={set:function(i,b6){if(b6===""){i.setAttribute(e,"auto");
return b6
}}}
})
}if(!C.style){bH.attrHooks.style={get:function(e){return e.style.cssText||undefined
},set:function(e,i){return(e.style.cssText=i+"")
}}
}var aI=/^(?:input|select|textarea|button|object)$/i,E=/^(?:a|area)$/i;
bH.fn.extend({prop:function(e,i){return aA(this,bH.prop,e,i,arguments.length>1)
},removeProp:function(e){e=bH.propFix[e]||e;
return this.each(function(){try{this[e]=undefined;
delete this[e]
}catch(i){}})
}});
bH.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(b8,b6,b9){var b5,e,b7,i=b8.nodeType;
if(!b8||i===3||i===8||i===2){return
}b7=i!==1||!bH.isXMLDoc(b8);
if(b7){b6=bH.propFix[b6]||b6;
e=bH.propHooks[b6]
}if(b9!==undefined){return e&&"set" in e&&(b5=e.set(b8,b9,b6))!==undefined?b5:(b8[b6]=b9)
}else{return e&&"get" in e&&(b5=e.get(b8,b6))!==null?b5:b8[b6]
}},propHooks:{tabIndex:{get:function(i){var e=bH.find.attr(i,"tabindex");
return e?parseInt(e,10):aI.test(i.nodeName)||E.test(i.nodeName)&&i.href?0:-1
}}}});
if(!C.hrefNormalized){bH.each(["href","src"],function(b5,e){bH.propHooks[e]={get:function(i){return i.getAttribute(e,4)
}}
})
}if(!C.optSelected){bH.propHooks.selected={get:function(i){var e=i.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}}
}bH.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bH.propFix[this.toLowerCase()]=this
});
if(!C.enctype){bH.propFix.enctype="encoding"
}var bK=/[\t\r\n\f]/g;
bH.fn.extend({addClass:function(cc){var b6,b5,cd,ca,b7,e,b8=0,b9=this.length,cb=typeof cc==="string"&&cc;
if(bH.isFunction(cc)){return this.each(function(i){bH(this).addClass(cc.call(this,i,this.className))
})
}if(cb){b6=(cc||"").match(aE)||[];
for(;
b8<b9;
b8++){b5=this[b8];
cd=b5.nodeType===1&&(b5.className?(" "+b5.className+" ").replace(bK," "):" ");
if(cd){b7=0;
while((ca=b6[b7++])){if(cd.indexOf(" "+ca+" ")<0){cd+=ca+" "
}}e=bH.trim(cd);
if(b5.className!==e){b5.className=e
}}}}return this
},removeClass:function(cc){var b6,b5,cd,ca,b7,e,b8=0,b9=this.length,cb=arguments.length===0||typeof cc==="string"&&cc;
if(bH.isFunction(cc)){return this.each(function(i){bH(this).removeClass(cc.call(this,i,this.className))
})
}if(cb){b6=(cc||"").match(aE)||[];
for(;
b8<b9;
b8++){b5=this[b8];
cd=b5.nodeType===1&&(b5.className?(" "+b5.className+" ").replace(bK," "):"");
if(cd){b7=0;
while((ca=b6[b7++])){while(cd.indexOf(" "+ca+" ")>=0){cd=cd.replace(" "+ca+" "," ")
}}e=cc?bH.trim(cd):"";
if(b5.className!==e){b5.className=e
}}}}return this
},toggleClass:function(b5,e){var i=typeof b5;
if(typeof e==="boolean"&&i==="string"){return e?this.addClass(b5):this.removeClass(b5)
}if(bH.isFunction(b5)){return this.each(function(b6){bH(this).toggleClass(b5.call(this,b6,this.className,e),e)
})
}return this.each(function(){if(i==="string"){var b8,b7=0,b6=bH(this),b9=b5.match(aE)||[];
while((b8=b9[b7++])){if(b6.hasClass(b8)){b6.removeClass(b8)
}else{b6.addClass(b8)
}}}else{if(i===aB||i==="boolean"){if(this.className){bH._data(this,"__className__",this.className)
}this.className=this.className||b5===false?"":bH._data(this,"__className__")||""
}}})
},hasClass:function(e){var b7=" "+e+" ",b6=0,b5=this.length;
for(;
b6<b5;
b6++){if(this[b6].nodeType===1&&(" "+this[b6].className+" ").replace(bK," ").indexOf(b7)>=0){return true
}}return false
}});
bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b5,e){bH.fn[e]=function(b6,i){return arguments.length>0?this.on(e,null,b6,i):this.trigger(e)
}
});
bH.fn.extend({hover:function(e,i){return this.mouseenter(e).mouseleave(i||e)
},bind:function(e,b5,i){return this.on(e,null,b5,i)
},unbind:function(e,i){return this.off(e,null,i)
},delegate:function(e,i,b6,b5){return this.on(i,e,b6,b5)
},undelegate:function(e,i,b5){return arguments.length===1?this.off(e,"**"):this.off(i,e||"**",b5)
}});
var bo=bH.now();
var bP=(/\?/);
var a0=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bH.parseJSON=function(e){if(a4.JSON&&a4.JSON.parse){return a4.JSON.parse(e+"")
}var b6,b5=null,i=bH.trim(e+"");
return i&&!bH.trim(i.replace(a0,function(b9,b7,b8,ca){if(b6&&b7){b5=0
}if(b5===0){return b9
}b6=b8||b7;
b5+=!ca-!b8;
return""
}))?(Function("return "+i))():bH.error("Invalid JSON: "+e)
};
bH.parseXML=function(b6){var i,b5;
if(!b6||typeof b6!=="string"){return null
}try{if(a4.DOMParser){b5=new DOMParser();
i=b5.parseFromString(b6,"text/xml")
}else{i=new ActiveXObject("Microsoft.XMLDOM");
i.async="false";
i.loadXML(b6)
}}catch(b7){i=undefined
}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){bH.error("Invalid XML: "+b6)
}return i
};
var b3,Z,ao=/#.*$/,Q=/([?&])_=[^&]*/,ag=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aJ=/^\/\//,aU=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,v={},a8={},aW="*/".concat("*");
try{Z=location.href
}catch(bh){Z=n.createElement("a");
Z.href="";
Z=Z.href
}b3=aU.exec(Z.toLowerCase())||[];
function bJ(e){return function(b8,b9){if(typeof b8!=="string"){b9=b8;
b8="*"
}var b5,b6=0,b7=b8.toLowerCase().match(aE)||[];
if(bH.isFunction(b9)){while((b5=b7[b6++])){if(b5.charAt(0)==="+"){b5=b5.slice(1)||"*";
(e[b5]=e[b5]||[]).unshift(b9)
}else{(e[b5]=e[b5]||[]).push(b9)
}}}}
}function p(e,b5,b9,b6){var i={},b7=(e===a8);
function b8(ca){var cb;
i[ca]=true;
bH.each(e[ca]||[],function(cd,cc){var ce=cc(b5,b9,b6);
if(typeof ce==="string"&&!b7&&!i[ce]){b5.dataTypes.unshift(ce);
b8(ce);
return false
}else{if(b7){return !(cb=ce)
}}});
return cb
}return b8(b5.dataTypes[0])||!i["*"]&&b8("*")
}function s(b5,b6){var e,i,b7=bH.ajaxSettings.flatOptions||{};
for(i in b6){if(b6[i]!==undefined){(b7[i]?b5:(e||(e={})))[i]=b6[i]
}}if(e){bH.extend(true,b5,e)
}return b5
}function g(cb,ca,b7){var e,b6,b5,b8,i=cb.contents,b9=cb.dataTypes;
while(b9[0]==="*"){b9.shift();
if(b6===undefined){b6=cb.mimeType||ca.getResponseHeader("Content-Type")
}}if(b6){for(b8 in i){if(i[b8]&&i[b8].test(b6)){b9.unshift(b8);
break
}}}if(b9[0] in b7){b5=b9[0]
}else{for(b8 in b7){if(!b9[0]||cb.converters[b8+" "+b9[0]]){b5=b8;
break
}if(!e){e=b8
}}b5=b5||e
}if(b5){if(b5!==b9[0]){b9.unshift(b5)
}return b7[b5]
}}function af(cf,b7,cc,b5){var i,ca,cd,b8,b6,ce={},cb=cf.dataTypes.slice();
if(cb[1]){for(cd in cf.converters){ce[cd.toLowerCase()]=cf.converters[cd]
}}ca=cb.shift();
while(ca){if(cf.responseFields[ca]){cc[cf.responseFields[ca]]=b7
}if(!b6&&b5&&cf.dataFilter){b7=cf.dataFilter(b7,cf.dataType)
}b6=ca;
ca=cb.shift();
if(ca){if(ca==="*"){ca=b6
}else{if(b6!=="*"&&b6!==ca){cd=ce[b6+" "+ca]||ce["* "+ca];
if(!cd){for(i in ce){b8=i.split(" ");
if(b8[1]===ca){cd=ce[b6+" "+b8[0]]||ce["* "+b8[0]];
if(cd){if(cd===true){cd=ce[i]
}else{if(ce[i]!==true){ca=b8[0];
cb.unshift(b8[1])
}}break
}}}}if(cd!==true){if(cd&&cf["throws"]){b7=cd(b7)
}else{try{b7=cd(b7)
}catch(b9){return{state:"parsererror",error:cd?b9:"No conversion from "+b6+" to "+ca}
}}}}}}}return{state:"success",data:b7}
}bH.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Z,type:"GET",isLocal:B.test(b3[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aW,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bH.parseJSON,"text xml":bH.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(i,e){return e?s(s(i,bH.ajaxSettings),e):s(bH.ajaxSettings,i)
},ajaxPrefilter:bJ(v),ajaxTransport:bJ(a8),ajax:function(b9,b6){if(typeof b9==="object"){b6=b9;
b9=undefined
}b6=b6||{};
var ci,ck,ca,cp,ce,b5,cl,b7,cd=bH.ajaxSetup({},b6),cr=cd.context||cd,cg=cd.context&&(cr.nodeType||cr.jquery)?bH(cr):bH.event,cq=bH.Deferred(),cn=bH.Callbacks("once memory"),cb=cd.statusCode||{},ch={},co={},b8=0,cc="canceled",cj={readyState:0,getResponseHeader:function(i){var e;
if(b8===2){if(!b7){b7={};
while((e=ag.exec(cp))){b7[e[1].toLowerCase()]=e[2]
}}e=b7[i.toLowerCase()]
}return e==null?null:e
},getAllResponseHeaders:function(){return b8===2?cp:null
},setRequestHeader:function(i,cs){var e=i.toLowerCase();
if(!b8){i=co[e]=co[e]||i;
ch[i]=cs
}return this
},overrideMimeType:function(e){if(!b8){cd.mimeType=e
}return this
},statusCode:function(i){var e;
if(i){if(b8<2){for(e in i){cb[e]=[cb[e],i[e]]
}}else{cj.always(i[cj.status])
}}return this
},abort:function(i){var e=i||cc;
if(cl){cl.abort(e)
}cf(0,e);
return this
}};
cq.promise(cj).complete=cn.add;
cj.success=cj.done;
cj.error=cj.fail;
cd.url=((b9||cd.url||Z)+"").replace(ao,"").replace(aJ,b3[1]+"//");
cd.type=b6.method||b6.type||cd.method||cd.type;
cd.dataTypes=bH.trim(cd.dataType||"*").toLowerCase().match(aE)||[""];
if(cd.crossDomain==null){ci=aU.exec(cd.url.toLowerCase());
cd.crossDomain=!!(ci&&(ci[1]!==b3[1]||ci[2]!==b3[2]||(ci[3]||(ci[1]==="http:"?"80":"443"))!==(b3[3]||(b3[1]==="http:"?"80":"443"))))
}if(cd.data&&cd.processData&&typeof cd.data!=="string"){cd.data=bH.param(cd.data,cd.traditional)
}p(v,cd,b6,cj);
if(b8===2){return cj
}b5=bH.event&&cd.global;
if(b5&&bH.active++===0){bH.event.trigger("ajaxStart")
}cd.type=cd.type.toUpperCase();
cd.hasContent=!q.test(cd.type);
ca=cd.url;
if(!cd.hasContent){if(cd.data){ca=(cd.url+=(bP.test(ca)?"&":"?")+cd.data);
delete cd.data
}if(cd.cache===false){cd.url=Q.test(ca)?ca.replace(Q,"$1_="+bo++):ca+(bP.test(ca)?"&":"?")+"_="+bo++
}}if(cd.ifModified){if(bH.lastModified[ca]){cj.setRequestHeader("If-Modified-Since",bH.lastModified[ca])
}if(bH.etag[ca]){cj.setRequestHeader("If-None-Match",bH.etag[ca])
}}if(cd.data&&cd.hasContent&&cd.contentType!==false||b6.contentType){cj.setRequestHeader("Content-Type",cd.contentType)
}cj.setRequestHeader("Accept",cd.dataTypes[0]&&cd.accepts[cd.dataTypes[0]]?cd.accepts[cd.dataTypes[0]]+(cd.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):cd.accepts["*"]);
for(ck in cd.headers){cj.setRequestHeader(ck,cd.headers[ck])
}if(cd.beforeSend&&(cd.beforeSend.call(cr,cj,cd)===false||b8===2)){return cj.abort()
}cc="abort";
for(ck in {success:1,error:1,complete:1}){cj[ck](cd[ck])
}cl=p(a8,cd,b6,cj);
if(!cl){cf(-1,"No Transport")
}else{cj.readyState=1;
if(b5){cg.trigger("ajaxSend",[cj,cd])
}if(cd.async&&cd.timeout>0){ce=setTimeout(function(){cj.abort("timeout")
},cd.timeout)
}try{b8=1;
cl.send(ch,cf)
}catch(cm){if(b8<2){cf(-1,cm)
}else{throw cm
}}}function cf(cv,i,cw,ct){var e,cz,cx,cu,cy,cs=i;
if(b8===2){return
}b8=2;
if(ce){clearTimeout(ce)
}cl=undefined;
cp=ct||"";
cj.readyState=cv>0?4:0;
e=cv>=200&&cv<300||cv===304;
if(cw){cu=g(cd,cj,cw)
}cu=af(cd,cu,cj,e);
if(e){if(cd.ifModified){cy=cj.getResponseHeader("Last-Modified");
if(cy){bH.lastModified[ca]=cy
}cy=cj.getResponseHeader("etag");
if(cy){bH.etag[ca]=cy
}}if(cv===204||cd.type==="HEAD"){cs="nocontent"
}else{if(cv===304){cs="notmodified"
}else{cs=cu.state;
cz=cu.data;
cx=cu.error;
e=!cx
}}}else{cx=cs;
if(cv||!cs){cs="error";
if(cv<0){cv=0
}}}cj.status=cv;
cj.statusText=(i||cs)+"";
if(e){cq.resolveWith(cr,[cz,cs,cj])
}else{cq.rejectWith(cr,[cj,cs,cx])
}cj.statusCode(cb);
cb=undefined;
if(b5){cg.trigger(e?"ajaxSuccess":"ajaxError",[cj,cd,e?cz:cx])
}cn.fireWith(cr,[cj,cs]);
if(b5){cg.trigger("ajaxComplete",[cj,cd]);
if(!(--bH.active)){bH.event.trigger("ajaxStop")
}}}return cj
},getJSON:function(e,i,b5){return bH.get(e,i,b5,"json")
},getScript:function(e,i){return bH.get(e,undefined,i,"script")
}});
bH.each(["get","post"],function(e,b5){bH[b5]=function(i,b7,b8,b6){if(bH.isFunction(b7)){b6=b6||b8;
b8=b7;
b7=undefined
}return bH.ajax({url:i,type:b5,dataType:b6,data:b7,success:b8})
}
});
bH._evalUrl=function(e){return bH.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
bH.fn.extend({wrapAll:function(e){if(bH.isFunction(e)){return this.each(function(b5){bH(this).wrapAll(e.call(this,b5))
})
}if(this[0]){var i=bH(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){i.insertBefore(this[0])
}i.map(function(){var b5=this;
while(b5.firstChild&&b5.firstChild.nodeType===1){b5=b5.firstChild
}return b5
}).append(this)
}return this
},wrapInner:function(e){if(bH.isFunction(e)){return this.each(function(b5){bH(this).wrapInner(e.call(this,b5))
})
}return this.each(function(){var i=bH(this),b5=i.contents();
if(b5.length){b5.wrapAll(e)
}else{i.append(e)
}})
},wrap:function(e){var i=bH.isFunction(e);
return this.each(function(b5){bH(this).wrapAll(i?e.call(this,b5):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bH.nodeName(this,"body")){bH(this).replaceWith(this.childNodes)
}}).end()
}});
bH.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!C.reliableHiddenOffsets()&&((e.style&&e.style.display)||bH.css(e,"display"))==="none")
};
bH.expr.filters.visible=function(e){return !bH.expr.filters.hidden(e)
};
var bv=/%20/g,aR=/\[\]$/,W=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,at=/^(?:input|select|textarea|keygen)/i;
function j(b5,b7,i,b6){var e;
if(bH.isArray(b7)){bH.each(b7,function(b9,b8){if(i||aR.test(b5)){b6(b5,b8)
}else{j(b5+"["+(typeof b8==="object"?b9:"")+"]",b8,i,b6)
}})
}else{if(!i&&bH.type(b7)==="object"){for(e in b7){j(b5+"["+e+"]",b7[e],i,b6)
}}else{b6(b5,b7)
}}}bH.param=function(e,b5){var b6,i=[],b7=function(b8,b9){b9=bH.isFunction(b9)?b9():(b9==null?"":b9);
i[i.length]=encodeURIComponent(b8)+"="+encodeURIComponent(b9)
};
if(b5===undefined){b5=bH.ajaxSettings&&bH.ajaxSettings.traditional
}if(bH.isArray(e)||(e.jquery&&!bH.isPlainObject(e))){bH.each(e,function(){b7(this.name,this.value)
})
}else{for(b6 in e){j(b6,e[b6],b5,b7)
}}return i.join("&").replace(bv,"+")
};
bH.fn.extend({serialize:function(){return bH.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=bH.prop(this,"elements");
return e?bH.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!bH(this).is(":disabled")&&at.test(this.nodeName)&&!b.test(e)&&(this.checked||!aL.test(e))
}).map(function(e,b5){var b6=bH(this).val();
return b6==null?null:bH.isArray(b6)?bH.map(b6,function(i){return{name:b5.name,value:i.replace(W,"\r\n")}
}):{name:b5.name,value:b6.replace(W,"\r\n")}
}).get()
}});
bH.ajaxSettings.xhr=a4.ActiveXObject!==undefined?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&bD()||bf()
}:bD;
var az=0,ai={},ax=bH.ajaxSettings.xhr();
if(a4.attachEvent){a4.attachEvent("onunload",function(){for(var e in ai){ai[e](undefined,true)
}})
}C.cors=!!ax&&("withCredentials" in ax);
ax=C.ajax=!!ax;
if(ax){bH.ajaxTransport(function(e){if(!e.crossDomain||C.cors){var i;
return{send:function(b8,b5){var b6,b7=e.xhr(),b9=++az;
b7.open(e.type,e.url,e.async,e.username,e.password);
if(e.xhrFields){for(b6 in e.xhrFields){b7[b6]=e.xhrFields[b6]
}}if(e.mimeType&&b7.overrideMimeType){b7.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b8["X-Requested-With"]){b8["X-Requested-With"]="XMLHttpRequest"
}for(b6 in b8){if(b8[b6]!==undefined){b7.setRequestHeader(b6,b8[b6]+"")
}}b7.send((e.hasContent&&e.data)||null);
i=function(cc,cb){var ca,cf,cd;
if(i&&(cb||b7.readyState===4)){delete ai[b9];
i=undefined;
b7.onreadystatechange=bH.noop;
if(cb){if(b7.readyState!==4){b7.abort()
}}else{cd={};
ca=b7.status;
if(typeof b7.responseText==="string"){cd.text=b7.responseText
}try{cf=b7.statusText
}catch(ce){cf=""
}if(!ca&&e.isLocal&&!e.crossDomain){ca=cd.text?200:404
}else{if(ca===1223){ca=204
}}}}if(cd){b5(ca,cf,cd,b7.getAllResponseHeaders())
}};
if(!e.async){i()
}else{if(b7.readyState===4){setTimeout(i)
}else{b7.onreadystatechange=ai[b9]=i
}}},abort:function(){if(i){i(undefined,true)
}}}
}})
}function bD(){try{return new a4.XMLHttpRequest()
}catch(i){}}function bf(){try{return new a4.ActiveXObject("Microsoft.XMLHTTP")
}catch(i){}}bH.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bH.globalEval(e);
return e
}}});
bH.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bH.ajaxTransport("script",function(b5){if(b5.crossDomain){var e,i=n.head||bH("head")[0]||n.documentElement;
return{send:function(b6,b7){e=n.createElement("script");
e.async=true;
if(b5.scriptCharset){e.charset=b5.scriptCharset
}e.src=b5.url;
e.onload=e.onreadystatechange=function(b9,b8){if(b8||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)
}e=null;
if(!b8){b7(200,"success")
}}};
i.insertBefore(e,i.firstChild)
},abort:function(){if(e){e.onload(undefined,true)
}}}
}});
var br=[],a7=/(=)\?(?=&|$)|\?\?/;
bH.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=br.pop()||(bH.expando+"_"+(bo++));
this[e]=true;
return e
}});
bH.ajaxPrefilter("json jsonp",function(b6,e,b7){var b9,i,b5,b8=b6.jsonp!==false&&(a7.test(b6.url)?"url":typeof b6.data==="string"&&!(b6.contentType||"").indexOf("application/x-www-form-urlencoded")&&a7.test(b6.data)&&"data");
if(b8||b6.dataTypes[0]==="jsonp"){b9=b6.jsonpCallback=bH.isFunction(b6.jsonpCallback)?b6.jsonpCallback():b6.jsonpCallback;
if(b8){b6[b8]=b6[b8].replace(a7,"$1"+b9)
}else{if(b6.jsonp!==false){b6.url+=(bP.test(b6.url)?"&":"?")+b6.jsonp+"="+b9
}}b6.converters["script json"]=function(){if(!b5){bH.error(b9+" was not called")
}return b5[0]
};
b6.dataTypes[0]="json";
i=a4[b9];
a4[b9]=function(){b5=arguments
};
b7.always(function(){a4[b9]=i;
if(b6[b9]){b6.jsonpCallback=e.jsonpCallback;
br.push(b9)
}if(b5&&bH.isFunction(i)){i(b5[0])
}b5=i=undefined
});
return"script"
}});
bH.parseHTML=function(b7,b5,b6){if(!b7||typeof b7!=="string"){return null
}if(typeof b5==="boolean"){b6=b5;
b5=false
}b5=b5||n;
var i=a.exec(b7),e=!b6&&[];
if(i){return[b5.createElement(i[1])]
}i=bH.buildFragment([b7],b5,e);
if(e&&e.length){bH(e).remove()
}return bH.merge([],i.childNodes)
};
var b0=bH.fn.load;
bH.fn.load=function(b6,b9,ca){if(typeof b6!=="string"&&b0){return b0.apply(this,arguments)
}var e,b5,b7,i=this,b8=b6.indexOf(" ");
if(b8>=0){e=bH.trim(b6.slice(b8,b6.length));
b6=b6.slice(0,b8)
}if(bH.isFunction(b9)){ca=b9;
b9=undefined
}else{if(b9&&typeof b9==="object"){b7="POST"
}}if(i.length>0){bH.ajax({url:b6,type:b7,dataType:"html",data:b9}).done(function(cb){b5=arguments;
i.html(e?bH("<div>").append(bH.parseHTML(cb)).find(e):cb)
}).complete(ca&&function(cc,cb){i.each(ca,b5||[cc.responseText,cb,cc])
})
}return this
};
bH.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b5){bH.fn[b5]=function(i){return this.on(b5,i)
}
});
bH.expr.filters.animated=function(e){return bH.grep(bH.timers,function(i){return e===i.elem
}).length
};
var bW=a4.document.documentElement;
function bq(e){return bH.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bH.offset={setOffset:function(b6,cg,ca){var cc,b9,e,b7,b5,ce,cf,cb=bH.css(b6,"position"),b8=bH(b6),cd={};
if(cb==="static"){b6.style.position="relative"
}b5=b8.offset();
e=bH.css(b6,"top");
ce=bH.css(b6,"left");
cf=(cb==="absolute"||cb==="fixed")&&bH.inArray("auto",[e,ce])>-1;
if(cf){cc=b8.position();
b7=cc.top;
b9=cc.left
}else{b7=parseFloat(e)||0;
b9=parseFloat(ce)||0
}if(bH.isFunction(cg)){cg=cg.call(b6,ca,b5)
}if(cg.top!=null){cd.top=(cg.top-b5.top)+b7
}if(cg.left!=null){cd.left=(cg.left-b5.left)+b9
}if("using" in cg){cg.using.call(b6,cd)
}else{b8.css(cd)
}}};
bH.fn.extend({offset:function(i){if(arguments.length){return i===undefined?this:this.each(function(b9){bH.offset.setOffset(this,i,b9)
})
}var e,b8,b6={top:0,left:0},b5=this[0],b7=b5&&b5.ownerDocument;
if(!b7){return
}e=b7.documentElement;
if(!bH.contains(e,b5)){return b6
}if(typeof b5.getBoundingClientRect!==aB){b6=b5.getBoundingClientRect()
}b8=bq(b7);
return{top:b6.top+(b8.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b6.left+(b8.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
},position:function(){if(!this[0]){return
}var b5,b6,e={top:0,left:0},i=this[0];
if(bH.css(i,"position")==="fixed"){b6=i.getBoundingClientRect()
}else{b5=this.offsetParent();
b6=this.offset();
if(!bH.nodeName(b5[0],"html")){e=b5.offset()
}e.top+=bH.css(b5[0],"borderTopWidth",true);
e.left+=bH.css(b5[0],"borderLeftWidth",true)
}return{top:b6.top-e.top-bH.css(i,"marginTop",true),left:b6.left-e.left-bH.css(i,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||bW;
while(e&&(!bH.nodeName(e,"html")&&bH.css(e,"position")==="static")){e=e.offsetParent
}return e||bW
})
}});
bH.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b5,i){var e=/Y/.test(i);
bH.fn[b5]=function(b6){return aA(this,function(b7,ca,b9){var b8=bq(b7);
if(b9===undefined){return b8?(i in b8)?b8[i]:b8.document.documentElement[ca]:b7[ca]
}if(b8){b8.scrollTo(!e?b9:bH(b8).scrollLeft(),e?b9:bH(b8).scrollTop())
}else{b7[ca]=b9
}},b5,b6,arguments.length,null)
}
});
bH.each(["top","left"],function(e,b5){bH.cssHooks[b5]=a6(C.pixelPosition,function(b6,i){if(i){i=F(b6,b5);
return X.test(i)?bH(b6).position()[b5]+"px":i
}})
});
bH.each({Height:"height",Width:"width"},function(e,i){bH.each({padding:"inner"+e,content:i,"":"outer"+e},function(b5,b6){bH.fn[b6]=function(ca,b9){var b8=arguments.length&&(b5||typeof ca!=="boolean"),b7=b5||(ca===true||b9===true?"margin":"border");
return aA(this,function(cc,cb,cd){var ce;
if(bH.isWindow(cc)){return cc.document.documentElement["client"+e]
}if(cc.nodeType===9){ce=cc.documentElement;
return Math.max(cc.body["scroll"+e],ce["scroll"+e],cc.body["offset"+e],ce["offset"+e],ce["client"+e])
}return cd===undefined?bH.css(cc,cb,b7):bH.style(cc,cb,cd,b7)
},i,b8?ca:undefined,b8,null)
}
})
});
bH.fn.size=function(){return this.length
};
bH.fn.andSelf=bH.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bH
})
}var bj=a4.jQuery,H=a4.$;
bH.noConflict=function(e){if(a4.$===bH){a4.$=H
}if(e&&a4.jQuery===bH){a4.jQuery=bj
}return bH
};
if(typeof au===aB){a4.jQuery=a4.$=bH
}return bH
}));
/*! jQuery UI - v1.11.4 - 2015-11-04
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, button.js, dialog.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(f){
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
f.ui=f.ui||{};
f.extend(f.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
f.fn.extend({scrollParent:function(w){var v=this.css("position"),u=v==="absolute",x=w?/(auto|scroll|hidden)/:/(auto|scroll)/,y=this.parents().filter(function(){var z=f(this);
if(u&&z.css("position")==="static"){return false
}return x.test(z.css("overflow")+z.css("overflow-y")+z.css("overflow-x"))
}).eq(0);
return v==="fixed"||!y.length?f(this[0].ownerDocument||document):y
},uniqueId:(function(){var u=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++u)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){f(this).removeAttr("id")
}})
}});
function o(w,u){var y,x,v,z=w.nodeName.toLowerCase();
if("area"===z){y=w.parentNode;
x=y.name;
if(!w.href||!x||y.nodeName.toLowerCase()!=="map"){return false
}v=f("img[usemap='#"+x+"']")[0];
return !!v&&c(v)
}return(/^(input|select|textarea|button|object)$/.test(z)?!w.disabled:"a"===z?w.href||u:u)&&c(w)
}function c(u){return f.expr.filters.visible(u)&&!f(u).parents().addBack().filter(function(){return f.css(this,"visibility")==="hidden"
}).length
}f.extend(f.expr[":"],{data:f.expr.createPseudo?f.expr.createPseudo(function(u){return function(v){return !!f.data(v,u)
}
}):function(w,v,u){return !!f.data(w,u[3])
},focusable:function(u){return o(u,!isNaN(f.attr(u,"tabindex")))
},tabbable:function(w){var u=f.attr(w,"tabindex"),v=isNaN(u);
return(v||u>=0)&&o(w,!v)
}});
if(!f("<a>").outerWidth(1).jquery){f.each(["Width","Height"],function(w,u){var v=u==="Width"?["Left","Right"]:["Top","Bottom"],x=u.toLowerCase(),z={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};
function y(C,B,A,D){f.each(v,function(){B-=parseFloat(f.css(C,"padding"+this))||0;
if(A){B-=parseFloat(f.css(C,"border"+this+"Width"))||0
}if(D){B-=parseFloat(f.css(C,"margin"+this))||0
}});
return B
}f.fn["inner"+u]=function(A){if(A===undefined){return z["inner"+u].call(this)
}return this.each(function(){f(this).css(x,y(this,A)+"px")
})
};
f.fn["outer"+u]=function(A,B){if(typeof A!=="number"){return z["outer"+u].call(this,A)
}return this.each(function(){f(this).css(x,y(this,A,true,B)+"px")
})
}
})
}if(!f.fn.addBack){f.fn.addBack=function(u){return this.add(u==null?this.prevObject:this.prevObject.filter(u))
}
}if(f("<a>").data("a-b","a").removeData("a-b").data("a-b")){f.fn.removeData=(function(u){return function(v){if(arguments.length){return u.call(this,f.camelCase(v))
}else{return u.call(this)
}}
})(f.fn.removeData)
}f.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
f.fn.extend({focus:(function(u){return function(v,w){return typeof v==="number"?this.each(function(){var x=this;
setTimeout(function(){f(x).focus();
if(w){w.call(x)
}},v)
}):u.apply(this,arguments)
}
})(f.fn.focus),disableSelection:(function(){var u="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(u+".ui-disableSelection",function(v){v.preventDefault()
})
}
})(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(x){if(x!==undefined){return this.css("zIndex",x)
}if(this.length){var v=f(this[0]),u,w;
while(v.length&&v[0]!==document){u=v.css("position");
if(u==="absolute"||u==="relative"||u==="fixed"){w=parseInt(v.css("zIndex"),10);
if(!isNaN(w)&&w!==0){return w
}}v=v.parent()
}}return 0
}});
f.ui.plugin={add:function(v,w,y){var u,x=f.ui[v].prototype;
for(u in y){x.plugins[u]=x.plugins[u]||[];
x.plugins[u].push([w,y[u]])
}},call:function(u,x,w,v){var y,z=u.plugins[x];
if(!z){return
}if(!v&&(!u.element[0].parentNode||u.element[0].parentNode.nodeType===11)){return
}for(y=0;
y<z.length;
y++){if(u.options[z[y][0]]){z[y][1].apply(u.element,w)
}}}};
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
var i=0,p=Array.prototype.slice;
f.cleanData=(function(u){return function(v){var x,y,w;
for(w=0;
(y=v[w])!=null;
w++){try{x=f._data(y,"events");
if(x&&x.remove){f(y).triggerHandler("remove")
}}catch(z){}}u(v)
}
})(f.cleanData);
f.widget=function(u,v,C){var z,A,x,B,w={},y=u.split(".")[0];
u=u.split(".")[1];
z=y+"-"+u;
if(!C){C=v;
v=f.Widget
}f.expr[":"][z.toLowerCase()]=function(D){return !!f.data(D,z)
};
f[y]=f[y]||{};
A=f[y][u];
x=f[y][u]=function(D,E){if(!this._createWidget){return new x(D,E)
}if(arguments.length){this._createWidget(D,E)
}};
f.extend(x,A,{version:C.version,_proto:f.extend({},C),_childConstructors:[]});
B=new v();
B.options=f.widget.extend({},B.options);
f.each(C,function(E,D){if(!f.isFunction(D)){w[E]=D;
return
}w[E]=(function(){var F=function(){return v.prototype[E].apply(this,arguments)
},G=function(H){return v.prototype[E].apply(this,H)
};
return function(){var J=this._super,H=this._superApply,I;
this._super=F;
this._superApply=G;
I=D.apply(this,arguments);
this._super=J;
this._superApply=H;
return I
}
})()
});
x.prototype=f.widget.extend(B,{widgetEventPrefix:A?(B.widgetEventPrefix||u):u},w,{constructor:x,namespace:y,widgetName:u,widgetFullName:z});
if(A){f.each(A._childConstructors,function(E,F){var D=F.prototype;
f.widget(D.namespace+"."+D.widgetName,x,F._proto)
});
delete A._childConstructors
}else{v._childConstructors.push(x)
}f.widget.bridge(u,x);
return x
};
f.widget.extend=function(z){var v=p.call(arguments,1),y=0,u=v.length,w,x;
for(;
y<u;
y++){for(w in v[y]){x=v[y][w];
if(v[y].hasOwnProperty(w)&&x!==undefined){if(f.isPlainObject(x)){z[w]=f.isPlainObject(z[w])?f.widget.extend({},z[w],x):f.widget.extend({},x)
}else{z[w]=x
}}}}return z
};
f.widget.bridge=function(v,u){var w=u.prototype.widgetFullName||v;
f.fn[v]=function(z){var x=typeof z==="string",y=p.call(arguments,1),A=this;
if(x){this.each(function(){var C,B=f.data(this,w);
if(z==="instance"){A=B;
return false
}if(!B){return f.error("cannot call methods on "+v+" prior to initialization; attempted to call method '"+z+"'")
}if(!f.isFunction(B[z])||z.charAt(0)==="_"){return f.error("no such method '"+z+"' for "+v+" widget instance")
}C=B[z].apply(B,y);
if(C!==B&&C!==undefined){A=C&&C.jquery?A.pushStack(C.get()):C;
return false
}})
}else{if(y.length){z=f.widget.extend.apply(null,[z].concat(y))
}this.each(function(){var B=f.data(this,w);
if(B){B.option(z||{});
if(B._init){B._init()
}}else{f.data(this,w,new u(z,this))
}})
}return A
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(u,v){v=f(v||this.defaultElement||this)[0];
this.element=f(v);
this.uuid=i++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(v!==this){f.data(v,this.widgetFullName,this);
this._on(true,this.element,{remove:function(w){if(w.target===v){this.destroy()
}}});
this.document=f(v.style?v.ownerDocument:v.document||v);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=f.widget.extend({},this.options,this._getCreateOptions(),u);
this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(x,y){var u=x,z,w,v;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof x==="string"){u={};
z=x.split(".");
x=z.shift();
if(z.length){w=u[x]=f.widget.extend({},this.options[x]);
for(v=0;
v<z.length-1;
v++){w[z[v]]=w[z[v]]||{};
w=w[z[v]]
}x=z.pop();
if(arguments.length===1){return w[x]===undefined?null:w[x]
}w[x]=y
}else{if(arguments.length===1){return this.options[x]===undefined?null:this.options[x]
}u[x]=y
}}this._setOptions(u);
return this
},_setOptions:function(u){var v;
for(v in u){this._setOption(v,u[v])
}return this
},_setOption:function(u,v){this.options[u]=v;
if(u==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!v);
if(v){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(x,w,v){var y,u=this;
if(typeof x!=="boolean"){v=w;
w=x;
x=false
}if(!v){v=w;
w=this.element;
y=this.widget()
}else{w=y=f(w);
this.bindings=this.bindings.add(w)
}f.each(v,function(E,D){function B(){if(!x&&(u.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof D==="string"?u[D]:D).apply(u,arguments)
}if(typeof D!=="string"){B.guid=D.guid=D.guid||B.guid||f.guid++
}var C=E.match(/^([\w:-]*)\s*(.*)$/),A=C[1]+u.eventNamespace,z=C[2];
if(z){y.delegate(z,A,B)
}else{w.bind(A,B)
}})
},_off:function(v,u){u=(u||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
v.unbind(u).undelegate(u);
this.bindings=f(this.bindings.not(v).get());
this.focusable=f(this.focusable.not(v).get());
this.hoverable=f(this.hoverable.not(v).get())
},_delay:function(x,w){function v(){return(typeof x==="string"?u[x]:x).apply(u,arguments)
}var u=this;
return setTimeout(v,w||0)
},_hoverable:function(u){this.hoverable=this.hoverable.add(u);
this._on(u,{mouseenter:function(v){f(v.currentTarget).addClass("ui-state-hover")
},mouseleave:function(v){f(v.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(u){this.focusable=this.focusable.add(u);
this._on(u,{focusin:function(v){f(v.currentTarget).addClass("ui-state-focus")
},focusout:function(v){f(v.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(u,v,w){var z,y,x=this.options[u];
w=w||{};
v=f.Event(v);
v.type=(u===this.widgetEventPrefix?u:this.widgetEventPrefix+u).toLowerCase();
v.target=this.element[0];
y=v.originalEvent;
if(y){for(z in y){if(!(z in v)){v[z]=y[z]
}}}this.element.trigger(v,w);
return !(f.isFunction(x)&&x.apply(this.element[0],[v].concat(w))===false||v.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(v,u){f.Widget.prototype["_"+v]=function(y,x,A){if(typeof x==="string"){x={effect:x}
}var z,w=!x?v:x===true||typeof x==="number"?u:x.effect||u;
x=x||{};
if(typeof x==="number"){x={duration:x}
}z=!f.isEmptyObject(x);
x.complete=A;
if(x.delay){y.delay(x.delay)
}if(z&&f.effects&&f.effects.effect[w]){y[v](x)
}else{if(w!==v&&y[w]){y[w](x.duration,x.easing,A)
}else{y.queue(function(B){f(this)[v]();
if(A){A.call(y[0])
}B()
})
}}}
});
var e=f.widget;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
var m=false;
f(document).mouseup(function(){m=false
});
var k=f.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var u=this;
this.element.bind("mousedown."+this.widgetName,function(v){return u._mouseDown(v)
}).bind("click."+this.widgetName,function(v){if(true===f.data(v.target,u.widgetName+".preventClickEvent")){f.removeData(v.target,u.widgetName+".preventClickEvent");
v.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(w){if(m){return
}this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(w));
this._mouseDownEvent=w;
var v=this,x=(w.which===1),u=(typeof this.options.cancel==="string"&&w.target.nodeName?f(w.target).closest(this.options.cancel).length:false);
if(!x||u||!this._mouseCapture(w)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){v.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(w)&&this._mouseDelayMet(w)){this._mouseStarted=(this._mouseStart(w)!==false);
if(!this._mouseStarted){w.preventDefault();
return true
}}if(true===f.data(w.target,this.widgetName+".preventClickEvent")){f.removeData(w.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(y){return v._mouseMove(y)
};
this._mouseUpDelegate=function(y){return v._mouseUp(y)
};
this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
w.preventDefault();
m=true;
return true
},_mouseMove:function(u){if(this._mouseMoved){if(f.ui.ie&&(!document.documentMode||document.documentMode<9)&&!u.button){return this._mouseUp(u)
}else{if(!u.which){return this._mouseUp(u)
}}}if(u.which||u.button){this._mouseMoved=true
}if(this._mouseStarted){this._mouseDrag(u);
return u.preventDefault()
}if(this._mouseDistanceMet(u)&&this._mouseDelayMet(u)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,u)!==false);
(this._mouseStarted?this._mouseDrag(u):this._mouseUp(u))
}return !this._mouseStarted
},_mouseUp:function(u){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(u.target===this._mouseDownEvent.target){f.data(u.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(u)
}m=false;
return false
},_mouseDistanceMet:function(u){return(Math.max(Math.abs(this._mouseDownEvent.pageX-u.pageX),Math.abs(this._mouseDownEvent.pageY-u.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}});
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){f.ui=f.ui||{};
var B,E,C=Math.max,H=Math.abs,F=Math.round,w=/left|center|right/,z=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,D=/^\w+/,v=/%$/,y=f.fn.position;
function G(K,J,I){return[parseFloat(K[0])*(v.test(K[0])?J/100:1),parseFloat(K[1])*(v.test(K[1])?I/100:1)]
}function A(I,J){return parseInt(f.css(I,J),10)||0
}function x(J){var I=J[0];
if(I.nodeType===9){return{width:J.width(),height:J.height(),offset:{top:0,left:0}}
}if(f.isWindow(I)){return{width:J.width(),height:J.height(),offset:{top:J.scrollTop(),left:J.scrollLeft()}}
}if(I.preventDefault){return{width:0,height:0,offset:{top:I.pageY,left:I.pageX}}
}return{width:J.outerWidth(),height:J.outerHeight(),offset:J.offset()}
}f.position={scrollbarWidth:function(){if(B!==undefined){return B
}var J,I,L=f("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),K=L.children()[0];
f("body").append(L);
J=K.offsetWidth;
L.css("overflow","scroll");
I=K.offsetWidth;
if(J===I){I=L[0].clientWidth
}L.remove();
return(B=J-I)
},getScrollInfo:function(M){var L=M.isWindow||M.isDocument?"":M.element.css("overflow-x"),K=M.isWindow||M.isDocument?"":M.element.css("overflow-y"),J=L==="scroll"||(L==="auto"&&M.width<M.element[0].scrollWidth),I=K==="scroll"||(K==="auto"&&M.height<M.element[0].scrollHeight);
return{width:I?f.position.scrollbarWidth():0,height:J?f.position.scrollbarWidth():0}
},getWithinInfo:function(J){var K=f(J||window),I=f.isWindow(K[0]),L=!!K[0]&&K[0].nodeType===9;
return{element:K,isWindow:I,isDocument:L,offset:K.offset()||{left:0,top:0},scrollLeft:K.scrollLeft(),scrollTop:K.scrollTop(),width:I||L?K.width():K.outerWidth(),height:I||L?K.height():K.outerHeight()}
}};
f.fn.position=function(S){if(!S||!S.of){return y.apply(this,arguments)
}S=f.extend({},S);
var T,P,N,R,M,I,O=f(S.of),L=f.position.getWithinInfo(S.within),J=f.position.getScrollInfo(L),Q=(S.collision||"flip").split(" "),K={};
I=x(O);
if(O[0].preventDefault){S.at="left top"
}P=I.width;
N=I.height;
R=I.offset;
M=f.extend({},R);
f.each(["my","at"],function(){var W=(S[this]||"").split(" "),V,U;
if(W.length===1){W=w.test(W[0])?W.concat(["center"]):z.test(W[0])?["center"].concat(W):["center","center"]
}W[0]=w.test(W[0])?W[0]:"center";
W[1]=z.test(W[1])?W[1]:"center";
V=u.exec(W[0]);
U=u.exec(W[1]);
K[this]=[V?V[0]:0,U?U[0]:0];
S[this]=[D.exec(W[0])[0],D.exec(W[1])[0]]
});
if(Q.length===1){Q[1]=Q[0]
}if(S.at[0]==="right"){M.left+=P
}else{if(S.at[0]==="center"){M.left+=P/2
}}if(S.at[1]==="bottom"){M.top+=N
}else{if(S.at[1]==="center"){M.top+=N/2
}}T=G(K.at,P,N);
M.left+=T[0];
M.top+=T[1];
return this.each(function(){var V,ae,X=f(this),Z=X.outerWidth(),W=X.outerHeight(),Y=A(this,"marginLeft"),U=A(this,"marginTop"),ad=Z+Y+A(this,"marginRight")+J.width,ac=W+U+A(this,"marginBottom")+J.height,aa=f.extend({},M),ab=G(K.my,X.outerWidth(),X.outerHeight());
if(S.my[0]==="right"){aa.left-=Z
}else{if(S.my[0]==="center"){aa.left-=Z/2
}}if(S.my[1]==="bottom"){aa.top-=W
}else{if(S.my[1]==="center"){aa.top-=W/2
}}aa.left+=ab[0];
aa.top+=ab[1];
if(!E){aa.left=F(aa.left);
aa.top=F(aa.top)
}V={marginLeft:Y,marginTop:U};
f.each(["left","top"],function(ag,af){if(f.ui.position[Q[ag]]){f.ui.position[Q[ag]][af](aa,{targetWidth:P,targetHeight:N,elemWidth:Z,elemHeight:W,collisionPosition:V,collisionWidth:ad,collisionHeight:ac,offset:[T[0]+ab[0],T[1]+ab[1]],my:S.my,at:S.at,within:L,elem:X})
}});
if(S.using){ae=function(ai){var ak=R.left-aa.left,ah=ak+P-Z,aj=R.top-aa.top,ag=aj+N-W,af={target:{element:O,left:R.left,top:R.top,width:P,height:N},element:{element:X,left:aa.left,top:aa.top,width:Z,height:W},horizontal:ah<0?"left":ak>0?"right":"center",vertical:ag<0?"top":aj>0?"bottom":"middle"};
if(P<Z&&H(ak+ah)<P){af.horizontal="center"
}if(N<W&&H(aj+ag)<N){af.vertical="middle"
}if(C(H(ak),H(ah))>C(H(aj),H(ag))){af.important="horizontal"
}else{af.important="vertical"
}S.using.call(this,ai,af)
}
}X.offset(f.extend(aa,{using:ae}))
})
};
f.ui.position={fit:{left:function(M,L){var K=L.within,O=K.isWindow?K.scrollLeft:K.offset.left,Q=K.width,N=M.left-L.collisionPosition.marginLeft,P=O-N,J=N+L.collisionWidth-Q-O,I;
if(L.collisionWidth>Q){if(P>0&&J<=0){I=M.left+P+L.collisionWidth-Q-O;
M.left+=P-I
}else{if(J>0&&P<=0){M.left=O
}else{if(P>J){M.left=O+Q-L.collisionWidth
}else{M.left=O
}}}}else{if(P>0){M.left+=P
}else{if(J>0){M.left-=J
}else{M.left=C(M.left-N,M.left)
}}}},top:function(L,K){var J=K.within,P=J.isWindow?J.scrollTop:J.offset.top,Q=K.within.height,N=L.top-K.collisionPosition.marginTop,O=P-N,M=N+K.collisionHeight-Q-P,I;
if(K.collisionHeight>Q){if(O>0&&M<=0){I=L.top+O+K.collisionHeight-Q-P;
L.top+=O-I
}else{if(M>0&&O<=0){L.top=P
}else{if(O>M){L.top=P+Q-K.collisionHeight
}else{L.top=P
}}}}else{if(O>0){L.top+=O
}else{if(M>0){L.top-=M
}else{L.top=C(L.top-N,L.top)
}}}}},flip:{left:function(O,N){var M=N.within,S=M.offset.left+M.scrollLeft,V=M.width,K=M.isWindow?M.scrollLeft:M.offset.left,P=O.left-N.collisionPosition.marginLeft,T=P-K,J=P+N.collisionWidth-V-K,R=N.my[0]==="left"?-N.elemWidth:N.my[0]==="right"?N.elemWidth:0,U=N.at[0]==="left"?N.targetWidth:N.at[0]==="right"?-N.targetWidth:0,L=-2*N.offset[0],I,Q;
if(T<0){I=O.left+R+U+L+N.collisionWidth-V-S;
if(I<0||I<H(T)){O.left+=R+U+L
}}else{if(J>0){Q=O.left-N.collisionPosition.marginLeft+R+U+L-K;
if(Q>0||H(Q)<J){O.left+=R+U+L
}}}},top:function(N,M){var L=M.within,U=L.offset.top+L.scrollTop,V=L.height,I=L.isWindow?L.scrollTop:L.offset.top,P=N.top-M.collisionPosition.marginTop,R=P-I,O=P+M.collisionHeight-V-I,S=M.my[1]==="top",Q=S?-M.elemHeight:M.my[1]==="bottom"?M.elemHeight:0,W=M.at[1]==="top"?M.targetHeight:M.at[1]==="bottom"?-M.targetHeight:0,K=-2*M.offset[1],T,J;
if(R<0){J=N.top+Q+W+K+M.collisionHeight-V-U;
if(J<0||J<H(R)){N.top+=Q+W+K
}}else{if(O>0){T=N.top-M.collisionPosition.marginTop+Q+W+K-I;
if(T>0||H(T)<O){N.top+=Q+W+K
}}}}},flipfit:{left:function(){f.ui.position.flip.left.apply(this,arguments);
f.ui.position.fit.left.apply(this,arguments)
},top:function(){f.ui.position.flip.top.apply(this,arguments);
f.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var M,O,J,L,K,I=document.getElementsByTagName("body")[0],N=document.createElement("div");
M=document.createElement(I?"div":"body");
J={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(I){f.extend(J,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(K in J){M.style[K]=J[K]
}M.appendChild(N);
O=I||document.documentElement;
O.insertBefore(M,O.firstChild);
N.style.cssText="position: absolute; left: 10.7432222px;";
L=f(N).offset().left;
E=L>10&&L<11;
M.innerHTML="";
O.removeChild(M)
})()
})();
var s=f.ui.position;
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
f.widget("ui.draggable",f.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._setHandleClassName();
this._mouseInit()
},_setOption:function(u,v){this._super(u,v);
if(u==="handle"){this._removeHandleClassName();
this._setHandleClassName()
}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;
return
}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._removeHandleClassName();
this._mouseDestroy()
},_mouseCapture:function(u){var v=this.options;
this._blurActiveElement(u);
if(this.helper||v.disabled||f(u.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(u);
if(!this.handle){return false
}this._blockFrames(v.iframeFix===true?"iframe":v.iframeFix);
return true
},_blockFrames:function(u){this.iframeBlocks=this.document.find(u).map(function(){var v=f(this);
return f("<div>").css("position","absolute").appendTo(v.parent()).outerWidth(v.outerWidth()).outerHeight(v.outerHeight()).offset(v.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_blurActiveElement:function(w){var u=this.document[0];
if(!this.handleElement.is(w.target)){return
}try{if(u.activeElement&&u.activeElement.nodeName.toLowerCase()!=="body"){f(u.activeElement).blur()
}}catch(v){}},_mouseStart:function(u){var v=this.options;
this.helper=this._createHelper(u);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(f.ui.ddmanager){f.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){return f(this).css("position")==="fixed"
}).length>0;
this.positionAbs=this.element.offset();
this._refreshOffsets(u);
this.originalPosition=this.position=this._generatePosition(u,false);
this.originalPageX=u.pageX;
this.originalPageY=u.pageY;
(v.cursorAt&&this._adjustOffsetFromHelper(v.cursorAt));
this._setContainment();
if(this._trigger("start",u)===false){this._clear();
return false
}this._cacheHelperProportions();
if(f.ui.ddmanager&&!v.dropBehaviour){f.ui.ddmanager.prepareOffsets(this,u)
}this._normalizeRightBottom();
this._mouseDrag(u,true);
if(f.ui.ddmanager){f.ui.ddmanager.dragStart(this,u)
}return true
},_refreshOffsets:function(u){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};
this.offset.click={left:u.pageX-this.offset.left,top:u.pageY-this.offset.top}
},_mouseDrag:function(u,w){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(u,true);
this.positionAbs=this._convertPositionTo("absolute");
if(!w){var v=this._uiHash();
if(this._trigger("drag",u,v)===false){this._mouseUp({});
return false
}this.position=v.position
}this.helper[0].style.left=this.position.left+"px";
this.helper[0].style.top=this.position.top+"px";
if(f.ui.ddmanager){f.ui.ddmanager.drag(this,u)
}return false
},_mouseStop:function(v){var u=this,w=false;
if(f.ui.ddmanager&&!this.options.dropBehaviour){w=f.ui.ddmanager.drop(this,v)
}if(this.dropped){w=this.dropped;
this.dropped=false
}if((this.options.revert==="invalid"&&!w)||(this.options.revert==="valid"&&w)||this.options.revert===true||(f.isFunction(this.options.revert)&&this.options.revert.call(this.element,w))){f(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(u._trigger("stop",v)!==false){u._clear()
}})
}else{if(this._trigger("stop",v)!==false){this._clear()
}}return false
},_mouseUp:function(u){this._unblockFrames();
if(f.ui.ddmanager){f.ui.ddmanager.dragStop(this,u)
}if(this.handleElement.is(u.target)){this.element.focus()
}return f.ui.mouse.prototype._mouseUp.call(this,u)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(u){return this.options.handle?!!f(u.target).closest(this.element.find(this.options.handle)).length:true
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;
this.handleElement.addClass("ui-draggable-handle")
},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")
},_createHelper:function(v){var x=this.options,w=f.isFunction(x.helper),u=w?f(x.helper.apply(this.element[0],[v])):(x.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!u.parents("body").length){u.appendTo((x.appendTo==="parent"?this.element[0].parentNode:x.appendTo))
}if(w&&u[0]===this.element[0]){this._setPositionRelative()
}if(u[0]!==this.element[0]&&!(/(fixed|absolute)/).test(u.css("position"))){u.css("position","absolute")
}return u
},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}},_adjustOffsetFromHelper:function(u){if(typeof u==="string"){u=u.split(" ")
}if(f.isArray(u)){u={left:+u[0],top:+u[1]||0}
}if("left" in u){this.offset.click.left=u.left+this.margins.left
}if("right" in u){this.offset.click.left=this.helperProportions.width-u.right+this.margins.left
}if("top" in u){this.offset.click.top=u.top+this.margins.top
}if("bottom" in u){this.offset.click.top=this.helperProportions.height-u.bottom+this.margins.top
}},_isRootNode:function(u){return(/(html|body)/i).test(u.tagName)||u===this.document[0]
},_getParentOffset:function(){var v=this.offsetParent.offset(),u=this.document[0];
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==u&&f.contains(this.scrollParent[0],this.offsetParent[0])){v.left+=this.scrollParent.scrollLeft();
v.top+=this.scrollParent.scrollTop()
}if(this._isRootNode(this.offsetParent[0])){v={top:0,left:0}
}return{top:v.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:v.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}
}var u=this.element.position(),v=this._isRootNode(this.scrollParent[0]);
return{top:u.top-(parseInt(this.helper.css("top"),10)||0)+(!v?this.scrollParent.scrollTop():0),left:u.left-(parseInt(this.helper.css("left"),10)||0)+(!v?this.scrollParent.scrollLeft():0)}
},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var v,y,w,x=this.options,u=this.document[0];
this.relativeContainer=null;
if(!x.containment){this.containment=null;
return
}if(x.containment==="window"){this.containment=[f(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,f(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,f(window).scrollLeft()+f(window).width()-this.helperProportions.width-this.margins.left,f(window).scrollTop()+(f(window).height()||u.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(x.containment==="document"){this.containment=[0,0,f(u).width()-this.helperProportions.width-this.margins.left,(f(u).height()||u.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(x.containment.constructor===Array){this.containment=x.containment;
return
}if(x.containment==="parent"){x.containment=this.helper[0].parentNode
}y=f(x.containment);
w=y[0];
if(!w){return
}v=/(scroll|auto)/.test(y.css("overflow"));
this.containment=[(parseInt(y.css("borderLeftWidth"),10)||0)+(parseInt(y.css("paddingLeft"),10)||0),(parseInt(y.css("borderTopWidth"),10)||0)+(parseInt(y.css("paddingTop"),10)||0),(v?Math.max(w.scrollWidth,w.offsetWidth):w.offsetWidth)-(parseInt(y.css("borderRightWidth"),10)||0)-(parseInt(y.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(v?Math.max(w.scrollHeight,w.offsetHeight):w.offsetHeight)-(parseInt(y.css("borderBottomWidth"),10)||0)-(parseInt(y.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relativeContainer=y
},_convertPositionTo:function(v,x){if(!x){x=this.position
}var u=v==="absolute"?1:-1,w=this._isRootNode(this.scrollParent[0]);
return{top:(x.top+this.offset.relative.top*u+this.offset.parent.top*u-((this.cssPosition==="fixed"?-this.offset.scroll.top:(w?0:this.offset.scroll.top))*u)),left:(x.left+this.offset.relative.left*u+this.offset.parent.left*u-((this.cssPosition==="fixed"?-this.offset.scroll.left:(w?0:this.offset.scroll.left))*u))}
},_generatePosition:function(v,B){var u,C,D,x,w=this.options,A=this._isRootNode(this.scrollParent[0]),z=v.pageX,y=v.pageY;
if(!A||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}
}if(B){if(this.containment){if(this.relativeContainer){C=this.relativeContainer.offset();
u=[this.containment[0]+C.left,this.containment[1]+C.top,this.containment[2]+C.left,this.containment[3]+C.top]
}else{u=this.containment
}if(v.pageX-this.offset.click.left<u[0]){z=u[0]+this.offset.click.left
}if(v.pageY-this.offset.click.top<u[1]){y=u[1]+this.offset.click.top
}if(v.pageX-this.offset.click.left>u[2]){z=u[2]+this.offset.click.left
}if(v.pageY-this.offset.click.top>u[3]){y=u[3]+this.offset.click.top
}}if(w.grid){D=w.grid[1]?this.originalPageY+Math.round((y-this.originalPageY)/w.grid[1])*w.grid[1]:this.originalPageY;
y=u?((D-this.offset.click.top>=u[1]||D-this.offset.click.top>u[3])?D:((D-this.offset.click.top>=u[1])?D-w.grid[1]:D+w.grid[1])):D;
x=w.grid[0]?this.originalPageX+Math.round((z-this.originalPageX)/w.grid[0])*w.grid[0]:this.originalPageX;
z=u?((x-this.offset.click.left>=u[0]||x-this.offset.click.left>u[2])?x:((x-this.offset.click.left>=u[0])?x-w.grid[0]:x+w.grid[0])):x
}if(w.axis==="y"){z=this.originalPageX
}if(w.axis==="x"){y=this.originalPageY
}}return{top:(y-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(A?0:this.offset.scroll.top))),left:(z-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(A?0:this.offset.scroll.left)))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){this.destroy()
}},_normalizeRightBottom:function(){if(this.options.axis!=="y"&&this.helper.css("right")!=="auto"){this.helper.width(this.helper.width());
this.helper.css("right","auto")
}if(this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"){this.helper.height(this.helper.height());
this.helper.css("bottom","auto")
}},_trigger:function(u,v,w){w=w||this._uiHash();
f.ui.plugin.call(this,u,[v,w,this],true);
if(/^(drag|start|stop)/.test(u)){this.positionAbs=this._convertPositionTo("absolute");
w.offset=this.positionAbs
}return f.Widget.prototype._trigger.call(this,u,v,w)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
f.ui.plugin.add("draggable","connectToSortable",{start:function(w,x,u){var v=f.extend({},x,{item:u.element});
u.sortables=[];
f(u.options.connectToSortable).each(function(){var y=f(this).sortable("instance");
if(y&&!y.options.disabled){u.sortables.push(y);
y.refreshPositions();
y._trigger("activate",w,v)
}})
},stop:function(w,x,u){var v=f.extend({},x,{item:u.element});
u.cancelHelperRemoval=false;
f.each(u.sortables,function(){var y=this;
if(y.isOver){y.isOver=0;
u.cancelHelperRemoval=true;
y.cancelHelperRemoval=false;
y._storedCSS={position:y.placeholder.css("position"),top:y.placeholder.css("top"),left:y.placeholder.css("left")};
y._mouseStop(w);
y.options.helper=y.options._helper
}else{y.cancelHelperRemoval=true;
y._trigger("deactivate",w,v)
}})
},drag:function(v,w,u){f.each(u.sortables,function(){var x=false,y=this;
y.positionAbs=u.positionAbs;
y.helperProportions=u.helperProportions;
y.offset.click=u.offset.click;
if(y._intersectsWith(y.containerCache)){x=true;
f.each(u.sortables,function(){this.positionAbs=u.positionAbs;
this.helperProportions=u.helperProportions;
this.offset.click=u.offset.click;
if(this!==y&&this._intersectsWith(this.containerCache)&&f.contains(y.element[0],this.element[0])){x=false
}return x
})
}if(x){if(!y.isOver){y.isOver=1;
u._parent=w.helper.parent();
y.currentItem=w.helper.appendTo(y.element).data("ui-sortable-item",true);
y.options._helper=y.options.helper;
y.options.helper=function(){return w.helper[0]
};
v.target=y.currentItem[0];
y._mouseCapture(v,true);
y._mouseStart(v,true,true);
y.offset.click.top=u.offset.click.top;
y.offset.click.left=u.offset.click.left;
y.offset.parent.left-=u.offset.parent.left-y.offset.parent.left;
y.offset.parent.top-=u.offset.parent.top-y.offset.parent.top;
u._trigger("toSortable",v);
u.dropped=y.element;
f.each(u.sortables,function(){this.refreshPositions()
});
u.currentItem=u.element;
y.fromOutside=u
}if(y.currentItem){y._mouseDrag(v);
w.position=y.position
}}else{if(y.isOver){y.isOver=0;
y.cancelHelperRemoval=true;
y.options._revert=y.options.revert;
y.options.revert=false;
y._trigger("out",v,y._uiHash(y));
y._mouseStop(v,true);
y.options.revert=y.options._revert;
y.options.helper=y.options._helper;
if(y.placeholder){y.placeholder.remove()
}w.helper.appendTo(u._parent);
u._refreshOffsets(v);
w.position=u._generatePosition(v,true);
u._trigger("fromSortable",v);
u.dropped=false;
f.each(u.sortables,function(){this.refreshPositions()
})
}}})
}});
f.ui.plugin.add("draggable","cursor",{start:function(w,x,u){var v=f("body"),y=u.options;
if(v.css("cursor")){y._cursor=v.css("cursor")
}v.css("cursor",y.cursor)
},stop:function(v,w,u){var x=u.options;
if(x._cursor){f("body").css("cursor",x._cursor)
}}});
f.ui.plugin.add("draggable","opacity",{start:function(w,x,u){var v=f(x.helper),y=u.options;
if(v.css("opacity")){y._opacity=v.css("opacity")
}v.css("opacity",y.opacity)
},stop:function(v,w,u){var x=u.options;
if(x._opacity){f(w.helper).css("opacity",x._opacity)
}}});
f.ui.plugin.add("draggable","scroll",{start:function(v,w,u){if(!u.scrollParentNotHidden){u.scrollParentNotHidden=u.helper.scrollParent(false)
}if(u.scrollParentNotHidden[0]!==u.document[0]&&u.scrollParentNotHidden[0].tagName!=="HTML"){u.overflowOffset=u.scrollParentNotHidden.offset()
}},drag:function(x,y,w){var z=w.options,v=false,A=w.scrollParentNotHidden[0],u=w.document[0];
if(A!==u&&A.tagName!=="HTML"){if(!z.axis||z.axis!=="x"){if((w.overflowOffset.top+A.offsetHeight)-x.pageY<z.scrollSensitivity){A.scrollTop=v=A.scrollTop+z.scrollSpeed
}else{if(x.pageY-w.overflowOffset.top<z.scrollSensitivity){A.scrollTop=v=A.scrollTop-z.scrollSpeed
}}}if(!z.axis||z.axis!=="y"){if((w.overflowOffset.left+A.offsetWidth)-x.pageX<z.scrollSensitivity){A.scrollLeft=v=A.scrollLeft+z.scrollSpeed
}else{if(x.pageX-w.overflowOffset.left<z.scrollSensitivity){A.scrollLeft=v=A.scrollLeft-z.scrollSpeed
}}}}else{if(!z.axis||z.axis!=="x"){if(x.pageY-f(u).scrollTop()<z.scrollSensitivity){v=f(u).scrollTop(f(u).scrollTop()-z.scrollSpeed)
}else{if(f(window).height()-(x.pageY-f(u).scrollTop())<z.scrollSensitivity){v=f(u).scrollTop(f(u).scrollTop()+z.scrollSpeed)
}}}if(!z.axis||z.axis!=="y"){if(x.pageX-f(u).scrollLeft()<z.scrollSensitivity){v=f(u).scrollLeft(f(u).scrollLeft()-z.scrollSpeed)
}else{if(f(window).width()-(x.pageX-f(u).scrollLeft())<z.scrollSensitivity){v=f(u).scrollLeft(f(u).scrollLeft()+z.scrollSpeed)
}}}}if(v!==false&&f.ui.ddmanager&&!z.dropBehaviour){f.ui.ddmanager.prepareOffsets(w,x)
}}});
f.ui.plugin.add("draggable","snap",{start:function(v,w,u){var x=u.options;
u.snapElements=[];
f(x.snap.constructor!==String?(x.snap.items||":data(ui-draggable)"):x.snap).each(function(){var z=f(this),y=z.offset();
if(this!==u.element[0]){u.snapElements.push({item:this,width:z.outerWidth(),height:z.outerHeight(),top:y.top,left:y.left})
}})
},drag:function(G,D,x){var u,L,z,A,F,C,B,M,H,y,E=x.options,K=E.snapTolerance,J=D.offset.left,I=J+x.helperProportions.width,w=D.offset.top,v=w+x.helperProportions.height;
for(H=x.snapElements.length-1;
H>=0;
H--){F=x.snapElements[H].left-x.margins.left;
C=F+x.snapElements[H].width;
B=x.snapElements[H].top-x.margins.top;
M=B+x.snapElements[H].height;
if(I<F-K||J>C+K||v<B-K||w>M+K||!f.contains(x.snapElements[H].item.ownerDocument,x.snapElements[H].item)){if(x.snapElements[H].snapping){(x.options.snap.release&&x.options.snap.release.call(x.element,G,f.extend(x._uiHash(),{snapItem:x.snapElements[H].item})))
}x.snapElements[H].snapping=false;
continue
}if(E.snapMode!=="inner"){u=Math.abs(B-v)<=K;
L=Math.abs(M-w)<=K;
z=Math.abs(F-I)<=K;
A=Math.abs(C-J)<=K;
if(u){D.position.top=x._convertPositionTo("relative",{top:B-x.helperProportions.height,left:0}).top
}if(L){D.position.top=x._convertPositionTo("relative",{top:M,left:0}).top
}if(z){D.position.left=x._convertPositionTo("relative",{top:0,left:F-x.helperProportions.width}).left
}if(A){D.position.left=x._convertPositionTo("relative",{top:0,left:C}).left
}}y=(u||L||z||A);
if(E.snapMode!=="outer"){u=Math.abs(B-w)<=K;
L=Math.abs(M-v)<=K;
z=Math.abs(F-J)<=K;
A=Math.abs(C-I)<=K;
if(u){D.position.top=x._convertPositionTo("relative",{top:B,left:0}).top
}if(L){D.position.top=x._convertPositionTo("relative",{top:M-x.helperProportions.height,left:0}).top
}if(z){D.position.left=x._convertPositionTo("relative",{top:0,left:F}).left
}if(A){D.position.left=x._convertPositionTo("relative",{top:0,left:C-x.helperProportions.width}).left
}}if(!x.snapElements[H].snapping&&(u||L||z||A||y)){(x.options.snap.snap&&x.options.snap.snap.call(x.element,G,f.extend(x._uiHash(),{snapItem:x.snapElements[H].item})))
}x.snapElements[H].snapping=(u||L||z||A||y)
}}});
f.ui.plugin.add("draggable","stack",{start:function(w,x,u){var v,z=u.options,y=f.makeArray(f(z.stack)).sort(function(B,A){return(parseInt(f(B).css("zIndex"),10)||0)-(parseInt(f(A).css("zIndex"),10)||0)
});
if(!y.length){return
}v=parseInt(f(y[0]).css("zIndex"),10)||0;
f(y).each(function(A){f(this).css("zIndex",v+A)
});
this.css("zIndex",(v+y.length))
}});
f.ui.plugin.add("draggable","zIndex",{start:function(w,x,u){var v=f(x.helper),y=u.options;
if(v.css("zIndex")){y._zIndex=v.css("zIndex")
}v.css("zIndex",y.zIndex)
},stop:function(v,w,u){var x=u.options;
if(x._zIndex){f(w.helper).css("zIndex",x._zIndex)
}}});
var d=f.ui.draggable;
/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
f.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var v,w=this.options,u=w.accept;
this.isover=false;
this.isout=true;
this.accept=f.isFunction(u)?u:function(x){return x.is(u)
};
this.proportions=function(){if(arguments.length){v=arguments[0]
}else{return v?v:v={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
this._addToManager(w.scope);
w.addClasses&&this.element.addClass("ui-droppable")
},_addToManager:function(u){f.ui.ddmanager.droppables[u]=f.ui.ddmanager.droppables[u]||[];
f.ui.ddmanager.droppables[u].push(this)
},_splice:function(u){var v=0;
for(;
v<u.length;
v++){if(u[v]===this){u.splice(v,1)
}}},_destroy:function(){var u=f.ui.ddmanager.droppables[this.options.scope];
this._splice(u);
this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(v,w){if(v==="accept"){this.accept=f.isFunction(w)?w:function(x){return x.is(w)
}
}else{if(v==="scope"){var u=f.ui.ddmanager.droppables[this.options.scope];
this._splice(u);
this._addToManager(w)
}}this._super(v,w)
},_activate:function(v){var u=f.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(u){this._trigger("activate",v,this.ui(u))
}},_deactivate:function(v){var u=f.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(u){this._trigger("deactivate",v,this.ui(u))
}},_over:function(v){var u=f.ui.ddmanager.current;
if(!u||(u.currentItem||u.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(u.currentItem||u.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",v,this.ui(u))
}},_out:function(v){var u=f.ui.ddmanager.current;
if(!u||(u.currentItem||u.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(u.currentItem||u.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",v,this.ui(u))
}},_drop:function(v,w){var u=w||f.ui.ddmanager.current,x=false;
if(!u||(u.currentItem||u.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var y=f(this).droppable("instance");
if(y.options.greedy&&!y.options.disabled&&y.options.scope===u.options.scope&&y.accept.call(y.element[0],(u.currentItem||u.element))&&f.ui.intersect(u,f.extend(y,{offset:y.element.offset()}),y.options.tolerance,v)){x=true;
return false
}});
if(x){return false
}if(this.accept.call(this.element[0],(u.currentItem||u.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",v,this.ui(u));
return this.element
}return false
},ui:function(u){return{draggable:(u.currentItem||u.element),helper:u.helper,position:u.position,offset:u.positionAbs}
}});
f.ui.intersect=(function(){function u(w,v,y){return(w>=v)&&(w<(v+y))
}return function(G,A,E,w){if(!A.offset){return false
}var y=(G.positionAbs||G.position.absolute).left+G.margins.left,D=(G.positionAbs||G.position.absolute).top+G.margins.top,x=y+G.helperProportions.width,C=D+G.helperProportions.height,z=A.offset.left,F=A.offset.top,v=z+A.proportions().width,B=F+A.proportions().height;
switch(E){case"fit":return(z<=y&&x<=v&&F<=D&&C<=B);
case"intersect":return(z<y+(G.helperProportions.width/2)&&x-(G.helperProportions.width/2)<v&&F<D+(G.helperProportions.height/2)&&C-(G.helperProportions.height/2)<B);
case"pointer":return u(w.pageY,F,A.proportions().height)&&u(w.pageX,z,A.proportions().width);
case"touch":return((D>=F&&D<=B)||(C>=F&&C<=B)||(D<F&&C>B))&&((y>=z&&y<=v)||(x>=z&&x<=v)||(y<z&&x>v));
default:return false
}}
})();
f.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(x,z){var w,v,u=f.ui.ddmanager.droppables[x.options.scope]||[],y=z?z.type:null,A=(x.currentItem||x.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(w=0;
w<u.length;
w++){if(u[w].options.disabled||(x&&!u[w].accept.call(u[w].element[0],(x.currentItem||x.element)))){continue
}for(v=0;
v<A.length;
v++){if(A[v]===u[w].element[0]){u[w].proportions().height=0;
continue droppablesLoop
}}u[w].visible=u[w].element.css("display")!=="none";
if(!u[w].visible){continue
}if(y==="mousedown"){u[w]._activate.call(u[w],z)
}u[w].offset=u[w].element.offset();
u[w].proportions({width:u[w].element[0].offsetWidth,height:u[w].element[0].offsetHeight})
}},drop:function(u,v){var w=false;
f.each((f.ui.ddmanager.droppables[u.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&f.ui.intersect(u,this,this.options.tolerance,v)){w=this._drop.call(this,v)||w
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(u.currentItem||u.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,v)
}});
return w
},dragStart:function(u,v){u.element.parentsUntil("body").bind("scroll.droppable",function(){if(!u.options.refreshPositions){f.ui.ddmanager.prepareOffsets(u,v)
}})
},drag:function(u,v){if(u.options.refreshPositions){f.ui.ddmanager.prepareOffsets(u,v)
}f.each(f.ui.ddmanager.droppables[u.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var z,x,w,y=f.ui.intersect(u,this,this.options.tolerance,v),A=!y&&this.isover?"isout":(y&&!this.isover?"isover":null);
if(!A){return
}if(this.options.greedy){x=this.options.scope;
w=this.element.parents(":data(ui-droppable)").filter(function(){return f(this).droppable("instance").options.scope===x
});
if(w.length){z=f(w[0]).droppable("instance");
z.greedyChild=(A==="isover")
}}if(z&&A==="isover"){z.isover=false;
z.isout=true;
z._out.call(z,v)
}this[A]=true;
this[A==="isout"?"isover":"isout"]=false;
this[A==="isover"?"_over":"_out"].call(this,v);
if(z&&A==="isout"){z.isout=false;
z.isover=true;
z._over.call(z,v)
}})
},dragStop:function(u,v){u.element.parentsUntil("body").unbind("scroll.droppable");
if(!u.options.refreshPositions){f.ui.ddmanager.prepareOffsets(u,v)
}}};
var t=f.ui.droppable;
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
f.widget("ui.resizable",f.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(u){return parseInt(u,10)||0
},_isNumber:function(u){return !isNaN(parseInt(u,10))
},_hasScroll:function(x,v){if(f(x).css("overflow")==="hidden"){return false
}var u=(v&&v==="left")?"scrollLeft":"scrollTop",w=false;
if(x[u]>0){return true
}x[u]=1;
w=(x[u]>0);
x[u]=0;
return w
},_create:function(){var A,v,y,w,u,x=this,z=this.options;
this.element.addClass("ui-resizable");
f.extend(this,{_aspectRatio:!!(z.aspectRatio),aspectRatio:z.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:z.helper||z.ghost||z.animate?z.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(f("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=z.handles||(!f(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
this._handles=f();
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}A=this.handles.split(",");
this.handles={};
for(v=0;
v<A.length;
v++){y=f.trim(A[v]);
u="ui-resizable-"+y;
w=f("<div class='ui-resizable-handle "+u+"'></div>");
w.css({zIndex:z.zIndex});
if("se"===y){w.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[y]=".ui-resizable-"+y;
this.element.append(w)
}}this._renderAxis=function(F){var C,D,B,E;
F=F||this.element;
for(C in this.handles){if(this.handles[C].constructor===String){this.handles[C]=this.element.children(this.handles[C]).first().show()
}else{if(this.handles[C].jquery||this.handles[C].nodeType){this.handles[C]=f(this.handles[C]);
this._on(this.handles[C],{mousedown:x._mouseDown})
}}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){D=f(this.handles[C],this.element);
E=/sw|ne|nw|se|n|s/.test(C)?D.outerHeight():D.outerWidth();
B=["padding",/ne|nw|n/.test(C)?"Top":/se|sw|s/.test(C)?"Bottom":/^e$/.test(C)?"Right":"Left"].join("");
F.css(B,E);
this._proportionallyResize()
}this._handles=this._handles.add(this.handles[C])
}};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.mouseover(function(){if(!x.resizing){if(this.className){w=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}x.axis=w&&w[1]?w[1]:"se"
}});
if(z.autoHide){this._handles.hide();
f(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(z.disabled){return
}f(this).removeClass("ui-resizable-autohide");
x._handles.show()
}).mouseleave(function(){if(z.disabled){return
}if(!x.resizing){f(this).addClass("ui-resizable-autohide");
x._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var v,u=function(w){f(w).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){u(this.element);
v=this.element;
this.originalElement.css({position:v.css("position"),width:v.outerWidth(),height:v.outerHeight(),top:v.css("top"),left:v.css("left")}).insertAfter(v);
v.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
u(this.originalElement);
return this
},_mouseCapture:function(w){var v,x,u=false;
for(v in this.handles){x=f(this.handles[v])[0];
if(x===w.target||f.contains(x,w.target)){u=true
}}return !this.options.disabled&&u
},_mouseStart:function(v){var z,w,y,x=this.options,u=this.element;
this.resizing=true;
this._renderProxy();
z=this._num(this.helper.css("left"));
w=this._num(this.helper.css("top"));
if(x.containment){z+=f(x.containment).scrollLeft()||0;
w+=f(x.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:z,top:w};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:u.width(),height:u.height()};
this.originalSize=this._helper?{width:u.outerWidth(),height:u.outerHeight()}:{width:u.width(),height:u.height()};
this.sizeDiff={width:u.outerWidth()-u.width(),height:u.outerHeight()-u.height()};
this.originalPosition={left:z,top:w};
this.originalMousePosition={left:v.pageX,top:v.pageY};
this.aspectRatio=(typeof x.aspectRatio==="number")?x.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
y=f(".ui-resizable-"+this.axis).css("cursor");
f("body").css("cursor",y==="auto"?this.axis+"-resize":y);
u.addClass("ui-resizable-resizing");
this._propagate("start",v);
return true
},_mouseDrag:function(z){var A,y,B=this.originalMousePosition,v=this.axis,w=(z.pageX-B.left)||0,u=(z.pageY-B.top)||0,x=this._change[v];
this._updatePrevProperties();
if(!x){return false
}A=x.apply(this,[z,w,u]);
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){A=this._updateRatio(A,z)
}A=this._respectSize(A,z);
this._updateCache(A);
this._propagate("resize",z);
y=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!f.isEmptyObject(y)){this._updatePrevProperties();
this._trigger("resize",z,this.ui());
this._applyChanges()
}return false
},_mouseStop:function(x){this.resizing=false;
var w,u,v,A,D,z,C,y=this.options,B=this;
if(this._helper){w=this._proportionallyResizeElements;
u=w.length&&(/textarea/i).test(w[0].nodeName);
v=u&&this._hasScroll(w[0],"left")?0:B.sizeDiff.height;
A=u?0:B.sizeDiff.width;
D={width:(B.helper.width()-A),height:(B.helper.height()-v)};
z=(parseInt(B.element.css("left"),10)+(B.position.left-B.originalPosition.left))||null;
C=(parseInt(B.element.css("top"),10)+(B.position.top-B.originalPosition.top))||null;
if(!y.animate){this.element.css(f.extend(D,{top:C,left:z}))
}B.helper.height(B.size.height);
B.helper.width(B.size.width);
if(this._helper&&!y.animate){this._proportionallyResize()
}}f("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",x);
if(this._helper){this.helper.remove()
}return false
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};
this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var u={};
if(this.position.top!==this.prevPosition.top){u.top=this.position.top+"px"
}if(this.position.left!==this.prevPosition.left){u.left=this.position.left+"px"
}if(this.size.width!==this.prevSize.width){u.width=this.size.width+"px"
}if(this.size.height!==this.prevSize.height){u.height=this.size.height+"px"
}this.helper.css(u);
return u
},_updateVirtualBoundaries:function(w){var y,x,v,A,u,z=this.options;
u={minWidth:this._isNumber(z.minWidth)?z.minWidth:0,maxWidth:this._isNumber(z.maxWidth)?z.maxWidth:Infinity,minHeight:this._isNumber(z.minHeight)?z.minHeight:0,maxHeight:this._isNumber(z.maxHeight)?z.maxHeight:Infinity};
if(this._aspectRatio||w){y=u.minHeight*this.aspectRatio;
v=u.minWidth/this.aspectRatio;
x=u.maxHeight*this.aspectRatio;
A=u.maxWidth/this.aspectRatio;
if(y>u.minWidth){u.minWidth=y
}if(v>u.minHeight){u.minHeight=v
}if(x<u.maxWidth){u.maxWidth=x
}if(A<u.maxHeight){u.maxHeight=A
}}this._vBoundaries=u
},_updateCache:function(u){this.offset=this.helper.offset();
if(this._isNumber(u.left)){this.position.left=u.left
}if(this._isNumber(u.top)){this.position.top=u.top
}if(this._isNumber(u.height)){this.size.height=u.height
}if(this._isNumber(u.width)){this.size.width=u.width
}},_updateRatio:function(w){var x=this.position,v=this.size,u=this.axis;
if(this._isNumber(w.height)){w.width=(w.height*this.aspectRatio)
}else{if(this._isNumber(w.width)){w.height=(w.width/this.aspectRatio)
}}if(u==="sw"){w.left=x.left+(v.width-w.width);
w.top=null
}if(u==="nw"){w.top=x.top+(v.height-w.height);
w.left=x.left+(v.width-w.width)
}return w
},_respectSize:function(z){var w=this._vBoundaries,C=this.axis,E=this._isNumber(z.width)&&w.maxWidth&&(w.maxWidth<z.width),A=this._isNumber(z.height)&&w.maxHeight&&(w.maxHeight<z.height),x=this._isNumber(z.width)&&w.minWidth&&(w.minWidth>z.width),D=this._isNumber(z.height)&&w.minHeight&&(w.minHeight>z.height),v=this.originalPosition.left+this.originalSize.width,B=this.position.top+this.size.height,y=/sw|nw|w/.test(C),u=/nw|ne|n/.test(C);
if(x){z.width=w.minWidth
}if(D){z.height=w.minHeight
}if(E){z.width=w.maxWidth
}if(A){z.height=w.maxHeight
}if(x&&y){z.left=v-w.minWidth
}if(E&&y){z.left=v-w.maxWidth
}if(D&&u){z.top=B-w.minHeight
}if(A&&u){z.top=B-w.maxHeight
}if(!z.width&&!z.height&&!z.left&&z.top){z.top=null
}else{if(!z.width&&!z.height&&!z.top&&z.left){z.left=null
}}return z
},_getPaddingPlusBorderDimensions:function(w){var v=0,x=[],y=[w.css("borderTopWidth"),w.css("borderRightWidth"),w.css("borderBottomWidth"),w.css("borderLeftWidth")],u=[w.css("paddingTop"),w.css("paddingRight"),w.css("paddingBottom"),w.css("paddingLeft")];
for(;
v<4;
v++){x[v]=(parseInt(y[v],10)||0);
x[v]+=(parseInt(u[v],10)||0)
}return{height:x[0]+x[2],width:x[1]+x[3]}
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var w,v=0,u=this.helper||this.element;
for(;
v<this._proportionallyResizeElements.length;
v++){w=this._proportionallyResizeElements[v];
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(w)
}w.css({height:(u.height()-this.outerDimensions.height)||0,width:(u.width()-this.outerDimensions.width)||0})
}},_renderProxy:function(){var u=this.element,v=this.options;
this.elementOffset=u.offset();
if(this._helper){this.helper=this.helper||f("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++v.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(v,u){return{width:this.originalSize.width+u}
},w:function(w,u){var v=this.originalSize,x=this.originalPosition;
return{left:x.left+u,width:v.width-u}
},n:function(x,v,u){var w=this.originalSize,y=this.originalPosition;
return{top:y.top+u,height:w.height-u}
},s:function(w,v,u){return{height:this.originalSize.height+u}
},se:function(w,v,u){return f.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[w,v,u]))
},sw:function(w,v,u){return f.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[w,v,u]))
},ne:function(w,v,u){return f.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[w,v,u]))
},nw:function(w,v,u){return f.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[w,v,u]))
}},_propagate:function(v,u){f.ui.plugin.call(this,v,[u,this.ui()]);
(v!=="resize"&&this._trigger(v,u,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
f.ui.plugin.add("resizable","animate",{stop:function(x){var C=f(this).resizable("instance"),z=C.options,w=C._proportionallyResizeElements,u=w.length&&(/textarea/i).test(w[0].nodeName),v=u&&C._hasScroll(w[0],"left")?0:C.sizeDiff.height,B=u?0:C.sizeDiff.width,y={width:(C.size.width-B),height:(C.size.height-v)},A=(parseInt(C.element.css("left"),10)+(C.position.left-C.originalPosition.left))||null,D=(parseInt(C.element.css("top"),10)+(C.position.top-C.originalPosition.top))||null;
C.element.animate(f.extend(y,D&&A?{top:D,left:A}:{}),{duration:z.animateDuration,easing:z.animateEasing,step:function(){var E={width:parseInt(C.element.css("width"),10),height:parseInt(C.element.css("height"),10),top:parseInt(C.element.css("top"),10),left:parseInt(C.element.css("left"),10)};
if(w&&w.length){f(w[0]).css({width:E.width,height:E.height})
}C._updateCache(E);
C._propagate("resize",x)
}})
}});
f.ui.plugin.add("resizable","containment",{start:function(){var C,w,E,u,B,x,F,D=f(this).resizable("instance"),A=D.options,z=D.element,v=A.containment,y=(v instanceof f)?v.get(0):(/parent/.test(v))?z.parent().get(0):v;
if(!y){return
}D.containerElement=f(y);
if(/document/.test(v)||v===document){D.containerOffset={left:0,top:0};
D.containerPosition={left:0,top:0};
D.parentData={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}
}else{C=f(y);
w=[];
f(["Top","Right","Left","Bottom"]).each(function(H,G){w[H]=D._num(C.css("padding"+G))
});
D.containerOffset=C.offset();
D.containerPosition=C.position();
D.containerSize={height:(C.innerHeight()-w[3]),width:(C.innerWidth()-w[1])};
E=D.containerOffset;
u=D.containerSize.height;
B=D.containerSize.width;
x=(D._hasScroll(y,"left")?y.scrollWidth:B);
F=(D._hasScroll(y)?y.scrollHeight:u);
D.parentData={element:y,left:E.left,top:E.top,width:x,height:F}
}},resize:function(v){var B,G,A,y,C=f(this).resizable("instance"),x=C.options,E=C.containerOffset,D=C.position,F=C._aspectRatio||v.shiftKey,u={top:0,left:0},w=C.containerElement,z=true;
if(w[0]!==document&&(/static/).test(w.css("position"))){u=E
}if(D.left<(C._helper?E.left:0)){C.size.width=C.size.width+(C._helper?(C.position.left-E.left):(C.position.left-u.left));
if(F){C.size.height=C.size.width/C.aspectRatio;
z=false
}C.position.left=x.helper?E.left:0
}if(D.top<(C._helper?E.top:0)){C.size.height=C.size.height+(C._helper?(C.position.top-E.top):C.position.top);
if(F){C.size.width=C.size.height*C.aspectRatio;
z=false
}C.position.top=C._helper?E.top:0
}A=C.containerElement.get(0)===C.element.parent().get(0);
y=/relative|absolute/.test(C.containerElement.css("position"));
if(A&&y){C.offset.left=C.parentData.left+C.position.left;
C.offset.top=C.parentData.top+C.position.top
}else{C.offset.left=C.element.offset().left;
C.offset.top=C.element.offset().top
}B=Math.abs(C.sizeDiff.width+(C._helper?C.offset.left-u.left:(C.offset.left-E.left)));
G=Math.abs(C.sizeDiff.height+(C._helper?C.offset.top-u.top:(C.offset.top-E.top)));
if(B+C.size.width>=C.parentData.width){C.size.width=C.parentData.width-B;
if(F){C.size.height=C.size.width/C.aspectRatio;
z=false
}}if(G+C.size.height>=C.parentData.height){C.size.height=C.parentData.height-G;
if(F){C.size.width=C.size.height*C.aspectRatio;
z=false
}}if(!z){C.position.left=C.prevPosition.left;
C.position.top=C.prevPosition.top;
C.size.width=C.prevSize.width;
C.size.height=C.prevSize.height
}},stop:function(){var A=f(this).resizable("instance"),v=A.options,B=A.containerOffset,u=A.containerPosition,x=A.containerElement,y=f(A.helper),D=y.offset(),C=y.outerWidth()-A.sizeDiff.width,z=y.outerHeight()-A.sizeDiff.height;
if(A._helper&&!v.animate&&(/relative/).test(x.css("position"))){f(this).css({left:D.left-u.left-B.left,width:C,height:z})
}if(A._helper&&!v.animate&&(/static/).test(x.css("position"))){f(this).css({left:D.left-u.left-B.left,width:C,height:z})
}}});
f.ui.plugin.add("resizable","alsoResize",{start:function(){var u=f(this).resizable("instance"),v=u.options;
f(v.alsoResize).each(function(){var w=f(this);
w.data("ui-resizable-alsoresize",{width:parseInt(w.width(),10),height:parseInt(w.height(),10),left:parseInt(w.css("left"),10),top:parseInt(w.css("top"),10)})
})
},resize:function(v,x){var u=f(this).resizable("instance"),y=u.options,w=u.originalSize,A=u.originalPosition,z={height:(u.size.height-w.height)||0,width:(u.size.width-w.width)||0,top:(u.position.top-A.top)||0,left:(u.position.left-A.left)||0};
f(y.alsoResize).each(function(){var D=f(this),E=f(this).data("ui-resizable-alsoresize"),C={},B=D.parents(x.originalElement[0]).length?["width","height"]:["width","height","top","left"];
f.each(B,function(F,H){var G=(E[H]||0)+(z[H]||0);
if(G&&G>=0){C[H]=G||null
}});
D.css(C)
})
},stop:function(){f(this).removeData("resizable-alsoresize")
}});
f.ui.plugin.add("resizable","ghost",{start:function(){var v=f(this).resizable("instance"),w=v.options,u=v.size;
v.ghost=v.originalElement.clone();
v.ghost.css({opacity:0.25,display:"block",position:"relative",height:u.height,width:u.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof w.ghost==="string"?w.ghost:"");
v.ghost.appendTo(v.helper)
},resize:function(){var u=f(this).resizable("instance");
if(u.ghost){u.ghost.css({position:"relative",height:u.size.height,width:u.size.width})
}},stop:function(){var u=f(this).resizable("instance");
if(u.ghost&&u.helper){u.helper.get(0).removeChild(u.ghost.get(0))
}}});
f.ui.plugin.add("resizable","grid",{resize:function(){var x,C=f(this).resizable("instance"),G=C.options,A=C.size,B=C.originalSize,D=C.originalPosition,L=C.axis,u=typeof G.grid==="number"?[G.grid,G.grid]:G.grid,J=(u[0]||1),I=(u[1]||1),z=Math.round((A.width-B.width)/J)*J,y=Math.round((A.height-B.height)/I)*I,E=B.width+z,H=B.height+y,w=G.maxWidth&&(G.maxWidth<E),F=G.maxHeight&&(G.maxHeight<H),K=G.minWidth&&(G.minWidth>E),v=G.minHeight&&(G.minHeight>H);
G.grid=u;
if(K){E+=J
}if(v){H+=I
}if(w){E-=J
}if(F){H-=I
}if(/^(se|s|e)$/.test(L)){C.size.width=E;
C.size.height=H
}else{if(/^(ne)$/.test(L)){C.size.width=E;
C.size.height=H;
C.position.top=D.top-y
}else{if(/^(sw)$/.test(L)){C.size.width=E;
C.size.height=H;
C.position.left=D.left-z
}else{if(H-I<=0||E-J<=0){x=C._getPaddingPlusBorderDimensions(this)
}if(H-I>0){C.size.height=H;
C.position.top=D.top-y
}else{H=I-x.height;
C.size.height=H;
C.position.top=D.top+B.height-H
}if(E-J>0){C.size.width=E;
C.position.left=D.left-z
}else{E=J-x.width;
C.size.width=E;
C.position.left=D.left+B.width-E
}}}}}});
var h=f.ui.resizable;
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
var l,r="ui-button ui-widget ui-state-default ui-corner-all",j="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",b=function(){var u=f(this);
setTimeout(function(){u.find(":ui-button").button("refresh")
},1)
},g=function(v){var u=v.name,w=v.form,x=f([]);
if(u){u=u.replace(/'/g,"\\'");
if(w){x=f(w).find("[name='"+u+"'][type=radio]")
}else{x=f("[name='"+u+"'][type=radio]",v.ownerDocument).filter(function(){return !this.form
})
}}return x
};
f.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,b);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var w=this,u=this.options,x=this.type==="checkbox"||this.type==="radio",v=!x?"ui-state-active":"";
if(u.label===null){u.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(r).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled){return
}if(this===l){f(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled){return
}f(this).removeClass(v)
}).bind("click"+this.eventNamespace,function(y){if(u.disabled){y.preventDefault();
y.stopImmediatePropagation()
}});
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}});
if(x){this.element.bind("change"+this.eventNamespace,function(){w.refresh()
})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled){return false
}f(this).addClass("ui-state-active");
w.buttonElement.attr("aria-pressed","true");
var y=w.element[0];
g(y).not(y).map(function(){return f(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled){return false
}f(this).addClass("ui-state-active");
l=this;
w.document.one("mouseup",function(){l=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled){return false
}f(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(y){if(u.disabled){return false
}if(y.keyCode===f.ui.keyCode.SPACE||y.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(y){if(y.keyCode===f.ui.keyCode.SPACE){f(this).click()
}})
}}}this._setOption("disabled",u.disabled);
this._resetButton()
},_determineButtonType:function(){var u,w,v;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){u=this.element.parents().last();
w="label[for='"+this.element.attr("id")+"']";
this.buttonElement=u.find(w);
if(!this.buttonElement.length){u=u.length?u.siblings():this.element.siblings();
this.buttonElement=u.filter(w);
if(!this.buttonElement.length){this.buttonElement=u.find(w)
}}this.element.addClass("ui-helper-hidden-accessible");
v=this.element.is(":checked");
if(v){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",v)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(r+" ui-state-active "+j).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(u,v){this._super(u,v);
if(u==="disabled"){this.widget().toggleClass("ui-state-disabled",!!v);
this.element.prop("disabled",!!v);
if(v){if(this.type==="checkbox"||this.type==="radio"){this.buttonElement.removeClass("ui-state-focus")
}else{this.buttonElement.removeClass("ui-state-focus ui-state-active")
}}return
}this._resetButton()
},refresh:function(){var u=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(u!==this.options.disabled){this._setOption("disabled",u)
}if(this.type==="radio"){g(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var y=this.buttonElement.removeClass(j),w=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(y.empty()).text(),v=this.options.icons,u=v.primary&&v.secondary,x=[];
if(v.primary||v.secondary){if(this.options.text){x.push("ui-button-text-icon"+(u?"s":(v.primary?"-primary":"-secondary")))
}if(v.primary){y.prepend("<span class='ui-button-icon-primary ui-icon "+v.primary+"'></span>")
}if(v.secondary){y.append("<span class='ui-button-icon-secondary ui-icon "+v.secondary+"'></span>")
}if(!this.options.text){x.push(u?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){y.attr("title",f.trim(w))
}}}else{x.push("ui-button-text-only")
}y.addClass(x.join(" "))
}});
f.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(u,v){if(u==="disabled"){this.buttons.button("option",u,v)
}this._super(u,v)
},refresh:function(){var v=this.element.css("direction")==="rtl",u=this.element.find(this.options.items),w=u.filter(":ui-button");
u.not(":ui-button").button();
w.button("refresh");
this.buttons=u.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(v?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(v?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}});
var a=f.ui.button;
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
var q=f.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"Close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(v){var u=f(this).css(v).offset().top;
if(u<0){f(this).css("top",v.top-u)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&f.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&f.fn.resizable){this._makeResizable()
}this._isOpen=false;
this._trackFocus()
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var u=this.options.appendTo;
if(u&&(u.jquery||u.nodeType)){return f(u)
}return this.document.find(u||"body").eq(0)
},_destroy:function(){var v,u=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}v=u.parent.children().eq(u.index);
if(v.length&&v[0]!==this.element[0]){v.before(this.element)
}else{u.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:f.noop,enable:f.noop,close:function(x){var w,v=this;
if(!this._isOpen||this._trigger("beforeClose",x)===false){return
}this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").focus().length){try{w=this.document[0].activeElement;
if(w&&w.nodeName.toLowerCase()!=="body"){f(w).blur()
}}catch(u){}}this._hide(this.uiDialog,this.options.hide,function(){v._trigger("close",x)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(y,u){var x=false,w=this.uiDialog.siblings(".ui-front:visible").map(function(){return +f(this).css("z-index")
}).get(),v=Math.max.apply(null,w);
if(v>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",v+1);
x=true
}if(x&&!u){this._trigger("focus",y)
}return x
},open:function(){var u=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=f(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)
}this._show(this.uiDialog,this.options.show,function(){u._focusTabbable();
u._trigger("focus")
});
this._makeFocusTarget();
this._trigger("open")
},_focusTabbable:function(){var u=this._focusedElement;
if(!u){u=this.element.find("[autofocus]")
}if(!u.length){u=this.element.find(":tabbable")
}if(!u.length){u=this.uiDialogButtonPane.find(":tabbable")
}if(!u.length){u=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!u.length){u=this.uiDialog
}u.eq(0).focus()
},_keepFocus:function(u){function v(){var x=this.document[0].activeElement,w=this.uiDialog[0]===x||f.contains(this.uiDialog[0],x);
if(!w){this._focusTabbable()
}}u.preventDefault();
v.call(this);
this._delay(v)
},_createWrapper:function(){this.uiDialog=f("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(w){if(this.options.closeOnEscape&&!w.isDefaultPrevented()&&w.keyCode&&w.keyCode===f.ui.keyCode.ESCAPE){w.preventDefault();
this.close(w);
return
}if(w.keyCode!==f.ui.keyCode.TAB||w.isDefaultPrevented()){return
}var v=this.uiDialog.find(":tabbable"),x=v.filter(":first"),u=v.filter(":last");
if((w.target===u[0]||w.target===this.uiDialog[0])&&!w.shiftKey){this._delay(function(){x.focus()
});
w.preventDefault()
}else{if((w.target===x[0]||w.target===this.uiDialog[0])&&w.shiftKey){this._delay(function(){u.focus()
});
w.preventDefault()
}}},mousedown:function(u){if(this._moveToTop(u)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var u;
this.uiDialogTitlebar=f("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(v){if(!f(v.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=f("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(v){v.preventDefault();
this.close(v)
}});
u=f("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(u);
this.uiDialog.attr({"aria-labelledby":u.attr("id")})
},_title:function(u){if(!this.options.title){u.html("&#160;")
}u.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=f("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=f("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var v=this,u=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(f.isEmptyObject(u)||(f.isArray(u)&&!u.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}f.each(u,function(w,x){var y,z;
x=f.isFunction(x)?{click:x,text:w}:x;
x=f.extend({type:"button"},x);
y=x.click;
x.click=function(){y.apply(v.element[0],arguments)
};
z={icons:x.icons,text:x.showText};
delete x.icons;
delete x.showText;
f("<button></button>",x).button(z).appendTo(v.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var w=this,v=this.options;
function u(x){return{position:x.position,offset:x.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(x,y){f(this).addClass("ui-dialog-dragging");
w._blockFrames();
w._trigger("dragStart",x,u(y))
},drag:function(x,y){w._trigger("drag",x,u(y))
},stop:function(x,y){var A=y.offset.left-w.document.scrollLeft(),z=y.offset.top-w.document.scrollTop();
v.position={my:"left top",at:"left"+(A>=0?"+":"")+A+" top"+(z>=0?"+":"")+z,of:w.window};
f(this).removeClass("ui-dialog-dragging");
w._unblockFrames();
w._trigger("dragStop",x,u(y))
}})
},_makeResizable:function(){var z=this,x=this.options,y=x.resizable,u=this.uiDialog.css("position"),w=typeof y==="string"?y:"n,e,s,w,se,sw,ne,nw";
function v(A){return{originalPosition:A.originalPosition,originalSize:A.originalSize,position:A.position,size:A.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:x.maxWidth,maxHeight:x.maxHeight,minWidth:x.minWidth,minHeight:this._minHeight(),handles:w,start:function(A,B){f(this).addClass("ui-dialog-resizing");
z._blockFrames();
z._trigger("resizeStart",A,v(B))
},resize:function(A,B){z._trigger("resize",A,v(B))
},stop:function(A,B){var E=z.uiDialog.offset(),D=E.left-z.document.scrollLeft(),C=E.top-z.document.scrollTop();
x.height=z.uiDialog.height();
x.width=z.uiDialog.width();
x.position={my:"left top",at:"left"+(D>=0?"+":"")+D+" top"+(C>=0?"+":"")+C,of:z.window};
f(this).removeClass("ui-dialog-resizing");
z._unblockFrames();
z._trigger("resizeStop",A,v(B))
}}).css("position",u)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(u){this._makeFocusTarget();
this._focusedElement=f(u.target)
}})
},_makeFocusTarget:function(){this._untrackInstance();
this._trackingInstances().unshift(this)
},_untrackInstance:function(){var v=this._trackingInstances(),u=f.inArray(this,v);
if(u!==-1){v.splice(u,1)
}},_trackingInstances:function(){var u=this.document.data("ui-dialog-instances");
if(!u){u=[];
this.document.data("ui-dialog-instances",u)
}return u
},_minHeight:function(){var u=this.options;
return u.height==="auto"?u.minHeight:Math.min(u.minHeight,u.height)
},_position:function(){var u=this.uiDialog.is(":visible");
if(!u){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!u){this.uiDialog.hide()
}},_setOptions:function(w){var x=this,v=false,u={};
f.each(w,function(y,z){x._setOption(y,z);
if(y in x.sizeRelatedOptions){v=true
}if(y in x.resizableRelatedOptions){u[y]=z
}});
if(v){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",u)
}},_setOption:function(w,x){var v,y,u=this.uiDialog;
if(w==="dialogClass"){u.removeClass(this.options.dialogClass).addClass(x)
}if(w==="disabled"){return
}this._super(w,x);
if(w==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(w==="buttons"){this._createButtons()
}if(w==="closeText"){this.uiDialogTitlebarClose.button({label:""+x})
}if(w==="draggable"){v=u.is(":data(ui-draggable)");
if(v&&!x){u.draggable("destroy")
}if(!v&&x){this._makeDraggable()
}}if(w==="position"){this._position()
}if(w==="resizable"){y=u.is(":data(ui-resizable)");
if(y&&!x){u.resizable("destroy")
}if(y&&typeof x==="string"){u.resizable("option","handles",x)
}if(!y&&x!==false){this._makeResizable()
}}if(w==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var u,w,x,v=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(v.minWidth>v.width){v.width=v.minWidth
}u=this.uiDialog.css({height:"auto",width:v.width}).outerHeight();
w=Math.max(0,v.minHeight-u);
x=typeof v.maxHeight==="number"?Math.max(0,v.maxHeight-u):"none";
if(v.height==="auto"){this.element.css({minHeight:w,maxHeight:x,height:"auto"})
}else{this.element.height(Math.max(0,v.height-u))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var u=f(this);
return f("<div>").css({position:"absolute",width:u.outerWidth(),height:u.outerHeight()}).appendTo(u.parent()).offset(u.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(u){if(f(u.target).closest(".ui-dialog").length){return true
}return !!f(u.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var u=true;
this._delay(function(){u=false
});
if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(v){if(u){return
}if(!this._allowInteraction(v)){v.preventDefault();
this._trackingInstances()[0]._focusTabbable()
}}})
}this.overlay=f("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){var u=this.document.data("ui-dialog-overlays")-1;
if(!u){this.document.unbind("focusin").removeData("ui-dialog-overlays")
}else{this.document.data("ui-dialog-overlays",u)
}this.overlay.remove();
this.overlay=null
}}});
/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */
var n=f.widget("ui.slider",f.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var x,u,v=this.options,z=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),y="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",w=[];
u=(v.values&&v.values.length)||1;
if(z.length>u){z.slice(u).remove();
z=z.slice(0,u)
}for(x=z.length;
x<u;
x++){w.push(y)
}this.handles=z.add(f(w.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(A){f(this).data("ui-slider-handle-index",A)
})
},_createRange:function(){var u=this.options,v="";
if(u.range){if(u.range===true){if(!u.values){u.values=[this._valueMin(),this._valueMin()]
}else{if(u.values.length&&u.values.length!==2){u.values=[u.values[0],u.values[0]]
}else{if(f.isArray(u.values)){u.values=u.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=f("<div></div>").appendTo(this.element);
v="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(v+((u.range==="min"||u.range==="max")?" ui-slider-range-"+u.range:""))
}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){this._off(this.handles);
this._on(this.handles,this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(w){var A,D,v,y,C,E,z,u,B=this,x=this.options;
if(x.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
A={x:w.pageX,y:w.pageY};
D=this._normValueFromMouse(A);
v=this._valueMax()-this._valueMin()+1;
this.handles.each(function(F){var G=Math.abs(D-B.values(F));
if((v>G)||(v===G&&(F===B._lastChangedValue||B.values(F)===x.min))){v=G;
y=f(this);
C=F
}});
E=this._start(w,C);
if(E===false){return false
}this._mouseSliding=true;
this._handleIndex=C;
y.addClass("ui-state-active").focus();
z=y.offset();
u=!f(w.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=u?{left:0,top:0}:{left:w.pageX-z.left-(y.width()/2),top:w.pageY-z.top-(y.height()/2)-(parseInt(y.css("borderTopWidth"),10)||0)-(parseInt(y.css("borderBottomWidth"),10)||0)+(parseInt(y.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(w,C,D)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(w){var u={x:w.pageX,y:w.pageY},v=this._normValueFromMouse(u);
this._slide(w,this._handleIndex,v);
return false
},_mouseStop:function(u){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(u,this._handleIndex);
this._change(u,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(v){var u,y,x,w,z;
if(this.orientation==="horizontal"){u=this.elementSize.width;
y=v.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{u=this.elementSize.height;
y=v.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}x=(y/u);
if(x>1){x=1
}if(x<0){x=0
}if(this.orientation==="vertical"){x=1-x
}w=this._valueMax()-this._valueMin();
z=this._valueMin()+x*w;
return this._trimAlignValue(z)
},_start:function(w,v){var u={handle:this.handles[v],value:this.value()};
if(this.options.values&&this.options.values.length){u.value=this.values(v);
u.values=this.values()
}return this._trigger("start",w,u)
},_slide:function(y,x,w){var u,v,z;
if(this.options.values&&this.options.values.length){u=this.values(x?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((x===0&&w>u)||(x===1&&w<u))){w=u
}if(w!==this.values(x)){v=this.values();
v[x]=w;
z=this._trigger("slide",y,{handle:this.handles[x],value:w,values:v});
u=this.values(x?0:1);
if(z!==false){this.values(x,w)
}}}else{if(w!==this.value()){z=this._trigger("slide",y,{handle:this.handles[x],value:w});
if(z!==false){this.value(w)
}}}},_stop:function(w,v){var u={handle:this.handles[v],value:this.value()};
if(this.options.values&&this.options.values.length){u.value=this.values(v);
u.values=this.values()
}this._trigger("stop",w,u)
},_change:function(w,v){if(!this._keySliding&&!this._mouseSliding){var u={handle:this.handles[v],value:this.value()};
if(this.options.values&&this.options.values.length){u.value=this.values(v);
u.values=this.values()
}this._lastChangedValue=v;
this._trigger("change",w,u)
}},value:function(u){if(arguments.length){this.options.value=this._trimAlignValue(u);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(v,y){var x,u,w;
if(arguments.length>1){this.options.values[v]=this._trimAlignValue(y);
this._refreshValue();
this._change(null,v);
return
}if(arguments.length){if(f.isArray(arguments[0])){x=this.options.values;
u=arguments[0];
for(w=0;
w<x.length;
w+=1){x[w]=this._trimAlignValue(u[w]);
this._change(null,w)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(v)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(v,w){var u,x=0;
if(v==="range"&&this.options.range===true){if(w==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(w==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(f.isArray(this.options.values)){x=this.options.values.length
}if(v==="disabled"){this.element.toggleClass("ui-state-disabled",!!w)
}this._super(v,w);
switch(v){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
this.handles.css(w==="horizontal"?"bottom":"left","");
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(u=0;
u<x;
u+=1){this._change(null,u)
}this._animateOff=false;
break;
case"step":case"min":case"max":this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var u=this.options.value;
u=this._trimAlignValue(u);
return u
},_values:function(u){var x,w,v;
if(arguments.length){x=this.options.values[u];
x=this._trimAlignValue(x);
return x
}else{if(this.options.values&&this.options.values.length){w=this.options.values.slice();
for(v=0;
v<w.length;
v+=1){w[v]=this._trimAlignValue(w[v])
}return w
}else{return[]
}}},_trimAlignValue:function(x){if(x<=this._valueMin()){return this._valueMin()
}if(x>=this._valueMax()){return this._valueMax()
}var u=(this.options.step>0)?this.options.step:1,w=(x-this._valueMin())%u,v=x-w;
if(Math.abs(w)*2>=u){v+=(w>0)?u:(-u)
}return parseFloat(v.toFixed(5))
},_calculateNewMax:function(){var u=this.options.max,v=this._valueMin(),w=this.options.step,x=Math.floor((+(u-v).toFixed(this._precision()))/w)*w;
u=x+v;
this.max=parseFloat(u.toFixed(this._precision()))
},_precision:function(){var u=this._precisionOf(this.options.step);
if(this.options.min!==null){u=Math.max(u,this._precisionOf(this.options.min))
}return u
},_precisionOf:function(v){var w=v.toString(),u=w.indexOf(".");
return u===-1?0:w.length-u-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshValue:function(){var z,y,C,A,D,x=this.options.range,w=this.options,B=this,v=(!this._animateOff)?w.animate:false,u={};
if(this.options.values&&this.options.values.length){this.handles.each(function(E){y=(B.values(E)-B._valueMin())/(B._valueMax()-B._valueMin())*100;
u[B.orientation==="horizontal"?"left":"bottom"]=y+"%";
f(this).stop(1,1)[v?"animate":"css"](u,w.animate);
if(B.options.range===true){if(B.orientation==="horizontal"){if(E===0){B.range.stop(1,1)[v?"animate":"css"]({left:y+"%"},w.animate)
}if(E===1){B.range[v?"animate":"css"]({width:(y-z)+"%"},{queue:false,duration:w.animate})
}}else{if(E===0){B.range.stop(1,1)[v?"animate":"css"]({bottom:(y)+"%"},w.animate)
}if(E===1){B.range[v?"animate":"css"]({height:(y-z)+"%"},{queue:false,duration:w.animate})
}}}z=y
})
}else{C=this.value();
A=this._valueMin();
D=this._valueMax();
y=(D!==A)?(C-A)/(D-A)*100:0;
u[this.orientation==="horizontal"?"left":"bottom"]=y+"%";
this.handle.stop(1,1)[v?"animate":"css"](u,w.animate);
if(x==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[v?"animate":"css"]({width:y+"%"},w.animate)
}if(x==="max"&&this.orientation==="horizontal"){this.range[v?"animate":"css"]({width:(100-y)+"%"},{queue:false,duration:w.animate})
}if(x==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[v?"animate":"css"]({height:y+"%"},w.animate)
}if(x==="max"&&this.orientation==="vertical"){this.range[v?"animate":"css"]({height:(100-y)+"%"},{queue:false,duration:w.animate})
}}},_handleEvents:{keydown:function(y){var z,w,v,x,u=f(y.target).data("ui-slider-handle-index");
switch(y.keyCode){case f.ui.keyCode.HOME:case f.ui.keyCode.END:case f.ui.keyCode.PAGE_UP:case f.ui.keyCode.PAGE_DOWN:case f.ui.keyCode.UP:case f.ui.keyCode.RIGHT:case f.ui.keyCode.DOWN:case f.ui.keyCode.LEFT:y.preventDefault();
if(!this._keySliding){this._keySliding=true;
f(y.target).addClass("ui-state-active");
z=this._start(y,u);
if(z===false){return
}}break
}x=this.options.step;
if(this.options.values&&this.options.values.length){w=v=this.values(u)
}else{w=v=this.value()
}switch(y.keyCode){case f.ui.keyCode.HOME:v=this._valueMin();
break;
case f.ui.keyCode.END:v=this._valueMax();
break;
case f.ui.keyCode.PAGE_UP:v=this._trimAlignValue(w+((this._valueMax()-this._valueMin())/this.numPages));
break;
case f.ui.keyCode.PAGE_DOWN:v=this._trimAlignValue(w-((this._valueMax()-this._valueMin())/this.numPages));
break;
case f.ui.keyCode.UP:case f.ui.keyCode.RIGHT:if(w===this._valueMax()){return
}v=this._trimAlignValue(w+x);
break;
case f.ui.keyCode.DOWN:case f.ui.keyCode.LEFT:if(w===this._valueMin()){return
}v=this._trimAlignValue(w-x);
break
}this._slide(y,u,v)
},keyup:function(v){var u=f(v.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(v,u);
this._change(v,u);
f(v.target).removeClass("ui-state-active")
}}}})
}));
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(h){function i(f,e){if(!(f.originalEvent.touches.length>1)){f.preventDefault();
var n=f.originalEvent.changedTouches[0],m=document.createEvent("MouseEvents");
m.initMouseEvent(e,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),f.target.dispatchEvent(m)
}}if(h.support.touch="ontouchend" in document,h.support.touch){var j,g=h.ui.mouse.prototype,l=g._mouseInit,k=g._mouseDestroy;
g._touchStart=function(d){var c=this;
!j&&c._mouseCapture(d.originalEvent.changedTouches[0])&&(j=!0,c._touchMoved=!1,i(d,"mouseover"),i(d,"mousemove"),i(d,"mousedown"))
},g._touchMove=function(b){j&&(this._touchMoved=!0,i(b,"mousemove"))
},g._touchEnd=function(b){j&&(i(b,"mouseup"),i(b,"mouseout"),this._touchMoved||i(b,"click"),j=!1)
},g._mouseInit=function(){var a=this;
a.element.bind({touchstart:h.proxy(a,"_touchStart"),touchmove:h.proxy(a,"_touchMove"),touchend:h.proxy(a,"_touchEnd")}),l.call(a)
},g._mouseDestroy=function(){var a=this;
a.element.unbind({touchstart:h.proxy(a,"_touchStart"),touchmove:h.proxy(a,"_touchMove"),touchend:h.proxy(a,"_touchEnd")}),k.call(a)
}
}}(jQuery);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"&&typeof require==="function"){a(require("jquery"))
}else{a(jQuery)
}}}(function(d){var a=(function(){return{escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},createNode:function(e){var f=document.createElement("div");
f.className=e;
f.style.display="none";
return f
}}
}()),c={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};
function b(f,e){var h=function(){},g=this,i={ajaxSettings:{},autoSelectFirst:false,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:false,onSearchStart:h,onSearchComplete:h,onSearchError:h,preserveInput:false,containerClass:"autocomplete-suggestions",suggestionsWrapperClass:"autocomplete-suggestions-wrapper",tabDisabled:false,dataType:"text",currentRequest:null,triggerSelectOnValidInput:true,preventBadQueries:true,lookupFilter:function(k,j,l){return k.value.toLowerCase().indexOf(l)!==-1
},paramName:"query",transformResult:function(j){return typeof j==="string"?d.parseJSON(j):j
},showNoSuggestionNotice:false,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:false};
g.element=f;
g.el=d(f);
g.suggestions=[];
g.badQueries=[];
g.selectedIndex=-1;
g.currentValue=g.element.value;
g.intervalId=0;
g.cachedResponse={};
g.onChangeInterval=null;
g.onChange=null;
g.isLocal=false;
g.suggestionsContainer=null;
g.noSuggestionsContainer=null;
g.options=d.extend({},i,e);
g.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"};
g.hint=null;
g.hintValue="";
g.selection=null;
g.initialize();
g.setOptions(e)
}b.utils=a;
d.Autocomplete=b;
b.formatResult=function(e,f){var h=e.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
var g="("+a.escapeRegExChars(f)+")";
return h.replace(new RegExp(g,"gi"),"<strong>$1</strong>")
};
b.prototype={killerFn:null,initialize:function(){var i=this,j="."+i.classes.suggestion,g=i.classes.selected,f=i.options,e;
i.element.setAttribute("autocomplete","off");
i.killerFn=function(k){if(d(k.target).closest("."+i.options.containerClass).length===0){i.killSuggestions();
i.disableKillerFn()
}};
i.noSuggestionsContainer=d('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0);
i.suggestionsContainer=b.utils.createNode(f.containerClass);
e=d(i.suggestionsContainer);
var h=d('<div class="'+f.suggestionsWrapperClass+'"/>');
e.appendTo(h.appendTo(f.appendTo));
if(f.width!=="auto"){e.width(f.width)
}e.on("mouseover.autocomplete",j,function(){i.activate(d(this).data("index"))
});
e.on("mouseout.autocomplete",function(){i.selectedIndex=-1;
e.children("."+g).removeClass(g)
});
e.on("click.autocomplete",j,function(){i.select(d(this).data("index"))
});
i.fixPositionCapture=function(){if(i.visible){i.fixPosition()
}};
d(window).on("resize.autocomplete",i.fixPositionCapture);
i.el.on("keydown.autocomplete",function(k){i.onKeyPress(k)
});
i.el.on("keyup.autocomplete",function(k){i.onKeyUp(k)
});
i.el.on("blur.autocomplete",function(){i.onBlur()
});
i.el.on("focus.autocomplete",function(){i.onFocus()
});
i.el.on("change.autocomplete",function(k){i.onKeyUp(k)
});
i.el.on("input.autocomplete",function(k){i.onKeyUp(k)
})
},onFocus:function(){var e=this;
e.fixPosition();
if(e.options.minChars<=e.el.val().length){e.onValueChange()
}},onBlur:function(){this.enableKillerFn()
},setOptions:function(g){var f=this,e=f.options;
d.extend(e,g);
f.isLocal=d.isArray(e.lookup);
if(f.isLocal){e.lookup=f.verifySuggestionsFormat(e.lookup)
}e.orientation=f.validateOrientation(e.orientation,"bottom")
},clearCache:function(){this.cachedResponse={};
this.badQueries=[]
},clear:function(){this.clearCache();
this.currentValue="";
this.suggestions=[]
},disable:function(){var e=this;
e.disabled=true;
clearInterval(e.onChangeInterval);
if(e.currentRequest){e.currentRequest.abort()
}},enable:function(){this.disabled=false
},fixPosition:function(){},enableKillerFn:function(){var e=this;
d(document).on("click.autocomplete",e.killerFn)
},disableKillerFn:function(){var e=this;
d(document).off("click.autocomplete",e.killerFn)
},killSuggestions:function(){var e=this;
e.stopKillSuggestions();
e.intervalId=window.setInterval(function(){e.hide();
e.stopKillSuggestions()
},50)
},stopKillSuggestions:function(){window.clearInterval(this.intervalId)
},isCursorAtEnd:function(){var g=this,f=g.el.val().length,h=g.element.selectionStart,e;
if(typeof h==="number"){return h===f
}if(document.selection){e=document.selection.createRange();
e.moveStart("character",-f);
return f===e.text.length
}return true
},onKeyPress:function(g){var f=this;
if(!f.disabled&&!f.visible&&g.which===c.DOWN&&f.currentValue){f.suggest();
return
}if(f.disabled||!f.visible){return
}switch(g.which){case c.ESC:f.el.val(f.currentValue);
f.hide();
break;
case c.RIGHT:if(f.hint&&f.options.onHint&&f.isCursorAtEnd()){f.selectHint();
break
}return;
case c.TAB:if(f.hint&&f.options.onHint){f.selectHint();
return
}if(f.selectedIndex===-1){f.hide();
return
}f.select(f.selectedIndex);
if(f.options.tabDisabled===false){return
}break;
case c.RETURN:if(f.selectedIndex===-1){f.hide();
return
}f.select(f.selectedIndex);
break;
case c.UP:f.moveUp();
break;
case c.DOWN:f.moveDown();
break;
default:return
}g.stopImmediatePropagation();
g.preventDefault()
},onKeyUp:function(g){var f=this;
if(f.disabled){return
}switch(g.which){case c.UP:case c.DOWN:return
}clearInterval(f.onChangeInterval);
if(f.currentValue!==f.el.val()){f.findBestHint();
if(f.options.deferRequestBy>0){f.onChangeInterval=setInterval(function(){f.onValueChange()
},f.options.deferRequestBy)
}else{f.onValueChange()
}}},onValueChange:function(){var g=this,f=g.options,i=g.el.val(),h=g.getQuery(i),e;
if(g.selection&&g.currentValue!==h){g.selection=null;
(f.onInvalidateSelection||d.noop).call(g.element)
}clearInterval(g.onChangeInterval);
g.currentValue=i;
g.selectedIndex=-1;
if(f.triggerSelectOnValidInput){e=g.findSuggestionIndex(h);
if(e!==-1){g.select(e);
return
}}if(h.length<f.minChars){g.hide()
}else{g.getSuggestions(h)
}},findSuggestionIndex:function(h){var g=this,f=-1,e=h.toLowerCase();
d.each(g.suggestions,function(k,j){if(j.value.toLowerCase()===e){f=k;
return false
}});
return f
},getQuery:function(f){var e=this.options.delimiter,g;
if(!e){return f
}g=f.split(e);
return d.trim(g[g.length-1])
},getSuggestionsLocal:function(k){var i=this,g=i.options,f=k.toLowerCase(),h=g.lookupFilter,e=parseInt(g.lookupLimit,10),j;
j={suggestions:d.grep(g.lookup,function(l){return h(l,k,f)
})};
if(e&&j.suggestions.length>e){j.suggestions=j.suggestions.slice(0,e)
}return j
},getSuggestions:function(i){var e,g=this,f=g.options,j=f.serviceUrl,l,k,h;
f.params[f.paramName]=i;
l=f.ignoreParams?null:f.params;
if(f.onSearchStart.call(g.element,f.params)===false){return
}if(d.isFunction(f.lookup)){f.lookup(i,function(m){g.suggestions=m.suggestions;
g.suggest();
f.onSearchComplete.call(g.element,i,m.suggestions)
});
return
}if(g.isLocal){e=g.getSuggestionsLocal(i)
}else{if(d.isFunction(j)){j=j.call(g.element,i)
}k=j+"?"+d.param(l||{});
e=g.cachedResponse[k]
}if(e&&d.isArray(e.suggestions)){g.suggestions=e.suggestions;
g.suggest();
f.onSearchComplete.call(g.element,i,e.suggestions)
}else{if(!g.isBadQuery(i)){if(g.currentRequest){g.currentRequest.abort()
}h={url:j,data:l,type:f.type,dataType:f.dataType};
d.extend(h,f.ajaxSettings);
g.currentRequest=d.ajax(h).done(function(n){var m;
g.currentRequest=null;
m=f.transformResult(n);
g.processResponse(m,i,k);
f.onSearchComplete.call(g.element,i,m.suggestions)
}).fail(function(m,o,n){f.onSearchError.call(g.element,i,m,o,n)
})
}else{f.onSearchComplete.call(g.element,i,[])
}}},isBadQuery:function(f){if(!this.options.preventBadQueries){return false
}var g=this.badQueries,e=g.length;
while(e--){if(f.indexOf(g[e])===0){return true
}}return false
},hide:function(){var f=this,e=d(f.suggestionsContainer);
if(d.isFunction(f.options.onHide)&&f.visible){f.options.onHide.call(f.element,e)
}f.visible=false;
f.selectedIndex=-1;
clearInterval(f.onChangeInterval);
d(f.suggestionsContainer).hide();
f.signalHint(null)
},suggest:function(){if(this.suggestions.length===0){if(this.options.showNoSuggestionNotice){this.noSuggestions()
}else{this.hide()
}return
}var l=this,r=l.options,p=r.groupBy,n=r.formatResult,o=l.getQuery(l.currentValue),m=l.classes.suggestion,g=l.classes.selected,e=d(l.suggestionsContainer),j=d(l.noSuggestionsContainer),q=r.beforeRender,i="",f,h=function(t,u){var s=t.data[p];
if(f===s){return""
}f=s;
return'<div class="autocomplete-group"><strong>'+f+"</strong></div>"
},k;
if(r.triggerSelectOnValidInput){k=l.findSuggestionIndex(o);
if(k!==-1){l.select(k);
return
}}d.each(l.suggestions,function(t,s){if(p){i+=h(s,o,t)
}i+='<div class="'+m+'" data-index="'+t+'">'+n(s,o)+"</div>"
});
this.adjustContainerWidth();
j.detach();
e.html(i);
if(d.isFunction(q)){q.call(l.element,e)
}l.fixPosition();
e.show();
console.log(e.closest("."+r.suggestionsWrapperClass));
e.closest("."+r.suggestionsWrapperClass).show();
if(r.autoSelectFirst){l.selectedIndex=0;
e.scrollTop(0);
e.children("."+m).first().addClass(g)
}l.visible=true;
l.findBestHint()
},noSuggestions:function(){var g=this,e=d(g.suggestionsContainer),f=d(g.noSuggestionsContainer);
this.adjustContainerWidth();
f.detach();
e.empty();
e.append(f);
g.fixPosition();
e.show();
g.visible=true;
console.log(e.closest("."+g.options.suggestionsWrapperClass));
e.closest("."+g.options.suggestionsWrapperClass).hide()
},adjustContainerWidth:function(){},findBestHint:function(){var f=this,g=f.el.val().toLowerCase(),e=null;
if(!g){return
}d.each(f.suggestions,function(j,h){var k=h.value.toLowerCase().indexOf(g)===0;
if(k){e=h
}return !k
});
f.signalHint(e)
},signalHint:function(f){var e="",g=this;
if(f){e=g.currentValue+f.value.substr(g.currentValue.length)
}if(g.hintValue!==e){g.hintValue=e;
g.hint=f;
(this.options.onHint||d.noop)(e)
}},verifySuggestionsFormat:function(e){if(e.length&&typeof e[0]==="string"){return d.map(e,function(f){return{value:f,data:null}
})
}return e
},validateOrientation:function(e,f){e=d.trim(e||"").toLowerCase();
if(d.inArray(e,["auto","bottom","top"])===-1){e=f
}return e
},processResponse:function(e,f,i){var h=this,g=h.options;
e.suggestions=h.verifySuggestionsFormat(e.suggestions);
if(!g.noCache){h.cachedResponse[i]=e;
if(g.preventBadQueries&&e.suggestions.length===0){h.badQueries.push(f)
}}if(f!==h.getQuery(h.currentValue)){return
}h.suggestions=e.suggestions;
h.suggest()
},activate:function(f){var i=this,j,h=i.classes.selected,e=d(i.suggestionsContainer),g=e.find("."+i.classes.suggestion);
e.find("."+h).removeClass(h);
i.selectedIndex=f;
if(i.selectedIndex!==-1&&g.length>i.selectedIndex){j=g.get(i.selectedIndex);
d(j).addClass(h);
return j
}return null
},selectHint:function(){var f=this,e=d.inArray(f.hint,f.suggestions);
f.select(e)
},select:function(e){var f=this;
f.hide();
f.onSelect(e)
},moveUp:function(){var e=this;
if(e.selectedIndex===-1){return
}if(e.selectedIndex===0){d(e.suggestionsContainer).children().first().removeClass(e.classes.selected);
e.selectedIndex=-1;
e.el.val(e.currentValue);
e.findBestHint();
return
}e.adjustScroll(e.selectedIndex-1)
},moveDown:function(){var e=this;
if(e.selectedIndex===(e.suggestions.length-1)){return
}e.adjustScroll(e.selectedIndex+1)
},adjustScroll:function(e){var g=this,k=g.activate(e);
if(!k){return
}var f,i,j,h=d(k).outerHeight();
f=k.offsetTop;
i=d(g.suggestionsContainer).scrollTop();
j=i+g.options.maxHeight-h;
if(f<i){d(g.suggestionsContainer).scrollTop(f)
}else{if(f>j){d(g.suggestionsContainer).scrollTop(f-g.options.maxHeight+h)
}}if(!g.options.preserveInput){g.el.val(g.getValue(g.suggestions[e].value))
}g.signalHint(null)
},onSelect:function(f){var h=this,g=h.options.onSelect,e=h.suggestions[f];
h.currentValue=h.getValue(e.value);
if(h.currentValue!==h.el.val()&&!h.options.preserveInput){h.el.val(h.currentValue)
}h.signalHint(null);
h.suggestions=[];
h.selection=e;
if(d.isFunction(g)){g.call(h.element,e)
}},getValue:function(h){var g=this,e=g.options.delimiter,f,i;
if(!e){return h
}f=g.currentValue;
i=f.split(e);
if(i.length===1){return h
}return f.substr(0,f.length-i[i.length-1].length)+h
},dispose:function(){var e=this;
e.el.off(".autocomplete").removeData("autocomplete");
e.disableKillerFn();
d(window).off("resize.autocomplete",e.fixPositionCapture);
d(e.suggestionsContainer).remove()
}};
d.fn.autocomplete=d.fn.devbridgeAutocomplete=function(f,e){var g="autocomplete";
if(arguments.length===0){return this.first().data(g)
}return this.each(function(){var i=d(this),h=i.data(g);
if(typeof f==="string"){if(h&&typeof h[f]==="function"){h[f](e)
}}else{if(h&&h.dispose){h.dispose()
}h=new b(this,f);
i.data(g,h)
}})
}
}));
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(j,i,b,c,d){return jQuery.easing[jQuery.easing.def](j,i,b,c,d)
},easeInQuad:function(j,i,b,c,d){return c*(i/=d)*i+b
},easeOutQuad:function(j,i,b,c,d){return -c*(i/=d)*(i-2)+b
},easeInOutQuad:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b
}return -c/2*((--i)*(i-2)-1)+b
},easeInCubic:function(j,i,b,c,d){return c*(i/=d)*i*i+b
},easeOutCubic:function(j,i,b,c,d){return c*((i=i/d-1)*i*i+1)+b
},easeInOutCubic:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i+b
}return c/2*((i-=2)*i*i+2)+b
},easeInQuart:function(j,i,b,c,d){return c*(i/=d)*i*i*i+b
},easeOutQuart:function(j,i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b
},easeInOutQuart:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i+b
}return -c/2*((i-=2)*i*i*i-2)+b
},easeInQuint:function(j,i,b,c,d){return c*(i/=d)*i*i*i*i+b
},easeOutQuint:function(j,i,b,c,d){return c*((i=i/d-1)*i*i*i*i+1)+b
},easeInOutQuint:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i*i+b
}return c/2*((i-=2)*i*i*i*i+2)+b
},easeInSine:function(j,i,b,c,d){return -c*Math.cos(i/d*(Math.PI/2))+c+b
},easeOutSine:function(j,i,b,c,d){return c*Math.sin(i/d*(Math.PI/2))+b
},easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b
},easeInExpo:function(j,i,b,c,d){return(i==0)?b:c*Math.pow(2,10*(i/d-1))+b
},easeOutExpo:function(j,i,b,c,d){return(i==d)?b+c:c*(-Math.pow(2,-10*i/d)+1)+b
},easeInOutExpo:function(j,i,b,c,d){if(i==0){return b
}if(i==d){return b+c
}if((i/=d/2)<1){return c/2*Math.pow(2,10*(i-1))+b
}return c/2*(-Math.pow(2,-10*--i)+2)+b
},easeInCirc:function(j,i,b,c,d){return -c*(Math.sqrt(1-(i/=d)*i)-1)+b
},easeOutCirc:function(j,i,b,c,d){return c*Math.sqrt(1-(i=i/d-1)*i)+b
},easeInOutCirc:function(j,i,b,c,d){if((i/=d/2)<1){return -c/2*(Math.sqrt(1-i*i)-1)+b
}return c/2*(Math.sqrt(1-(i-=2)*i)+1)+b
},easeInElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b)==1){return p+a
}if(!c){c=b*0.3
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}return -(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p
},easeOutElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b)==1){return p+a
}if(!c){c=b*0.3
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}return n*Math.pow(2,-10*m)*Math.sin((m*b-d)*(2*Math.PI)/c)+a+p
},easeInOutElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b/2)==2){return p+a
}if(!c){c=b*(0.3*1.5)
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}if(m<1){return -0.5*(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p
}return n*Math.pow(2,-10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c)*0.5+a+p
},easeInBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*(k/=d)*k*((j+1)*k-j)+b
},easeOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*((k=k/d-1)*k*((j+1)*k+j)+1)+b
},easeInOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}if((k/=d/2)<1){return c/2*(k*k*(((j*=(1.525))+1)*k-j))+b
}return c/2*((k-=2)*k*(((j*=(1.525))+1)*k+j)+2)+b
},easeInBounce:function(j,i,b,c,d){return c-jQuery.easing.easeOutBounce(j,d-i,0,c,d)+b
},easeOutBounce:function(j,i,b,c,d){if((i/=d)<(1/2.75)){return c*(7.5625*i*i)+b
}else{if(i<(2/2.75)){return c*(7.5625*(i-=(1.5/2.75))*i+0.75)+b
}else{if(i<(2.5/2.75)){return c*(7.5625*(i-=(2.25/2.75))*i+0.9375)+b
}else{return c*(7.5625*(i-=(2.625/2.75))*i+0.984375)+b
}}}},easeInOutBounce:function(j,i,b,c,d){if(i<d/2){return jQuery.easing.easeInBounce(j,i*2,0,c,d)*0.5+b
}return jQuery.easing.easeOutBounce(j,i*2-d,0,c,d)*0.5+c*0.5+b
}});
(function(){var a=false,b=/xyz/.test(function(){xyz
})?/\b_super\b/:/.*/;
this.A3_Class=function(){};
A3_Class.extend=function(g){var e=this.prototype;
a=true;
var d=new this();
a=false;
for(var c in g){d[c]=typeof g[c]=="function"&&typeof e[c]=="function"&&b.test(g[c])?(function(h,i){return function(){var k=this._super;
this._super=e[h];
var j=i.apply(this,arguments);
this._super=k;
return j
}
})(c,g[c]):g[c]
}function f(){if(!a&&this.init){this.init.apply(this,arguments)
}}f.prototype=d;
f.prototype.constructor=f;
f.extend=arguments.callee;
return f
}
})();
$(document).ready(function(){$(".searchresult-item a").click(function(){$.ajax({url:$(this).attr("href").replace(/(?:\.html)?(?:\?\S*)?$/,"")+".searchresultclick.json",cache:false,data:{resultType:"explizit",queryId:$(this).closest("ul.searchresult-items").attr("data-queryId")},timeout:500,async:false,dataType:"json"})
})
});
var IF6={focus_obj:null,last_window_width:0,lightbox_fragments:[],last_scroll_pos:0};
$(window).resize(function(){if(IF6.last_window_width!==window.innerWidth){$("body").removeClass("navigation_visible contact_visible pagenav_visible");
$(".if6_navigation div div").removeClass("navvisible");
IF6.last_window_width=window.innerWidth
}}).load(function(){$(window).resize()
});
$("html").addClass("js");
if("ontouchstart" in document.documentElement){$("html").removeClass("no-touch")
}document.createElement("section");
$(window).on("load",function(){if(IF6.focus_obj){IF6.focus_obj.focus()
}});
$(function(){$('.if6_header input[type="text"],.if6_header input[type="password"]').on("keyup",function(){this.className=this.value?"nonempty":""
}).on("paste",function(){var a=$(this);
window.setTimeout(function(){a.trigger("keyup")
},30)
}).trigger("keyup");
$(".if6_header .header-login").append("<span class=\"close-icon\" onclick=\"$('body').removeClass('login_visible');\"></span>");
$(".if6_header .secselect").click(function(){$(this).toggleClass("secselect_visible")
});
$(".if6_navigation>span,.if6_contact>span,.loginlogout .background").on("touchmove",function(){return false
});
$(document).trigger("if6_page_ready")
});
$(document).on("if6_page_ready",function(){$(".im+.ficon,.il+.ficon,.ixl+.ficon,.ixxl+.ficon,.im+.helptxt,.il+.helptxt,.ixl+.helptxt,.ixxl+.helptxt").prev().addClass("followed-by-icon");
$(".bline").not(function(){return($(this).find("input,.ficon,.helptxt,select,textarea,.bslider").length>0)
}).addClass("btext-only");
$(".bpulldown>span").not(function(){var a=this.click_added;
this.click_added=true;
return a
}).click(function(){$(this).closest(".bpulldown").toggleClass("pulldown_visible")
});
$(".bpager div.active").each(function(){$(this.nextSibling).addClass("next");
$(this.previousSibling).addClass("prev")
});
$("div.ficon>input").not(function(){var a=this.focus_added;
this.focus_added=true;
return a
}).focus(function(){$(this.parentNode).addClass("focus")
}).blur(function(){$(this.parentNode).removeClass("focus")
})
});
$(document).on("if6_page_ready",function(){$('.if6_main input[type="checkbox"]').not(function(){if($(this.nextSibling).hasClass("checkbox")){return true
}return($(this).closest(".no-if6-changes").length>0)
}).after('<span class="checkbox"></span>').on("click blur",function(){if(this.checked){$(this.nextSibling).addClass("checked")
}else{$(this.nextSibling).removeClass("checked")
}});
$("span.checkbox").on("click",function(){if(!this.previousSibling.disabled){$(this).toggleClass("checked");
this.previousSibling.checked=$(this).hasClass("checked")
}}).each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}})
});
$(document).on("if6_page_ready",function(){$('.if6_main input[type="radio"]').not(function(){if($(this.nextSibling).hasClass("radio")){return true
}return($(this).closest(".no-if6-changes").length>0)
}).after('<span class="radio"></span>').click(function(){$('input[name="'+this.name+'"]+span.radio').each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}else{$(this).removeClass("checked")
}})
}).each(function(){var a=this.getAttribute("id");
if(typeof a==="string"){$(this).parents(".bline").find('input[type="text"],input[type="submit"],select').on("click change keypress",function(){document.getElementById(a).checked=true;
$("#"+a).click()
})
}});
$("span.radio").click(function(){if(!this.previousSibling.disabled){$("input[name="+this.previousSibling.name+"]:radio+span.radio").removeClass("checked");
$(this).addClass("checked");
this.previousSibling.checked=true
}}).each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}})
});
$(document).on("if6_page_ready",function(){$("select").not(function(){return($(this).closest(".no-if6-changes").length>0)
}).each(function(){if(this.multiple){return
}if(!$(this.nextSibling).hasClass("select")){var b=$(this).attr("class");
$(this).wrap('<div class="select-wrap '+b+'"></div>');
$(this).after('<span class="select">&nbsp;</span>');
$(this).removeClass("followed-by-icon")
}var a=Math.round($(this).height());
var c=Math.round($(this.nextSibling).height());
if(a===c){$(this).addClass("select-modified")
}if(a===c+1){$(this).addClass("select-modified select-reduce-by-one")
}if(a===c+2){$(this).addClass("select-modified select-reduce-by-two")
}if(a===c+3){$(this).addClass("select-modified select-reduce-by-three")
}if(a===c+4){$(this).addClass("select-modified select-reduce-by-four")
}if(a===c+5){$(this).addClass("select-modified select-reduce-by-five")
}})
});
$(document).on("ready",function(){var a=3;
var b={serviceUrl:window.location.pathname.replace(/\.[a-z]+$/i,"")+".autosuggest.json",paramName:"q",forceFixPosition:true,minChars:a,appendTo:"#sayt-container",maxHeight:400,zIndex:2100,triggerSelectOnValidInput:false,containerClass:"autocomplete-suggestions",showNoSuggestionNotice:true,noSuggestionNotice:'<div class="autocomplete-noresult">'+jQuery("#head_ftsearch").attr("data-autosuggest_noSuggestionNotice")+"</div>",formatResult:function(c){return c.data
},deferRequestBy:100,params:{_charset_:"UTF-8"},noCache:false,onSearchStart:function(c){c.q=$.trim(c.q);
if($.trim(c.q).length<a){return false
}},onSelect:function(){var c=$(this).closest("form");
if(c.find(".srcIsAutosuggest").length===0){c.append("<input type='hidden' name='src_auto' class='srcIsAutosuggest' value='true'/>")
}c.submit()
},onHide:function(c){jQuery(".sayt-results",c.parent().parent()).hide();
c.parent().hide()
},beforeRender:function(c){jQuery(".sayt-results",c.parent().parent()).show()
}};
jQuery("#search").instantResults({visibilityIndicatorClass:"sayt-display-detect",minChars:a});
jQuery("#search").devbridgeAutocomplete(b);
jQuery(".autocomplete-suggestions-wrapper").hide();
$(".if6_main").on("click",function(c){if($(c.target).parents("#head_ftsearch").length===0){jQuery(".sayt-results").hide();
jQuery("#search").devbridgeAutocomplete().hide()
}})
});
$(function(){$(".if6_main").on("click","div.helptxt",function(){if($(this).closest(".no-if6-changes").length<=0&&$(this).children().length<=0){var h=this.getAttribute("title");
if(h){$(this).html('<div title=""><div>'+h+"</div></div>")
}}if($(this).children().length<=0){return
}var g=$(this).hasClass("visible");
$("div.helptxt.visible").removeClass("visible");
if(!g){$(this).addClass("visible");
var b=$(this).parents(".if6_inner");
var e=b.offset().left+b.innerWidth();
var d=$(this).find("div div");
if(d&&d.length>0){d.css({width:"",left:""});
var a=d.innerWidth();
var f=d.innerHeight();
if(f>a){d.css({width:b.innerWidth()})
}var c=d.offset().left+d.innerWidth();
if(c>e){d.css({left:(e-c)})
}}}})
});
$(function(){$("a").each(function(){var a=this.getAttribute("href");
if(!a||a.charAt(0)!=="/"){return
}var b=a.indexOf("lightbox=");
if(b<=0||("?"!==a.charAt(b-1)&&"&"!==a.charAt(b-1))){return
}$(this).click(function(){return overlayShow(this)
})
})
});
$(document).on("if6_page_ready",function(){$(".if6_lightbox .if6_inner").not(this.closeIconPosition).each(function(){this.closeIconPosition=true
}).scroll(function(){var a=$(this).scrollTop();
$(this).children(".close-icon").css({marginTop:a})
})
});
function overlayShow(i){var a=i.getAttribute("href");
if(a.charAt(0)!=="/"){return false
}var j=getQueryParamValue(a,"lightbox");
j=decodeURIComponent(j);
var h=j.split("?")[1];
j=j.split("?")[0];
var b=j.replace(/\//g,"_");
var e;
if($("#"+b).length<=0){var f=a.split("?")[0];
var c=f.indexOf(".webview.html")>-1?".webview":"";
var d=a.indexOf("isVP=true")==-1?"/jcr:content/section/section":"";
var g=a.indexOf("isVP=true")==-1||!h?"":"?"+h;
jQuery.ajax({url:j+d+c+".html"+g,timeout:20000}).done(function(k){IF6.lightbox_fragments[j]=k;
e='<div id="'+b+'" class="if6_outer if6_lightbox lightbox-visible"><div class="if6_inner"><a href="#" title="'+IF6_lightbox_closeicon_text+'" class="close-icon" onclick="return overlayClose(this);">'+IF6_lightbox_closeicon_text+"</a>"+IF6.lightbox_fragments[j]+"</div></div>";
$(".if6_main").append(e);
$(document).trigger("if6_page_ready")
}).fail(function(){window.location.href=a
})
}else{$("#"+b).addClass("lightbox-visible")
}return false
}function overlayClose(a){$(a).parents(".if6_lightbox").removeClass("lightbox-visible");
return false
}function getQueryParamValue(b,a){var d=b.split("?")[1];
if(d!==undefined){var e=d.split("&");
var c,f;
for(c=0;
c<e.length;
c++){f=e[c].split("=");
if(f[0]===a){return f[1]
}}}return false
}$(window).scroll(function(){var a=$(".if6_iconbar");
if(!a||!a.length){return
}var b=window.pageYOffset;
if(b<a.offset().top){a.removeClass("iconbar-fixed")
}else{a.addClass("iconbar-fixed")
}});
$(window).scroll(function(){if(IF6.last_scroll_pos!==window.pageYOffset){if($("body").hasClass("navigation_visible")||$("body").hasClass("contact_visible")||$(".lightbox-visible").length>0){$("html,body").scrollTop(IF6.last_scroll_pos)
}else{IF6.last_scroll_pos=window.pageYOffset
}}}).on("load",function(){$(window).scroll()
});
$(document).on("if6_page_ready",function(){$('input[type="date"]').not(function(){return($(this).closest(".no-if6-changes").length>0)
}).each(function(){if(this.type!=="date"){var a=/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec(this.value);
if(a){this.value=a[3]+"."+a[2]+"."+a[1]
}}else{$(this).addClass("working-date")
}})
});
(function(a){a.instantResults=function(c,j){var b={visibilityIndicatorClass:"show-instant-results",containerClass:"sayt-container",containerId:"sayt-container",resultsClass:"sayt-results",loadingText:a("#head_ftsearch").attr("data-instantresults_loadingText"),resultsHeadline:a("#head_ftsearch").attr("data-instantresults_resultsHeadline"),minChars:3};
var e=this;
e.settings={};
var g=a(c);
var i=0;
var f="";
var h=function(k){return String(k).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
};
e.reset=function(){f=""
};
var d=function(){g.on("input propertychange keyup focus",function(p){if(p.type==="keyup"){var m=p.keyCode||p.which;
if(m===13||m===27){return
}}var l=a(this);
var o=l.parent();
var k=a("#"+e.settings.containerId,o);
var n=a("."+e.settings.visibilityIndicatorClass,o);
if(n.is(":visible")){if(l.val().length>=e.settings.minChars){if(f!==l.val()){jQuery.ajax({url:l.closest("form").attr("action").replace(/\.html/,".sayt.json"),dataType:"json",data:{q:l.val(),seq:++i,_charset_:"UTF-8"},success:function(u){if(u.seq===i){if(u.results.length>0){var q=[];
a.each(u.results,function(v,x){var w='<li class="searchresult-item" id="sayt-'+v+'">';
if(x.url){if(x.title){w+="<h3>"+h(x.title)+"</h3>"
}if(x.descr){w+="<p>"+h(x.descr)+"</p>"
}w+='<a href="'+x.url+'"';
if(x.target){w+=' target="'+x.target+'"'
}if(x.elevated){w+=' data-elevated="'+h(x.elevated)+'"'
}if(x.url){w+=' data-externalizedUrl="'+h(x.externalizedUrl)+'"'
}if(x.externalId){w+=' data-externalId="'+h(x.externalId)+'"'
}w+=">";
w+="</a>"
}w+="</li>";
q.push(w)
});
if(a("."+e.settings.resultsClass,o).length===0){a("."+e.settings.containerClass,o).append('<div class="'+e.settings.resultsClass+'">'+e.settings.loadingText+"</div>")
}var s=a("<div/>").text(u.q).html();
k.addClass("with-sayt-results");
a("."+e.settings.resultsClass,o).html("").append("<h3>"+e.settings.resultsHeadline.replace(/\%/,s)+"</h3>");
a("<ul/>",{"class":"sayt-resultlist",html:q.join("")}).appendTo(a("."+e.settings.resultsClass,o));
a("<div/>",{"class":"sayt-all",html:'<a href="#" onclick=$(this).closest(\'form\').submit();return false;">'+a("#head_ftsearch").attr("data-instantresults_showAllResults")+"</a>"}).appendTo(a("."+e.settings.resultsClass,o));
var r=[];
var t;
a(".sayt-resultlist a",o).each(function(){t={externalId:this.getAttribute("data-externalId"),externalizedUrl:this.getAttribute("data-externalizedUrl"),elevated:this.getAttribute("data-elevated")};
r.push(t)
});
a(".sayt-resultlist a",o).click(function(){a.ajax({url:a(this).attr("href").replace(/(?:\.html)?(?:\?[\S ]*)?$/,"")+".searchresultclick.json",cache:false,data:{resultType:"SAYT",numResults:a(".sayt-resultlist a").length,results:JSON.stringify(r),queryId:a(this).closest("ul.searchresult-items").attr("data-queryId"),q:l.val(),_charset_:"UTF-8"},timeout:500,async:false,dataType:"json"})
})
}else{k.removeClass("with-sayt-results");
a("."+e.settings.resultsClass,o).remove()
}}}})
}}else{a("."+e.settings.resultsClass,o).remove()
}f=l.val()
}})
};
e.init=function(){e.settings=a.extend({},b,j);
g.after('<div id="'+e.settings.containerId+'" class="'+e.settings.containerClass+'"/>');
g.after('<div class="'+e.settings.visibilityIndicatorClass+'"/>');
d()
};
e.init()
};
a.fn.instantResults=function(b){this.each(function(){if(undefined===a(this).data("instantResults")){var c=new a.instantResults(this,b);
a(this).data("instantResults",c)
}});
return this
}
}(jQuery));
$(function(){$(".carousel,.if6_openerstage").on("swiperight",function(){$(this).trigger("carousel-prev",false)
}).on("swipeleft",function(){$(this).trigger("carousel-next",false)
}).on("carousel-next",function(g,j){if(this.animated){return
}this.animated=true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var f=this,h=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var e,b,a=parseInt($(h[0]).css("width"),10),c,d;
$(this).find(".carousel_play li.active").removeClass("active");
for(e=h.length-1;
e>=0;
--e){d=$(h[e]).position().left;
if(d<0){d+=h.length*a;
$(h[e]).css({left:d+"px"})
}c=d-a;
if(c>=0&&c<a){c=0
}if(0===c){b=".carousel_play li:nth-child("+(e+1)+")";
$(h[e]).animate({left:c+"px"},500,"easeInOutExpo",function(){$(f).find(b).addClass("active");
f.animated=false
})
}else{$(h[e]).animate({left:c+"px"},500,"easeInOutExpo")
}}if(j){this.carouseltimer=window.setTimeout(function(){$(f).trigger("carousel-auto-next")
},10000)
}}).on("carousel-prev",function(g,j){if(this.animated){return
}this.animated=true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var f=this,h=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var e,b,a=parseInt($(h[0]).css("width"),10),c,d;
$(this).find(".carousel_play li.active").removeClass("active");
for(e=0;
e<h.length;
++e){d=$(h[e]).position().left;
c=d+a;
if(c>(h.length-1)*a){$(h[e]).css({left:(-a)+"px"});
c=0
}if(0===c){b=".carousel_play li:nth-child("+(e+1)+")";
$(h[e]).animate({left:c+"px"},500,"easeInOutExpo",function(){$(f).find(b).addClass("active");
f.animated=false
})
}else{$(h[e]).animate({left:c+"px"},500,"easeInOutExpo")
}}if(j){this.carouseltimer=window.setTimeout(function(){$(f).trigger("carousel-auto-prev")
},10000)
}}).on("carousel-auto-next",function(){if(!$("body").hasClass("cq-wcm-edit")){$(this).trigger("carousel-next",true)
}}).on("carousel-auto-prev",function(){if(!$("body").hasClass("cq-wcm-edit")){$(this).trigger("carousel-prev",true)
}}).on("carousel-select",function(g,k){if(this.animated){return
}this.animated=true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var f=this,j=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var e,b,a=parseInt($(j[0]).css("width"),10),c,d;
$(this).find(".carousel_play li.active").removeClass("active");
if(isNaN(k)||k<0||k>=j.length){return
}for(e=0;
e<j.length-1;
++e){if(0===$(j[e]).position().left){b=e;
break
}}for(e=0;
e<b;
++e){d=$(j[e]).position().left;
if(d>0){c=d-j.length*a;
$(j[e]).css({left:c+"px"})
}}for(e=b+1;
e<j.length;
++e){d=$(j[e]).position().left;
if(d<0){c=d+j.length*a;
$(j[e]).css({left:c+"px"})
}}var h=$(j[k]).position().left;
for(e=0;
e<j.length;
++e){d=$(j[e]).position().left;
c=d-h;
if(0===c){b=".carousel_play li:nth-child("+(e+1)+")";
$(j[e]).animate({left:c+"px"},500,"easeInOutExpo",function(){$(f).find(b).addClass("active");
f.animated=false
})
}else{$(j[e]).animate({left:c+"px"},500,"easeInOutExpo")
}}})
});
$(document).on("if6_page_ready",function(){$("a.chatlink").not(function(){if($(this).closest(".no-if6-changes").length>0){return true
}var a=this.click_added;
this.click_added=true;
return a
}).click(function(){if(this.href&&this.target){var a=window.innerWidth;
var b=this.href;
if($(this).hasClass("alt_chat")&&a<1000){if(a<650){this.href=b.replace("egt=DSK","egt=SPH")
}else{this.href=b.replace("egt=DSK","egt=PAD")
}}var c=window.open(this.href,this.target,"width=375,height=655,scrollbars=yes,resizable=yes,toolbar=no,status=no,menubar=no");
if(c){c.focus()
}return false
}return true
})
});
$(document).on("if6_page_ready",function(){$(".bline input[data-sayt]").not(function(){return this.previousSibling&&$(this.previousSibling).hasClass("bsayt")
}).keyup(function(){if(!this.previousSibling||!$(this.previousSibling).hasClass("bsayt")){return
}$(this.previousSibling).hide();
if(this.value.length<3){return
}var d=IF[this.getAttribute("data-sayt")];
var a,c="",b=this.value.toLowerCase();
for(a=0;
a<d.length;
++a){if(d[a].cmp.indexOf(b)<0){continue
}c+="<li><h3>"+d[a].value+"</h3>";
if(d[a].add){c+="<p>"+d[a].add+"</p>"
}c+='<div><input type="submit" name="'+d[a].name+'" value="'+d[a].value+'" /></div></li>'
}if(""===c){return
}$(this.previousSibling).html("<div><ul>"+c+"</ul></div>").css({display:"inline-block"})
}).before(function(){var b,c,a=this.getAttribute("data-sayt");
if(!a||!a.length||!IF[a]||!IF[a].length){return
}c=IF[a];
for(b=0;
b<c.length;
++b){c[b].cmp=c[b].value.toLowerCase()
}return'<div class="bsayt '+this.getAttribute("class")+'"></div>'
}).blur(function(){if(!this.previousSibling||!$(this.previousSibling).hasClass("bsayt")){return
}var a=$(this.previousSibling);
window.setTimeout(function(){a.hide()
},300)
}).focus(function(){$(this).trigger("keyup")
})
});
$(function(){$("table.has-action-column").each(function(){$(this).find("td:last-child").each(function(){if($(this).find(".ficon.rank5").length){return
}var b=$(this).find(".ficon.rank3,.ficon.rank4").clone();
if(1===b.length){$(this).find(".ficon.rank3,.ficon.rank4").removeClass("rank3 rank4")
}else{if(b.length>1){var a='<div class="bpulldown baction"><span class="ficon icon-if5_i_aktionen"></span><div><div><ul></ul></div></div></div>';
$(this).append(a);
$(this).find(".bpulldown div div ul").append(b);
$(this).find(".bpulldown div div ul .ficon").wrap("<li></li>");
$(this).find(".bpulldown>span").not(function(){var c=this.click_added;
this.click_added=true;
return c
}).click(function(){var c=$(this).closest(".bpulldown").hasClass("pulldown_visible");
$(".bpulldown").removeClass("pulldown_visible");
if(!c){$(this).closest(".bpulldown").addClass("pulldown_visible")
}})
}}})
})
});
function editTeaserRef(a){var b=jQuery(a.el.dom).children("div").eq(0).attr("ref");
if(b!=="."){window.location.href=(b+".html?origin="+window.location.href)
}}$(function(){$("#head_ftsearch").on("submit",function(){var a=$("#search",$(this));
a.val(a.val().trim());
if(a.val()===""){return false
}})
});
$(window).resize(function(){var m=$(".if6_openerstage").get(0);
if(m&&m.carouseltimer){window.clearTimeout(m.carouseltimer);
m.carouseltimer=null
}var g=$(".if6_opener:visible .opener_image");
var p=$(".if6_opener:visible");
var k,l,o=g.css("position");
var d=$(".if6_iconbar").height();
g.removeClass("img-landscape");
var q=g.toArray(),f;
var c=p.toArray();
l=$(q[0]).find("img[src]").height()||0;
for(k=0;
k<q.length;
++k){f=$(q[k]).find("img[src]").height()||0;
if(f>0&&f<l){l=f
}}if(!l){l=null
}for(k=0;
k<q.length;
++k){if(o!=="relative"){$(c[k]).height(l);
$(q[k]).height("auto")
}else{$(c[k]).height("auto");
$(q[k]).height(l)
}}if(l>=window.innerHeight-d){g.addClass("img-landscape")
}var b=$(".if6_opener:visible").toArray();
if(b.length>1){var s,e=$(b[0]).width(),a='<div class="carousel_play"><div><span class="left" onclick="$(this).trigger(\'carousel-prev\',false);"></span><ul><li class="active" onclick="$(this).trigger(\'carousel-select\',0);"></li>';
l=0;
$(b[0]).css({left:0});
for(k=1;
k<b.length;
++k){s=$(b[k-1]).height();
if(s>l){l=s
}a+="<li onclick=\"$(this).trigger('carousel-select',"+k+');"></li>';
$(b[k]).css({left:(k*e)+"px",marginTop:-s+"px"})
}s=$(b[b.length-1]).height();
if(s>l){l=s
}a+='</ul><span class="right" onclick="$(this).trigger(\'carousel-next\',false);"></span></div></div>';
$(".if6_openerstage .if6_inner").height(l);
var j=$(".if6_openerstage .carousel_play");
if(j.length>0){j.replaceWith(a)
}else{$(b[b.length-1]).after(a)
}if(m&&m.carouseltimer){window.clearTimeout(m.carouseltimer)
}m.carouseltimer=window.setTimeout(function(){$(m).trigger("carousel-auto-next")
},10000);
if(o==="relative"){var h=$(b[0]).find(".opener_image").height();
var n=h-$(".if6_openerstage .carousel_play").height();
$(".if6_openerstage .carousel_play").css({top:n+"px"})
}else{$(".if6_openerstage .carousel_play").css({top:"auto"})
}}});
$(function(){$("body").on("initNavigation",function(b){var a=$(".if6_navigation li.active>div").length;
$(".if6_navigation>div>div").css("left",-a*$(".if6_navigation>div>div").width());
$(".if6_navigation>span").click(function(){var c=$("body").hasClass("navigation_visible");
if(!c){$(".if6_navigation>div").scrollTop(0);
$(".if6_navigation div div div").removeClass("navvisible");
$(".if6_navigation li.active>div").addClass("navvisible");
var d=$(".if6_navigation li.active>div").length;
$(".if6_navigation>div>div").css("left",-d*$(".if6_navigation>div>div").width())
}$("body").toggleClass("navigation_visible")
});
$("body").on("swipeleft",function(){if($("body").hasClass("navigation_visible")){$("body").removeClass("navigation_visible")
}});
$(".if6_navigation li a+div").prevAll().click(function(){$(this.parentNode.parentNode).children("li").children("div").removeClass("navvisible");
$(this.parentNode).children("div").addClass("navvisible");
var c=$(".if6_navigation>div>div").offset().left;
c-=$(".if6_navigation>div>div").width();
$(".if6_navigation>div>div").css("left",c);
$(".if6_navigation>div").scrollTop(0);
return false
});
$(".if6_navigation .navtop").click(function(){$(".if6_navigation>div>div").css("left",0);
$(".if6_navigation>div").scrollTop(0);
return false
});
$(".if6_navigation a.navback").click(function(){var c=$(".if6_navigation>div>div").offset().left;
c+=$(".if6_navigation>div>div").width();
$(".if6_navigation>div>div").css("left",c);
$(".if6_navigation>div").scrollTop(0);
return false
})
});
$("body").trigger("initNavigation")
});
$(function(){$(".if6_langselect>div>span").on("click",function(){$("body").toggleClass("langselect_visible")
})
});
$(function(){$(".if6_contact>span").click(function(){$("body").toggleClass("contact_visible")
});
$("body").on("swiperight",function(){if($("body").hasClass("contact_visible")){$("body").removeClass("contact_visible")
}})
});
$(window).resize(function(){var b,c,d,a=$(".if6_section:visible .if6_inner>h6").toArray();
$(".if6_pagenav").remove();
$(".pagenavcurrent").remove();
if(a.length<2){return
}c='<div class="if6_outer if6_pagenav"><div class="if6_inner"><ul class="pagenav'+(a.length>4?" pagenav-five":"")+'">';
for(b=0;
b<a.length&&b<5;
++b){c+="<li><div><div>"+a[b].innerHTML+"</div></div></li>"
}c+="</ul></div></div>";
d=$(".if6_breadcrumb");
if(!d||!d.length){d=$(".if6_section:visible").first()
}if(d&&d.length){d.before(c)
}$(".iconbar").append('<div class="pagenavcurrent"></div>');
$(".iconbar .pagenavcurrent").click(function(){if(!$("body").hasClass("pagenav_visible")){$(".if6_pagenav").removeClass("more-left");
var e=$(".if6_pagenav .pagenav");
e.scrollLeft(0);
e=e.get(0);
if(e){if(e.clientWidth<e.scrollWidth){$(".if6_pagenav").addClass("more-right")
}else{$(".if6_pagenav").removeClass("more-right")
}}}$("body").toggleClass("pagenav_visible")
});
$(".if6_pagenav .pagenav").scroll(function(){var e=this;
if(e.if6_pagenavScrollTimeout){window.clearTimeout(e.if6_pagenavScrollTimeout)
}e.if6_pagenavScrollTimeout=window.setTimeout(function(){var f=$(e).scrollLeft();
if(f>0){$(".if6_pagenav").addClass("more-left")
}else{$(".if6_pagenav").removeClass("more-left")
}if(f+e.clientWidth<e.scrollWidth){$(".if6_pagenav").addClass("more-right")
}else{$(".if6_pagenav").removeClass("more-right")
}},200)
});
$(window).scroll();
$(".if6_pagenav .pagenav li").click(function(){var g=$(this).prevAll().length;
var f=$(".if6_section:visible .if6_inner>h6").parent().parent().toArray();
var e=($(".if6_iconbar .iconbar").css("display")!=="none")?$(".if6_iconbar .iconbar").height():$(".if6_pagenav").height();
var h=Math.ceil($(f[g]).offset().top-e+parseInt($(f[g]).css("marginTop"),10)+3);
$("html,body").animate({scrollTop:h},750,"easeInOutExpo");
$("body").removeClass("pagenav_visible")
})
});
function pagenav_scroll(){var d=$(".if6_pagenav");
if(!d||!d.length){return
}var h=window.pageYOffset;
var f=$(".if6_iconbar .iconbar").css("display")!=="none";
if(f){if($(".if6_iconbar").hasClass("iconbar-fixed")){d.addClass("nav-fixed")
}else{d.removeClass("nav-fixed")
}}else{if(h<d.offset().top){d.removeClass("nav-fixed")
}else{d.addClass("nav-fixed")
}}if(h<d.offset().top){$(".if6_pagenav .pagenav li,.iconbar .pagenavcurrent").removeClass("active");
$(".iconbar .pagenavcurrent").html($(".if6_section:visible .if6_inner>h6").first().html())
}else{var c,b=$(".if6_section:visible .if6_inner>h6").parent().parent().toArray();
if(f){h+=$(".if6_iconbar .iconbar").height()
}else{h+=d.height()
}var e,a,g;
for(c=0;
c<b.length;
++c){e=$(b[c]).offset().top;
a=$(b[c]).height()+(c+1<b.length?2*parseInt($(b[c+1]).css("marginTop"),10):0);
if(!c&&$(".if6_section:visible:first-child .if6_inner h6").length){g=$(".if6_breadcrumb");
if(g&&g.length){e-=g.height();
a+=g.height()
}}if(h>=e&&h<e+a){break
}}if(c<b.length){c++;
if(!$(".if6_pagenav .pagenav li:nth-child("+c+")").hasClass("active")){$(".if6_pagenav .pagenav li").removeClass("active");
$(".if6_pagenav .pagenav li:nth-child("+c+"), .iconbar .pagenavcurrent").addClass("active");
$(".iconbar .pagenavcurrent").html($(".if6_section:visible .if6_inner>h6").eq(c-1).html())
}}else{$(".if6_pagenav .pagenav li, .iconbar .pagenavcurrent").removeClass("active");
$(".iconbar .pagenavcurrent").html($(".if6_section:visible .if6_inner>h6").first().html())
}}}$(window).scroll(function(){pagenav_scroll();
if(IF6.pagenavScrollTimeout){window.clearTimeout(IF6.pagenavScrollTimeout)
}IF6.pagenavScrollTimeout=window.setTimeout(pagenav_scroll,200)
});
$(window).on("resize",function(){var g,e;
if($("body").hasClass("templ-bankingstartpage")||$("body").hasClass("templ-bankingpage")){g=$(".templ-bankingstartpage .cbox-small:visible").toArray();
if(g&&g.length>0){var c=$(g[0]).prevAll(".cbox-medium:visible").last();
if(c&&c.length>0){var n=$(g[0]).position();
if(n.left-c.position().left<30){$(".cbox-small").css({marginTop:""})
}else{$(g[0]).css({marginTop:c.position().top-n.top-parseInt($(g[0]).css("borderTopWidth"),10)});
var o,l;
for(e=1;
e<g.length;
++e){l=$(g[e]).position();
if(n.left!==l.left){break
}o=parseInt($(g[e-1]).css("height"),10);
n.top+=parseInt($(g[e-1]).css("marginTop"),10);
n.top+=parseInt($(g[e-1]).css("marginBottom"),10);
if(l.top<=n.top+o){break
}$(g[e]).css({marginTop:n.top+o-l.top-parseInt($(g[e]).css("borderTopWidth"),10)});
n=l
}}}}return
}g=$(".if6_section .cbox:visible").not(".carousel .cbox-large:visible").toArray();
for(e=0;
e<g.length;
++e){$(g[e]).height("auto")
}var d,a,m,h,f,k,b;
for(e=0;
e<g.length;
++e){a=e;
m=true;
h=parseInt($(g[a]).css("height"),10);
while(m){m=false;
f=$(g[a]).offset().top;
for(d=a+1;
d<g.length;
++d){k=$(g[d]).offset().top;
if(k>f){e=d-1;
break
}b=parseInt($(g[d]).css("height"),10);
if(b>h){h=b;
m=true;
break
}if(a+1===d){$(g[d-1]).css("height",h)
}$(g[d]).css("height",h)
}}}});
$(document).on("if6_page_ready",function(){function b(i){var k,j;
if(i.tagName==="TH"){k=i.innerHTML;
k=k.replace(/&nbsp;/g," ");
k=k.replace(/&shy;/g,"");
k=k.replace(/<div class="ficon.*div>/g,"");
k=k.replace(/<wbr><u class="wbr"><\/u>/g,"");
k=k.replace(/<\/?em>/g,"");
k=k.replace(/\n/g,"");
k=k.replace(/^\s*/,"");
k=k.replace(/\s*$/,"");
k=k.replace(/\s*<br *\/?>\s*$/,"");
k=k.replace(/\s*<br *\/?>\s*/g,"\x0A");
j=k.split("\x0A").length;
return{header:k,cnt:j}
}return null
}var f,d,c,e=$(".table table,table.kkivergleich,table.autoheader").toArray(),g,h,a;
for(f=0;
f<e.length;
++f){if(!e[f].rows||!e[f].rows[0]){continue
}g=[];
h=$(e[f]).hasClass("autoheader");
a=$(e[f]).hasClass("has-checkbox-column");
for(d=0;
d<e[f].rows[0].cells.length;
++d){g[d]=b(e[f].rows[0].cells[d])
}for(c=1;
c<e[f].rows.length;
++c){for(d=0;
d<e[f].rows[c].cells.length;
++d){if(0===d&&a){continue
}if(h&&e[f].rows[c].cells[d].tagName==="TH"){g[d]=b(e[f].rows[c].cells[d])
}else{if(e[f].rows[c].cells[d].tagName==="TD"&&d<g.length&&g[d]){e[f].rows[c].cells[d].setAttribute("data-header",g[d].header);
if(g[d].cnt>1){$(e[f].rows[c].cells[d]).addClass("lines-"+g[d].cnt)
}}}}}}});
$(window).resize(function(){$(".carousel").each(function(){if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}$(this).find(".cbox:visible").height("auto");
var b=$(this).find(".cbox:visible").toArray();
if(b.length>0){$(this).removeClass("carousel-empty");
var d,c=0;
var a,e=parseInt($(b[0]).css("width"),10),g='<div class="carousel_play"><div><span class="left" onclick="$(this).trigger(\'carousel-prev\',false);"></span><ul><li class="active" onclick="$(this).trigger(\'carousel-select\',0);"></li>';
var f=this;
for(d=0;
d<b.length;
++d){a=parseInt($(b[d]).css("height"),10);
if(a>c){c=a
}}$(b[0]).css({left:0,marginTop:0});
for(d=1;
d<b.length;
++d){g+="<li onclick=\"$(this).trigger('carousel-select',"+d+');"></li>';
$(b[d]).css({left:(d*e)+"px",marginTop:-(c+parseInt($(b[d]).css("marginBottom"),10))+"px"})
}g+='</ul><span class="right" onclick="$(this).trigger(\'carousel-next\',false);"></span></div></div>';
$(this).find(".cbox:visible").css({height:c+"px"});
var h=$(this).find(".carousel_play");
if(b.length>1){if(h&&h.length>0){h.replaceWith(g)
}else{$(b[b.length-1]).after(g)
}h=$(this).find(".carousel_play");
$(this).height(c+parseInt($(h).css("height"),10));
this.carouseltimer=window.setTimeout(function(){$(f).trigger("carousel-auto-next")
},10000)
}else{if(h){h.remove()
}$(this).height(c)
}}else{$(this).find(".carousel_play").remove();
$(this).height("auto");
$(this).addClass("carousel-empty")
}})
});
$(document).on("if6_page_ready",function(){$(".accordion .accordion-head.initial-open").not(".initial-invisible").addClass("open").removeClass("initial-open").next(".parsys").fadeIn(0);
$(".accordion .accordion-head").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).toggleClass("open");
if($(this).hasClass("open")){$(this).nextAll(".parsys").fadeIn("slow");
$(window).resize()
}else{$(this).nextAll(".parsys").fadeOut("slow")
}return false
});
$(".accordion .showall").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head").not(".open").click();
$(this).closest(".accordion").find(".showmore").click();
return false
});
$(".accordion .hideall").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head.open").click();
return false
});
$(".accordion .showmore").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head.initial-invisible").fadeIn("slow");
$(this).closest(".accordion").find(".accordion-head.initial-invisible.initial-open").addClass("open").removeClass("initial-open").next(".parsys").fadeIn("slow");
$(this).remove();
return false
})
});
$(window).load(function(){function a(i){if(i.content){var l=i.content;
if(l.charAt(0)==='"'||l.charAt(0)==="'"){l=l.substr(1,l.length-2)
}if(0===l.length){return -1
}if(1===l.length){return l.charCodeAt(0)
}if("\\"===l.charAt(0)){return parseInt(l.substr(1),16)
}}return -1
}function d(l){if(l.font){var i=/^(\d+)px.*Pictos/.exec(l.font);
if(i){return parseInt(i[1],10)
}}return -1
}function k(m){if(m.color){var i=m.color;
var l=/rgb\((\d+), *(\d+), *(\d+)\)/.exec(i);
if(l){i="000000"+Number((parseInt(l[1],10)*256+parseInt(l[2],10))*256+parseInt(l[3],10)).toString(16);
i=i.substr(i.length-6)
}else{if("#"===i.charAt(0)){i=i.substr(1)
}else{i="000000"
}}return i.toLowerCase()
}return null
}function j(i,s,p,l,u,o,m){var n,w,r,q,v="";
if(o>0&&m>=0){n=-(o*(m%16));
var x=[2,3,6,7,13,3936,3937,3938,3939,3952,3953,3954,3955,3956,3957,3958,3959,3960,3961,3962];
for(r=0;
r<x.length;
++r){if(x[r]===Math.floor(m/16)){w=-(r*o);
w+=o/50;
break
}}if(r>=x.length){return
}v+="background-position:"+n+"px "+w+"px;"
}q=k(l);
if(q){v+="background-image:url(internetfiliale/fonts/pictos-if-"+q+".png);"
}if(u>0){v+="background-size:"+(16*u)+"px auto;";
v+="background-repeat:no-repeat;";
v+='content:"\\a0" !important;';
if(!l.height){v+="height:"+o+"px;"
}if(!l.width){v+="width:"+o+"px;"
}}if(i.insertRule){try{i.insertRule(p+"{"+v+"}",s<0||s>i.cssRules.length?i.cssRules.length:s)
}catch(t){}}else{if(i.addRule){try{i.addRule(p,v,s<0||s>i.cssRules.length?i.cssRules.length:s)
}catch(t){}}}}IF6.iconsFixedUsage={};
IF6.iconsVariableUsage={};
IF6.iconsVariableUsageList=[];
function b(i,m){var q,p,u,o,s,n,t,l,r;
u=i.cssRules||i.rules;
for(q=0;
q<u.length;
++q){if(u[q].type===4){b(u[q],"media");
continue
}if(!u[q].style){continue
}if(!u[q].selectorText){continue
}o=u[q].selectorText.split(",");
for(p=0;
p<o.length;
++p){if(o[p].indexOf(".no-iconfont")>=0||o[p].indexOf(".iconfonttest")>=0){continue
}n=o[p];
n=n.replace(/:+(before|after)$/,"");
n=n.replace(/^\s+/,"");
if(n.indexOf(":hover")>=0){r=".no-iconfont";
if(n.indexOf(".no-touch")>=0){n=n.replace(/.no-touch /,"")
}else{r+=" "
}n=n.replace(/:+hover/,"");
if(IF6.iconsFixedUsage[n]){j(i,q+1,r+(o[p].replace(/^\s+/,"")),u[q].style,-1,-1,-1)
}if(IF6.iconsVariableUsage[n]){j(i,q+1,r+(o[p].replace(/^\s+/,"")),u[q].style,-1,-1,-1)
}continue
}t=d(u[q].style);
l=a(u[q].style);
if(t<0){continue
}if(l<0&&IF6.iconsFixedUsage[n]){l=a(IF6.iconsFixedUsage[n])
}if(l<0){if(!IF6.iconsVariableUsage[n+m]){IF6.iconsVariableUsage[n+m]=IF6.iconsVariableUsageList.length;
IF6.iconsVariableUsageList.push({fontsize:t,media:m,stylesheet:i,sel:n})
}}else{if(!IF6.iconsFixedUsage[n]){IF6.iconsFixedUsage[n]=u[q].style
}}j(i,q+1,".no-iconfont "+o[p],u[q].style,t,t,l)
}}}function c(){var t,s,q,o,w,p,u,n,r,v,l;
for(t=0;
t<document.styleSheets.length;
++t){b(document.styleSheets[t],"")
}for(t=0;
t<document.styleSheets.length;
++t){w=document.styleSheets[t].cssRules||document.styleSheets[t].rules;
for(s=0;
s<w.length;
++s){if(!w[s].style){continue
}if(!w[s].selectorText){continue
}p=w[s].selectorText.split(",");
for(q=0;
q<p.length;
++q){if(0!==p[q].indexOf(".icon-")){continue
}l=a(w[s].style);
if(l>=0){r=p[q];
r=r.replace(/:+(before|after)$/,"");
r=r.replace(/^(\s+)/,"");
if($(r).length<=0){continue
}for(o=0;
o<IF6.iconsVariableUsageList.length;
++o){n=r;
if(".actioniconLink"===IF6.iconsVariableUsageList[o].sel){n=IF6.iconsVariableUsageList[o].sel
}else{if(IF6.iconsVariableUsageList[o].fontsize===IF6.iconsVariableUsageList[IF6.iconsVariableUsage[".actioniconLink"]].fontsize){continue
}}if(n===IF6.iconsVariableUsageList[o].sel){n=".no-iconfont "+p[q]
}else{if($(IF6.iconsVariableUsageList[o].sel+r).length<=0){continue
}n=".no-iconfont "+IF6.iconsVariableUsageList[o].sel+p[q]
}j(IF6.iconsVariableUsageList[o].stylesheet,""===IF6.iconsVariableUsageList[o].media?s+1:-1,n,w[s].style,-1,IF6.iconsVariableUsageList[o].fontsize,l)
}}}}}}function h(m){var n,l,i,o;
o=m.cssRules||m.rules;
n=/^(.*\/)81%(.*Pictos.*)$/;
for(i=0;
i<o.length;
++i){if(o[i].type===4){h(o[i]);
continue
}if(!o[i].style){continue
}if(!o[i].selectorText){continue
}if(!o[i].style.font){continue
}if(o[i].selectorText.indexOf(":before")<0&&o[i].selectorText.indexOf("after")<0){continue
}l=n.exec(o[i].style.font);
if(l){o[i].style.font=l[1]+"65%"+l[2]
}}}var g=$(".iconfonttest span+span").width();
if(g>0&&g<20){c();
$("html").addClass("no-iconfont")
}else{var e,f=$(".iconfonttest").children().toArray();
if(2===f.length){if($(f[0]).height()!==$(f[1]).height()){for(e=0;
e<document.styleSheets.length;
++e){h(document.styleSheets[e])
}}}}$(".iconfonttest").remove()
});
$(function(){$("body,.swipe-horizontal").on("touchstart",function(b){if($(this).hasClass("swipe-horizontal")||$(this).hasClass("navigation_visible")||$(this).hasClass("contact_visible")){var a=b.originalEvent||b;
this.firstEvent={ts:Date.now(),x:a.touches[0].pageX,y:a.touches[0].pageY,velocity:0};
this.lastEvent=this.firstEvent
}else{this.lastEvent=null
}}).on("touchmove",function(f){if(!this.lastEvent){return
}var e=f.originalEvent||f;
e={x:e.touches[0].pageX,y:e.touches[0].pageY};
var b=Math.abs(this.firstEvent.x-e.x),g=Math.abs(this.firstEvent.y-e.y);
if((b>9||g>9)&&b<=g){this.lastEvent=null;
return
}var c=Date.now();
var d;
var a=c-this.lastEvent.ts;
if(a>50||!this.lastEvent.velocity){d=Math.abs(this.lastEvent.x-e.x)/a||0
}else{d=this.lastEvent.velocity
}this.lastEvent=e;
this.lastEvent.ts=c;
this.lastEvent.velocity=d;
f.preventDefault()
}).on("touchend",function(a){if(!this.lastEvent){return
}if(this.lastEvent.velocity<0.45){return
}var b=this.firstEvent.x-this.lastEvent.x;
if(b<-50){$(this).trigger("swiperight")
}else{if(b>50){$(this).trigger("swipeleft")
}}})
});