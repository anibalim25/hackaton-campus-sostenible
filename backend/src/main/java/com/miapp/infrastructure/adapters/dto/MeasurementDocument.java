package com.miapp.infrastructure.adapters.dto;

import com.miapp.domain.model.Measurement;
import java.time.Instant;

public class MeasurementDocument {
    private Instant timestamp;
    private Double levelPercent;

    public static MeasurementDocument fromDomain(Measurement measurement) {
        MeasurementDocument doc = new MeasurementDocument();
        doc.timestamp = measurement.getTimestamp();
        doc.levelPercent = measurement.getLevelPercent();
        return doc;
    }

    // Getters
    public Instant getTimestamp() { return timestamp; }
    public Double getLevelPercent() { return levelPercent; }
}