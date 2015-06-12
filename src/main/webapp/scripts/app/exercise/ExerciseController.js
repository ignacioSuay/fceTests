'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ExerciseController', function ($scope,$state, Exercise, Principal, $stateParams) {

        //change nav active when click
        $(".nav a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.examName = $state.params.exam;

    });
