import 'bootstrap/dist/css/bootstrap.css';
import './base/main.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import routing from './app.config';
import home from './features/home';
import resources from './features/resources';

angular.module('app', [uirouter, home, resources, ngAnimate])
	.config(routing);
