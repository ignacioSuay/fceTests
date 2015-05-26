'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('history', {
                parent: 'home',
                url: 'history',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/userHistory/userHistory.html',
                        controller: 'UserHistoryController'
                    }
                }
            })
    });