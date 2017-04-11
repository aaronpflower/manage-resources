import 'bootstrap/dist/css/bootstrap.css';
import './base/main.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import about from './features/about';

angular.module('app', [uirouter, home])
	.config(routing);
