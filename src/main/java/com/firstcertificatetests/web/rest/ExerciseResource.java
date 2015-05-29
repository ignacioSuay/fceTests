package com.firstcertificatetests.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.firstcertificatetests.domain.Exercise;
import com.firstcertificatetests.domain.User;
import com.firstcertificatetests.repository.ExerciseRepository;
import com.firstcertificatetests.repository.UserRepository;
import com.firstcertificatetests.security.AuthoritiesConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

/**
 * REST controller for managing users.
 */
@RestController
@RequestMapping("/api")
public class ExerciseResource {

    private final Logger log = LoggerFactory.getLogger(ExerciseResource.class);

    @Inject
    private ExerciseRepository exerciseRepository;

    /**
     * GET  /users -> get all users.
     */
    @RequestMapping(value = "/exercises",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Exercise> getAll() {
        log.debug("REST request to get all Users");
        return exerciseRepository.findAll();
    }

    /**
     * GET  /users/:login -> get the "login" user.
     */
    @RequestMapping(value = "/exercises/exam/{examName}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Exercise> getExercise(@PathVariable String examName) {
        log.debug("REST request to get Exercise from exam: " + examName);
        return exerciseRepository.findAllByExamName(examName);
    }

    @RequestMapping(value = "/exercises/exam/{examName}/{exerciseType}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Exercise> getExercise(@PathVariable String examName, @PathVariable String exerciseType) {
        log.debug("REST request to get Exercise from exam: " + examName);
        List<Exercise> exercises = exerciseRepository.findAllByExamName(examName);
        return getExercisesByType(exercises, exerciseType);
    }

    private List<Exercise> getExercisesByType(List<Exercise> exercises, String type){
        List<Exercise> exercisesRes = new ArrayList<>();
        for(Exercise exercise : exercises){
            if(exercise.getExerciseType() != null && type.equals(exercise.getExerciseType().getParent())){
                exercisesRes.add(exercise);
            }
        }
        return exercisesRes;
    }


}
