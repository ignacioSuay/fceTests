package com.firstcertificatetests.domain.util;

import com.firstcertificatetests.domain.ExerciseCompleted;
import com.firstcertificatetests.domain.ExerciseType;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by suay on 5/29/15.
 */
public class HistoryTest {

    private List<ExerciseCompleted> createTestExerciseCompleted(){
        List<ExerciseCompleted> exercisesComplete = new ArrayList<>();
        ExerciseCompleted exerciseCompleted1 = new ExerciseCompleted();
        exerciseCompleted1.setExamName("fce1");
        exerciseCompleted1.setExerciseType(ExerciseType.USE_OF_ENGLISH_1);
        exercisesComplete.add(exerciseCompleted1);

        ExerciseCompleted exerciseCompleted11 = new ExerciseCompleted();
        exerciseCompleted11.setExamName("fce1");
        exerciseCompleted11.setExerciseType(ExerciseType.READING_1);
        exercisesComplete.add(exerciseCompleted11);

        ExerciseCompleted exerciseCompleted2 = new ExerciseCompleted();
        exerciseCompleted2.setExamName("fce2");
        exerciseCompleted2.setExerciseType(ExerciseType.READING_1);
        exercisesComplete.add(exerciseCompleted2);

        return exercisesComplete;

    }


    @Test
    public void createHistoryTest() throws Exception{
        List<History> histories = History.createHistory(createTestExerciseCompleted());
        assertThat(histories.size()).isEqualTo(2);
        History history1 = histories.get(0);
        assertThat(history1.getExamName()).isEqualTo("fce1");
        assertThat(history1.getCompletedPercentage()).isEqualTo(29);

        History history2 = histories.get(1);
        assertThat(history2.getExamName()).isEqualTo("fce2");
        assertThat(history2.getCompletedPercentage()).isEqualTo(14);

    }

}
