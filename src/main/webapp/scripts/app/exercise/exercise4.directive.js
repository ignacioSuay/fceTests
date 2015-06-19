'use strict';

angular.module('firstcertificatetestsApp')
    .directive('exerciseContent4', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = "";
            exercise.responses.forEach(function(response){

                var responseId = response.id;
                var regex = new RegExp(/\(\X\)/g); //(X)
                var result = regex.exec(response.reformat);
                var inputTest = " <input  id=input-"+responseId+" type='text' class='form-control inputEx4' placeholder='Response' aria-describedby='basic-addon1' ng-model=\"userResponses["+responseId+"]\">" +
                    "<span id=\'span4-"+responseId +"\' />";
                var reformatStr =  response.reformat.replace(result[0], inputTest);

                var auxtemplate = "<div class=\"well\">" + response.id +". "+ response.statement +"<br>"+response.answers[0]+"<br>"+reformatStr + "</div>";
                template += auxtemplate;
            });

            return template;
        };

        var findResponseById = function(exercise, id){
            var responseArray = exercise.responses.filter(function (response){
                return response.id === Number(id);
            });
            return responseArray[0].answers[0].toUpperCase();
        };

        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue && scope.exercise.exerciseType === "USE_OF_ENGLISH_4") {
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