'use strict';

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl',
  });
}])

myApp.controller('ListCtrl', ['$scope', 'apiService', function($scope, apiService) {
  $scope.items = []
  apiService.getItems().then(function(items) {
    $scope.items = items.data
  })
}]);
