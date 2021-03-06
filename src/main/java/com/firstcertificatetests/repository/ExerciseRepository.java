package com.firstcertificatetests.repository;

import com.firstcertificatetests.domain.Exercise;
import com.firstcertificatetests.domain.ExerciseType;
import com.firstcertificatetests.domain.User;
import org.joda.time.DateTime;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data MongoDB repository for the User entity.
 */
public interface ExerciseRepository extends MongoRepository<Exercise, String> {

        List<Exercise> findAllByExamName(String examName);

        Exercise findByExamNameAndExerciseType(String examName, ExerciseType exerciseType);
}
