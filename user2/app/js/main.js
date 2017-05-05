var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
    console.log("test");


    $scope.sendRequest = function () {
        $http.get("https://jsonplaceholder.typicode.com/users").success(function (response) {
            $scope.items = response;
        })
    };
    $scope.sendRequest();

    $scope.addNewUser = function () {
        $scope.items.push({
            name: $scope.name,
            username: $scope.username,
            email: $scope.email,
            phone: $scope.phone,
            website: $scope.website

        });
        $scope.name = "";
        $scope.username = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.website = "";
    };

    $scope.removeItem = function (x) {
        $scope.items.splice(x, 1);
    };
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});