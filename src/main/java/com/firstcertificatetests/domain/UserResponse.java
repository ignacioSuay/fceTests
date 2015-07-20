package com.firstcertificatetests.domain;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Created by suay on 7/20/15.
 */
@Document
public class UserResponse {

    @Field
    private Integer id;

    @Field
    private String response;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    @Override
    public String toString() {
        return "UserResponse{" +
                "id=" + id +
                ", response='" + response + '\'' +
                '}';
    }
}
