$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: "https://www.dropbox.com/s/psk2e8ceexyvuue/title-block.txt?dl=0",
        headers: { 'Access-Control-Allow-Origin': '*' },
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            $.each(data.split(/[\n\r]+/), function(index, line) {
            $('<label style="display:block">').text(line).appendTo('#title-block');
            });
        },
        async: false
    });

    $('<input type="checkbox"/>').prependTo('#title-block label');
    $('input[name=foo]').click();
});