'use strict';

angular.module('firstcertificatetestsApp')
    .factory('History', function ($resource) {
        return {
            data : $resource('api/history/:login', {}, {
                'query': {method: 'GET', isArray: true}
            })
        };
    });
