package com.firstcertificatetests.web;

import com.codahale.metrics.annotation.Timed;
import com.firstcertificatetests.domain.UserDetails;
import com.firstcertificatetests.repository.UserDetailsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by suay on 4/13/15.
 */
@RestController
@RequestMapping("/api")
public class UserDetailsResource {

    private final Logger log = LoggerFactory.getLogger(UserDetailsResource.class);

    @Inject
    private UserDetailsRepository userDetailsRepository;


    /**
     * POST  /userDetails -> Create a new userDetails.
     */
    @RequestMapping(value = "/userDetails",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void create(@RequestBody UserDetails userDetails) {
        log.debug("REST request to save userDetails : {}", userDetails);
        userDetailsRepository.save(userDetails);
    }

    /**
     * GET  /userDetails -> get all the userDetails.
     */
    @RequestMapping(value = "/userDetails",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<UserDetails> getAll() {
        log.debug("REST request to get all userDetails");
        return userDetailsRepository.findAll();
    }

    /**
     * GET  /userDetails/:id -> get the "id" userDetails.
     */
    @RequestMapping(value = "/userDetails/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<UserDetails> get(@PathVariable Integer id, HttpServletResponse response) {
        log.debug("REST request to get userDetails : {}", id);
        UserDetails userDetails = userDetailsRepository.findOne(id);
        if (userDetails == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(userDetails, HttpStatus.OK);
    }

    /**
     * DELETE  /userDetails/:id -> delete the "id" userDetails.
     */
    @RequestMapping(value = "/userDetails/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void delete(@PathVariable Integer id) {
        log.debug("REST request to delete userDetails : {}", id);
        userDetailsRepository.delete(id);
    }

}
