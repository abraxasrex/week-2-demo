//TODO: why wrap app and controllers in namespace?
  angular.module('exampleApp', ['ui.router']).config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider)=>{
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
  });
