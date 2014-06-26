'use strict';

/**
 * @ngdoc function
 * @name newAngularBoilerplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newAngularBoilerplateApp
 */
angular.module('newAngularBoilerplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
