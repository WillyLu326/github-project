(function() {
    'use strict'

    angular
      .module('myApp', ['ui.router'])
      .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'template/main.html'
        })
        .state('main.man', {
            url: '/man',
            templateUrl: 'template/main.man.html',
            controller: 'manCtrl'
        })
        .state('main.woman', {
            url: '/woman',
            templateUrl: 'template/main.woman.html'
        })
        .state('main.child', {
            url: '/child',
            templateUrl: 'template/main.child.html'
        });
        $urlRouterProvider.otherwise('/main');
        $locationProvider.html5Mode(true);
      })
      .controller('myCtrl', function($scope) {
          $scope.name = 'Willy';
      })
      .controller('manCtrl', ['$scope', function($scope) {
          $scope.nums = [42, 42, 43, 43];
      }]);
})();
