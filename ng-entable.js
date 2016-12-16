angular.module('ngEntable', [])
.directive('ngEntable', function(theme) {
  return {
  	restrict: "E",
  	scope : {
  		enModel: "=?"
  	},
    templateUrl: '/partials/table.tpl.html',
    link: function(scope,elem,attr){
      scope.theme = theme;
    }
  };
}).provider('theme', function() {
  var self = this;

  self.setTheme = function(themeNewName) {
    self.name = themeNewName;
  };

  self.$get = function () {
    return self;
  };
});
