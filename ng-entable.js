angular.module('ngEntable', [])
.directive('ngEntable', function() {
  return {
  	restrict: "E",
  	scope : {
  		enModel: "=?"
  	},
    templateUrl: '/partials/table.tpl.html',
    controller: function($scope,theme){

    },
    link: function(scope,elem,attr){

    }
  };
}).provider('theme', function() {

  this.setTheme = function(themeNewName) {
    this.themeName = themeNewName;
  };

  this.$get = function () {
    return this;
  };
});
