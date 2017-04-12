
export default class ResourcesController {
  constructor($scope, $state, $http) {
    this.$state = $state;
    this.$http = $http;
    this.$state.showForm = false;
    this.$state.formData = {};
    this.$state.resourceList = [];
  }

  toggleForm() {
    this.$state.showForm = !this.$state.showForm;
  }

  getResources() {
      return this.$http.get('/api/resources')
        .then(function successCallback(response) {
            this.$state.resourceList = response.data;
        }.bind(this), function errorCallback(response) {
            console.log(response)
        })
  }

  deleteResources() {
      $scope.deleteTodo = function(id) {
      $http.delete('/api/resources/' + id)
          .success(function(data) {
              this.$state.resourceList;
              console.log(data);
          })
          .error(function(data) {
              console.log('error: ' + data);
          })
    }
  }

  addResource() {
    return this.$http.post("/api/resources/add", this.$state.formData)
    .then(function successCallback(response) {
        this.$state.formData = {};
        this.$state.resourceList = response.data;
    }.bind(this), function errorCallback(response) {
        console.log(response)
    });
  }
}