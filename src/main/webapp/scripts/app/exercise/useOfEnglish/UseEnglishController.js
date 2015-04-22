'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UseEnglishController', function ($scope,$state, Exercise) {
        $scope.part = 1;
        $scope.userResponses=[];
        $scope.exercise = {};

        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };
        $scope.setPart = function(partNumber){
            $scope.part = partNumber;
            $scope.exercise = $scope.exercises[partNumber-1];
        };

        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.loadAll = function() {
            Exercise.exam.query({examName:"fce1", exerciseType:"USE_OF_ENGLISH"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();

        $scope.check = function(partNumber){
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
                var selectedText = $("#select-" + response.id + " option:selected").text();
                if(selectedText === response.correct[0]){
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.checkPart2 = function(){
            $scope.exercises[1].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                if(inputText.trim().toLowerCase() === response.correct[0].trim().toLowerCase()){
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.checkPart3 = function(){
            $scope.exercises[2].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                if(inputText.trim().toLowerCase() === response.correct[0].trim().toLowerCase()){
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.checkPart4 = function(){
            $scope.exercises[3].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                if(inputText.trim().toLowerCase() === response.correct[0].trim().toLowerCase()){
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };


    });