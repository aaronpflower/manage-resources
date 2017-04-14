import angular from 'angular';

function tooltip() {
  return {
    restrict: 'E',
    template: "<i ng-click=\"toggleToolTip()\" id='toggle' class='fa fa-chevron-down tooltip-toggle' aria-hidden='true'></i><div ng-show=\"showMe\" id='tooltip' class='tooltip bottom'><div class='tooltip-arrow'></div><div class='tooltip-inner'><p ng-click=\"toggleEditForm()\">Edit</p><p ng-click=\"toggleDeleteForm()\"'>Delete</p></div></div>",
    link: function (scope) {
        scope.toggleToolTip = function () {
            scope.showMe = !scope.showMe;
        };
        scope.toggleDeleteForm = function () {
            scope.showMe = !scope.showMe;
            this.$parent.resources.$state.resourceId = this.item._id
            this.$parent.resources.$state.showDelete = !this.$parent.resources.$state.showDelete
        }
        scope.toggleEditForm = function () {
            this.$parent.resources.$state.resourceId = this.item._id
            this.$parent.resources.$state.formData.type = this.item.type
            this.$parent.resources.$state.formData.title = this.item.title
            this.$parent.resources.$state.formData.resource = this.item.resource
            scope.showMe = !scope.showMe;
            this.$parent.resources.$state.showEdit = !this.$parent.resources.$state.showEdit
        }
    }
  }
}

export default angular.module('directives.tooltip', [])
    .directive('tooltip', tooltip)
    .name;
