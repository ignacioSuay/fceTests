'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ExerciseController', function ($scope,$state, Exercise) {

        //change nav active when click
        $(".nav a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });

    });
