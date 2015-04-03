package com.firstcertificatetests.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

/**
 * Created by natxo on 03/04/15.
 */
@Document
public class Response {

    @Id
    private Integer id;

    @Field
    private List<String> answers;

    @Field
    private Integer correct;

    @Field
    private ResponseType responseType;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }

    public Integer getCorrect() {
        return correct;
    }

    public void setCorrect(Integer correct) {
        this.correct = correct;
    }

    public ResponseType getResponseType() {
        return responseType;
    }

    public void setResponseType(ResponseType responseType) {
        this.responseType = responseType;
    }

    @Override
    public String toString() {
        return "Response{" +
                "id=" + id +
                ", answers=" + answers +
                ", correct='" + correct + '\'' +
                ", responseType=" + responseType +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Response response = (Response) o;

        if (correct != response.correct) return false;
        if (id != response.id) return false;
        if (answers != null ? !answers.equals(response.answers) : response.answers != null) return false;
        if (responseType != response.responseType) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (answers != null ? answers.hashCode() : 0);
        result = 31 * result + correct;
        result = 31 * result + (responseType != null ? responseType.hashCode() : 0);
        return result;
    }
}
