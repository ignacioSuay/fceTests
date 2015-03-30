'use strict';

angular.module('firstcertificatetestsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


