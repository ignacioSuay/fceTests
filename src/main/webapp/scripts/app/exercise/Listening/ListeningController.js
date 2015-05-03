'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ListeningController', function ($scope,$state, Exercise) {

        $scope.part = 1;
        $scope.exercise = {};

        $scope.loadAll = function() {
            Exercise.exam.query({examName:"fce1", exerciseType:"SPEAKING"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();

        $scope.setPart = function(partNumber){
            $scope.part = partNumber;
            $scope.exercise = $scope.exercises.filter(function(exercise){
                return exercise.exerciseType === "SPEAKING_"+ partNumber;
            })[0];
        };

        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };

        //$scope.watch("exercise");
    });