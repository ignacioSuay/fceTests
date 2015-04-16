'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UserDetailsController', function ($scope, Principal, UserDetails) {

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
            $scope.loadAll();
        });

        $scope.loadAll = function() {
            UserDetails.data.query({userId:$scope.account.login}, function(result) {
                $scope.userDetails = result;
            });
        };



    });