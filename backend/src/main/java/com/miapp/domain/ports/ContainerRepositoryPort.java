package com.miapp.domain.ports;

import com.miapp.domain.model.Container;
import java.util.List;
import java.util.Optional;

public interface ContainerRepositoryPort {
    Container save(Container container);
    Optional<Container> findById(String id);
    List<Container> findAll();
    void syncContainers(List<Container> containers);
}