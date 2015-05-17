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
    })
    .filter('exerciseTypeFilter', function () {
        return function (exerciseType) {
            if(exerciseType){
                if(exerciseType === "USE_OF_ENGLISH_1"){return "Use of English - Part 1"}
                if(exerciseType === "USE_OF_ENGLISH_2"){return "Use of English - Part 2"}
                if(exerciseType === "USE_OF_ENGLISH_3"){return "Use of English - Part 3"}
                if(exerciseType === "USE_OF_ENGLISH_4"){return "Use of English - Part 4"}
                if(exerciseType === "READING_1"){return "Reading - Part 1"}
                if(exerciseType === "READING_2"){return "Reading - Part 2"}
                if(exerciseType === "READING_3"){return "Reading - Part 3"}
                if(exerciseType === "WRITING_1"){return "Writing - Part 1"}
                if(exerciseType === "WRITING_2"){return "Writing - Part 2"}
                if(exerciseType === "WRITING_3"){return "Writing - Part 3"}
                if(exerciseType === "WRITING_4"){return "Writing - Part 4"}
                if(exerciseType === "SPEAKING_1"){return "Speaking - Part 1"}
                if(exerciseType === "SPEAKING_2"){return "Speaking - Part 2"}
                if(exerciseType === "SPEAKING_3"){return "Speaking - Part 3"}
                if(exerciseType === "SPEAKING_4"){return "Speaking - Part 4"}
            }
        }
    });