package com.miapp.domain.services;

import com.miapp.domain.model.Container;
import com.miapp.domain.model.Measurement;

import java.util.List;

public class ContainerService {
    public void updateContainerMeasurements(Container container, List<Measurement> newMeasurements) {
        if (!newMeasurements.isEmpty()) {
            container.getMeasurements().clear();
            container.getMeasurements().addAll(newMeasurements);
        }
    }
}