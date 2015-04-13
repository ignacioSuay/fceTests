package com.firstcertificatetests.repository;

import com.firstcertificatetests.domain.Exercise;
import com.firstcertificatetests.domain.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by suay on 4/13/15.
 */
public interface UserDetailsRepository extends MongoRepository<UserDetails, Integer> {
}
