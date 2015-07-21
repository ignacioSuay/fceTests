'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('exercise', {
                parent: 'site',
                abstract: true,
                url: '/ex/',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/exercise/exercise.html',
                        controller: 'ExerciseController'
                    }//,
                    //'content@useOfEnglish':{
                    //    templateUrl: 'scripts/app/exercise/useOfEnglish/useOfEnglish.html',
                    //    controller: 'ExerciseController'
                    //}
                    //'reading@':{
                    //    templateUrl: 'scripts/app/exercise/reading/reading.html',
                    //    controller: 'ReadingController'
                    //}

                }
            })
            .state('exercise.useOfEnglish', {
                parent: 'exercise',
                params:{data:null},
                url: ':exam/useOfEnglish/:part',
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
                params:{data:null},
                url: ':exam/reading/:part',
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
                url: ':exam/writing/:part',
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
                url: ':exam/speaking/:part',
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
                url: ':exam/listening',
                views:{
                    //nameOfView@state
                    'exerciseView@exercise':{
                        templateUrl: 'scripts/app/exercise/Listening/listening.html',
                        controller: 'ListeningController'
                    }
                }
            })
    });