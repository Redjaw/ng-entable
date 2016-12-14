angular.module('ngEntable', [])
.directive('ngEntable', function() {
  return {
  	restrict: "E",
  	scope : {
  		enClass: "=?",
  		enStyle: "=?",
  		enModel: "=?"

  	},
    templateUrl: '/partials/table.tpl.html',
    link: function(scope,elem,attr){

    }
  };
});