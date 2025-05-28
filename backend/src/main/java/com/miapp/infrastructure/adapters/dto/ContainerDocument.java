package com.miapp.infrastructure.adapters.dto;

import com.miapp.domain.model.Container;
import com.miapp.domain.model.ContainerLocation;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "containers")
public class ContainerDocument {
    @Id
    private String id;
    private String type;
    private String center;
    private String location;
    private Double latitude;
    private Double longitude;
    private Double capacity;
    private String unit;
    private List<MeasurementDocument> measurements;

    // Mapper from Domain
    public static ContainerDocument fromDomain(Container container) {
        ContainerDocument doc = new ContainerDocument();
        doc.id = container.getId();
        doc.type = container.getType();
        doc.center = container.getLocation().getCenter();
        doc.location = container.getLocation().getDescription();
        doc.latitude = container.getLocation().getLatitude();
        doc.longitude = container.getLocation().getLongitude();
        doc.capacity = container.getCapacity();
        doc.unit = container.getUnit();
        doc.measurements = container.getMeasurements().stream()
                .map(MeasurementDocument::fromDomain)
                .toList();
        return doc;
    }

    // Mapper to Domain (implementar)
    public Container toDomain() {
        return new Container(
                this.id,
                this.type,
                new ContainerLocation(center, location, latitude, longitude),
                capacity,
                unit
        );
    }
}