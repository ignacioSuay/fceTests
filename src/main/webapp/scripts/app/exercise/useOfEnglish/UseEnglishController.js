'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UseEnglishController', function ($scope,$state, Exercise, UserDetails, Principal, $stateParams) {
        $scope.part = parseInt($stateParams.part);
        $scope.userResponses=[];
        $scope.options = {interval :1000};

        if(Principal.isAuthenticated) {
            Principal.identity().then(function (account) {
                $scope.account = account;
                $scope.isAuthenticated = Principal.isAuthenticated;
            });
        }


        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };


        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.loadAll = function() {
            Exercise.exam.query({examName:$stateParams.exam, exerciseType:"USE_OF_ENGLISH_"+$scope.part}, function(result) {
                $scope.exercise = result;
                if($stateParams.data){
                    $scope.loadAnswers($stateParams.data);
                }
            });
        };
        $scope.loadAll();


        $scope.check = function(){
            $scope.userResponses = [];
            $scope.score = 0;
            $scope.options.stopTimer();
            if($scope.part === 1){
                $scope.checkPart1();
            }else if($scope.part === 2){
                $scope.checkPart2();
            }else if($scope.part === 3){
                $scope.checkPart3();
            }else if($scope.part === 4){
                $scope.checkPart4();
            }

            $scope.saveUserDetails();
        };

        $scope.checkPart1 = function(){

            $scope.exercise.responses.forEach(function(response){
                var selectedText = $("#select-" + response.id + " option:selected").text();
                $scope.userResponses.push({id:response.id, response: selectedText});
                if(selectedText === response.correct[0]){
                    $scope.score++;
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span-" + response.id).text("");
                }else{
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span-" + response.id).text(response.correct);
                }
            });

        };




        $scope.checkPart2 = function(){
            $scope.exercise.responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);

                if(checkData.isCorrect){
                    $scope.score++;
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span2-" + response.id).text("");
                }else{
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span2-" + response.id).text(checkData.posibleSolutions);
                }

            });
        };


        $scope.checkPart3 = function(){
            $scope.exercise.responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);

                if(checkData.isCorrect){
                    $scope.score++;
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span3-" + response.id).text("");
                }else{
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span3-" + response.id).text(checkData.posibleSolutions);
                }
            });
        };

        $scope.checkPart4 = function(){
            $scope.exercise.responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);
                if(checkData.isCorrect){
                    $scope.score++;
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span4-" + response.id).text("");
                }else{
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span4-" + response.id).text(checkData.posibleSolutions);
                }
            });
        };

        $scope.saveUserDetails = function(){
            if(!$scope.account){
                return;
            }
            var score = $scope.score + "/" + $scope.exercise.responses.length;
            var seconds = $scope.options.elapsedTime.getTime() / 1000;
            var userDetails= {id: null, login: $scope.account.login, exercisesCompleted:[{id: null, exerciseId: $scope.exercise.id, when: new Date(), examName: $scope.exercise.examName, time: seconds, exerciseType: $scope.exercise.exerciseType, score: score, userResponses:$scope.userResponses}]};
            UserDetails.data.save(userDetails, function(){
                console.log("user details saved succesfull");
            }, function(){
                console.log("error saving user details")
            });
        };

        $scope.getUserResponses = function(){

        };

        $scope.checkData = function(inputText, response){
            var isCorrect = false;
            var posibleSolutions ="";
            response.correct.forEach(function(correct){
                if(inputText.trim().toLowerCase() === correct.trim().toLowerCase()){
                    isCorrect = true;
                }
                posibleSolutions += correct + "/";
            });
            posibleSolutions = posibleSolutions.substring(0, posibleSolutions.length - 1);
            return {isCorrect: isCorrect, posibleSolutions: posibleSolutions};
        };


        $scope.loadAnswers = function(data){
            if($scope.part === 1){
                data.forEach(function(answer){
                    $("#select-" + answer.id).val(answer.response);
                })
            }
        };

    });
