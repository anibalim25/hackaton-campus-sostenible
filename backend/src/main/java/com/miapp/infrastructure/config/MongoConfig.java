package com.miapp.infrastructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.client.RestTemplate;

@Configuration
public class MongoConfig {
    @Bean
    public MongoTemplate mongoTemplate(com.mongodb.client.MongoClient mongoClient) {
        return new MongoTemplate(mongoClient, "mongo");
    }
}