export default class ResourcesController {
	constructor($scope, $state, $http) {
		this.$state = $state;
		this.$http = $http;
		this.$state.showForm = false;
		this.$state.showEdit = false;
		this.$state.showDelete = false;
		this.$state.formData = {};
		this.$state.resourceList = [];
		this.$state.statusMessage = null;
		this.toggleEdit = this.toggleEdit.bind(this);
		this.toggleDelete = this.toggleDelete.bind(this);
		this.$state.currentResource = {};
		this.$state.resrouceToolTip = [
			{
				name: 'Edit',
				link: function (index, context) {
					context.$parent.showToolTip = false;
					$scope.resources.setCurrentResource(index)
					$scope.resources.toggleEdit()
				}
			}, {
				name: 'Delete',
				link: function(index, context) {
					context.$parent.showToolTip = false;
					$scope.resources.setCurrentResource(index)
					$scope.resources.toggleDelete()
				}
			}
		]
	}

	setCurrentResource(index) {
		let current = this.$state.resourceList.filter((item, i) => {
			return item._id === index;
		})
		this.$state.currentResource = Object.assign({}, current[0]);
		return this.$state.currentResource;
	}

	toggleForm() {
		return this.$state.showForm = !this.$state.showForm;
	}

	toggleEdit() {
		this.$state.formData = this.$state.currentResource;
		return this.$state.showEdit = !this.$state.showEdit;
	}

	toggleDelete() {
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
		return this.$http.delete('/api/resources/' + this.$state.currentResource._id)
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
		let data = {type: this.$state.formData.type, title: this.$state.formData.title, resource: this.$state.formData.resource}
		return this.$http.put("/api/resources/" + this.$state.currentResource._id, data)
			.then(function successCallback(response) {
				this.toggleEdit();
				this.$state.formData = {};
				this.$state.resourceList = response.data;
			}.bind(this), function errorCallback(response) {
				this.$state.statusMessage = 'Error occured'
			});
	}
}