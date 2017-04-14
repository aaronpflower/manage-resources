import angular from 'angular';

function tooltip() {
  return {
    restrict : 'EA',
    transclude : false,
    scope: {
        items: '='
    },
    template: require('./tooltip.html'),
    link: function (scope) {
        scope.toggleToolTip = function () {
            scope.showMe = !scope.showMe;
        };
    }
  }
}

export default angular.module('directives.tooltip', [])
    .directive('tooltip', tooltip)
    .name;
