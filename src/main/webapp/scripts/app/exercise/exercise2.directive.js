'use strict';

angular.module('firstcertificatetestsApp')
    .directive('exerciseContent2', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            var regex = new RegExp(/\(\d*\)/g); //(1)
            var result;
            while((result = regex.exec(template)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                var inputTest = "<input  id=input-"+responseId+" type='text' class='form-control inputEx' placeholder='Response' aria-describedby='basic-addon1' ng-model=\"userResponses["+responseId+"]\">" +
                    "<span id=\'span2-"+responseId +"\' />";
                template = template.replace(result[0], inputTest);
            }
            return template;
        };


        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue) {
                    element.html(getTemplate(scope.exercise)).show();;
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