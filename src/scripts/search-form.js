
function loadItems(data) {
    var b = '';
    var arrayTitle = [];
    // console.log(actual_JSON.data);
    var first = _.first(data, 9);
    _.each(first, function(item) {
        b += '<div class="pure-u-1-3"><img class="pure-img" src="' + item.image + '" alt="' + item.title + '">' +
            '<h3>' + item.title + '</h3>' +
            '<p>' + item.teaser + '</p>' +
            '</div>';
        arrayTitle.push(item.title);
    });

    $('.search-result').html(b);
    // $('#txtSearch').attr('data-list', arrayTitle);
    new Awesomplete('input#txtSearch', {
      minChars: 3,
      maxItems: 7,
	    list: arrayTitle
    });
}

function getChars() {
  var chars = $('#txtSearch').val().length;
  return chars;
}

var characterReg = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
$('#txtSearch').keyup(function(event) {
    var inputVal = $(this).val();
    if(characterReg.test(inputVal)) {
        $(this).val(inputVal.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
    }
});

$('#txtSearch').keyup(function(){
  if(getChars() > 2){
    $('#btnSearch').removeClass('pure-button-disabled');
  }
  else {
    $('#btnSearch').addClass('pure-button-disabled');
  }
});

$('#btnSearch').on('click', function() {
    if(getChars() > 2){
        var x = _.filter(actual_JSON.data, function(item){
            if (item.title.toLowerCase().indexOf($('#txtSearch').val().toLowerCase()) >= 0)
                return item
        });
        loadItems(x);
    }
    // else {
    //     loadItems(actual_JSON.data);
    // }
    return false;
});

$('.pure-form').on('keypress', function(e) {
  if (e.which == 13) {
    if(getChars() > 2){
        var x = _.filter(actual_JSON.data, function(item){
            if (item.title.toLowerCase().indexOf($('#txtSearch').val().toLowerCase()) >= 0)
                return item
        });
        loadItems(x);
    }
    // else {
    //     loadItems(actual_JSON.data);
    // }
    return false;
  }
});
