package com.example.backend.controller;


import org.springframework.web.bind.annotation.*;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UserRepository userRepository; // Create this interface if missing

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("Received user: " + user.getUsername());
        System.out.println("Received password: " + user.getPassword()); // Debug log
    
        if (user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Error: Password is required");
        
        }
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already taken");
        }
        // In a real app, use BCryptPasswordEncoder here!
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
}

