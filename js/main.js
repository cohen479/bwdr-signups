$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 'No Activity';
    }
}

dpi_x = $('#dpidiv').first().outerWidth();
dpi_y = $('#dpidiv').first().outerHeight();

$('#info_span').html('' + window.location.href + '<br>dpi: ' + dpi_x + ' by ' + dpi_y + '<br>version:10:16AM');

var a1 =  decodeURIComponent($.urlParam('a1')); //'" & Activities::Period One & "';

$('#activity_span').html('a1: ' + a1);

var qrcode = new QRCode('qrcode', {width: 96, height: 96, text: a1});

var qr = new QRious({
        element: $('#qr').first(),
        size: 96, 
        value: a1
    });
