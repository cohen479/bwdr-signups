$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return 'No Activity';
    }
    else{
       return results[1] || 'No Activity';
    }
}

dpi_x = $('#dpidiv').first().outerWidth();
dpi_y = $('#dpidiv').first().outerHeight();

var a1 =  decodeURIComponent($.urlParam('contents')); //'" & Activities::Period One & "';

if (a1 && a1 !== 'No Activity' && a1 !== null) { 
    var qr1 = new QRCode('qr1', {width: 70, height: 70, text: a1}); 
} 

// var qr = new QRious({
//         element: $('#qr')[0], //$('#qr').first()
//         size: 96, 
//         value: a1
//     });
