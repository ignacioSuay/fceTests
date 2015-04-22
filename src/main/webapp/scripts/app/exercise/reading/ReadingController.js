'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ReadingController', function ($scope,$state) {

        $scope.loadAll = function() {
            Exercise.exam.query({examName:"fce1", exerciseType:"READING"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();


    });