'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('exercise', {
                parent: 'home',
                url: 'exercise',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/exercise/exercise.html',
                        controller: 'ExerciseController'
                    }
                    //'useOfEnglish@':{
                    //    templateUrl: 'scripts/app/exercise/useOfEnglish/useOfEnglish.html',
                    //    controller: 'ExerciseController'
                    //},
                    //'reading@':{
                    //    templateUrl: 'scripts/app/exercise/reading/reading.html',
                    //    controller: 'ReadingController'
                    //}

                }
            }).state('exercise.useOfEnglish', {
                views:{
                    'content@':{
                        templateUrl: 'scripts/app/exercise/useOfEnglish/useOfEnglish.html',
                        controller: 'ExerciseController'
                    }
                }

        })
            //.state('exercise.reading', {
            //    templateUrl: 'scripts/app/exercise/reading/reading.html',
            //    controller: 'ReadingController'
            //})
    });