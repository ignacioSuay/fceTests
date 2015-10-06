package com.firstcertificatetests.config;


import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import org.mongeez.Mongeez;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoProperties;
import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.Import;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import javax.inject.Inject;

import static java.util.Collections.singletonList;

@Configuration
@Profile("!cloud")
@EnableMongoRepositories("com.firstcertificatetests.repository")
//@Import(value = MongoAutoConfiguration.class)
@EnableMongoAuditing(auditorAwareRef = "springSecurityAuditorAware")
public class DatabaseConfiguration extends AbstractMongoConfiguration {

    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);


    @Value("${spring.data.mongodb.host}")
    private String host;

    @Value("${spring.data.mongodb.port}")
    private Integer port;

    @Value("${spring.data.mongodb.username}")
    private String username;

    @Value("${spring.data.mongodb.database}")
    private String database;

    @Value("${spring.data.mongodb.password}")
    private String password;

    @Inject
    private Mongo mongo;

    @Inject
    private MongoProperties mongoProperties;

    @Bean
    public ValidatingMongoEventListener validatingMongoEventListener() {
        return new ValidatingMongoEventListener(validator());
    }

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

//    @Override
//    protected String getDatabaseName() {
//        return mongoProperties.getDatabase();
//    }

    @Override
    public String getDatabaseName() {
        return "fcetests";
    }

//    @Override
//    public Mongo mongo() throws Exception {
//        return mongo;
//    }

    @Override
    @Bean
    public Mongo mongo() throws Exception {

        return new MongoClient(singletonList(new ServerAddress(host, port)),
                singletonList(MongoCredential.createCredential(username,database, password.toCharArray())));
    }

}
