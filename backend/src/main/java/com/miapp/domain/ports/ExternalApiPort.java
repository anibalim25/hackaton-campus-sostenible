package com.miapp.domain.ports;

import com.miapp.domain.model.Container;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ExternalApiPort {
    List<Container> getCurrentMeasurements();
}