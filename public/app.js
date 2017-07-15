var app = angular.module('projetoGlobal', ['ui.router', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/home.view.html',
            controller: 'HomeCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile/profile.view.html',
            controller: 'ProfileCtrl'
        });
}]);

//Diretiva para fazer o preventDefault no elemento a
app.directive('a', function() {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            $(element).click(function(event) {
                event.preventDefault();
            });
        }
    };
});