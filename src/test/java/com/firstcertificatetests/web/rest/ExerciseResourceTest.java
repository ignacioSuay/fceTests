package com.firstcertificatetests.web.rest;

import com.firstcertificatetests.Application;
import com.firstcertificatetests.config.MongoConfiguration;
import com.firstcertificatetests.repository.ExerciseRepository;
import com.firstcertificatetests.repository.UserRepository;
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by natxo on 04/04/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
@Import(MongoConfiguration.class)
public class ExerciseResourceTest {
    @Inject
    private ExerciseRepository exerciseRepository;

    private MockMvc restUserMockMvc;

    @Before
    public void setup() {
        ExerciseResource exerciseResource = new ExerciseResource();
        ReflectionTestUtils.setField(exerciseResource, "exerciseRepository", exerciseRepository);
        this.restUserMockMvc = MockMvcBuilders.standaloneSetup(exerciseResource).build();
    }

    @Test
    public void testGetExercise() throws Exception {
        restUserMockMvc.perform(get("/api/exercises/1")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.title").value("What is genealogy?"));
    }
}
