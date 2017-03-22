
function loadItems(data) {
    var b = '';
    // console.log(actual_JSON.data);
    var first = _.first(data, 9);
    _.each(first, function(item) {
        b += '<div class="pure-u-1-3"><img class="pure-img" src="' + item.image + '" alt="' + item.title + '">' +
            '<h3>' + item.title + '</h3>' +
            '<p>' + item.teaser + '</p>' +
            '</div>';
    });

    $('.search-result').html(b);
}

var characterReg = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
$('#txtSearch').keyup(function(event) {
    var inputVal = $(this).val();
    if(characterReg.test(inputVal)) {
        $(this).val(inputVal.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
    }
});

$('#btnSearch').on('click', function() {
    if ($('#txtSearch').val() != '') {
        var x = _.filter(actual_JSON.data, function(item){
            if (item.title.toLowerCase().indexOf($('#txtSearch').val().toLowerCase()) >= 0)
                return item
        });
        loadItems(x);
    }
    else {
        loadItems(actual_JSON.data);
    }
});
