import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import routing from './config';
import home from './home';
import resources from './resources';

const app = angular.module('app', [uirouter, home, resources, ngAnimate])
	.config(routing);

export default app;