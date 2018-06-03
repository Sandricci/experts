﻿var global = {};
global.search = {
    context: null,
    container: null,
    init(context, container) {
        global.search.context = context || '';
        global.search.container = container;
        const json = $.getJSON('/Content/json/data' + global.search.context + '.json', function (json) {
            $('.js-search').select2({
                data: json.results,
                placeholder: 'Select an achievement',
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
        $(global.search.container).DataTable({ "dom": '<"top"i>rt<"bottom"flp><"clear">' })
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
                        backgroundColor: ['#ffff00', '#558b2f']
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
    }
}
