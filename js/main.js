$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 'No Activity';
    }
}

// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] === sParam) {
//             return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };
// And this is how you can use this function assuming the URL is,
// http://dummy.com/?technology=jquery&blog=jquerybyexample.

// var tech = getUrlParameter('technology');
// var blog = getUrlParameter('blog');

dpi_x = $('#dpidiv').first().outerWidth();
dpi_y = $('#dpidiv').first().outerHeight();

$('#info_span').html('' + window.location.href + '<br>dpi: ' + dpi_x + ' by ' + dpi_y + '<br>version:10:23AM<br>');

var a1 =  decodeURIComponent($.urlParam('a1')); //'" & Activities::Period One & "';

$('#activity_span').html('a1: ' + a1);

var qrcode = new QRCode('qrcode', {width: 96, height: 96, text: a1});

var qr = new QRious({
        element: $('#qr').first(),
        size: 96, 
        value: a1
    });
