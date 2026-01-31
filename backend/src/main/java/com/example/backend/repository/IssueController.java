package com.example.backend.controller;

import com.example.backend.model.Issue;
import com.example.backend.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping
    public List<Issue> getAllIssues(
            @RequestParam(required = false) Issue.Status status,
            @RequestParam(required = false) String title) {
        
        if (status != null) {
            return issueRepository.findByStatus(status);
        }
        if (title != null) {
            return issueRepository.findByTitleContainingIgnoreCase(title);
        }
        return issueRepository.findAll();
    }

    @PostMapping
    public Issue createIssue(@RequestBody Issue issue) {
        return issueRepository.save(issue);
    }

    @GetMapping("/{id}")
    public Issue getIssue(@PathVariable Long id) {
        return issueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Issue not found"));
    }
    
    @PutMapping("/{id}")
    public Issue updateIssue(@PathVariable Long id, @RequestBody Issue issueDetails) {
        Issue issue = issueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Issue not found"));
        
        issue.setTitle(issueDetails.getTitle());
        issue.setDescription(issueDetails.getDescription());
        issue.setStatus(issueDetails.getStatus());
        issue.setPriority(issueDetails.getPriority());
        issue.setAssignee(issueDetails.getAssignee());
        
        return issueRepository.save(issue);
    }
}