(function(){var t,a,o,n,e,r,c,l,i,s,u,d,v,f;t="start",o=$("html"),n=$("#save-data"),e=$("#load-data"),r=$("#load-cancel"),c=$("#load-go"),location.protocol+location.host!=="https:cc.aideen.pw"&&o.addClass("http"),l=function(n){return null!=a&&clearInterval(a),o.removeClass(t).addClass(n),t=n},i=function(){var t;return t=n,t.focus(),t.select(),t},s=function(){var t,a,o,e;return t=LZString.compressToBase64(JSON.stringify(localStorage)),a=new Date,o="Cutie Clicker Game Data\nSaved: "+a+"\n[0|"+t+"]",e=n,e.val(o),e.data("data",t),e},u=function(t){return/\[0\|([a-zA-Z0-9+\/=]+)\]/.exec(t)},$("#button-save").on("click",function(){return"save"===t?l("start"):(s(),l("save"),i())}),d=n,d.on("click",i),d.on("input",function(){var t;return(t=u(n.val()))&&t[1]===n.data("data")?void 0:(s(),i())}),v=function(){var t;return t=e,t.val(""),t.removeClass("ok"),t.focus(),t},$("#button-load").on("click",function(){return"load"===t?l("start"):(l("load"),v())}),f=function(){return e.hasClass("ok")},e.on("input",function(){var t,a,o,n;if(t=u(e.val()))try{a=JSON.parse(LZString.decompressFromBase64(t[1]))}catch(r){}return null==a||$.isEmptyObject(a)?(n=e,n.removeClass("ok"),n.data("data",{}),n):(o=e,o.addClass("ok"),o.data("data",a),o)}),r.on("click",function(){return f?v():void 0}),c.on("click",function(){var t,a,n,r,c;if(f&&(t=e.data("data"),null!=t&&!$.isEmptyObject(t))){o.addClass("processing"),localStorage.clear();try{for(a in t)n=t[a],localStorage.setItem(a,n);return window.location="/"}catch(l){return r=l,c=$("#processing"),c.css("font-size","1.2rem"),c.text(r),c}}}),$("#button-back").on("click",function(){return window.location="/"}),$("#button-https").on("click",function(){return window.location="https://cc.aideen.pw/data/"}),$("#delete-local-storage").on("click",function(t){return t.preventDefault(),confirm("If you haven't saved your game data yet, you will lose it! Are you sure you want to delete your http data?")?(localStorage.clear(),window.location="https://cc.aideen.pw/"):void 0})}).call(this);
