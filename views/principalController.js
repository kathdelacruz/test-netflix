angular
  .module("main-app")
  .controller("PrincipalController", PrincipalController);

PrincipalController.$inject = ['$scope', '$state', '$location', '$http'];
function PrincipalController($scope, $state, $location, $http) {

  activate();

  function activate(name) {
    var url = 'http://192.168.99.100:3000/films';
    $http({
      method: "GET",
      url: url
    })
    .then(function(response) {
      if(response.status===200){
        console.log(response.data);
        $scope.dataList = response.data;
      } else {
        console.log('Error en la consulta');
      };
    }, function(error) {
      console.log(error);
    });
  };

}