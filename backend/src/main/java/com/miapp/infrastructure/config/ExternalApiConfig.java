package com.miapp.infrastructure.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExternalApiConfig {
    @Value("${api.measurements.url}")
    private String apiUrl;

    @Value("${api.measurements.token}")
    private String apiToken;

    @Bean
    public String apiUrl() {
        return apiUrl;
    }

    @Bean
    public String apiToken() {
        return apiToken;
    }
}