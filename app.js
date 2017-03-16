angular
  .module("main-app", ["ui.router"])
  .config(function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $stateProvider
      .state("principal", {
        url: "/",
        templateUrl: "views/principal.html",
        controller: "PrincipalController as ctrl"
      })
  });