(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,i){},205:function(e,t,i){},207:function(e,t,i){"use strict";i.r(t);var n=i(9),o=i.n(n),a=i(91),r=i.n(a),s=(i(102),i(92)),c=i(93),l=i(95),h=i(94),u=i(96),d=i(10),p=(i(205),function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(l.a)(this,Object(h.a)(t).call(this,e))).application=new d.Application({width:window.innerWidth+1,height:window.innerHeight,transparent:!1}),i.stage=i.application.stage,i.stage.interactive=!0,i.stage.mousemove=function(e){return i.updatePosition(e)},i.stage.touchmove=function(e){return i.updatePosition(e)},i.stage.mousedown=function(e){return i.handleClick(e)},i.stage.tap=function(e){return i.handleClick(e)},i.mouseX=0,i.mouseY=0,i.mode=-1,i.circles=[],i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"setupPixiContext",value:function(e){this.pixiContext=e,e&&0===e.children.length&&(e.appendChild(this.application.view),this.loadAssets())}},{key:"loadAssets",value:function(){var e=this;d.loader.add("map","assets/seamless"+Math.floor(3*Math.random())+".jpg").load(function(){return e.initialize()})}},{key:"initialize",value:function(){var e=this;this.map=new d.extras.TilingSprite(d.loader.resources.map.texture,this.application.renderer.width,this.application.renderer.height),this.map.tileScale.x=.5,this.map.tileScale.y=.5,this.stage.addChild(this.map);for(var t=0;t<2;t++){var i=new d.Graphics;i.beginFill(0===t?12189696:18362),i.lineStyle(0),i.drawCircle(100,100,10),i.endFill();var n=new d.Sprite(i.generateCanvasTexture());this.circles.push(n),this.stage.addChild(n)}this.circles[0].x=this.application.renderer.width/2-this.circles[0].width/2,this.circles[0].y=this.application.renderer.height/2-this.circles[0].height/2,this.application.ticker.add(function(){return e.animate()})}},{key:"updatePosition",value:function(e){this.mouseX=e.data.global.x,this.mouseY=e.data.global.y}},{key:"handleClick",value:function(e){this.mode*=-1}},{key:"animate",value:function(){var e=f({x:this.mouseX-this.application.renderer.width/2,y:this.mouseY-this.application.renderer.height/2},4),t=f({x:e.x,y:e.y},30+Math.sqrt(Math.pow(this.mouseX-this.application.renderer.width/2,2)+Math.pow(this.mouseY-this.application.renderer.height/2,2))/10);this.map.tilePosition.x+=e.x*this.mode,this.map.tilePosition.y+=e.y*this.mode,this.map.tilePosition.x%=this.map.texture.orig.width,this.map.tilePosition.y%=this.map.texture.orig.height,this.circles[1].x=this.application.renderer.width/2+t.x-this.circles[1].width/2,this.circles[1].y=this.application.renderer.height/2+t.y-this.circles[1].height/2}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{ref:function(t){return e.setupPixiContext(t)}}),";")}}]),t}(n.Component));function f(e,t){if(0===e.x&&0===e.y)return{x:0,y:0};var i=Math.atan2(e.y,e.x);return{x:Math.cos(i)*t,y:Math.sin(i)*t}}var g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ChaseIllusion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ChaseIllusion","/service-worker.js");g?(function(e,t){fetch(e).then(function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)})}}()},97:function(e,t,i){e.exports=i(207)}},[[97,2,1]]]);
//# sourceMappingURL=main.242b2f23.chunk.js.map