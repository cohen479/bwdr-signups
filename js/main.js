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

$('#info_span').html('' + window.location.href + '<br>dpi: ' + dpi_x + ' by ' + dpi_y + '<br>version: 21:42<br>');

var a1 =  decodeURIComponent($.urlParam('a1')); //'" & Activities::Period One & "';
var a2 =  decodeURIComponent($.urlParam('a2')); //'" & Activities::Period Two & "';
var a3 =  decodeURIComponent($.urlParam('a3')); //'" & Activities::Period Three & "';
var a4 =  decodeURIComponent($.urlParam('a4')); //'" & Activities::Period Four & "';


$('#a1_span').html('Period 1: ' + a1);
$('#a2_span').html('Period 2: ' + a2);
$('#a3_span').html('Period 3: ' + a3);
$('#a4_span').html('Period 4: ' + a4);

if (a1 && a1 !== 'No Activity') { var qr1 = new QRCode('qr1', {width: 96, height: 96, text: a1}); } else { $('#qr1').html('Period 1'); }
if (a2 && a2 !== 'No Activity') { var qr2 = new QRCode('qr2', {width: 96, height: 96, text: a2}); } else { $('#qr2').html('Period 2'); }
if (a3 && a3 !== 'No Activity') { var qr3 = new QRCode('qr3', {width: 96, height: 96, text: a3}); } else { $('#qr3').html('Period 3'); }
if (a4 && a4 !== 'No Activity') { var qr4 = new QRCode('qr4', {width: 96, height: 96, text: a4}); } else { $('#qr4').html('Period 4'); }

// var qr = new QRious({
//         element: $('#qr')[0], //$('#qr').first()
//         size: 96, 
//         value: a1
//     });
