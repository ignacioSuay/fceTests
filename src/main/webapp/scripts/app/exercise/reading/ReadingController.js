'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ReadingController', function ($scope,$state, Exercise, UserDetails, Principal, $stateParams) {

        $scope.part = 1;
        $scope.exercise = {};
        $scope.options = {interval :1000};

        if(Principal.isAuthenticated) {
            Principal.identity().then(function (account) {
                $scope.account = account;
                $scope.isAuthenticated = Principal.isAuthenticated;
            });
        }

        $scope.loadAll = function() {
            Exercise.exam.query({examName:$stateParams.exam, exerciseType:"READING"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();

        $scope.setPart = function(partNumber){
            $scope.options.resetTimer();
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
            $scope.score = 0;
            if($scope.part === 1){
                $scope.checkPart1();
            }else if($scope.part === 2){
                $scope.checkPart2();
            }else if($scope.part === 3){
                $scope.checkPart3();
            }

            $scope.saveUserDetails();
        };

        $scope.checkPart1 = function(){
            $scope.exercise.responses.forEach(function(response){
                var selectedAnswer = $('input:radio[name=radio-'+response.id+']:checked').val();
                if(selectedAnswer === response.correct[0]){
                    $scope.score++;
                    $("#spanR-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#spanR-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.checkPart2 = function(){
            $scope.exercise.responses.forEach(function(response){
                var selectedText = $("#selectR-" + response.correct[0] + " option:selected").text();
                if(parseInt(selectedText) === response.id){
                    $scope.score++;
                    $("#spanR-" + response.correct[0]).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#spanR-" + response.correct[0]).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.checkPart3 = function(){
            $scope.exercise.responses.forEach(function(response){
                var selectedAnswer = $('input:radio[name=radioR-'+response.id+']:checked').val();
                if(selectedAnswer === response.correct[0]){
                    $scope.score++;
                    $("#span3R-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                }else{
                    $("#span3R-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                }
            });
        };

        $scope.saveUserDetails = function(){
            if(!$scope.account){
                return;
            }
            var score = $scope.score + "/" + $scope.exercise.responses.length;
            var seconds = $scope.options.elapsedTime.getTime() / 1000;
            var userDetails= {id: null, login: $scope.account.login, exercisesCompleted:[{id: null, exerciseId: $scope.exercise.id, when: new Date(), examName: $scope.exercise.examName, time: seconds, exerciseType: $scope.exercise.exerciseType, score: score, userResponses:null}]};
            UserDetails.data.save(userDetails, function(){
                console.log("user details saved succesfull");
            }, function(){
                console.log("error saving user details")
            });
        };


    });
