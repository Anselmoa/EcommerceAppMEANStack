angular.module('projetoGlobal')


.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

    iniciarCarousel();
    iniciarProductSlider();

    function iniciarCarousel() {
        $('#carousel-example-generic').carousel({
            interval: 5000
        });

        $http({
            method: 'GET',
            url: '/produtosBanner',
        }).then(function(response) {
            $scope.produtosBanner = response.data;
        });
    }


    function iniciarProductSlider() {
        $('#product-Slider').carousel({
            interval: 0
        });
        $scope.produtosDestaque = [];
        $scope.produtosDestaque1 = [];
        $scope.produtosDestaque2 = [];

        $http({
            method: 'GET',
            url: '/produtos'
        }).then(function(response) {
            angular.forEach(response.data, function(produtos) {
                $scope.produtosDestaque1.push(produtos);
            });
            angular.forEach($scope.produtosDestaque1, function(produto) {
                $scope.produtosDestaque2.push(produto);
            });
            for (var t = 0; t < $scope.produtosDestaque2.length; t += 4) {
                $scope.produtosDestaque.push($scope.produtosDestaque2.slice(t, t + 4));
            }
        });
    }
}]);