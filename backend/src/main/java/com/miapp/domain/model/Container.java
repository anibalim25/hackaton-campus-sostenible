package com.miapp.domain.model;

import java.util.ArrayList;
import java.util.List;

public class Container {
    private String id;
    private String type;
    private ContainerLocation location;
    private Double capacity;
    private String unit;
    private List<Measurement> measurements = new ArrayList<>();

    // Constructor
    public Container(String id, String type, ContainerLocation location,
                     Double capacity, String unit) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.capacity = capacity;
        this.unit = unit;
    }

    // Getters/Setters
    public String getId() { return id; }
    public String getType() { return type; }
    public ContainerLocation getLocation() { return location; }
    public Double getCapacity() { return capacity; }
    public String getUnit() { return unit; }
    public List<Measurement> getMeasurements() { return measurements; }
    public void setMeasurements(List<Measurement> measurements) {
        this.measurements = measurements;
    }

    public Double getCurrentLevel() {
        return measurements.get(measurements.size() - 1).getLevelPercent();
    }
}