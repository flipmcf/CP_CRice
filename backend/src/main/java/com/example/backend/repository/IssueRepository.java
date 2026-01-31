package com.example.backend.repository;

import com.example.backend.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    // Custom finders for filtering
    List<Issue> findByStatus(Issue.Status status);
    List<Issue> findByPriority(Issue.Priority priority);
    List<Issue> findByAssigneeId(Long assigneeId);
    List<Issue> findByTitleContainingIgnoreCase(String title);
}