'use strict';

angular.module('firstcertificatetestsApp')
    .controller('UserDetailsController', function ($scope, $state, $location, Principal, UserDetails, History) {

        $scope.totalExams = 1;
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
            $state.go('exercise.useOfEnglish', {exam: exam, part:1});
        };

        $scope.deleteAllHistory = function(){
            $('#deleteAllHistoryConfirmation').modal('show');
        };

        $scope.confirmDeleteAllHistory = function(){
            UserDetails.data.delete({login:$scope.account.login}, function(result) {
                $scope.cleanData();
                $('#deleteAllHistoryConfirmation').modal('hide');
            });
        };

        $scope.cleanData = function(){
            $scope.userDetails = {};
            $scope.history = [];
            $scope.nextExam = 1;
            $scope.examDisabled = false;

        };

        $scope.goToExercise = function(exercise){
            var exerciseState = $scope.getExerciseState(exercise.exerciseType);
            var part = exercise.exerciseType.slice(-1);
            $state.go(exerciseState, {exam: exercise.examName, part:part});
        };

        $scope.viewAnswers = function(exercise){
            var exerciseState = $scope.getExerciseState(exercise.exerciseType);
            var part = exercise.exerciseType.slice(-1);
            $state.go(exerciseState, {exam: exercise.examName, part:part, data: exercise.userResponses});
        };

        $scope.getExerciseState = function(exerciseType){
            if(exerciseType.indexOf("USE_OF_ENGLISH")===0){
                return 'exercise.useOfEnglish';
            }else if(exerciseType.indexOf("READING")===0){
                return 'exercise.reading';
            }

            return "";
        };

        $scope.continueExam = function(exam){
            $state.go('exercise.useOfEnglish', {exam: exam.examName, part:1});
        }

        $scope.delete = function (exercise) {
            $('#deleteHistoryConfirmation').modal('show');
        };

        $scope.confirmDelete = function (id) {
            MarkerType.delete({id: id},
                function () {
                    $scope.reset();
                    $('#deleteMarkerTypeConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.clear = function () {
            $scope.userDetails = {};
        };

    });
