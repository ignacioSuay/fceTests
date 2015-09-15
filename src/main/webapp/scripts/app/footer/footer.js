'use strict';

angular.module('firstcertificatetestsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                parent: 'home',
                url: 'contact',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/footer/contact.html',
                        controller: 'ContactController'
                    }
                }
            })
    });