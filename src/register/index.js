import angular from "angular";
import uirouter from "angular-ui-router";
import route from './register.route';
import RegisterController from './register.controller';

var registerComponent = angular.module('newsfeed.register', [uirouter])
    .config(route)
    .controller('RegisterController', RegisterController)
    .name;

export default registerComponent;