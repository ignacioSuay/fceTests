'use strict';

angular.module('firstcertificatetestsApp')
    .directive('readingContent1', function ($compile) { // inject $compile service as dependency

        var getTemplate = function(exercise){
            var template = exercise.content;
            exercise.responses.forEach(function(response){

                var responseId = response.id;
                var auxtemplate = "<div><b>" + response.id +". "+ response.statement +"</b><span id='spanR-"+responseId+"'/><br> <div class='form-group'>";

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
                    if(scope.data){
                        loadAnswers(scope.data);
                    }
                }
            });
        };

        var loadAnswers = function(data){
            data.forEach(function(answer){
                $('input:radio[name=radio-'+answer.id+']').filter('[value='+answer.response+']').prop('checked', true);
            })
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
            var regex = new RegExp(/\(\d*\)/g); //(1)
            var result;

            while((result = regex.exec(template)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                var select = "<select class=\"form-control input-sm selectEx\"  id=\'selectR-"+responseId +"\' ng-options=\"resp.id as resp.id for resp in responsesId\" ng-model=\"userResponses["+responseId+"]\" >" +
                    "</select> <span id=\'spanR-"+responseId +"\' />";
                template = template.replace(result[0], select);
            }
            template += getParagraphs(exercise);
            return template;
        };

        var getResponsesId = function(exercise){
          var responsesId = [];
          exercise.responses.forEach(function(response){
              responsesId.push({id: response.id});
          });
            return responsesId;
        };

        var getParagraphs = function(exercise){
            var responses = "<div>";
            exercise.responses.forEach(function(response){
                responses += "<div class='well'><b> Paragraph " + response.id + ".</b><br/>"+ response.statement + "<br/></div>";
            });
            responses += "</div>";
            return responses;
        };


        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue && scope.exercise.exerciseType === "READING_2") {
                    scope.responsesId = getResponsesId(scope.exercise);
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
    }).directive('readingContent3', function ($compile) {
        var getTemplate = function(exercise){
            var template = exercise.content;
            template += getQuestions(exercise);
            return template;
        };

        var getResponsesId = function(exercise){
            var responsesId = [];
            exercise.responses.forEach(function(response){
                responsesId.push(response.id);
            });
            return responsesId;
        };

        var getQuestions = function(exercise){
            var responses = "<div>";
            exercise.responses.forEach(function(response){
                responses += "<div class='well'>"+ response.id+ ". " + response.statement + ".<br/> " +
                "<input type='radio' name='radioR-"+response.id+"' value='A'/> Paragraph A </input>" +
                "<input type='radio' name='radioR-"+response.id+"' value='B'/> Paragraph B </input>" +
                "<input type='radio' name='radioR-"+response.id+"' value='C'/> Paragraph C </input>" +
                "<input type='radio' name='radioR-"+response.id+"' value='D'/> Paragraph D </input>" +
                "<span id=\'span3R-"+response.id +"\' />"+
                "<br/></div>";
            });
            responses += "</div>";
            return responses;
        };


        var linker = function(scope, element, attrs) {
            scope.$watch('exercise',function(newValue,oldValue) {
                if (newValue && scope.exercise.exerciseType === "READING_3") {
                    //scope.responsesId = getResponsesId(scope.exercise);
                    element.html(getTemplate(scope.exercise)).show();
                    $compile(element.contents())(scope);
                    if(scope.data){
                        loadAnswers(scope.data);
                    }
                }
            });
        };

        var loadAnswers = function(data){
            data.forEach(function(answer){
                $('input:radio[name=radioR-'+answer.id+']').filter('[value='+answer.response+']').prop('checked', true);
            })
        };

        return {
            restrict: "E",
            link: linker,
            scope: false
        };
    });
