package com.miapp.application.dto;

import com.miapp.domain.model.ContainerLocation;

public record ContainerDTO(
        String id,
        String type,
        ContainerLocation location,
        Double currentLevel,
        Double capacity,
        String unit
) {}