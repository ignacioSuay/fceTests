'use strict';

angular.module('firstcertificatetestsApp')
    .controller('WritingController', function ($scope,$state, Exercise, $stateParams) {

        $scope.part = parseInt($stateParams.part);

        $scope.loadAll = function() {
            Exercise.exam.query({examName:$stateParams.exam, exerciseType:"WRITING_" + $scope.part}, function(result) {
                $scope.exercise= result;
            });
        };

        $scope.loadAll();

        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };
    });