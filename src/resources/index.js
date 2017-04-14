import '../css/main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './resources.routes';
import ResourcesController from './resources.controller';
import tooltip from '../directives/tooltip.directive';

export default angular.module('app.resources', [uirouter, tooltip])
	.config(routing)
	.controller('ResourcesController', ResourcesController)
	.name;