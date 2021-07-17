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

$('#info_span').html('' + window.location.href + '. dpi: ' + dpi_x + ' by ' + dpi_y);

var a1 =  decodeURIComponent($.urlParam('a1')); //'" & Activities::Period One & "';

$('#activity_span').innerHTML = 'a1: ' + a1;

var qrcode = new QRCode('qrcode', {width: 96, height: 96, text: a1});

var qr = new QRious({
        element: document.getElementById('qr'),
        size: 96, 
        value: a1
    });
