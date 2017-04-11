export default class HomeController {
  constructor($scope, $state) {
    this.$state = $state;
    this.$state.showForm = false;
  }

  toggleForm() {
    this.$state.showForm = !this.$state.showForm;
  }
}