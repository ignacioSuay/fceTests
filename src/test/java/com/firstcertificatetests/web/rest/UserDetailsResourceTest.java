package com.firstcertificatetests.web.rest;

import com.firstcertificatetests.Application;
import com.firstcertificatetests.config.MongoConfiguration;
import com.firstcertificatetests.domain.ExerciseCompleted;
import com.firstcertificatetests.domain.ExerciseType;
import com.firstcertificatetests.domain.UserDetails;
import com.firstcertificatetests.repository.ExerciseRepository;
import com.firstcertificatetests.repository.UserDetailsRepository;
import org.bson.types.ObjectId;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.inject.Inject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by suay on 9/9/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
@Import(MongoConfiguration.class)
public class UserDetailsResourceTest {

    @Inject
    private UserDetailsRepository userDetailsRepository;

    private MockMvc restUserMockMvc;

    private UserDetails userDetails;

    @Before
    public void setup() {
        UserDetailsResource userDetailsResource = new UserDetailsResource();
        ReflectionTestUtils.setField(userDetailsResource, "userDetailsRepository", userDetailsRepository);
        this.restUserMockMvc = MockMvcBuilders.standaloneSetup(userDetailsResource).build();
        createUserDetails();
    }

    private void createUserDetails(){
        userDetails = new UserDetails();
        userDetails.setLogin("suay");
        ExerciseCompleted exerciseCompleted = new ExerciseCompleted(1, new ObjectId(), new Date(),"fce1", 1, ExerciseType.READING_1, null, "2/8");
        List<ExerciseCompleted> exerciseCompletedList = new ArrayList<>(Arrays.asList(exerciseCompleted));
        userDetails.setExercisesCompleted(exerciseCompletedList);
        userDetailsRepository.save(userDetails);
    }

    @After
    public void removeUserDetails(){
        userDetailsRepository.delete(userDetails);
    }

    @Test
    public void testGetExercise() throws Exception {
        restUserMockMvc.perform(delete("/api/userDetails/{login}/delete/{id}", "suay", "1")
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }


}
