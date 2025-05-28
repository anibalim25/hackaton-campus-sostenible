package com.miapp.domain.model;

public class ContainerLocation {
    private String center;
    private String description;
    private Double latitude;
    private Double longitude;

    public ContainerLocation(String center, String description,
                             Double latitude, Double longitude) {
        this.center = center;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters
    public String getCenter() { return center; }
    public String getDescription() { return description; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }
}