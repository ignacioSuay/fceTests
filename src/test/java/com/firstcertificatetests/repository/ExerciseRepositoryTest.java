package com.firstcertificatetests.repository;

import com.firstcertificatetests.Application;
import com.firstcertificatetests.config.MongoConfiguration;
import com.firstcertificatetests.domain.Exercise;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by natxo on 03/04/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
@Import(MongoConfiguration.class)
public class ExerciseRepositoryTest {

    @Inject
    private ExerciseRepository exerciseRepository;

    @Test
    public void testFindAll() throws Exception{
        List<Exercise> exerciseList = exerciseRepository.findAll();
        System.out.println("size " + exerciseList.size());
    }
}
