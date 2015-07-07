'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UseEnglishController', function ($scope,$state, Exercise, UserDetails, Principal, $stateParams) {
        $scope.part = 1;
        $scope.userResponses=[];
        $scope.exercise = {};
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
        $scope.setPart = function(partNumber){
            $scope.options.resetTimer();
            $scope.part = partNumber;
            //$scope.exercise = $scope.exercises[partNumber-1];
            $scope.getExerciseByPart(partNumber);
        };

        $scope.getExerciseByPart = function(part){
            $scope.exercise = $scope.exercises.filter(function(ex){
               if(ex.exerciseType === "USE_OF_ENGLISH_"+ part)
                return ex;
            })[0];
        };

        $scope.isPart = function(partNumber){
            return partNumber === $scope.part;
        };

        $scope.loadAll = function() {
            Exercise.exam.query({examName:$stateParams.exam, exerciseType:"USE_OF_ENGLISH"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
            });
        };

        $scope.loadAll();
        $scope.check = function(){
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
            var userDetails= {id: null, login: $scope.account.login, exercisesCompleted:[{id: null, exerciseId: $scope.exercise.id, when: new Date(), examName: $scope.exercise.examName, time: seconds, exerciseType: $scope.exercise.exerciseType, score: score, userResponses:null}]};
            UserDetails.data.save(userDetails, function(){
                console.log("user details saved succesfull");
            }, function(){
                console.log("error saving user details")
            });
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

    });
