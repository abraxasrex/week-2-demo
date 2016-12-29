//TODO: why wrap app and controllers in namespace?
  angular.module('exampleApp', ['ui.router', 'ngMaterial']).config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $mdThemingProvider: ng.material.IThemingProvider)=>{
    $stateProvider
           .state('Home', {
               url: '/',
               templateUrl: "views/home.html",
               controller: mainController,
               controllerAs: 'vm'
           })
           .state('Page1', {
               url: '/page1',
               templateUrl: "views/page1.html",
               controller: page1Controller,
               controllerAs: 'vm'
           })
           .state('Details', {
              url: '/details/:id',
              templateUrl: 'views/details.html',
              controller: detailsController,
              controllerAs: 'vm'
        });
       $urlRouterProvider.otherwise('/');
       $locationProvider.html5Mode(true);
       //material design fun times:
       $mdThemingProvider
         .theme('default')
         .primaryPalette('indigo')
         .accentPalette('pink')
         .warnPalette('red')
         .backgroundPalette('blue-grey');
  });
