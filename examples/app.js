'use strict';
var myApp = angular.module('testApp', ['ngEntable']);

myApp.controller('mainCtrl', function ($scope) {
	$scope.tableModel = [{
		"colA":"valA1",
		"colB":"valB1",
		"colC":"valC1"
	},{
		"colA":"valA2",
		"colB":"valB2",
		"colC":"valC2"
	},{
		"colA":"valA3",
		"colB":"valB3",
		"colC":"valC3"
	}];

	$scope.tableStyle = {
		"td" : {
			"border":"1px solid grey"
		}
	}

});
      