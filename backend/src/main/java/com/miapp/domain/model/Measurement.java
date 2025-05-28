package com.miapp.domain.model;

import java.time.Instant;

public class Measurement {
    private Instant timestamp;
    private Double levelPercent;

    public Measurement(Instant timestamp, Double levelPercent) {
        this.timestamp = timestamp;
        this.levelPercent = levelPercent;
    }

    // Getters
    public Instant getTimestamp() { return timestamp; }
    public Double getLevelPercent() { return levelPercent; }
}