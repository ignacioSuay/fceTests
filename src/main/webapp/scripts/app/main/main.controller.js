'use strict';

angular.module('firstcertificatetestsApp')
    .controller('MainController', function ($scope, Principal, $http) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.emailSent= false;

        $scope.email = {};

        $scope.sendMeEmail = function(){
            $http.post("api/sendMeEmail", $scope.email).success(function(data){
                $scope.emailSent= true;
            });
        };

        $('#navo').addClass("headerNav");
        $('#mainNav').addClass("navbar-fixed-top");

        $('#mainNav').affix({
            offset: {
                top: 100
            }
        });

        $scope.$on("$destroy", function() {
            $(window).off('.affix');
            $('#navo').removeClass("headerNav");
            $('#mainNav').removeClass("navbar-fixed-top");
            $('#mainNav').removeClass("affix affix-top affix-bottom").removeData("bs.affix");
        });
    });
