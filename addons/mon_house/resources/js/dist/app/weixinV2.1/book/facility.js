define("app/weixinV2.1/book/facility",["gallery/zepto/1.1.3/zepto"],function(a){var b=a("gallery/zepto/1.1.3/zepto");b(function(){var c,d;b("a.map").on("click",function(){c=b(this).attr("data-x"),d=b(this).attr("data-y");var e="<div id='allmap'>"+b("#loading-container").html()+"</div>";b.mobileModal.showModal(e);var f=b(window).height();return b("#allmap").height(f),"undefined"!=typeof BMap?initializeMap():a.async("http://api.map.baidu.com/api?v=1.3&callback=initializeMap"),!1}),window.initializeMap=function(){function a(){this.defaultAnchor=BMAP_ANCHOR_TOP_RIGHT,this.defaultOffset=new BMap.Size(10,10)}a.prototype=new BMap.Control,a.prototype.initialize=function(a){var c=document.createElement("div");return c.appendChild(document.createTextNode("X")),c.style.cursor="pointer",c.style.width="30px",c.style.height="30px",c.style.border="1px solid gray",c.style.backgroundColor="white",c.style.lineHeight="30px",c.style.borderRadius="15px",c.style.textAlign="center",c.onclick=function(){return b.mobileModal.hideModal(),!1},a.getContainer().appendChild(c),c};var e=new BMap.Map("allmap");e.centerAndZoom(new BMap.Point(c,d),15);var f=new BMap.Marker(new BMap.Point(c,d));e.addOverlay(f);var g=new BMap.InfoWindow("普通标注");f.addEventListener("click",function(){this.openInfoWindow(g)}),e.addControl(new BMap.NavigationControl),e.addControl(new BMap.ScaleControl),e.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT})),e.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT})),e.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));var h=new a;e.addControl(h)}})});