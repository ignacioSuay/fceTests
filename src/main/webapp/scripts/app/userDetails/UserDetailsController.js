'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UserDetailsController', function ($scope, $state, Principal, UserDetails, History) {

        $scope.totalExams = 2;
        $scope.examDisabled = false;
        $scope.nextExam = 1;

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
                $scope.calcNextExam();
                $scope.examDisabled = $scope.nextExam === ($scope.totalExams + 1);
            });

        };

        $scope.calcNextExam = function(){
            var maxExamNum = -1;
            $scope.history.forEach(function(history){
                var examNum = history.examName.substring(3);
                if(examNum > maxExamNum)
                    maxExamNum = parseInt(examNum);
            });
            $scope.nextExam = maxExamNum + 1;
        };



        $scope.goNextExam = function(){
            var exam;
            var maxExamNum = -1;
            if($scope.history.length < 1)
                exam = "fce1";
            else{
                exam = "fce" + $scope.nextExam;
            }
            $state.go('exercise.useOfEnglish', {exam: exam});
        };

        $scope.deleteHistory = function(){
            UserDetails.data.delete({login:$scope.account.login}, function(result) {
                $scope.cleanData();
            });
        };

        $scope.cleanData = function(){
            $scope.userDetails = {};
            $scope.history = [];
            $scope.nextExam = 1;
            $scope.examDisabled = false;

        }


    });
