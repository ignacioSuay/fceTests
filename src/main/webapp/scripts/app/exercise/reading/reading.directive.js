'use strict';

angular.module('firstcertificatetestsApp')
    .directive('readingContent1', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            exercise.responses.forEach(function(response){

                var responseId = response.id;
                var auxtemplate = "<div>" + response.id +". "+ response.statement +"<span id='spanR-"+responseId+"'/><br> <div class='form-group'>";

                var rowRes = 0;
                response.answers.forEach(function(answer){
                    auxtemplate += "<input type='radio' name='radio-"+response.id+"' value='"+rowRes+"'/> "+answer +"<br/>";
                    rowRes++;
                });
                template += auxtemplate + "</div></div>";
            });

            return template;
        };

        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue && scope.exercise.exerciseType === "READING_1") {
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
    })
    .directive('readingContent2', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            var regex = new RegExp(/\(\d\)/g); //(1)
            var result;
            while((result = regex.exec(template)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                //var response = findResponseById(exercise, responseId);
                var select = "<select id=\'select-"+responseId +"\' class=\"form-control input-sm selectEx\" ng-model=\"userResponses["+responseId+"] \">" +
                        "<option>select</option>" +
                    //"<option>" + response.answers[0] +"</option>" +
                    //"<option>" + response.answers[1] +"</option>" +
                    //"<option>" + response.answers[2] +"</option>" +
                    //"<option>" + response.answers[3] +"</option>" +
                    "</select><span id=\'span-"+responseId +"\' />";
                template = template.replace(result[0], select);
            }

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
                if (newValue && scope.exercise.exerciseType === "READING_2") {
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
