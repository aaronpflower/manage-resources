export default class ResourcesController {
	constructor($scope, $state, $http) {
		this.$state = $state;
		this.$http = $http;
		this.$state.showForm = false;
		this.$state.showEdit = false;
		this.$state.showDelete = false;
		this.$state.formData = {};
		this.$state.resourceList = [];
		this.$state.resourceId = null;
	}

	toggleForm() {
		this.$state.showForm = !this.$state.showForm;
	}

	toggleEdit(id, type, title, resource) {
		this.$state.resourceId = id
		this.$state.formData.type = type
		this.$state.formData.title = title
		this.$state.formData.resource = resource
		this.$state.showEdit = !this.$state.showEdit;
	}

	toggleDelete(id) {
		this.$state.resourceId = id
		this.$state.showDelete = !this.$state.showDelete;
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
		return this.$http.delete('/api/resources/' + this.$state.resourceId)
			.then(function successCallback(response) {
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				console.log(response)
			});
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

	editResource() {
		return this.$http.put("/api/resources/" + this.$state.resourceId, this.$state.formData)
			.then(function successCallback(response) {
				this.$state.formData = {};
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				console.log(response)
			});
	}
}