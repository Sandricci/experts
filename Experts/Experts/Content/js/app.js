var global = {};
global.search = {
    context: null,
    container: null,
    init(context, container) {
        global.search.context = context || '';
        global.search.container = container;
        const json = $.getJSON('/Content/json/data' + global.search.context + '.json', function (json) {
            $('.js-search').select2({
                data: json.results,
            });

        });

        $('.js-search').change(function () {
            global.search.updateTable();
        });
    },
    updateTable() {
        const selected = $('.js-search').select2('data');
        $(global.search.container).DataTable().destroy();
        $(global.search.container).DataTable()
            .search(selected[0].text);
        $(global.search.container).DataTable()
            .draw();
    }
}