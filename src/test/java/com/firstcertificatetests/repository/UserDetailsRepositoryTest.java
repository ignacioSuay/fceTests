package com.firstcertificatetests.repository;

import com.firstcertificatetests.Application;
import com.firstcertificatetests.config.MongoConfiguration;
import com.firstcertificatetests.domain.Exercise;
import com.firstcertificatetests.domain.UserDetails;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by suay on 4/16/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
@Import(MongoConfiguration.class)
public class UserDetailsRepositoryTest {

    @Inject
    private UserDetailsRepository userDetailsRepository;

    @Test
    public void testFindAll() throws Exception{
        List<UserDetails> userDetails = userDetailsRepository.findAll();
        assertThat(userDetails.size()).isGreaterThan(0);
        System.out.println("size " + userDetails.size());
    }

    @Test
    public void testFindByUserId() throws Exception{
        UserDetails userDetails = userDetailsRepository.findByUserId("user-suay");
        assertThat(userDetails).isNotNull();
        System.out.println("size " + userDetails.toString());
    }
}
