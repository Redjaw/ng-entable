(function() {
    'use strict';
    var myApp = angular.module('testApp', ['ngEntable']);

    myApp.controller('mainCtrl', function($scope) {
        $scope.actions = [{
            "label": "prova",
            "icon": "fa fa-trash",
            "function": function(item, e) {
                for (var i in $scope.tableModel.data) {
                    if ($scope.tableModel.data[i].$$hashKey == item.$$hashKey) {
                        $scope.tableModel.data.splice(i, 1);
                    }
                }
            }
        }]
        $scope.tableModel = {

            "columns": [{
                "label": "ID",
                "name": "id",
                "type": "number"
            }, {
                "label": "City",
                "name": "city",
                "type": "string"
            }, {
                "label": "Population",
                "name": "population",
                "type": "number"
            }, {
                "label": "Average age",
                "name": "averageAge",
                "type": "barchart",
                "maxValue": 100
            }],
            "data": [{
                "test": true,
                "id": "011",
                "city": "turin",
                "population": 900000,
                "averageAge": 56
            }, {
                "id": "012",
                "city": "milan",
                "population": 1200000,
                "averageAge": 176
            }, {
                "id": "013",
                "city": "rome",
                "population": 2000000,
                "averageAge": 80
            }, {
                "id": "014",
                "city": "rome",
                "population": 8000000,
                "averageAge": 23
            }, {
                "id": "015",
                "city": "bologna",
                "population": 200000,
                "averageAge": 45
            }],
            "style": {
                "table": {
                    "width": "100%"
                }
            },
            "options": {
                "title": "City List",
                "multiSelectable": true

            }
        };

    }).config(["themeProvider", function(themeProvider) {
        themeProvider.setTheme("test");
    }]);
}())