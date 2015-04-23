'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ReadingController', function ($scope,$state, Exercise) {

        $scope.part = 1;
        $scope.exercise = {};

        $scope.loadAll = function() {
            Exercise.exam.query({examName:"fce1", exerciseType:"READING"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();

        $scope.setPart = function(partNumber){
            $scope.part = partNumber;
            $scope.exercise = $scope.exercises[partNumber-1];
        };

        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };

        $scope.check = function(){
            if($scope.part === 1){
                $scope.checkPart1();
            }else if($scope.part === 2){
                $scope.checkPart2();
            }else if($scope.part === 3){
                $scope.checkPart3();
            }else if($scope.part === 4){
                $scope.checkPart4();
            }
        };

        $scope.checkPart1 = function(){
            $scope.exercise.responses.forEach(function(response){
                var selectedAnswer = $('input:radio[name=radio-'+response.id+']:checked').val();
                if(selectedAnswer === response.correct[0]){
                    $("#spanR-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#spanR-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };


    });
