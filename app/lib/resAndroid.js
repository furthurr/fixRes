function resAndroid(){}
resAndroid.create = function (){ // crea variable gobal definiendo el tamaño de pantalla (tall o normal)
	return (resAndroid.tipo(Ti.Platform.displayCaps.platformWidth,Ti.Platform.displayCaps.platformHeight));
}; 
resAndroid.tipo = function (wi,he){//esta funcion define si la pantalla es tall o es normal en el dispositivo
	var normal = 66 - ((wi*100)/he);
	(normal<0)? normal= normal*-1 : normal = normal;
	var alto = 56 - ((wi*100)/he);
	(alto<0)? alto= alto*-1 : alto = alto;
	var regresa='';
	(normal<alto)? regresa = 'normal' : regresa = 'alto'; 
	return regresa;
}; 
resAndroid.posicion = function (tipo,num){ //manda a acomodar todo con respecto a la perspectiva del dispositivo 
	var valor = num;						//tipo recibe si el argumento a modificar es de alto ('h') o ancho ('w')
	// if(Ti.Platform.osname === 'ipad'){		//num es el valor a calcular a perspectiva	
		// if (tipo==='h'){valor = valor*2.17;}
		// if (tipo==='w'){valor = valor*2.4;}
	// }	
	//if(OS_ANDROID){
		var hei = 0;
		//(Alloy.Globals.tipoPantalla == 'normal') ? hei = 480 : hei = 568;
		if(OS_IOS){(Alloy.Globals.tipoPantalla == 'normal') ? hei = 480 : hei = 568;}
		else{(Alloy.Globals.tipoPantalla == 'normal') ? hei = 500 : hei = 588;}
		//if (OS_ANDROID){hei=hei-20;}
		if (tipo==='h'){valor = ((valor*100)/hei) * (Ti.Platform.displayCaps.platformHeight/100);}
		if (tipo==='w'){valor = ((valor*100)/320) * (Ti.Platform.displayCaps.platformWidth/100);}
		valor = (valor)+'';
	//}
	//else{}
	return valor;
};
resAndroid.fixResolution = function(recurso){//recibe por referencia el objeto que se ajustara, si uno se los siguientes atributos es del tipo numerico lo manda a la funcion posicion
	try {if (typeof(recurso.bottom) === 'number'){recurso.bottom = ''+resAndroid.posicion('h',recurso.bottom);}}catch(e){}  //<-- recursos que modificara el bottom
	try {if (typeof(recurso.top) === 'number'){recurso.top = ''+resAndroid.posicion('h',recurso.top);}}catch(e){}			//<-- recursos que modificara el top
	try {if (typeof(recurso.height) === 'number'){recurso.height = ''+resAndroid.posicion('h',recurso.height);}}catch(e){}	//<-- recursos que modificara el height	
	try {if (typeof(recurso.left) === 'number'){recurso.left  = ''+resAndroid.posicion('w',recurso.left);}}catch(e){}	//<-- recursos que modificara el left
	try {if (typeof(recurso.right) === 'number'){recurso.right   = ''+resAndroid.posicion('w',recurso.right);}}catch(e){}	//<-- recursos que modificara el right
	try {if (typeof(recurso.width) === 'number'){recurso.width  = ''+resAndroid.posicion('w',recurso.width);}}catch(e){}	//<-- recursos que modificara el width
	try {if (typeof(recurso.borderWidth) === 'number'){recurso.borderWidth  = ''+resAndroid.posicion('w',recurso.borderWidth);}}catch(e){}	//<-- recursos que modificara el width
	try {if (typeof(recurso.borderRadius) === 'number'){recurso.borderRadius  = ''+resAndroid.posicion('w',recurso.borderRadius);}}catch(e){}	//<-- recursos que modificara el width
	//label fixed fonsize and fontFamily
	//try {recurso.font.fontSize = ''+((recurso.font.fontSize * Ti.Platform.displayCaps.platformWidth)/320)+'';}catch(e){}  //<-- recursos que modificara el label
};
resAndroid.lol= function(){};

resAndroid.container = function(container){
	for(var i = 0; i < container.getChildren().length; i++){
		resAndroid.fixResolution(container.children[i]);
		if (container.children[i].getChildren().length>0){
			resAndroid.container(container.children[i]);
		}
	}
};
;module.exports = resAndroid;
Ti.API.info('********');