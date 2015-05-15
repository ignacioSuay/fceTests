'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UseEnglishController', function ($scope,$state, Exercise, $timeout, TimerFactory, UserDetails, Principal) {
        $scope.part = 1;
        $scope.userResponses=[];
        $scope.exercise = {};
        $scope.options = {interval :1000};

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });


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
        $scope.check = function(){
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
        };

        $scope.checkPart1 = function(){
            $scope.exercise.responses.forEach(function(response){
                var selectedText = $("#select-" + response.id + " option:selected").text();
                if(selectedText === response.correct[0]){
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span-" + response.id).text("");
                }else{
                    $("#span-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span-" + response.id).text(response.correct);
                }
            });

            $scope.saveUserDetails();
        };

        $scope.saveUserDetails = function(){
            var userDetails= {id: null, login: $scope.account.login, exercisesCompleted:[{id: null, exerciseId: null, when: new Date(), examName: $scope.exercise.examName, time: 100, exerciseType: "USE_OF_ENGLISH_1", userResponses:null}]};
            UserDetails.data.save(userDetails, function(){
                console.log("user details log succesfull");
            }, function(){
                console.log("error")
            });
        };


        $scope.checkPart2 = function(){
            $scope.exercises[1].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);

                if(checkData.isCorrect){
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span2-" + response.id).text("");
                }else{
                    $("#span2-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span2-" + response.id).text(checkData.posibleSolutions);
                }
            });
        };



        $scope.checkPart3 = function(){
            $scope.exercises[2].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);

                if(checkData.isCorrect){
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span3-" + response.id).text("");
                }else{
                    $("#span3-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span3-" + response.id).text(checkData.posibleSolutions);
                }
            });
        };

        $scope.checkPart4 = function(){
            $scope.exercises[3].responses.forEach(function(response){
                var inputText = $("#input-" + response.id).val();
                var checkData = $scope.checkData(inputText, response);
                if(checkData.isCorrect){
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
                    $("#span4-" + response.id).text("");
                }else{
                    $("#span4-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
                    $("#span4-" + response.id).text(checkData.posibleSolutions);
                }
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
