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
                placeholder: 'Filter by achievement',
                allowClear: true
            });

        });

        $('.js-search').change(function () {
            global.search.updateTable();
        });
    },
    updateTable() {
        const selected = $('.js-search').select2('data');
        $(global.search.container).DataTable().destroy();
        $(global.search.container).DataTable({ "dom": '<"top"i>rt<"bottom"flp><"clear">' })
            .search(selected[0].text);
        $(global.search.container).DataTable()
            .draw();
    }
}
global.home = {
    diagrams: {
        softskills: null,
        hardskills: null,
        experience: null,
        render(categories) {
            softskills = this.generateChart('softskills', 'Soft Skills towards Role', 67)
            hardkills = this.generateChart('hardskills', 'Hard Skills towards Role', 57)
            experience = this.generateChart('experience', 'Experience towards Role', 45)
        },
        generateChart(el, title, achieved) {
            return new Chart(el, {
                type: 'pie',
                data: {
                    datasets: [{
                        label: 'Achievements',
                        data: [(100-achieved), achieved],
                        backgroundColor: ['#fcf7a7', '#95eb92']
                    }],
                    labels: ['in progress', 'achieved'] 
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: title
                    }
                },
                dom: '<"top"f>rt<"bottom"ilp><"clear">'
            })
        }
    }
}
global.achievements = {
    add: {
        init() {
            $.getJSON('/Content/json/data.json', function (db) {
                $('.add-achievement-select').select2({
                    data: db.results,
                    placeholder: 'Select an achievement',
                    allowClear: true
                });
            })
        },
        save() { },
        reset() { },
        setLastContact() {
            const date = new Date();
            const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            document.getElementById('lcontactSelect').value = date.getFullYear().toString().concat('.').concat(month);
        }
    },
    renderATable() {
        const a = $.getJSON('/Content/json/dataAchievements.json', function (json) {
            console.log('table')
            $('.js-achievement-table').DataTable({
                data: json,
                columns: [
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'comment' },
                    { data: 'lastContact', className: 'text-right' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                "dom": '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });
    },
    renderAtrTables() {
        const atrSoft = $.getJSON('/Content/json/dataATR.json', function (json) {
            $('.js-achievement-role-table1').DataTable({
                data: json,
                columns: [
                    { data: 'status', orderable: false },
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'amountExpected', className: 'text-center' },
                    { data: 'amountOwned', className: 'text-center' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                createdRow: function (row, data, index) {
                    const status = data["status"];
                    if (status < 33)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-danger">'+ status +' %</div>');
                    else if (status > 32 && status < 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-warning">' + status +' %</div>');
                    else if (status > 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-success">' + status +' %</div>');
                },
                dom: '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });
        const atrHard = $.getJSON('/Content/json/dataATR.json', function (json) {
            $('.js-achievement-role-table2').DataTable({
                data: json,
                columns: [
                    { data: 'status', orderable: false },
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'amountExpected', className: 'text-center' },
                    { data: 'amountOwned', className: 'text-center' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                createdRow: function (row, data, index) {
                    const status = data["status"];
                    if (status < 33)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-danger">' + status + ' %</div>');
                    else if (status > 32 && status < 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-warning">' + status + ' %</div>');
                    else if (status > 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-success">' + status + ' %</div>');
                },
                dom: '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });
        const atrExperience = $.getJSON('/Content/json/dataATR.json', function (json) {
            $('.js-achievement-role-table3').DataTable({
                data: json,
                columns: [
                    { data: 'status', orderable: false },
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'amountExpected', className: 'text-center' },
                    { data: 'amountOwned', className: 'text-center' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                createdRow: function (row, data, index) {
                    const status = data["status"];
                    if (status < 33)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-danger">' + status + ' %</div>');
                    else if (status > 32 && status < 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-warning">' + status + ' %</div>');
                    else if (status > 80)
                        $('td', row).eq(0).html('<div class="atr-status atr-status-success">' + status + ' %</div>');
                },
                dom: '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });
    }
}
global.achievables = {
    add: {
        init() {
            $.getJSON('/Content/json/data.json', function (db) {
                $('.add-achievement-select').select2({
                    data: db.results,
                    placeholder: 'Select an achievement',
                    allowClear: true
                });
            })
        },
        save() { },
        reset() { },
        setLastContact() {
            const date = new Date();
            const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            document.getElementById('lcontactSelect').value = date.getFullYear().toString().concat('.').concat(month);
        }
    },
    renderATable() {
        const a = $.getJSON('/Content/json/dataAchievables.json', function (json) {
            $('.js-achievables-table').DataTable({
                data: json,
                columns: [
                    { data: 'category' },
                    { data: 'type' },
                    { data: 'achievement' },
                    { data: 'comment' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                "dom": '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });

        const types = $.getJSON('/Content/json/dataAchievables.json', function (json) {
            $('.js-types-table').DataTable({
                data: json,
                columns: [
                    { data: 'category' },
                    { data: 'type' },
                    { data: 'comment' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                "dom": '<"top"f>rt<"bottom"ilp><"clear">'
            });
        });
    },
}
