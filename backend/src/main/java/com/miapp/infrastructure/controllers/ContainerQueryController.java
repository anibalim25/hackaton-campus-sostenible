package com.miapp.infrastructure.controllers;

import com.miapp.application.dto.ContainerDTO;
import com.miapp.domain.ports.ContainerRepositoryPort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/containers")
public class ContainerQueryController {
    private final ContainerRepositoryPort repository;

    public ContainerQueryController(ContainerRepositoryPort repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ContainerDTO> getAllContainers() {
        return repository.findAll().stream()
                .map(container -> new ContainerDTO(
                        container.getId(),
                        container.getType(),
                        container.getLocation(),
                        container.getCurrentLevel(),
                        container.getCapacity(),
                        container.getUnit()
                ))
                .toList();
    }
}