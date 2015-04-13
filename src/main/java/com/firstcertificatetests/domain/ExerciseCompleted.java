package com.firstcertificatetests.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
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
    Map<Integer,String> userResponses;

    @Field
    Integer score;

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

    public Map<Integer, String> getUserResponses() {
        return userResponses;
    }

    public void setUserResponses(Map<Integer, String> userResponses) {
        this.userResponses = userResponses;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "ExerciseCompleted{" +
                "id=" + id +
                ", when=" + when +
                ", userResponses=" + userResponses +
                ", score=" + score +
                '}';
    }
}
