package com.firstcertificatetests.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by suay on 4/13/15.
 */
@Document
public class ExerciseCompleted {

    @Id
    private Integer id;

    @Field
    private ObjectId exerciseId;

    @Field
    private Date when;

    @Field
    private String examName;

    @Field
    private int time;

    @Field
    private ExerciseType exerciseType;

    @Field
    List<UserResponse> userResponses;

    @Field
    String score;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getWhen() {
        return when;
    }

    public void setWhen(Date when) {
        this.when = when;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public ObjectId getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(ObjectId exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public ExerciseType getExerciseType() {
        return exerciseType;
    }

    public void setExerciseType(ExerciseType exerciseType) {
        this.exerciseType = exerciseType;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public List<UserResponse> getUserResponses() {
        return userResponses;
    }

    public void setUserResponses(List<UserResponse> userResponses) {
        this.userResponses = userResponses;
    }

    @Override
    public String toString() {
        return "ExerciseCompleted{" +
                "id=" + id +
                ", exerciseId=" + exerciseId +
                ", when=" + when +
                ", examName='" + examName + '\'' +
                ", exerciseType=" + exerciseType +
                ", userResponses=" + userResponses +
                ", score='" + score + '\'' +
                '}';
    }
}
