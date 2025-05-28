package com.miapp.infrastructure;

import com.miapp.domain.model.Container;
import com.miapp.domain.ports.ContainerRepositoryPort;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.List;

@Component
public class DataInitializer implements InitializingBean {
    private final ContainerRepositoryPort repository;
    private final ResourceLoader resourceLoader;

    public DataInitializer(ContainerRepositoryPort repository, ResourceLoader resourceLoader) {
        this.repository = repository;
        this.resourceLoader = resourceLoader;
    }


    public void init() throws IOException {
        Resource resource = resourceLoader.getResource("classpath:data/containers.json");
        ObjectMapper mapper = new ObjectMapper();
        List<Container> containers = mapper.readValue(
                resource.getInputStream(),
                new TypeReference<List<Container>>() {}
        );
        repository.syncContainers(containers);
    }

    @Override
    public void afterPropertiesSet() throws Exception {

    }
}