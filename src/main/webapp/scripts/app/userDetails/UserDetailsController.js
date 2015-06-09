'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UserDetailsController', function ($scope, Principal, UserDetails, History) {

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
            $scope.loadHistory();
            $scope.loadUserDetails();
        });

        $scope.loadUserDetails = function() {
            UserDetails.data.get({login:$scope.account.login}, function(result) {
                $scope.userDetails = result;
            });
        };

        $scope.loadHistory = function() {
            History.data.query({login:$scope.account.login}, function(result) {
                $scope.history = result;
            });
        };



    });
