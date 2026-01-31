package com.example.backend.config;

import com.example.backend.model.Issue;
import com.example.backend.model.Project;
import com.example.backend.model.User;
import com.example.backend.repository.IssueRepository;
import com.example.backend.repository.ProjectRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final IssueRepository issueRepository;

    public DataLoader(UserRepository userRepository, ProjectRepository projectRepository, IssueRepository issueRepository) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.issueRepository = issueRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            User user = new User();
            user.setUsername("Test User");
            user.setEmail("test@example.com");
            user.setPassword("password"); // In a real app, passwords should be hashed!  
            User savedUser =userRepository.save(user);


            Project project = new Project();
            project.setName("Demo Project");
            project.setOwner(user);
            projectRepository.save(project);

            Issue issue = new Issue();
            issue.setTitle("First Issue");
            issue.setDescription("This is a test issue created by the seed data loader.");
            issue.setStatus(Issue.Status.OPEN);
            issue.setPriority(Issue.Priority.HIGH);
            issue.setAssignee(savedUser);
            issue.setProject(project);
            issueRepository.save(issue);

            System.out.println("Seed data loaded: 1 User, 1 Project, 1 Issue");
        }
        else {
            System.out.println("Seed data already exists, skipping data loading.");
        }
    }
}