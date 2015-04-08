package com.firstcertificatetests.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.Set;


/**
 * Created by natxo on 03/04/15.
 */
@Document(collection = "exercise")
public class Exercise {

    @Id
    private ObjectId id;

    @Field
    private String title;

    @Field
    private String content;

    @Field
    private List<Response> responses;

    @Field
    private ExerciseType exerciseType;

    //Exam Id
    @Field
    private String examName;

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<Response> getResponses() {
        return responses;
    }

    public void setResponses(List<Response> responses) {
        this.responses = responses;
    }

    public ExerciseType getExerciseType() {
        return exerciseType;
    }

    public void setExerciseType(ExerciseType exerciseType) {
        this.exerciseType = exerciseType;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Exercise exercise = (Exercise) o;

        if (content != null ? !content.equals(exercise.content) : exercise.content != null) return false;
        if (exerciseType != exercise.exerciseType) return false;
        if (!id.equals(exercise.id)) return false;
        if (responses != null ? !responses.equals(exercise.responses) : exercise.responses != null) return false;
        if (title != null ? !title.equals(exercise.title) : exercise.title != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (content != null ? content.hashCode() : 0);
        result = 31 * result + (responses != null ? responses.hashCode() : 0);
        result = 31 * result + (exerciseType != null ? exerciseType.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", responses=" + responses +
                ", exerciseType=" + exerciseType +
                '}';
    }
}
