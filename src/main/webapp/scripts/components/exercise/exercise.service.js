'use strict';

angular.module('firstcertificatetestsApp')
    .factory('Exercise', function ($resource) {
        return $resource('api/exercises/:id', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });