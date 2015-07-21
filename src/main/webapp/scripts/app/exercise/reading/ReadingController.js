'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ReadingController', function ($scope,$state, Exercise, UserDetails, Principal, $stateParams) {

        $scope.part = parseInt($stateParams.part);
        $scope.exercise = {};
        $scope.options = {interval :1000};
        $scope.userResponses=[];

        if(Principal.isAuthenticated) {
            Principal.identity().then(function (account) {
                $scope.account = account;
                $scope.isAuthenticated = Principal.isAuthenticated;
            });
        }

        $scope.loadAll = function() {
            Exercise.exam.query({examName:$stateParams.exam, exerciseType:"READING_" + $scope.part}, function(result) {
                $scope.exercise= result;
                if($stateParams.data){
                    $scope.data = $stateParams.data;
                }
            });
        };

        $scope.loadAll();

        $scope.loadAnswers = function(data){
            data.forEach(function(answer){
               // $scope.userResponses[answer.id] = answer.response;
                if($scope.part===1)
                    $('input:radio[name=radio-'+answer.id+']').filter('[value='+answer.response+']').prop('checked', true);
            })
        };

        $scope.setPart = function(partNumber){
            $scope.options.resetTimer();
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
            $scope.userResponsesFormat = [];
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
                $scope.userResponsesFormat.push({id:response.id, response: selectedAnswer});
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
                $scope.userResponsesFormat.push({id:response.correct[0], response: selectedText});
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
                $scope.userResponsesFormat.push({id:response.id, response: selectedAnswer});
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
            var userDetails= {id: null, login: $scope.account.login, exercisesCompleted:[{id: null, exerciseId: $scope.exercise.id, when: new Date(), examName: $scope.exercise.examName, time: seconds, exerciseType: $scope.exercise.exerciseType, score: score, userResponses:$scope.userResponsesFormat}]};
            UserDetails.data.save(userDetails, function(){
                console.log("user details saved succesfull");
            }, function(){
                console.log("error saving user details")
            });
        };


    });
