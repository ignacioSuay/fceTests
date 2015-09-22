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
            .state('about', {
                parent: 'home',
                url: 'about',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/footer/aboutUs.html'
                    }
                }
            })
            .state('team', {
                parent: 'home',
                url: 'team',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/footer/team.html'
                    }
                }
            })
            .state('terms', {
                parent: 'home',
                url: 'terms',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/footer/terms.html'
                    }
                }
            })
            .state('privacy', {
                parent: 'home',
                url: 'privacy',
                data: {
                    roles: [],
                    pageTitle: 'FCE TEST'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/footer/privacy.html'
                    }
                }
            })

    });