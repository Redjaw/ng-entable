(function(){
'use strict';
var myApp = angular.module('testApp', ['ngEntable']);

myApp.controller('mainCtrl', function ($scope) {
	$scope.tableModel = {
		
		"columns":[{
			"label":"test",
			"type":"checkbox"
		},{
			"label":"ID",
			"type":"number"
		},{
			"label":"City",
			"type":"string"
		},{
			"label":"Population",
			"type":"number"
		},{
			"label":"Average age",
			"type":"barchart",
			"maxValue":100
		},{
			"label":"actions",
			"type":"button",
			"actions":[
				{
					"function":function(){alert('ciao')},
					"label":"prova",
					"icon":"a"
				}
			]
		}],
		"data":[{
			"test":true,
			"ID":"011",
			"City":"turin",
			"Population":"900000",
			"Average age":56
		},{
			"ID":"012",
			"City":"milan",
			"Population":"1200000",
			"Average age":176
		},{
			"ID":"013",
			"City":"rome",
			"Population":"2000000",
			"Average age":80
		}],
		"style":{
			"table": {
				"width":"100%"
			}
		},
		"options": {
			"title":"City List"

		}
	};

}).config(["themeProvider", function (themeProvider) {
        themeProvider.setTheme("test");
    }]);
}())    