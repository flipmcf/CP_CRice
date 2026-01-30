package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;

@RestController
public class PingController {

    @GetMapping("/ping")
    public String ping() {
        return "Ubuntu Backend is live! Current time: " + LocalDateTime.now() + "\n";
    }
}