'use strict';

angular.module('firstcertificatetestsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
