'use strict';

angular.module('firstcertificatetestsApp')
    .factory('UserDetails', function ($resource) {
        return {
            data : $resource('api/userDetails/:login', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {
                    method: 'GET',
                    transformResponse: function (data) {
                        data = angular.fromJson(data);
                        return data;
                    }
                }
            })
        };
    });