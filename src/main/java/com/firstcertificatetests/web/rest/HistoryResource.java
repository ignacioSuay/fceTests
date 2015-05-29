package com.firstcertificatetests.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.firstcertificatetests.domain.ExerciseCompleted;
import com.firstcertificatetests.domain.ExerciseType;
import com.firstcertificatetests.domain.UserDetails;
import com.firstcertificatetests.domain.util.History;
import com.firstcertificatetests.repository.UserDetailsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * Created by suay on 5/28/15.
 */
@RestController
@RequestMapping("/api")
public class HistoryResource {

    private final Logger log = LoggerFactory.getLogger(HistoryResource.class);

    @Inject
    private UserDetailsRepository userDetailsRepository;

    /**
     * GET  /history/{login} -> get user history
     */
    @RequestMapping(value = "/exercises/{login}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<History> getHistory(@PathVariable String login, HttpServletResponse response) {
        log.debug("REST request to get all Users");

        UserDetails userDetails = userDetailsRepository.findByLogin(login);
        List<ExerciseCompleted> exercises = userDetails.getExercisesCompleted();
        List<History> histories = History.createHistory(exercises);

        return histories;

    }

}
