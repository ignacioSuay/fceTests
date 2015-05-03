'use strict';

angular.module('firstcertificatetestsApp')
    .directive('listeningContent', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            //exercise.responses.forEach(function(response){
            //
            //    var responseId = response.id;
            //    var auxtemplate = "<div>" + response.id +". "+ response.statement +"<span id='spanR-"+responseId+"'/><br> <div class='form-group'>";
            //
            //    var rowRes = 0;
            //    response.answers.forEach(function(answer){
            //        auxtemplate += "<input type='radio' name='radio-"+response.id+"' value='"+rowRes+"'/> "+answer +"<br/>";
            //        rowRes++;
            //    });
            //    template += auxtemplate + "</div></div>";
            //});

            return template;
        };


        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue) {
                    element.html(getTemplate(scope.exercise)).show();
                    $compile(element.contents())(scope);
                }
            });
        };
        return {
            restrict: "E",
            link: linker,
            scope: false
        };
    });