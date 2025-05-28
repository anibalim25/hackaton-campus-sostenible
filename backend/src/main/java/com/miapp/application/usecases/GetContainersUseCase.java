package com.miapp.application.usecases;

import com.miapp.domain.ports.ContainerRepositoryPort;
import com.miapp.domain.model.Container;
import java.util.List;

public class GetContainersUseCase {
    private final ContainerRepositoryPort repository;

    public GetContainersUseCase(ContainerRepositoryPort repository) {
        this.repository = repository;
    }

    public List<Container> execute() {
        return repository.findAll();
    }
}