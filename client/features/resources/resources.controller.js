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
		this.$state.statusMessage = null;
	}

	toggleForm() {
		return this.$state.showForm = !this.$state.showForm;
	}

	toggleEdit(id, type, title, resource) {
		this.$state.formData = {};
		return this.$state.showEdit = !this.$state.showEdit;
	}

	toggleDelete(id) {
		this.$state.formData = {};
		this.$state.showDelete = !this.$state.showDelete;
	}

	getResources() {
		return this.$http.get('/api/resources')
			.then(function successCallback(response) {
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				this.$state.statusMessage = 'Error occured'
			})
	}

	deleteResources() {
		return this.$http.delete('/api/resources/' + this.$state.resourceId)
			.then(function successCallback(response) {
				this.toggleDelete()
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				this.$state.statusMessage = 'Error occured'
			});
	}

	addResource() {
		return this.$http.post("/api/resources/add", this.$state.formData)
			.then(function successCallback(response) {
				this.$state.formData = {};
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				this.$state.statusMessage = 'Error occured'
		});
	}

	editResource() {
		this.$state.statusMessage = 'Please Wait...'
		return this.$http.put("/api/resources/" + this.$state.resourceId, this.$state.formData)
			.then(function successCallback(response) {
				this.toggleEdit();
				this.$state.formData = {};
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				this.$state.statusMessage = 'Error occured'
			});
	}
}