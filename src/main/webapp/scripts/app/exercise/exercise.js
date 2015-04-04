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
                }
            })
    });