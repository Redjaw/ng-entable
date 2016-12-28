'use strict';
var myApp = angular.module('testApp', ['ngEntable']);

myApp.controller('mainCtrl', function ($scope) {
	$scope.tableModel = {
		
		"labels":["ID","City","Population","Test"],
		"data":[{
			"ID":"011",
			"City":"turin",
			"Population":"900000",
			"test":1
		},{
			"ID":"012",
			"City":"milan",
			"Population":"1200000",
			"test":1
		},{
			"ID":"013",
			"City":"rome",
			"Population":"2000000",
			"test":1
		}],
		"style":{
			"table": {
				"width":"100%"
			},
			"td" : {
				"border-bottom":"1px solid grey"
			},
			"tr" : {
				"height": "30px"
			}
		},
		"options": {
			"title":"City List"

		}
	};

}).config(["themeProvider", function (themeProvider) {
        themeProvider.setTheme("test");
    }]);
      