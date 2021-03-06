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
    private String login;

    @Field
    private List<ExerciseCompleted> exercisesCompleted;


    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public List<ExerciseCompleted> getExercisesCompleted() {
        return exercisesCompleted;
    }

    public void setExercisesCompleted(List<ExerciseCompleted> exercisesCompleted) {
        this.exercisesCompleted = exercisesCompleted;
    }

    @Override
    public String toString() {
        return "UserDetails{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", exercisesCompleted=" + exercisesCompleted +
                '}';
    }
}
