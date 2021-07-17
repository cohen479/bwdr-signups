dpi_x = $('#dpidiv').first().outerWidth();
dpi_y = $('#dpidiv').first().outerHeight();
$('#info_span').html('dpi: ' + dpi_x + ' by ' + dpi_y);
var dataString = '" & Activities::Period One & "';
document.getElementById('activity_span').innerHTML = dataString;
var qrcode = new QRCode('qrcode', {width: 96, height: 96, text: dataString});

var qr = new QRious({
        element: document.getElementById('qr'),
        size: 96, 
        value: dataString
    });
