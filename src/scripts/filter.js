
function loadFilter(data) {
    var b = '';

    _.each(data, function(i, val) {
        if (val != 'saved') {
            if (val == 'categories') val = 'Categorías'
            if (val == 'edition') val = 'Presentación'
            if (val == 'lang') val = 'Idioma'
            b += '<span class="pure-menu-heading">' + val + '</span>';
            _.each(i, function(i, val) {
                b += '<ul class="pure-menu-list" id="">';
                _.each(i, function(i, val) {
                    b += '<li class="pure-menu-item">' +
                        '<a class="pure-menu-link" href="#/' + val + '">' + i.label + '</a>' +
                        '</li>';
                });
                b += '</ul>';
            });
        }
    });

    $('.pure-menu').html(b);
}

$('.pure-menu').on('click', '.pure-menu-link', function() {
    var a = $(this).attr('href').replace('#/', '');
    var x = _.filter(actual_JSON.data, function(item){
        if (_.indexOf(item.categories, a) >= 0)
            return item
    });
    loadItems(x);
});
