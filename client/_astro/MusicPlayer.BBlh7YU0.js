import{o as Da,a as Pa,i as za}from"./lifecycle.CpGrwxA2.js";import{a2 as Ra,aa as $a,aP as Ia,aQ as Wa,i as Na,u as qa,aR as Ya,as as De,aS as Oa,q as Ka,aT as mt,c as it,d as V,a as N,p as Ua,b as Ha,s as l,az as O,g as t,m as F,f as dt,e as v,h as r,r as i,o as Xa,t as Mt}from"./template.BopZwMnL.js";import{a as Ga,s as X}from"./render.CBwTyhmG.js";import{i as z}from"./if.DgI-gtYW.js";import{e as Qa,i as Va}from"./each.OUGLE5To.js";import{s as q,a as rt,c as Te}from"./attributes.Do_Oav4S.js";import{e as h}from"./utils.DkllL2ii.js";import{b as Me}from"./this.T1LG3Ovl.js";import{I as f}from"./Icon.3LP-C2qC.js";import{m as bt}from"./config.RG7Zm9cy.js";import{I as Ja}from"./zh_TW.Bt2HXwc8.js";import{i as Za}from"./translation.CeGxXIDh.js";import"./clsx.B-dksMZM.js";import"./props.DsdNDwWf.js";const ti=()=>performance.now(),G={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function Pe(){const c=G.now();G.tasks.forEach(n=>{n.c(c)||(G.tasks.delete(n),n.f())}),G.tasks.size!==0&&G.tick(Pe)}function ei(c){let n;return G.tasks.size===0&&G.tick(Pe),{promise:new Promise(w=>{G.tasks.add(n={c,f:w})}),abort(){G.tasks.delete(n)}}}function St(c,n){De(()=>{c.dispatchEvent(new CustomEvent(n))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Se(c){const n={},w=c.split(";");for(const k of w){const[L,A]=k.split(":");if(!L||A===void 0)break;const R=ai(L.trim());n[R]=A.trim()}return n}const ii=c=>c;function ri(c,n,w,k){var L=(c&Ya)!==0,A="both",R,x=n.inert,B=n.style.overflow,d,b;function D(){return De(()=>R??=w()(n,k?.()??{},{direction:A}))}var E={is_global:L,in(){n.inert=x,St(n,"introstart"),d=Jt(n,D(),b,1,()=>{St(n,"introend"),d?.abort(),d=R=void 0,n.style.overflow=B})},out(S){n.inert=!0,St(n,"outrostart"),b=Jt(n,D(),d,0,()=>{St(n,"outroend"),S?.()})},stop:()=>{d?.abort(),b?.abort()}},T=Ra;if((T.transitions??=[]).push(E),Ga){var M=L;if(!M){for(var u=T.parent;u&&(u.f&$a)!==0;)for(;(u=u.parent)&&(u.f&Ia)===0;);M=!u||(u.f&Wa)!==0}M&&Na(()=>{qa(()=>E.in())})}}function Jt(c,n,w,k,L){var A=k===1;if(Oa(n)){var R,x=!1;return Ka(()=>{if(!x){var S=n({direction:A?"in":"out"});R=Jt(c,S,w,k,L)}}),{abort:()=>{x=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(w?.deactivate(),!n?.duration)return L(),{abort:mt,deactivate:mt,reset:mt,t:()=>k};const{delay:B=0,css:d,tick:b,easing:D=ii}=n;var E=[];if(A&&w===void 0&&(b&&b(0,1),d)){var T=Se(d(0,1));E.push(T,T)}var M=()=>1-k,u=c.animate(E,{duration:B,fill:"forwards"});return u.onfinish=()=>{u.cancel();var S=w?.t()??1-k;w?.abort();var g=k-S,J=n.duration*Math.abs(g),Z=[];if(J>0){var $=!1;if(d)for(var p=Math.ceil(J/16.666666666666668),y=0;y<=p;y+=1){var a=S+g*D(y/p),Q=Se(d(a,1-a));Z.push(Q),$||=Q.overflow==="hidden"}$&&(c.style.overflow="hidden"),M=()=>{var U=u.currentTime;return S+g*D(U/J)},b&&ei(()=>{if(u.playState!=="running")return!1;var U=M();return b(U,1-U),!0})}u=c.animate(Z,{duration:J,fill:"forwards"}),u.onfinish=()=>{M=()=>k,b?.(k,1-k),L()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=mt)},deactivate:()=>{L=mt},reset:()=>{k===0&&b?.(1,0)},t:()=>M()}}function je(c){return function(...n){var w=n[0];return w.stopPropagation(),c?.apply(this,n)}}function ni(c){const n=c-1;return n*n*n+1}function si(c,{delay:n=0,duration:w=400,easing:k=ni,axis:L="y"}={}){const A=getComputedStyle(c),R=+A.opacity,x=L==="y"?"height":"width",B=parseFloat(A[x]),d=L==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),D=parseFloat(A[`padding${b[0]}`]),E=parseFloat(A[`padding${b[1]}`]),T=parseFloat(A[`margin${b[0]}`]),M=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),S=parseFloat(A[`border${b[1]}Width`]);return{delay:n,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*R};${x}: ${g*B}px;padding-${d[0]}: ${g*D}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*T}px;margin-${d[1]}: ${g*M}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*S}px;min-${x}: 0`}}var oi=dt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),li=dt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=dt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=dt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=dt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=dt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Ci(c,n){Ha(n,!1);let w=bt.mode??"meting",k=bt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",L=bt.id??"13681647281",A=bt.server??"netease",R=bt.type??"playlist",x=F(!1),B=F(!1),d=F(!1),b=F(!1),D=F(0),E=F(0),T=F(.7),M=F(!1),u=F(!1),S=F(!1),g=F(0),J=F(""),Z=F(!1),$=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),Q=F(),U=F();const ze=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function Re(){if(!k||!L)return;l(u,!0);const s=k.replace(":server",A).replace(":type",R).replace(":id",L).replace(":auth","").replace(":r",Date.now().toString());try{const j=await fetch(s);if(!j.ok)throw new Error("meting api error");const H=await j.json();l(p,H.map(W=>{let vt=W.name??W.title??"未知歌曲",wt=W.artist??W.author??"未知艺术家",I=W.duration??0;return I>1e4&&(I=Math.floor(I/1e3)),(!Number.isFinite(I)||I<=0)&&(I=0),{id:W.id,title:vt,artist:wt,cover:W.pic??"",url:W.url??"",duration:I}})),t(p).length>0&&Dt(t(p)[0]),l(u,!1)}catch{_t("Meting 歌单获取失败"),l(u,!1)}}function $e(){!t(a)||!t($).url||(t(x)?t(a).pause():t(a).play())}function gt(){l(B,!t(B)),t(B)&&(l(b,!1),l(d,!1))}function ht(){l(d,!t(d)),t(d)&&(l(B,!1),l(b,!1))}function Zt(){l(b,!t(b))}function Ie(){l(S,!t(S))}function We(){l(g,(t(g)+1)%3)}function Ne(){if(t(p).length<=1)return;const s=t(y)>0?t(y)-1:t(p).length-1;xt(s)}function jt(){if(t(p).length<=1)return;let s;if(t(S))do s=Math.floor(Math.random()*t(p).length);while(s===t(y)&&t(p).length>1);else s=t(y)<t(p).length-1?t(y)+1:0;xt(s)}function xt(s){if(s<0||s>=t(p).length)return;const j=t(x);l(y,s),t(a)&&t(a).pause(),Dt(t(p)[t(y)]),(j||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function yt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function Dt(s){!s||!t(a)||(l($,{...s}),s.url?(l(u,!0),t(a).pause(),O(a,t(a).currentTime=0),l(D,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",te),t(a).removeEventListener("error",ee),t(a).removeEventListener("loadstart",ae),t(a).addEventListener("loadeddata",te,{once:!0}),t(a).addEventListener("error",ee,{once:!0}),t(a).addEventListener("loadstart",ae,{once:!0}),O(a,t(a).src=yt(s.url)),t(a).load()):l(u,!1))}function te(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(p)[t(y)]&&O(p,t(p)[t(y)].duration=t(E)),O($,t($).duration=t(E)))}function ee(s){l(u,!1),_t(`无法播放 "${t($).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>jt(),1e3):_t("播放列表中没有可用的歌曲")}function ae(){}function _t(s){l(J,s),l(Z,!0),setTimeout(()=>{l(Z,!1)},3e3)}function qe(){l(Z,!1)}function Ye(s){if(!t(a)||!t(Q))return;const j=t(Q).getBoundingClientRect(),W=(s.clientX-j.left)/j.width*t(E);O(a,t(a).currentTime=W),l(D,W)}function Oe(s){if(!t(a)||!t(U))return;const j=t(U).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-j.left)/j.width));l(T,H),O(a,t(a).volume=t(T)),l(M,t(T)===0)}function ie(){t(a)&&(l(M,!t(M)),O(a,t(a).muted=t(M)))}function re(s){if(!Number.isFinite(s)||s<0)return"0:00";const j=Math.floor(s/60),H=Math.floor(s%60);return`${j}:${H.toString().padStart(2,"0")}`}function Ke(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(D,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(S)?jt():l(x,!1)}),t(a).addEventListener("error",s=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Da(()=>{l(a,new Audio),O(a,t(a).volume=t(T)),Ke(),w==="meting"?Re():(l(p,[...ze]),t(p).length>0?Dt(t(p)[0]):_t("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),za();var ne=it(),Ue=V(ne);{var He=s=>{var j=vi(),H=V(j);{var W=e=>{var m=oi(),_=r(m),C=r(_);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=v(C,2),o=r(P,!0);i(P);var et=v(P,2),Lt=r(et);f(Lt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(_),i(m),Mt(()=>X(o,t(J))),h("click",et,qe),N(e,m)};z(H,e=>{t(Z)&&e(W)})}var vt=v(H,2);let wt;var I=r(vt);let se;var Xe=r(I);{var Ge=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=it(),_=V(m);{var C=o=>{var et=li();N(o,et)},P=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}N(e,m)};z(Xe,e=>{t(u)?e(Ge):e(Qe,!1)})}i(I);var nt=v(I,2);let oe;var le=r(nt),Pt=r(le),zt=r(Pt);let ue;var ce=v(zt,2),Ve=r(ce);{var Je=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Ze=e=>{var m=it(),_=V(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}N(e,m)};z(Ve,e=>{t(u)?e(Je):e(Ze,!1)})}i(ce),i(Pt);var Rt=v(Pt,2),$t=r(Rt),ta=r($t,!0);i($t);var de=v($t,2),ea=r(de,!0);i(de),i(Rt);var ve=v(Rt,2),kt=r(ve),aa=r(kt);f(aa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(kt);var It=v(kt,2),ia=r(It);f(ia,{icon:"material-symbols:expand-less",class:"text-lg"}),i(It),i(ve),i(le),i(nt);var Et=v(nt,2);let fe;var Wt=r(Et),Nt=r(Wt),pe=r(Nt);let me;i(Nt);var qt=v(Nt,2),Yt=r(qt),ra=r(Yt,!0);i(Yt);var Ot=v(Yt,2),na=r(Ot,!0);i(Ot);var be=v(Ot,2),sa=r(be);i(be),i(qt);var ge=v(qt,2),Ft=r(ge),oa=r(Ft);f(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Kt=v(Ft,2),la=r(Kt);f(la,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Kt),i(ge),i(Wt);var Ut=v(Wt,2),st=r(Ut),ua=r(st);i(st),Me(st,e=>l(Q,e),()=>t(Q)),i(Ut);var Ht=v(Ut,2),ot=r(Ht);let he;var ca=r(ot);f(ca,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var ft=v(ot,2),da=r(ft);f(da,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(ft);var lt=v(ft,2);let xe;var va=r(lt);{var fa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},pa=e=>{var m=it(),_=V(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}N(e,m)};z(va,e=>{t(u)?e(fa):e(pa,!1)})}i(lt);var pt=v(lt,2),ma=r(pt);f(ma,{icon:"material-symbols:skip-next",class:"text-xl"}),i(pt);var At=v(pt,2);let ye;var ba=r(At);{var ga=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ha=e=>{var m=it(),_=V(m);{var C=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,o=>{t(g)===2?o(C):o(P,!1)},!0)}N(e,m)};z(ba,e=>{t(g)===1?e(ga):e(ha,!1)})}i(At),i(Ht);var _e=v(Ht,2),Ct=r(_e),xa=r(Ct);{var ya=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},_a=e=>{var m=it(),_=V(m);{var C=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,o=>{t(T)<.5?o(C):o(P,!1)},!0)}N(e,m)};z(xa,e=>{t(M)||t(T)===0?e(ya):e(_a,!1)})}i(Ct);var tt=v(Ct,2),wa=r(tt);i(tt),Me(tt,e=>l(U,e),()=>t(U));var Bt=v(tt,2);let we;var ka=r(Bt);f(ka,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Bt),i(_e),i(Et);var Ea=v(Et,2);{var Fa=e=>{var m=di(),_=r(m),C=r(_),P=r(C,!0);i(C);var o=v(C,2),et=r(o);f(et,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(_);var Lt=v(_,2);Qa(Lt,5,()=>t(p),Va,(Xt,ut,K)=>{var at=ci();let ke;var Gt=r(at),Aa=r(Gt);{var Ca=Y=>{f(Y,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ba=Y=>{var Be=it(),Ma=V(Be);{var Sa=ct=>{f(ct,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},ja=ct=>{var Le=ui();Le.textContent=K+1,N(ct,Le)};z(Ma,ct=>{K===t(y)?ct(Sa):ct(ja,!1)},!0)}N(Y,Be)};z(Aa,Y=>{K===t(y)&&t(x)?Y(Ca):Y(Ba,!1)})}i(Gt);var Qt=v(Gt,2),Ee=r(Qt);i(Qt);var Fe=v(Qt,2),Tt=r(Fe);let Ae;var La=r(Tt,!0);i(Tt);var Vt=v(Tt,2);let Ce;var Ta=r(Vt,!0);i(Vt),i(Fe),i(at),Mt(Y=>{ke=q(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,ke,{"bg-[var(--btn-plain-bg)]":K===t(y),"text-[var(--primary)]":K===t(y)}),rt(at,"aria-label",`播放 ${t(ut).title??""} - ${t(ut).artist??""}`),rt(Ee,"src",Y),rt(Ee,"alt",t(ut).title),Ae=q(Tt,1,"font-medium truncate",null,Ae,{"text-[var(--primary)]":K===t(y),"text-90":K!==t(y)}),X(La,t(ut).title),Ce=q(Vt,1,"text-sm text-[var(--content-meta)] truncate",null,Ce,{"text-[var(--primary)]":K===t(y)}),X(Ta,t(ut).artist)},[()=>yt(t(ut).cover)]),h("click",at,()=>xt(K)),h("keydown",at,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),xt(K))}),N(Xt,at)}),i(Lt),i(m),Mt(Xt=>X(P,Xt),[()=>Za(Ja.playlist)]),h("click",o,Zt),ri(3,m,()=>si,()=>({duration:300,axis:"y"})),N(e,m)};z(Ea,e=>{t(b)&&e(Fa)})}i(vt),Xa(2),Mt((e,m,_,C)=>{wt=q(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,wt,{expanded:t(B),"hidden-mode":t(d)}),se=q(I,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,se,{"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),oe=q(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,{"opacity-0":t(B)||t(d),"scale-95":t(B)||t(d),"pointer-events-none":t(B)||t(d)}),rt(zt,"src",e),ue=q(zt,1,"w-full h-full object-cover transition-transform duration-300",null,ue,{spinning:t(x)&&!t(u),"animate-pulse":t(u)}),X(ta,t($).title),X(ea,t($).artist),fe=q(Et,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,{"opacity-0":!t(B),"scale-95":!t(B),"pointer-events-none":!t(B)}),rt(pe,"src",m),me=q(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,{spinning:t(x)&&!t(u),"animate-pulse":t(u)}),X(ra,t($).title),X(na,t($).artist),X(sa,`${_??""} / ${C??""}`),rt(st,"aria-valuenow",t(E)>0?t(D)/t(E)*100:0),Te(ua,`width: ${t(E)>0?t(D)/t(E)*100:0}%`),he=q(ot,1,"w-10 h-10 rounded-lg",null,he,{"btn-regular":t(S),"btn-plain":!t(S)}),ot.disabled=t(p).length<=1,ft.disabled=t(p).length<=1,xe=q(lt,1,"btn-regular w-12 h-12 rounded-full",null,xe,{"opacity-50":t(u)}),lt.disabled=t(u),pt.disabled=t(p).length<=1,ye=q(At,1,"w-10 h-10 rounded-lg",null,ye,{"btn-regular":t(g)>0,"btn-plain":t(g)===0}),rt(tt,"aria-valuenow",t(T)*100),Te(wa,`width: ${t(T)*100}%`),we=q(Bt,1,"btn-plain w-8 h-8 rounded-lg",null,we,{"text-[var(--primary)]":t(b)})},[()=>yt(t($).cover),()=>yt(t($).cover),()=>re(t(D)),()=>re(t(E))]),h("click",I,ht),h("keydown",I,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),h("click",kt,je(ht)),h("click",It,je(gt)),h("click",nt,gt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),h("click",Ft,ht),h("click",Kt,gt),h("click",st,Ye),h("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(E);t(a)&&(O(a,t(a).currentTime=_),l(D,_))}}),h("click",ot,Ie),h("click",ft,Ne),h("click",lt,$e),h("click",pt,jt),h("click",At,We),h("click",Ct,ie),h("click",tt,Oe),h("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ie())}),h("click",Bt,Zt),N(s,j)};z(Ue,s=>{s(He)})}N(c,ne),Ua()}export{Ci as default};
