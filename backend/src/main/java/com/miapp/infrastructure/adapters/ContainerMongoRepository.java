package com.miapp.infrastructure.adapters;

import com.miapp.domain.ports.ContainerRepositoryPort;
import com.miapp.domain.model.Container;
import com.miapp.infrastructure.adapters.dto.ContainerDocument;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ContainerMongoRepository implements ContainerRepositoryPort {
    private final MongoTemplate mongoTemplate;

    public ContainerMongoRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Container save(Container container) {
        ContainerDocument doc = ContainerDocument.fromDomain(container);
        mongoTemplate.save(doc);
        return doc.toDomain();
    }

    @Override
    public Optional<Container> findById(String id) {
        return Optional.ofNullable(
                mongoTemplate.findById(id, ContainerDocument.class).toDomain()
        );
    }

    @Override
    public List<Container> findAll() {
        return mongoTemplate.findAll(ContainerDocument.class).stream()
                .map(ContainerDocument::toDomain)
                .toList();
    }

    @Override
    public void syncContainers(List<Container> containers) {
        containers.forEach(this::save);
    }
}