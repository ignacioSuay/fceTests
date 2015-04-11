'use strict';

angular.module('firstcertificatetestsApp')
    .directive('exerciseContent1', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            var regex = new RegExp(/\(\d\)/g); //(1)
            var result;
            while((result = regex.exec(template)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                var response = findResponseById(exercise, responseId);
                var select = "<select id=\'select-"+responseId +"\' class=\"form-control input-sm selectEx\" ng-model=\"userResponses["+responseId+"] \">" +
                    //"<option>select</option>" +
                    "<option>" + response.answers[0] +"</option>" +
                    "<option>" + response.answers[1] +"</option>" +
                    "<option>" + response.answers[2] +"</option>" +
                    "<option>" + response.answers[3] +"</option>" +
                    "</select><span id=\'span-"+responseId +"\' />";
                template = template.replace(result[0], select);
            }
            return template;
            //return "<div>alaa</div>";
        };


        //TODO: Improve using find first element, for some reason find doesn't work
        var findResponseById = function(exercise, id){
            var responseArray = exercise.responses.filter(function (response){
                return response.id === Number(id);
            });
            return responseArray[0];
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