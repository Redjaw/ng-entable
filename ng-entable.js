/*Copyright (c) 2016 Redjaw <davide.vernassa@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

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
      var _tw = document.querySelector('.enTable').clientWidth;
      scope._defaultColPosition = function(i){
        var colW = document.querySelector('.enTable tr th:nth-child('+(i+1)+')').offsetLeft + document.querySelector('.enTable tr th:nth-child('+(i+1)+')').clientWidth;
        var _th = document.querySelector('.enTable').clientHeight+'px';
        return {left:colW+'px',height:_th};
      }

      var pressed = false;
      var helper  = undefined;
      var column  = undefined;
      var startX, startWidth;

      scope.startDrag = function(e,i){
        helper  = e.target;
        pressed = true;
        startX  = helper.offsetLeft;
        column = document.querySelector('.enTable tr th:nth-child('+(i+1)+')');
        startWidth = column.clientWidth;
      }

      elem.bind("mouseup",function(e){
        pressed = false;
      })

      elem.bind("mousemove",function(e){
        e.preventDefault();
        if(pressed){
          helper.style.left = (e.clientX-15)+'px';
          column.width = startWidth - (startX-helper.offsetLeft)+"px" ;
        }
      })

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
}).directive('entablePagination', function(theme) {
  return {
    restrict: "E",
    template: '<div class="entablePagination"> <a href="#" ng-repeat="num in pages">{{num}}</a></div>',
    replace:true,
    link: function(scope,elem,attr){
      scope.pages=[1,2,3,4,5];
    }
  };
});