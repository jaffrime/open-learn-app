var app = angular.module('learnapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      // controller: 'mainCtrl',
      // resolve: {
      //   myPosts: function($http) {
      //     return $http.get('/posts');
      //   }
      // }
    })

  $urlRouterProvider.otherwise('home');

});
