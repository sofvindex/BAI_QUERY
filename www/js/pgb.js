function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function sendRequest(){
	
	$.ajax({  
    'url' : 'blaszku.alwaysdata.net',  
    'type' : 'POST',
  
  
    'data' : {
      'login' : 'vindex',
      'password' : 'vindex'
    },
  
    'success' : function(data) {
		
      if (data == "success") {
        alert('GOT IT!!!');
      }
	  else
		alert('Huston, we got a problem');
    }
  });
	
}