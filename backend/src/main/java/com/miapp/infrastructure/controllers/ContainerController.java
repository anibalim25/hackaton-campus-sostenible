package com.miapp.infrastructure.controllers;

import com.miapp.application.usecases.SyncContainersUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/containers")
public class ContainerController {
    private final SyncContainersUseCase syncUseCase;

    public ContainerController(SyncContainersUseCase syncUseCase) {
        this.syncUseCase = syncUseCase;
    }

    @PostMapping("/sync")
    public ResponseEntity<Void> syncContainers() {
        syncUseCase.execute();
        return ResponseEntity.ok().build();
    }
}