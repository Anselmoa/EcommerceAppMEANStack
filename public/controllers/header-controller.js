angular.module('projetoGlobal')

.controller('HeaderCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
    console.log($scope.nome);
    $http({
        method: 'GET',
        url: '/categorias'
    }).then(function(response) {
        $scope.categorias = [];
        angular.forEach(response.data, function(categorias) {
            $scope.categorias.push(categorias);
        });
    });
    $scope.criarBanner = function() {
        $http({
            method: 'POST',
            url: '/produtosBanner/criar'
        }).then(function(response) {
            console.log(response);
        });
    };

$scope.procurarProduto = function(val) {
    return $http.get('produtos/procurar/' + val
    ).then(function(response){
        var nome = [];
                console.log(response);
        for (var i = 0; i < response.headers.length; i++) {
                nome.push(response.data.nome);
            }
        return nome;
    });
  };

    $scope.select = function(categoria) {
        $scope.selected = categoria.nome;
        console.log($scope.selected);
    };
    $scope.currentPath = $location.path();
}]);