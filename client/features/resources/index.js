import '../../base/main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './resources.routes';
import ResourcesController from './resources.controller';

export default angular.module('app.resources', [uirouter])
  .config(routing)
  .controller('ResourcesController', ResourcesController)
  .name;