// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); // cierre del tap del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000); //Va vibrar 2 segundos cuando le de tap en mi pantalla
		}); // cierre del tap de Vibrar
	}, false); //cierre del EventListener
}); //Cierre de la función principal