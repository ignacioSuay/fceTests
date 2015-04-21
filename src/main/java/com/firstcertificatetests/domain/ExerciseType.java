package com.firstcertificatetests.domain;

import org.springframework.cloud.cloudfoundry.com.fasterxml.jackson.annotation.JsonValue;

/**
 * Created by natxo on 03/04/15.
 */
public enum ExerciseType {
    USE_OF_ENGLISH_1("Use of English 1", "USE_OF_ENGLISH"),
    USE_OF_ENGLISH_2("Use of English 2", "USE_OF_ENGLISH"),
    USE_OF_ENGLISH_3("Use of English 3", "USE_OF_ENGLISH"),
    USE_OF_ENGLISH_4("Use of English 4", "USE_OF_ENGLISH"),
    LISTENING("Listening", "LISTENING"),
    READING_1("Reading 1", "READING"),
    READING_2("Reading 2", "READING"),
    READING_3("Reading 3", "READING"),
    READING_4("Reading 4", "READING"),
    WRITING("Writing", "WRITING");

    private String name;

    private String parent;

    ExerciseType(String name, String parent) {
        this.name = name;
        this.parent = parent;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }


}
