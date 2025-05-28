package com.miapp.application.usecases;

import com.miapp.domain.model.Container;
import com.miapp.domain.ports.ContainerRepositoryPort;
import com.miapp.domain.ports.ExternalApiPort;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SyncContainersUseCase {
    private final ExternalApiPort apiPort;
    private final ContainerRepositoryPort repositoryPort;

    public SyncContainersUseCase(ExternalApiPort apiPort, ContainerRepositoryPort repositoryPort) {
        this.apiPort = apiPort;
        this.repositoryPort = repositoryPort;
    }

    public void execute() {
        List<Container> apiData = apiPort.getCurrentMeasurements();
        List<Container> dbContainers = repositoryPort.findAll();

        // Fusionar datos
        dbContainers.forEach(dbContainer ->
                apiData.stream()
                        .filter(apiContainer -> apiContainer.getId().equals(dbContainer.getId()))
                        .findFirst()
                        .ifPresent(apiContainer ->
                                dbContainer.setMeasurements(apiContainer.getMeasurements())
                        )
        );

        repositoryPort.syncContainers(dbContainers);
    }
}