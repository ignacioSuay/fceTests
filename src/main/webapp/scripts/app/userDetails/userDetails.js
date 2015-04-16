'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('userDetails', {
                parent: 'home',
                url: 'userdetails',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/userDetails/userDetails.html',
                        controller: 'UserDetailsController'
                    }
                }
            })
    });