var global = {};
global.search = {
    context: null,
    container: null,
    init(context, container) {
        global.search.context = context || '';
        global.search.container = container;
        $.getJSON('/Content/json/data' + global.search.context + '.json', function (json) {
            $('.js-search')
                .select2({
                    data: json.results,
                    placeholder: 'Filter by achievement',
                    allowClear: true
                })
                .change(global.search.updateTable)
        });
    },
    updateTable() {
        const selected = $('.js-search').select2('data');
        $(global.search.container).DataTable().destroy();
        $(global.search.container).DataTable({ dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-3'l><'col-sm-5'i><'col-sm-4'p>>" })
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
            experience = this.generateChart('experience', 'Experience towards Role', 45)
            hardkills = this.generateChart('hardskills', 'Hard Skills towards Role', 57)
            softskills = this.generateChart('softskills', 'Soft Skills towards Role', 67)
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
                }
            })
        }
    }
}
global.achievements = {
    add: {
        init() {
            $.getJSON('/Content/json/data.json', function (db) {
                $('.add-achievement-select')
                    .select2({
                        data: db.results,
                        placeholder: 'Select an achievement',
                        allowClear: true
                    })
                    .on('select2:select', global.achievements.add.onAchievableSelected)
            })
        },
        onAchievableSelected(e) {
            $('.js-achievable-description').fadeOut(200,function () {
                document.getElementById('js-achievable-desc-title').innerHTML = e.params.data.text;
                document.getElementById('js-achievable-desc-text').innerHTML = e.params.data.desc;
                $('.js-achievable-description').fadeIn(200)
            })
        },
        onAchievableNotFound(e) {
            
        },
        matchCustom(params, data) {
            if ($.trim(params.term) === '') {
                return data;
            }

            if (typeof data.text === 'undefined') {
                return null;
            }

            if (data.text.indexOf(params.term) > -1) {
                var modifiedData = $.extend({}, data, true);
                modifiedData.text += ' (matched)';
                return modifiedData;
            }

            global.achievements.add.onAchievableNotFound();
            return null;
        },
        setLastContact() {
            const date = new Date();
            const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            document.getElementById('lcontactText').value = date.getFullYear().toString().concat('.').concat(month);
        }
    },
    renderATable() {
        $.getJSON('/Content/json/dataAchievements.json', function (json) {
            $('.js-achievement-table').DataTable({
                data: json,
                columns: [
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'comment' },
                    { data: 'lastContact', className: 'text-right' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-3'l><'col-sm-5'i><'col-sm-4'p>>",
                createdRow: function (row, data, index) {
                    $('td', row).eq(0).html('<a href="achievables/details">'+data["achievement"]+'</a>')
                }
            });
        });
    },
    generateStatus(row, data, index) {
        const status = data["status"];
        if (status < 33)
            $('td', row).eq(0).html('<div class="atr-status atr-status-danger">' + status + ' %</div>');
        else if (status > 32 && status < 80)
            $('td', row).eq(0).html('<div class="atr-status atr-status-warning">' + status + ' %</div>');
        else if (status > 80)
            $('td', row).eq(0).html('<div class="atr-status atr-status-success">' + status + ' %</div>');
        $('td', row).eq(1).html('<a href="achievables/details">' + data["achievement"] + '</a>')
    },
    renderAtrTables() {
        $.getJSON('/Content/json/dataATR.json', function (json) {
            $('.js-achievement-role-table').DataTable({
                data: json,
                columns: [
                    { data: 'status', orderable: false },
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'amountExpected', className: 'text-center' },
                    { data: 'amountOwned', className: 'text-center' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                createdRow: global.achievements.generateStatus,
                dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-3'l><'col-sm-5'i><'col-sm-4'p>>"
            });
        });
    }
}
global.achievables = {
    create: {
        init(select) {
            $.getJSON('/Content/json/dataFilterTypes.json', function (db) {
                $(select).select2({
                    data: db.results,
                    placeholder: 'Filter types',
                    allowClear: true
                });
            });
        }
    },
    search: {
        container: null,
        init(filter, container) {
            this.container = container;
            $.getJSON('/Content/json/dataFilterAchievables.json', function (db) {
                $(filter)
                    .select2({
                        data: db.results,
                        placeholder: 'Filter achievables',
                        allowClear: true
                    })
                    .change(function () {
                        global.achievables.search.updateTable(filter);
                    });
            });
        },
        updateTable(filter) {
            const selected = $(filter).select2('data');
            $(global.achievables.search.container).DataTable().destroy();
            $(global.achievables.search.container).DataTable({ "dom": '<"top"i>rt<"bottom"flp><"clear">' })
                .search(selected[0].text);
            $(global.achievables.search.container).DataTable()
                .draw();
        },
    },
    renderTable() {
        const a = $.getJSON('/Content/json/dataAchievables.json', function (json) {
            $('.js-achievables-table').DataTable({
                data: json,
                columns: [
                    { data: 'achievement' },
                    { data: 'type' },
                    { data: 'category' },
                    { data: 'comment' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-3'l><'col-sm-5'i><'col-sm-4'p>>",
                createdRow: function (row, data, index) {
                    $('td', row).eq(0).html('<a href="achievables/details">' + data["achievement"] + '</a>')
                }
            });
        });
    }
},
global.types = {
    search: {
        container: null,
        init(filter, container) {
            this.container = container;
            $.getJSON('/Content/json/dataFilterTypes.json', function (db) {
                $(filter)
                    .select2({
                        data: db.results,
                        placeholder: 'Filter types',
                        allowClear: true
                    });
            });

            $(filter).change(function () {
                global.types.search.updateTable(filter);
            });
        },
        updateTable(filter) {
            const selected = $(filter).select2('data');
            $(global.types.search.container).DataTable().destroy();
            $(global.types.search.container).DataTable({ "dom": '<"top"i>rt<"bottom"flp><"clear">' })
                .search(selected[0].text);
            $(global.types.search.container).DataTable()
                .draw();
        }
    },
    renderTable() {
        const types = $.getJSON('/Content/json/dataTypes.json', function (json) {
            $('.js-achievables-types-table').DataTable({
                data: json,
                columns: [
                    { data: 'type' },
                    { data: 'category' },
                    { data: 'comment' },
                    { data: 'actions', className: 'text-center', orderable: false }
                ],
                dom: "<'row'<'col-sm-12'tr>><'row'<'col-sm-3'l><'col-sm-5'i><'col-sm-4'p>>"
            });
        });
    }
},
global.roles = {
    developer: {
        renderTable(table) {
            $.getJSON('/Content/json/dataRoles.json', function (json) {
                $(table).DataTable({
                    data: json.developer,
                    columns: [
                        { data: 'name', width: '50%'},
                        { data: 'achievables.length', className: 'text-center'},
                        { data: 'actions', className: 'text-center', orderable: false }
                    ],
                    paging: false,
                    info: false
                });
            });
        }
    },
    other: {
        renderTable(table) {
            $.getJSON('/Content/json/dataRoles.json', function (json) {
                $(table).DataTable({
                    data: json.other,
                    columns: [
                        { data: 'name', width: '50%' },
                        { data: 'achievables.length', className: 'text-center'},
                        { data: 'actions', className: 'text-center', orderable: false }
                    ],
                    paging: false,
                    info: false
                });
            });
        }
    }
}