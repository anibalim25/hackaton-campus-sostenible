package com.miapp.infrastructure.adapters.dto;

import java.time.Instant;
import java.util.List;

public class ApiMeasurement {
    private String id;
    private List<HistoryEntry> history;

    public static class HistoryEntry {
        private String timestamp;
        private Double levelPercent;

        // Getters
        public String getTimestamp() { return timestamp; }
        public Double getLevelPercent() { return levelPercent; }
    }

    // Getters
    public String getId() { return id; }
    public List<HistoryEntry> getHistory() { return history; }
}