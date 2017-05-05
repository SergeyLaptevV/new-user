var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    console.log("test");
    /*
     $scope.data=[];
     */
    $scope.data=[
        {sname:"Conrad", fname:"Wilkerson",tl:"8333-333-33-33",gend:"male",ag:"18"},
        {sname:"Michael", fname:"Hart",tl:"8555-555-55-55",gend:"male",ag:"42"},
        {sname:"Solomon", fname:"Pierce",tl:"8999-999-99-99",gend:"male",ag:"30"}
    ];
    $scope.addNewUser = function () {
        $scope.data.push({
            sname: $scope.firstName,
            fname: $scope.lastName,
            tl: $scope.phone,
            gend:$scope.gender,
            ag:$scope.age
        });
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.phone = "";
        $scope.gender = "";
        $scope.age = "";
    };

    $scope.removeItem = function (x) {
        $scope.data.splice(x, 1);
    };
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});