'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('exercise', {
                parent: 'home',
                abstract: true,
                //url: 'exercise',
                //data: {
                //    roles: ['ROLE_USER'],
                //    pageTitle: 'FCE TEST'
                //},
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/exercise/exercise.html',
                        controller: 'ExerciseController'
                    },
                    'content@useOfEnglish':{
                        templateUrl: 'scripts/app/exercise/useOfEnglish/useOfEnglish.html',
                        controller: 'ExerciseController'
                    }
                    //'reading@':{
                    //    templateUrl: 'scripts/app/exercise/reading/reading.html',
                    //    controller: 'ReadingController'
                    //}

                }
            })
            .state('exercise.useOfEnglish', {
                parent: 'exercise',
                url: 'useOfEnglish',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/useOfEnglish/useOfEnglish.html',
                        controller: 'UseEnglishController'
                    }
                }

        })
            .state('exercise.reading', {
                parent: 'exercise',
                url: 'reading',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/reading/reading.html',
                        controller: 'ReadingController'
                    }
                }
            })
            .state('exercise.writing', {
                parent: 'exercise',
                url: 'writing',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/writing/writing.html',
                        controller: 'WritingController'
                    }
                }
            })
            .state('exercise.speaking', {
                parent: 'exercise',
                url: 'speaking',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/speaking/speaking.html',
                        controller: 'SpeakingController'
                    }
                }
            })
            .state('exercise.listening', {
                parent: 'exercise',
                url: 'listening',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/Listening/listening.html',
                        controller: 'ListeningController'
                    }
                }
            })
    });