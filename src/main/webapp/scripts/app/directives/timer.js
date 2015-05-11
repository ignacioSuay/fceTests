'use strict';

angular.module('firstcertificatetestsApp')
    .directive('timer', ['TimerFactory', function (TimerFactory) {

        return {
            restrict: "EA",
            scope: true,
            controller: function ($scope, $element, $attrs){
                var timerService = new TimerFactory($scope.options);
                timerService.startTimer();
                $scope.options.stopTimer = timerService.stopTimer;
                $scope.$on('$destroy', function(node){
                    timerService.cancelTimer();
                });
            },
            template: "<div class='btn btn-success'>{{options.elapsedTime | timerFilterTime}}</div>"
        };
    }])
    .filter('timerFilterTime', function () {
        return function (input) {
            if(input){

                var hoursStr, minsStr, secsStr;
                var elapsed = input.getTime();
                var hours = parseInt(elapsed / 3600000,10);
                elapsed %= 3600000;
                var mins = parseInt(elapsed / 60000,10);
                elapsed %= 60000;
                var secs = parseInt(elapsed / 1000,10);
                var ms = elapsed % 1000;

                hoursStr = hours < 10 ? "0" + hours : hours;
                minsStr = mins < 10 ? "0" + mins : mins;
                secsStr = secs < 10 ? "0" + secs : secs;

                return hoursStr + ':' + minsStr + ':' + secsStr;
            }
        };
    })
    .factory('TimerFactory', ['$interval',    function($interval){

        return function(options){

            var startTime = 0,
                currentTime = null,
                offset = 0,
                interval = null,
                self = this;

            if(!options.interval){
                options.interval = 1000;
            }

            options.elapsedTime = new Date(0);

            self.running = false;

            function pushToLog(lap){
                if(options.log !== undefined){
                    options.log.push(lap);
                }
            }
            var timeElapsed;
            self.updateTime = function(){
                currentTime = new Date().getTime();
                timeElapsed = offset + (currentTime - startTime);
                options.elapsedTime.setTime(timeElapsed);
            };

            self.startTimer = function(){
                if(self.running === false){
                    startTime = new Date().getTime();
                    interval = $interval(self.updateTime,options.interval);
                    self.running = true;
                }
            };

            self.stopTimer = function(){
                if( self.running === false) {
                    return;
                }
                self.updateTime();
                offset = offset + currentTime - startTime;
                pushToLog(currentTime - startTime);
                $interval.cancel(interval);
                self.running = false;
            };

            self.resetTimer = function(){
                startTime = new Date().getTime();
                options.elapsedTime.setTime(0);
                timeElapsed = offset = 0;
            };

            self.cancelTimer = function(){
                $interval.cancel(interval);
            };

            return self;

        };


    }]);