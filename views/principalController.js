angular
  .module("main-app")
  .controller("PrincipalController", PrincipalController);

PrincipalController.$inject = ['$scope', '$state', '$location', '$http'];
function PrincipalController($scope, $state, $location, $http) {
  console.log('hola');

  $scope.activate = activate;

  function activate(name) {
    console.log(name);
    var url = 'http://www.omdbapi.com/?t=' + name;
    $http({
      method: "GET",
      url: url
    })
    .then(function(response) {
      if(response.status===200){
        $scope.data = response.data;
        console.log($scope.data);
      } else {
        console.log('Error en la consulta');
      };
    }, function(error) {
      console.log(error);
    });
  };

}