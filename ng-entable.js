(function() {
    'use strict';

    angular.module('ngEntable', [])
        .directive('ngEntable', function(theme) {
            return {
                restrict: "E",
                scope: {
                    actions: "=?",
                    enModel: "=?",
                    resize: "@?"
                },
                templateUrl: '/partials/table.tpl.html',
                link: function(scope, elem, attr) {
                    scope.theme = theme;
                    scope.sortingCol = false;

                    scope.sort = function(col, e) {
                        if (col.name == scope.orderCol) {
                            scope.sortingCol = scope.sortingCol ? false : true;
                        }
                        scope.orderCol = col.name;
                    }

                    scope.selectAll = function(e) {
                        angular.forEach(scope.enModel.data, function(item) {
                            item.selected = scope.allSelected ? false : true;
                        });
                        scope.allSelected = scope.allSelected ? false : true;
                    }

                    scope.getBarChartFill = function(value, maxValue) {
                        return (value / maxValue) * 100 + '%';
                    }

                    if (scope.resize) {
                        //Column resizer specific methods
                        var _tw = document.querySelector('.enTable').clientWidth;

                        //Get columns position for the resizer grips
                        scope._defaultColPosition = function(i) {
                            var colW = document.querySelector('.enTable tr th:nth-child(' + (i + 1) + ')').offsetLeft + document.querySelector('.enTable tr th:nth-child(' + (i + 1) + ')').clientWidth;
                            var _th = document.querySelector('.enTable').clientHeight + 'px';
                            return { left: colW + 'px', height: _th };
                        }

                        //Drag methods for the column resizer grips
                        var pressed = false;
                        var helper = undefined;
                        var column = undefined;
                        var startX, startWidth;

                        scope.startDrag = function(e, i) {
                            helper = e.target;
                            pressed = true;
                            startX = helper.offsetLeft;
                            column = document.querySelector('.enTable tr th:nth-child(' + (i + 1) + ')');
                            startWidth = column.clientWidth;
                        }

                        elem.bind("mouseup", function(e) {
                            pressed = false;
                            scope.$apply();
                        })

                        elem.bind("mousemove", function(e) {
                            if (pressed) {
                                e.preventDefault();
                                window.getSelection().removeAllRanges();
                                helper.style.left = (e.clientX - 15) + 'px';
                                column.width = startWidth - (startX - helper.offsetLeft) + "px";
                            }
                        })
                    }
                }
            };
        }).provider('theme', function() {
            var self = this;

            self.setTheme = function(themeNewName) {
                self.name = themeNewName;
            };

            self.$get = function() {
                return self;
            };
        })

    //Pagination directive
    .directive('entablePagination', function(theme) {
        return {
            restrict: "E",
            //template: '<nav aria-label="Page navigation" class="enTablePagination"><ul><li ng-repeat="num in pages"><a href="#">{{num}}</a></li></ul></nav>',
            templateUrl: '/partials/pagination.tpl.html',
            replace: true,
            link: function(scope, elem, attr) {
                scope.pages = [1, 2, 3, 4, 5];
            }
        };
    });
}());