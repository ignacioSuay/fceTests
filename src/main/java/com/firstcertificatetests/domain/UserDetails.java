package com.firstcertificatetests.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;

/**
 * Created by suay on 4/13/15.
 */
@Document(collection = "user_details")
public class UserDetails implements Serializable{

    @Id
    private ObjectId id;

    @Field
    private String userId;

    @Field
    private List<ExerciseCompleted> exercisesCompleted;


    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<ExerciseCompleted> getExercisesCompleted() {
        return exercisesCompleted;
    }

    public void setExercisesCompleted(List<ExerciseCompleted> exercisesCompleted) {
        this.exercisesCompleted = exercisesCompleted;
    }
}
