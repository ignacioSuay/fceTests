'use strict';

angular.module('firstcertificatetestsApp')
    .controller('ExerciseController', function ($scope,$sce, Exercise) {

        $scope.part = 1;

        $scope.btnPartClass = function(partNumber){
            if($scope.part === partNumber)
                return 'btn-primary';
            return 'btn-default';
        };
        $scope.setPart = function(partNumber){
            $scope.part = partNumber;
            $scope.exercise.htmlContent ="";
            if(partNumber === 1){
                $scope.exercise = $scope.exercises[0];
                $scope.getExercise1Body()
            }else if(partNumber === 2){
                $scope.exercise = $scope.exercises[1];
                $scope.getExercise2Body()
            }
        };

        $scope.loadAll = function() {
            Exercise.exam.query({examName:"fce1"}, function(result) {
                $scope.exercises= result;
                $scope.exercise = $scope.exercises[0];
                $scope.getExercise1Body();
            });
        };

        $scope.loadAll();

        $scope.getExercise1Body = function(){
            var str = $scope.exercise.content;
            var regex = new RegExp(/\(\d\)/g); //(1)
            var result;
            while((result = regex.exec(str)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                var response = $scope.findResponseById(responseId);
                var select = "<select id=\'select-"+responseId +"\' class=\"form-control input-sm selectEx\">" +
                    "<option>select</option>" +
                        "<option>" + response.answers[0] +"</option>" +
                    "<option>" + response.answers[1] +"</option>" +
                    "<option>" + response.answers[2] +"</option>" +
                    "<option>" + response.answers[3] +"</option>" +
                    "</select><span id=\'span-"+responseId +"\' />";
                str = str.replace(result[0], select);
            };

            $scope.exercise.htmlContent = $sce.trustAsHtml(str);

        };

        //TODO: Improve using find first element, for some reason find doesn't work
        $scope.findResponseById = function(id){
            var responseArray = $scope.exercise.responses.filter(function (response){
                return response.id === Number(id);
            });
            return responseArray[0];
        };

        $scope.check = function(partNumber){
            if(partNumber === 1){
                $scope.checkPart1();
            }
        };

        $scope.checkPart1 = function(){
          $scope.exercise.responses.forEach(function(response){
              var selectedText = $("#select-" + response.id + " option:selected").text();
              if(selectedText === response.correct[0]){
                  $("#span-" + response.id).attr("class","glyphicon glyphicon-ok iconSuccess");
              }else{
                  $("#span-" + response.id).attr("class","glyphicon glyphicon-remove iconFail");
              }
          });
        };

        $scope.getExercise2Body = function(){
            var str = $scope.exercise.content;
            var regex = new RegExp(/\(\d*\)/g); //(1)
            var result;
            while((result = regex.exec(str)) !== null){
                var responseId = result[0].substr(1,result[0].length - 2 );
                var response = $scope.findResponseById(responseId);
                var inputTest = "<input  id=input"+responseId+" type='text' class='form-control inputEx' placeholder='Respond' aria-describedby='basic-addon1'>";
                str = str.replace(result[0], inputTest);
            };

            $scope.exercise.htmlContent = $sce.trustAsHtml(str);

        };


    });
