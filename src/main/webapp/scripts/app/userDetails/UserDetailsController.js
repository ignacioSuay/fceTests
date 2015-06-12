'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UserDetailsController', function ($scope, $state, Principal, UserDetails, History) {

        $scope.totalExams = 2;

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
            $scope.loadHistory();
            $scope.loadUserDetails();
        });

        $scope.loadUserDetails = function() {
            UserDetails.data.get({login:$scope.account.login}, function(result) {
                $scope.userDetails = result;
            });
        };

        $scope.loadHistory = function() {
            History.data.query({login:$scope.account.login}, function(result) {
                $scope.history = result;
            });
        };

        $scope.goNextExam = function(){
            var exam;
            var maxExamNum = -1
            if($scope.history.length < 1)
                exam = "fce1";
            else{
                $scope.history.forEach(function(history){
                    var examNum = history.examName.substring(3);
                    if(examNum > maxExamNum)
                        maxExamNum = examNum;
                });
                var nextExam = maxExamNum;
                if(maxExamNum < $scope.totalExams){
                    nextExam++;
                }

                exam = "fce" + nextExam;
            }
            $state.go('exercise.useOfEnglish', {exam: exam});
        }


    });
