'use strict';

angular.module('firstcertificatetestsApp')
    .filter('secondsToTime', function () {
        return function (seconds) {
            if(seconds){

                var hoursStr, minsStr, secsStr;
                var hours   = Math.floor(seconds / 3600);
                var mins = Math.floor((seconds - (hours * 3600)) / 60);
                var secs = seconds - (hours * 3600) - (mins * 60);

                hoursStr = hours < 10 ? "0" + hours : hours;
                minsStr = mins < 10 ? "0" + mins : mins;
                secsStr = secs < 10 ? "0" + secs : secs;

                if(hours > 0)
                    return hoursStr + ':' + minsStr + ':' + secsStr;

                return minsStr + ':' + secsStr;
            }
        };
    });