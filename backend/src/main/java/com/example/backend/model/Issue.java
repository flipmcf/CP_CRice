package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity @Data
public class Issue {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    
    @Enumerated(EnumType.STRING)
    private Status status;
    
    @Enumerated(EnumType.STRING)
    private Priority priority;
    
    @ManyToOne
    private User assignee;
    
    @ManyToOne
    private Project project;
    
    private LocalDateTime createdAt = LocalDateTime.now();

    public enum Status { OPEN, IN_PROGRESS, CLOSED }
    public enum Priority { LOW, MEDIUM, HIGH }
}