import angular from 'angular';

function tooltip() {
  return {
    restrict : 'EA',
    transclude : false,
    scope: {
        items: '=',
        index: '='
    },
    template: require('./tooltip.html'),
    link: function (scope) {
        scope.toggleToolTip = function () {
            scope.showToolTip = !scope.showToolTip;
        };
    }
  }
}

export default angular.module('directives.tooltip', [])
    .directive('tooltip', tooltip)
    .name;
