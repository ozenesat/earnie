(this["webpackJsonpearnie-beta"]=this["webpackJsonpearnie-beta"]||[]).push([[34],{1241:function(e,a,t){e.exports={new:"style_new__1MXMi",favourite:"style_favourite__Q0nIM",thumb:"style_thumb__2rzKX",image:"style_image__3EBFg"}},1242:function(e){e.exports=JSON.parse('{"descr":{"images":["resources/images/products/001.jpg","resources/images/products/002.jpg","resources/images/products/003.jpg","resources/images/products/004.jpg"]},"products":[{"isNew":true,"isFav":false,"image":"resources/images/products/001.jpg","name":"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home","price":"199.28","oldPrice":"299.28"},{"isNew":false,"isFav":true,"image":"resources/images/products/002.jpg","name":"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home","price":"99.99","oldPrice":"199.99"},{"isNew":false,"isFav":false,"image":"resources/images/products/003.jpg","name":"TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Routers for Home","price":"245.21","oldPrice":"419.58"}]}')},1519:function(e,a,t){"use strict";t.r(a);var r=t(50),n=t(0),s=t.n(n),i=t(185),c=t(369),l=t(250),m=t(493),o=t(1241),d=t.n(o),u=t(1242),p=c.a.Option,f=l.a.TabPane;a.default=function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],o=a[1],g=Object(n.useState)(!1),b=Object(r.a)(g,2),E=b[0],v=b[1];return s.a.createElement("div",null,s.a.createElement(i.a,{title:"Ecommerce: Product Details"}),s.a.createElement("div",{className:"cui__utils__heading"},s.a.createElement("strong",null,"Ecommerce: Product Details")),s.a.createElement("div",{className:"card overflow-hidden"},s.a.createElement("div",{className:d.a.new},"New"),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("a",{className:"".concat(d.a.favourite," ").concat(E?"text-dark":"text-gray-3"),href:"#",onClick:function(e){e.preventDefault(),v(!E)}},s.a.createElement("i",{className:"fe fe-heart font-size-21"})),s.a.createElement("div",{className:"".concat(d.a.image," height-250 mb-3")},s.a.createElement("img",{className:"img-fluid",src:u.descr.images[t],alt:"Product"})),s.a.createElement("div",{className:"d-flex flex-wrap mb-3"},u.descr.images.map((function(e,a){return s.a.createElement("a",{href:"#",className:"".concat(a===t?"border-primary":""," ").concat(d.a.thumb," width-100 height-100 border m-2"),onClick:function(e){!function(e,a){e.preventDefault(),o(a)}(e,a)},key:e},s.a.createElement("img",{className:"img-fluid",src:e,alt:"Product"}))})))),s.a.createElement("div",{className:"col-lg-8"},s.a.createElement("div",{className:"font-size-24 font-weight-bold text-dark mb-2"},"$199.28 ",s.a.createElement("del",{className:"align-text-top font-size-14"},"$299.28")),s.a.createElement("div",{className:"pb-3 mb-4 border-bottom"},s.a.createElement("a",{href:"",className:"text-blue font-size-18"},"TP-Link AC1750 Smart WiFi Router - Dual",s.a.createElement("br",null),"Band Gigabit Wireless Internet Routers for",s.a.createElement("br",null),"Home")),s.a.createElement("div",{className:"mb-4 width-300"},s.a.createElement(c.a,{defaultValue:"Red",style:{width:300}},s.a.createElement(p,{value:"red"},"Red"),s.a.createElement(p,{value:"black"},"Black"),s.a.createElement(p,{value:"cyan"},"Cyan"),s.a.createElement(p,{value:"blue"},"Blue"))),s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},className:"width-200 btn btn-success btn-with-addon mr-auto mb-3 text-nowrap d-none d-md-block"},s.a.createElement("span",{className:"btn-addon"},s.a.createElement("i",{className:"btn-addon-icon fe fe-plus-circle"})),"Add To Card"),s.a.createElement(l.a,{defaultActiveKey:"1",className:"kit-tabs-bordered"},s.a.createElement(f,{tab:"Information",key:"1"}),s.a.createElement(f,{tab:"Description",key:"2"})),s.a.createElement("div",{className:"card-body px-0"},s.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),s.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.")))))),s.a.createElement("div",{className:"cui__utils__heading"},"Related Products"),s.a.createElement("div",{className:"row"},u.products.map((function(e){var a=e.isNew,t=e.isFav,r=e.image,n=e.name,i=e.price,c=e.oldPrice;return s.a.createElement("div",{className:"col-lg-4",key:Math.random()},s.a.createElement(m.a,{isNew:a,isFavourite:t,image:r,name:n,price:i,oldPrice:c}))}))))}},493:function(e,a,t){"use strict";var r=t(50),n=t(0),s=t.n(n),i=t(494),c=t.n(i);a.a=function(e){var a=e.isFavourite,t=e.isNew,i=e.image,l=e.name,m=e.price,o=e.oldPrice,d=Object(n.useState)(a),u=Object(r.a)(d,2),p=u[0],f=u[1],g=function(e){e.preventDefault(),f(!p)};return s.a.createElement("div",{className:"card overflow-hidden"},s.a.createElement("div",{hidden:!t,className:c.a.new},"New"),s.a.createElement("div",{className:"card-body"},s.a.createElement("a",{role:"menuitem",className:"".concat(c.a.favourite," ").concat(p?"text-dark":"text-gray-3"),onClick:g,onKeyPress:g,tabIndex:"0"},s.a.createElement("i",{className:"fe fe-heart font-size-21"})),s.a.createElement("div",{className:"".concat(c.a.image," border-bottom height-250 mb-3")},s.a.createElement("img",{className:"img-fluid",src:i,alt:l})),s.a.createElement("div",{className:"font-size-24 font-weight-bold text-dark mb-2"},m," ",s.a.createElement("del",{hidden:!o,className:"align-text-top font-size-14"},o)),s.a.createElement("div",null,s.a.createElement("a",{className:"text-blue font-size-18"},l))))}},494:function(e,a,t){e.exports={new:"style_new__1xhEB",favourite:"style_favourite__2aFpO",thumb:"style_thumb__2M2zG",image:"style_image__2kF8u"}}}]);
//# sourceMappingURL=34.f20f565b.chunk.js.map