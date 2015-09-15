'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ContactController', function ($scope, $http) {

        $scope.emailSent= false;

        $scope.email = {};

        $scope.sendMeEmail = function(){
            $http.post("api/sendMeEmail", $scope.email).success(function(){
                $scope.emailSent= true;
            });
        }

    });