import angular from 'angular';

function tooltip() {
  return {
    restrict: 'E',
    template: "<i id='toggle' class='fa fa-chevron-down tooltip-toggle' aria-hidden='true'></i><div id='tooltip' class='tooltip bottom'><div class='tooltip-arrow'></div><div class='tooltip-inner'><p ng-click='resources.toggleEdit(this.item._id, this.item.type, this.item.title, this.item.resource)'>Edit</p><p ng-click='resources.toggleDelete(this.item._id)'>Delete</p></div></div>",
    link: function ($scope, element, attrs) {
        element.on('click', function (e) {
            if (e.target.id === 'toggle') {
                if (element[0].lastChild.classList.contains('show')) {
                    return element[0].lastChild.classList.remove('show')
                }
                return element[0].lastChild.classList.add('show')
            }
        });
    }
  }
}

export default angular.module('directives.tooltip', [])
    .directive('tooltip', tooltip)
    .name;
