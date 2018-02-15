import angular from "angular";
import uirouter from "angular-ui-router";
import route from './login.route';
import LoginController from './Login.controller';

var loginComponent = angular.module('newsfeed.login', [uirouter])
    .config(route)
    .controller('LoginController', LoginController)
    .name;

export default loginComponent;