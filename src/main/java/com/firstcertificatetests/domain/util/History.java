package com.firstcertificatetests.domain.util;

import com.firstcertificatetests.domain.ExerciseCompleted;
import com.firstcertificatetests.domain.ExerciseType;

import java.util.*;

/**
 * Created by suay on 5/28/15.
 */
public class History {

    String examName;

    int completedPercentage;

    public History(){}

    public History(String examName, int completedPercentage) {
        this.examName = examName;
        this.completedPercentage = completedPercentage;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public int getCompletedPercentage() {
        return completedPercentage;
    }

    public void setCompletedPercentage(int completedPercentage) {
        this.completedPercentage = completedPercentage;
    }

    @Override
    public String toString() {
        return "History{" +
                "examName='" + examName + '\'' +
                ", completedPercentage=" + completedPercentage +
                '}';
    }

    public static List<History> createHistory(List<ExerciseCompleted> exercises){
        List<History> histories = new ArrayList<>();
        Map<String, Set<ExerciseType>> examMap = new TreeMap<>();

        for(ExerciseCompleted exercise : exercises) {
            String examName = exercise.getExamName();
            Set<ExerciseType> exerciseTypes = examMap.get(examName);
            if(exerciseTypes == null){
                exerciseTypes = new HashSet<ExerciseType>();
            }
            exerciseTypes.add(exercise.getExerciseType());
            examMap.put(examName, exerciseTypes);
        }

        for(String examName : examMap.keySet()){
            Set<ExerciseType> exerciseTypes = examMap.get(examName);
            int progress = (int) Math.round(((double)exerciseTypes.size() / 7)*100);
            histories.add(new History(examName, progress));
        }

        return histories;

    }
}
