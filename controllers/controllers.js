app.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location, $auth) {
  $scope.hello = "hello"
  $scope.sidebar = true;
  $scope.toggleMenu = function() {
    $scope.sidebar = !$scope.sidebar
  }

}])
