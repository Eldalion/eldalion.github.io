(this["webpackJsonpproject-7-app-alt"]=this["webpackJsonpproject-7-app-alt"]||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),c=a(4),i=a(6),s=a(8),m=a(1),u=a(3),g=a(10),p=a.n(g),d=a(12),E=function(e){var t=e.text,a=e.author;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t,l.a.createElement("br",null),l.a.createElement("span",null,"- ",a)))},b=function(e){var t=e.name,a=e.rating,r=e.id,o=e.map,u=e.geometry,g=e.lowerRange,b=e.upperRange;console.log("Geometry Lat ",u.location.lat(),"|| Geometry Lng ",u.location.lng());var f=u.location.lat,v="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=".concat(f,",").concat(u.location.lng(),"&heading=151.78&pitch=-0.76&key=AIzaSyCJR69amzyTagk31JzXBFEs3XSlcoVYPCw"),h=("https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=".concat(u.location.lat,",").concat(u.location.lng,"heading=151.78&pitch=-0.76&key=AIzaSyCJR69amzyTagk31JzXBFEs3XSlcoVYPCw"),Object(n.useState)({})),w=Object(m.a)(h,2),O=w[0],j=w[1],S=Object(n.useState)([]),y=Object(m.a)(S,2),R=y[0],C=y[1],k=Object(n.useState)(!1),N=Object(m.a)(k,2),x=N[0],L=N[1],z=Object(n.useState)(!1),P=Object(m.a)(z,2),F=P[0],T=P[1],D=Object(n.useState)(!1),J=Object(m.a)(D,2),X=J[0],A=J[1],I=Object(n.useState)({author:"",text:""}),q=Object(m.a)(I,2),_=q[0],B=q[1],Y=function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var l=new window.google.maps.places.PlacesService(t),r={placeId:a,fields:["reviews","name","photo"]};l.getDetails(r,(function(t,a){a===window.google.maps.places.PlacesServiceStatus.OK?console.log("Review fetch success ",t):n(console.log("Review fetch fail ",t,a));e(t)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(e){B(Object(i.a)(Object(i.a)({},_),{},Object(c.a)({},e.target.name,e.target.value)))};return a<g||a>b?null:l.a.createElement("div",{className:"restaurant"},l.a.createElement("h2",null,t),a?l.a.createElement("h4",null,"Rating: ",a):l.a.createElement("h4",null,"Rating not available"),l.a.createElement("button",{onClick:function(){console.log("reviewToggle state:",F),!1===F?!1===x?(T(!0),Y(o,r).then((function(e){j(e),C(e.reviews)})).catch((function(e){return console.log("CATCH ERROR",e)})),L(!0)):T(!0):T(!1)}},"Show Details"),l.a.createElement("div",{className:F?"modal-overlay":""},l.a.createElement("div",{className:F?"modal":"modal modal-hidden"},l.a.createElement("span",{className:"modal-close",onClick:function(){T(!1)}},"X"),O.photos?l.a.createElement("img",{src:v,alt:"restaurant"}):"This restaurant does not have photos yet.",O.reviews?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Restaurant Review"),l.a.createElement("button",{onClick:function(){A(!1===X)}},"Write a review"),l.a.createElement("form",{className:X?"review-form":"review-form review-form-hidden",onSubmit:function(e){e.preventDefault(),C((function(e){return[].concat(Object(s.a)(e),[{author_name:_.author,text:_.text}])})),B({author:"",text:""})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Name "),l.a.createElement("input",{type:"text",placeholder:"Type your name here",name:"author",value:_.author,onChange:K,required:!0}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Review "),l.a.createElement("textarea",{cols:"30",rows:"10",placeholder:"Type your review here",name:"text",value:_.text,onChange:K,required:!0})),l.a.createElement("input",{type:"submit",className:"form-submit-button",value:"Submit"})),R.map((function(e,t){return l.a.createElement(E,{key:t,text:e.text,author:e.author_name})}))):"")))},f=function(e){var t=e.placesData,a=e.map,r=Object(n.useState)(0),o=Object(m.a)(r,2),c=o[0],i=o[1],s=Object(n.useState)(5),u=Object(m.a)(s,2),g=u[0],p=u[1];return l.a.createElement("div",{className:"restaurant-container"},l.a.createElement("div",{className:"range-slider"},l.a.createElement("form",{action:""},l.a.createElement("h2",null,"Rating filter tool"),l.a.createElement("label",{htmlFor:"lowerRange"},"Lower limit"),l.a.createElement("select",{name:"lowerRange",id:"low-limit",value:c,onChange:function(e){i(e.target.value)}},l.a.createElement("option",{value:"0"},"0 stars"),l.a.createElement("option",{value:"1"},"1 stars"),l.a.createElement("option",{value:"2"},"2 stars"),l.a.createElement("option",{value:"3"},"3 stars"),l.a.createElement("option",{value:"4"},"4 stars"),l.a.createElement("option",{value:"5"},"5 stars")),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"upperRange"},"Upper limit"),l.a.createElement("select",{name:"upperRange",id:"up-limit",value:g,onChange:function(e){p(e.target.value)}},c<=1&&l.a.createElement("option",{value:"1"},"1 stars"),c<=2&&l.a.createElement("option",{value:"2"},"2 stars"),c<=3&&l.a.createElement("option",{value:"3"},"3 stars"),c<=4&&l.a.createElement("option",{value:"4"},"4 stars"),c<=5&&l.a.createElement("option",{value:"5"},"5 stars")))),t&&a?t.map((function(e,t){return l.a.createElement(b,{key:t,name:e.name,rating:e.rating,id:e.place_id,map:a,geometry:e.geometry,lowerRange:c,upperRange:g})})):"Loading Restaurant List")},v=["places","streetview"],h={height:"100vh",width:"100%"},w=function(){var e=Object(u.d)({googleMapsApiKey:"AIzaSyCJR69amzyTagk31JzXBFEs3XSlcoVYPCw",libraries:v}),t=e.isLoaded,a=e.loadError,r=Object(n.useState)(null),o=Object(m.a)(r,2),g=o[0],p=o[1],d=Object(n.useState)(null),E=Object(m.a)(d,2),b=E[0],w=E[1],O=Object(n.useState)({}),j=Object(m.a)(O,2),S=j[0],y=j[1],R=Object(n.useState)([]),C=Object(m.a)(R,2),k=C[0],N=C[1],x=Object(n.useState)(null),L=Object(m.a)(x,2),z=L[0],P=L[1],F=Object(n.useState)(0),T=Object(m.a)(F,2),D=T[0],J=T[1],X=Object(n.useState)(0),A=Object(m.a)(X,2),I=A[0],q=A[1],_=Object(n.useState)(!1),B=Object(m.a)(_,2),Y=B[0],K=B[1],V=Object(n.useState)({name:"",rating:"",place_id:"",geometry:{location:{lat:"",lng:""}}}),G=Object(m.a)(V,2),H=G[0],M=G[1],U=function(e){M(Object(i.a)(Object(i.a)({},H),{},Object(c.a)({},e.target.name,e.target.value)))},W=function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};y(t)};return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(W)}),[]),Object(n.useEffect)((function(){var e;(e=g,new Promise((function(t,a){var n=new window.google.maps.places.PlacesService(e),l={location:new window.google.maps.LatLng(S.lat,S.lng),radius:"500",type:["restaurant"]};n.nearbySearch(l,(function(e,n){n===window.google.maps.places.PlacesServiceStatus.OK?console.log("FetchPlaces - Data fetch success"):a(console.log("FetchPlaces - Data fetch fail")),t(e)}))}))).then((function(e){w(e)})).catch((function(e){return console.log("CATCH ERROR:",e.message)}))}),[g]),a?"Error loading map":t?l.a.createElement("div",{className:"main-container"},l.a.createElement(u.a,{mapContainerStyle:h,zoom:14,center:S,onClick:function(e){N((function(t){return[].concat(Object(s.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])})),J(e.latLng.lat()),q(e.latLng.lng()),K(!0)},onLoad:function(e){p(e)}},l.a.createElement(u.c,{position:S}),l.a.createElement(u.b,{position:S},l.a.createElement("div",null,l.a.createElement("h3",null,"You are here"))),k.map((function(e){return l.a.createElement(u.c,{key:e.time.toISOString(),position:{lat:e.lat,lng:e.lng},icon:{url:"./img/food-icon.jpg",scaledSize:new window.google.maps.Size(55,55),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){P(e)}})})),z?l.a.createElement(u.b,{position:{lat:z.lat,lng:z.lng},onCloseClick:function(){P(null)}},l.a.createElement("div",null,l.a.createElement("h2",null,"Restaurant added"))):null),b&&g?l.a.createElement(f,{placesData:b,map:g}):"Loading Restaurant List",l.a.createElement("div",{className:Y?"restaurant-form-modal-overlay":"restaurant-form-modal-overlay restaurant-form-hidden"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w((function(e){return[].concat(Object(s.a)(e),[{name:H.name,rating:H.rating,place_id:"asdf2qawd654ad654asd6a5s4d",geometry:{location:{lat:D,lng:I}}}])})),M({name:"",rating:0}),K(!1)},className:"restaurant-form"},l.a.createElement("span",{className:"modal-close",onClick:function(){K(!1)}},"X"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Restaurant name "),l.a.createElement("input",{type:"text",placeholder:"Type name of the restaurant here",name:"name",value:H.name,onChange:U,required:!0}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Restaurant rating "),l.a.createElement("input",{type:"number",placeholder:"Click rating of the restaurant here",name:"rating",value:H.rating,onChange:U,step:"0.1",min:"0.0",max:"5.0",required:!0}),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",className:"form-submit-button",value:"Submit"})))):"Loading map"};a(19);o.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.53cc8a21.chunk.js.map