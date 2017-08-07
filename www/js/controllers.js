angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
  };
})

.controller('LoginCtrl', function($scope, $stateParams) {
})

.controller('EmpresasCtrl', function($scope) {
  $scope.empresas = [
    { id: 1, nombre:'Best Day', info:'asdf',img:'' },
    { id: 2, nombre:'Price Travel', info:'asdf',img:'' },
    { id: 3, nombre:'DotNet', info:'asdf',img:'' },
    { id: 4, nombre:'MoonPalace', info:'asdf',img:'' },
    { id: 5, nombre:'SAT', info:'asdf',img:'' },
  ];
})

.controller('EmpresaCtrl', function($scope, $stateParams) {
})

.controller('CartaDePresentacionCtrl', function($scope, $stateParams) {
})

.controller('CartaDeAceptacionCtrl', function($scope, $stateParams) {
})

.controller('DefinicionDeProjectoCtrl', function($scope, $stateParams) {
})

.controller('CedulaDeRegistroCtrl', function($scope, $stateParams) {
})

.controller('CartaDeLiberacionCtrl', function($scope, $stateParams) {
});