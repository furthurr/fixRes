/*
Alloy.Globals.tipoPantalla = '';
//esta solo existira con valor 'alto' o 'normal' si se esta ejecutando la aplicacion en un dispositivo android
Alloy.Globals.rex = require('resAndroid');

Alloy.Globals.tipoPantalla = Alloy.Globals.rex.tipo(Ti.Platform.displayCaps.platformWidth,Ti.Platform.displayCaps.platformHeight);
Ti.API.warn('tipo de pantalla: '+Alloy.Globals.tipoPantalla+' he: '+Ti.Platform.displayCaps.platformHeight+' wi: '+Ti.Platform.displayCaps.platformWidth);

$.titleMenu.font = {fontSize: ((Ti.Platform.displayCaps.platformWidth / 100) * 5)};
$.lblOpt1.font = {fontSize: ((Ti.Platform.displayCaps.platformWidth / 100) * 4)};
$.lblOpt2.font = {fontSize: ((Ti.Platform.displayCaps.platformWidth / 100) * 4)};
$.labelDes.font = {fontSize: ((Ti.Platform.displayCaps.platformWidth / 100) * 4)};

if (Alloy.Globals.tipoPantalla == 'normal'){//fix resolution for small screen
	$.viewFoto.height = 150;
	$.fotoImg.height = 100;
	$.viewOpciones.top = 214;
	$.scroll.top = 254;
	$.scroll.height = 186;
	}
Alloy.Globals.rex.container($.winIndex);
//creando elementos desde el controlador
var baseView = Ti.UI.createView({
	 bottom:0,
	 backgroundColor:'#B43104',
	 width:320,
	 height:40,
}),
sep1 = Ti.UI.createView({height:30,backgroundColor:'white',width:1,left:80}),
sep2 = Ti.UI.createView({height:30,backgroundColor:'white',width:1}),
sep3 = Ti.UI.createView({height:30,backgroundColor:'white',width:1,right:80}),
//views
viewYoutube = Ti.UI.createView({width:80,height:40,left:0}),
viewFacebook = Ti.UI.createView({width:80,height:40,left:80}),
viewBlog = Ti.UI.createView({width:80,height:40,right:80}),
viewTiwtter = Ti.UI.createView({width:80,height:40,right:0}),
//images
imgYoutube = Ti.UI.createImageView({image:'/imgs/youtube.png',height:20}),
imgFacebook = Ti.UI.createImageView({image:'/imgs/facebook.png',height:20,width:20}),
imgBlog = Ti.UI.createImageView({image:'/imgs/blogger.png',width:'25%'});

//
baseView.add(sep1);
baseView.add(sep2);
baseView.add(sep3);
//
viewYoutube.add(imgYoutube);
viewFacebook.add(imgFacebook);
viewBlog.add(imgBlog);

//
baseView.add(viewYoutube);
baseView.add(viewFacebook);
baseView.add(viewBlog);
baseView.add(viewTiwtter);
$.winIndex.add(baseView);//sending the win to fixResolution
//events
viewYoutube.addEventListener('click',function(e){Ti.Platform.openURL('https://www.youtube.com/user/myfurthur');});
viewFacebook.addEventListener('click',function(e){Ti.Platform.openURL('https://www.facebook.com/furthurr');});
viewBlog.addEventListener('click',function(e){Ti.Platform.openURL('http://ti-sl.blogspot.mx/');});
viewTiwtter.addEventListener('click',function(e){Ti.Platform.openURL('https://mobile.twitter.com/furthurr');});

Alloy.Globals.rex.fixResolution(baseView);
Alloy.Globals.rex.container(baseView);

var imgTiwtter = Ti.UI.createImageView({image:'/imgs/twitter.png',height:Alloy.Globals.rex.posicion('w',20),width:Alloy.Globals.rex.posicion('w',20)});
viewTiwtter.add(imgTiwtter);

$.fotoImg.borderRadius = $.fotoImg.height/2;
*/
function clickMenu1(){alert('Ver. 1.0.0');}

$.winIndex.open();
Ti.API.info('');