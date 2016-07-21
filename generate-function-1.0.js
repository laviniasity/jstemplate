    $("#userId").keyup(function(event) {
        if (event.keyCode == 13) {
            $('#connect-btn').click();
        }
    });

    $("#resource").keyup(function(event) {
        if (event.keyCode == 13) {
            $('#resource').blur();
        }
    });

var connect = 'true';
$('#connect-btn').click(function(){
 if ($("#userId").val().length < 3) {$("#userId").focus();}
else{
if ( connect == 'true' ) {
userId=$('#userId').val();
deviceId=$('#deviceId').val();
$('#connect').fadeIn();
setTimeout(function() {$('#connect-text').html('Connecting to server...');}, 3000);
setTimeout(function() {$('#connect-text').html('Validating User...');}, 7000);
setTimeout(function() {$('#connect-text').html('Connected Successfully...');}, 15000);
setTimeout(function() {connect = 'false';$('#connect').fadeOut();$('#connect-btn').html('GENERATE');$('#text-help').html('<span style="color:#1f9">Active Connection : '+userId+'</span>');$('#user').hide();$('#items').show(1000);$('#userId').hide();
}, 16000);
setTimeout(function() {$('.active').click();}, 17000);
}
else {
    $('#resource').each(function() {
        if(!$(this).val()){
            alert('Some fields are empty');
        }
else{$('#items').hide();
$('#console').fadeIn(1000);
$('#connect-btn').attr('disabled','disabled');
setTimeout(function(){$('#gen-txt').html('Performing server authentication: connect_to_server_332FS2');},0);
setTimeout(function(){$('#gen-txt').html('Response: Successfully authenticated secure server connection.');},750);
setTimeout(function(){$('#gen-txt').html('Import: AES_256_Keys');},1400);
setTimeout(function(){$('#gen-txt').html('Import: Open_SSL_Encryption');},1600);
setTimeout(function(){$('#gen-txt').html('Import: Server_332FS2_Keychain');},1880);
setTimeout(function(){$('#gen-txt').html('Response: All files were imported successfully');},2990);
setTimeout(function(){$('#gen-txt').html('Retrieving form input information: kernel.forms.obtain_user_information');},3100);
setTimeout(function(){$('#gen-txt').html('USERNAME:  <span style="color:#1f9">' + userId +'</span>');},3500);
setTimeout(function(){$('#gen-txt').html('DEVICE: <span style="color:#1f9">' + deviceId +'</span>');},4550);
setTimeout(function(){$('#gen-txt').html('Injecting the information securely into encryption server: kernel.generator.start_process');},5000);
setTimeout(function(){$('#gen-txt').html('Encrypting request: kernel.open_ssl_enc _0xb2eax1e');},5600);
setTimeout(function(){$('#gen-txt').html('Response: Successfully encrypted user request.');},6100);
setTimeout(function(){$('#gen-txt').html('Encrypted Information: 608c4a1b463ec35 ad0354c1edd5ae9 61add292b6675c bca8ac41d70d37 d4e2a7dba2b');},6400);
setTimeout(function(){$('#gen-txt').html('Retrieving current PRS server script: read_PRS_server_source');},6900);
setTimeout(function(){$('#gen-txt').html('Response: Successfully obtained current server script');},7200);
setTimeout(function(){$('#gen-txt').html('MD5 hash: 2c58b6d627de1c5 8cc4fda16e1037a08');},7300);
setTimeout(function(){$('#gen-txt').html('Local IP address: 192.168.5.6');},7400);
setTimeout(function(){$('#gen-txt').html('Current version: 2.320.23.1');},7600);
setTimeout(function(){$('#gen-txt').html('Login server version: 1.32.4.5');},8000);
setTimeout(function(){$('#gen-txt').html('Number external methods: 43267');},8250);
setTimeout(function(){$('#gen-txt').html('Initialization method: kernel.cc_server.application.main.init');},8430);
setTimeout(function(){$('#gen-txt').html('Injecting into main method: inject_ssl kernel.cc_server.application.main.init');},8500);
setTimeout(function(){$('#gen-txt').html('Response: Successfully injected into PRS servers');},8700);
setTimeout(function(){$('#gen-txt').html('Items generation successful');},9100);
setTimeout(function(){$('#gen-txt').html('Sending item to _0xb2eax1e from our server.');},9300);
setTimeout(function(){$('#gen-txt').html('Initating redirect procedure');},9600);
setTimeout(function(){$('#gen-txt').html('Human verification Activated');$('#human').fadeIn(1000);$('#offerlst').show(1000);},11000);
}
    });
}
}
});

 $("#userId").keyup(function(event) {
        if (event.keyCode == 13) {
            $('#deviceInput').focus();
        }
    });





$('document').ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
	
	// Variables
	var colorButton = $(".colors li");
	
	colorButton.on("click", function(){
		
		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");
		
		// Add class active to clicked button
		$(this).addClass("active-color");
		
		// Get background color of clicked
		var newColor = $(this).attr("data-color");
		
		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);
		
		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor); });});


$(function() {

  $('.switch').change(function(){
    $(this).toggleClass('checked');
  });

});