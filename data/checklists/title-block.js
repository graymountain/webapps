$(document).ready(function(){
    $.ajax({
    url: "title-block.txt",
    type: 'GET',
    dataType: 'text',
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